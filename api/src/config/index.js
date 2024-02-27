require('dotenv').config();

/**
 * @typedef Config
 * @property {string} env Environment.
 * @property {string} isProd Is it production environment?
 * @property {string | number} port Port to work.
 * @property {string | undefined} dbUrl URL of the Data Base.
 * @property {string | undefined} dbName Name of the Data Base.
 */

/** @type {Config} */
const config = {
	env: process.env.NODE_ENV || 'dev',
	isProd: process.env.NODE_ENV === 'production',
	port: process.env.PORT || 3000,
	dbUrl: process.env.MONGO_URL,
	dbName: process.env.MONGO_DB_NAME,
};

module.exports = { config };
