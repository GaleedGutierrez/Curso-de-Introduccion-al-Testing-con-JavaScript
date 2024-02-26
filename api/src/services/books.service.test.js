/**
 * @typedef Book
 * @property {string} _id ID of the book
 * @property {string} name Name of the book
 * @property {string} price	Price of the book
 */

const BooksService = require('./books.service.js');
const { generateManyBooks } = require('../fakes/book.fake.js');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () =>
	jest.fn().mockImplementation(() => ({
		getAll: mockGetAll,
		create: () => {},
	})),
);
describe('Test for BooksService.', () => {
	/** @type {typeof BooksService} */
	let service;

	beforeEach(() => {
		service = new BooksService();
		jest.clearAllMocks();
	});

	describe('Test for getBooks.', () => {
		test('Should return an array of books.', async () => {
			// Arrange
			const fakeBooks = generateManyBooks(4);

			// eslint-disable-next-line no-console
			console.log(fakeBooks);
			mockGetAll.mockResolvedValue(fakeBooks);

			//Act
			const BOOKS = await service.getBooks({});

			// eslint-disable-next-line no-console
			console.log(BOOKS);
			// Assert
			expect(BOOKS).toHaveLength(fakeBooks.length);
			expect(mockGetAll).toHaveBeenCalled();
			expect(mockGetAll).toHaveBeenCalledWith('books', {});
			expect(mockGetAll).toHaveBeenCalledTimes(1);
		});
		test("Should be a book's name.", async () => {
			// Arrange
			const fakeBooks = generateManyBooks(3);

			// eslint-disable-next-line no-console
			console.log(fakeBooks);
			mockGetAll.mockResolvedValue(fakeBooks);

			//Act
			const BOOKS = await service.getBooks();

			// Assert
			expect(BOOKS[0].name).toBe(fakeBooks[0].name);
		});
	});
});
