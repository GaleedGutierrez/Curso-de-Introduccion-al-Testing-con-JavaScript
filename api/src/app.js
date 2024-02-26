const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const createApp = () => {
	const app = express();

	app.use(cors());
	app.use(express.json());

	app.get('/', (req, res) => {
		res.send('Hello World!');
	});

	routerApi(app);

	return app;
};

// fetch('http://127.0.0.1:3000/')
// 	.then((response) => response.text())
// 	.then((response) => console.log(response));

module.exports = createApp;
