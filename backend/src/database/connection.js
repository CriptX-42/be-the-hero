const kenx = require('knex');
const configurations = require('../../knexfile');

const connection = kenx(configurations.development);

module.exports = connection;
