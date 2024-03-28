// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Assuming your Sequelize connection is configured here

// Define Skill model
class Skill extends Model {}

// Initialize the Skill model with attributes and options
Skill.init(
  {
    // Define model attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
    // Add more attributes as needed
  },
  {
    // Define model options
    sequelize, // Pass the initialized Sequelize instance
    timestamps: false, // Disable timestamps for this model
    underscored: true, // Use snake_case for column names
    modelName: 'skill', // Name of the model
    tableName: 'skills' // Name of the table in the database
  }
);

// Export the Skill model
module.exports = Skill;
