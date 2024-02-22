const BooksService = require('./books.service.js');

const fakeBooks = [
	{ id: 1, name: 'Book 1' },
	{ id: 2, name: 'Book 2' },
	{ id: 3, name: 'Book 3' },
];
const MongoLibStub = {
	getAll: () => fakeBooks,
	create: () => {},
};

jest.mock('../lib/mongo.lib', () =>
	jest.fn().mockImplementation(() => MongoLibStub),
);
describe('Test for BooksService', () => {
	/** @type {typeof BooksService} */
	let service;

	beforeEach(() => {
		service = new BooksService();
		jest.clearAllMocks();
	});

	describe('Test for getBooks', () => {
		test('should return an array of books', async () => {
			// Arrange
			//Act
			const BOOKS = await service.getBooks();

			// Assert
			expect(BOOKS).toHaveLength(3);
		});
		test("should be a book's name", async () => {
			// Arrange
			//Act
			const BOOKS = await service.getBooks();

			// Assert
			expect(BOOKS[0].name).toBe('Book 1');
		});
	});
});
