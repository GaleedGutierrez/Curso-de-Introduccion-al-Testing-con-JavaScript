const mockGetAll = jest.fn();
const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/book.fake.js');
const createApp = require('../src/app.js');

jest.mock('../src/lib/mongo.lib', () =>
	jest.fn().mockImplementation(() => ({
		getAll: mockGetAll,
		create: () => {},
	})),
);

describe('Test for books', () => {
	let app = null;
	let server = null;

	beforeAll(() => {
		app = createApp();
		server = app.listen(3001);
	});

	afterAll(async () => {
		await server.close();
	});

	describe('Test for [GET] /api/v1/books', () => {
		test('Should return a list books"', () => {
			// Arrange
			const fakeBooks = generateManyBooks(4);

			mockGetAll.mockResolvedValue(fakeBooks);

			// Act
			return request(app)
				.get('/api/v1/books')
				.expect(200)
				.then(({ body }) => {
					// Assert
					expect(body).toHaveLength(fakeBooks.length);
				});
		});
	});
});
