
const { Sequelize } = require('sequelize');

// Define the connection string
const connectionString = 'postgres://tutor_db_3c07_user:TUdJbM4A0bwjWUDNro8tTtBj32uDpyvN@dpg-co1dfn7jbltc7396en30-a/tutor_db_3c07';

// Initialize Sequelize instance with the connection string
const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  logging: false, // Disable logging SQL queries (optional)
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Export the Sequelize instance
module.exports = sequelize;
