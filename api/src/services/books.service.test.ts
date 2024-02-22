/* eslint-disable @typescript-eslint/no-var-requires */
const BooksService = require('./books.service.js');

describe('Test for BooksService', () => {
	let service: typeof BooksService;

	beforeEach(() => {
		service = new BooksService();
	});

	describe('Test for getBooks', () => {
		test('should return an array of books', async () => {
			// Arrange
			//Act
			// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
			const BOOKS = await service.getBooks();

			// Assert
			// expect(BOOKS.length).toEqual();
		});
	});
});
