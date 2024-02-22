/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const booksRouter = require('./books.router');

/**
 *
 * @param app
 */
function routerApi(app) {
	const router = new express.Router();

	app.use('/api/v1', router);
	router.use('/books', booksRouter);
}

module.exports = routerApi;
