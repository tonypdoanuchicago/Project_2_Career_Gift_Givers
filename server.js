const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

const sequelize = require('./config/connection'); // Import Sequelize instance from config/connection.js

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the application if database connection fails
  }
}

// Call the testConnection function to test the connection
testConnection();

// Start the server after database connection is established
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));
});
