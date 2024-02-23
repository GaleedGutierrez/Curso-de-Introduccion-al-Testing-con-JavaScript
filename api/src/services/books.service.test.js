const BooksService = require('./books.service.js');

const fakeBooks = [{ _id: 1, name: 'Book 1' }];
const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () =>
	jest.fn().mockImplementation(() => {
		return {
			getAll: mockGetAll,
			create: () => {},
		};
	}),
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
			mockGetAll.mockResolvedValue(fakeBooks);

			//Act
			const BOOKS = await service.getBooks({});

			// eslint-disable-next-line no-console
			console.log(BOOKS);
			// Assert
			expect(BOOKS).toHaveLength(1);
			expect(mockGetAll).toHaveBeenCalled();
			expect(mockGetAll).toHaveBeenCalledWith('books', {});
			expect(mockGetAll).toHaveBeenCalledTimes(1);
		});
		test("Should be a book's name.", async () => {
			// Arrange
			mockGetAll.mockResolvedValue([{ _id: 1, name: 'Harry Potter' }]);

			//Act
			const BOOKS = await service.getBooks();

			// Assert
			expect(BOOKS[0].name).toBe('Harry Potter');
		});
	});
});
