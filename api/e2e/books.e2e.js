const request = require('supertest');
const createApp = require('../src/app.js');
const { MongoClient } = require('mongodb');

const DB_NAME = 'demo';
const MONGO_URI =
	'mongodb://test:test123@localhost:27017?retryWrites=true&writeConcern=majority';

describe('Test for books', () => {
	let app = null;
	let server = null;
	let database = null;

	beforeAll(async () => {
		app = createApp();
		server = app.listen(3001);

		const CLIENT = new MongoClient(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		await CLIENT.connect();
		database = CLIENT.db(DB_NAME);
	});

	afterAll(async () => {
		await server.close();
		await database.dropDatabase();
	});

	describe('Test for [GET] /api/v1/books', () => {
		test('Should return a list books"', async () => {
			// Arrange
			const SEED_DATA = await database.collection('books').insertMany([
				{ name: 'Book 3', year: 2001, author: 'Author 3' },
				{ name: 'Book 4', year: 2002, author: 'Author 4' },
			]);

			// Act
			return request(app)
				.get('/api/v1/books')
				.expect(200)
				.then(({ body }) => {
					// Assert
					expect(body).toHaveLength(SEED_DATA.insertedCount);
				});
		});
	});
});
