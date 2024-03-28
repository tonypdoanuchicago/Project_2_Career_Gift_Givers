const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'tutor_db_3c07',
  process.env.DB_USERNAME || 'tutor_db_3c07_user',
  process.env.DB_PASSWORD || 'TUdJbM4A0bwjWUDNro8tTtBj32uDpyvN',
  {
    host: process.env.DB_HOST || 'dpg-co1dfn7jbltc7396en30-a.ohio-postgres.render.com',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres'
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
