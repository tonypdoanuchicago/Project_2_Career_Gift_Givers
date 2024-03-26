const Sequelize = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

// Connection details
const database = process.env.DB_DATABASE || 'tutor_db_3c07';
const username = process.env.DB_USERNAME || 'tutor_db_3c07_user';
const password = process.env.DB_PASSWORD || 'TUdJbM4A0bwjWUDNro8tTtBj32uDpyvN'; // Replace 'YOUR_PASSWORD' with the actual password
const host = process.env.DB_HOST || 'dpg-co1dfn7jbltc7396en30-a';
const port = process.env.DB_PORT || 5432;

// Create Sequelize instance
const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: 'postgres', // Assuming you're using PostgreSQL
});

module.exports = sequelize;
