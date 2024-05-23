const knex = require('knex');
const config = require('../config/knexfile');

const mysqlDb = knex(config.mysql);

module.exports = mysqlDb;
