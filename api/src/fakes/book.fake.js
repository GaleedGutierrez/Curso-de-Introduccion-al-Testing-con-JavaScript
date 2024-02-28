const { faker } = require('@faker-js/faker');

/**
 * @typedef Book
 * @property {string} _id ID of the book.
 * @property {string} name Name of the book.
 * @property {string} price	Price of the book.
 */

/** @returns {Book} Return a book. */
const generateOneBook = () => ({
	_id: faker.string.uuid(),
	name: faker.commerce.productName(),
	price: faker.commerce.price(),
});

/**
 * @param {number} size Size of the array by default is 10.
 * @returns {Book[]} Return an array of book.
 */
const generateManyBooks = (size = 10) => {
	const LIMIT = size;
	const FAKE_BOOKS = [];

	for (let i = 0; i < LIMIT; i++) {
		FAKE_BOOKS.push(generateOneBook());
	}

	return FAKE_BOOKS;
};

module.exports = {
	generateOneBook,
	generateManyBooks,
};
