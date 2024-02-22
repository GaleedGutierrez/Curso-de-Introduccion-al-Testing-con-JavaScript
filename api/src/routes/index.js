const express = require('express');
const booksRouter = require('./books.router');

/**
 * Levanta el servidor.
 * @param {express} app Express function.
 */
function routerApi(app) {
	const router = new express.Router();

	app.use('/api/v1', router);
	router.use('/books', booksRouter);
}

module.exports = routerApi;
