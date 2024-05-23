const knex = require('knex');
const config = require('../config/knexfile');

const postgresDb = knex(config.postgres);

module.exports = postgresDb;
