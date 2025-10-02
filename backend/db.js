const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '12345678', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
