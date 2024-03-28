// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Assuming your Sequelize connection is configured here
const Skill = require('./Skill'); // Import the Skill model

// Define Tutor model
class Tutor extends Model {}

// Initialize the Tutor model with attributes and options
Tutor.init(
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
      validate: {
        notNull: true,
        notEmpty: true,
        len: [2, 50] // Minimum and maximum length for the name
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true // Ensures email format is valid
      }
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [2, 100] // Minimum and maximum length for the job title
      }
    }
    // Add more attributes as needed
  },
  {
    // Define model options
    sequelize, // Pass the initialized Sequelize instance
    timestamps: true, // Sequelize will manage createdAt and updatedAt fields
    underscored: true, // Use snake_case for column names
    modelName: 'Tutor', // Name of the model (singular form)
    tableName: 'tutors' // Name of the table in the database
  }
);

// Define association between Tutor and Skill
Tutor.belongsToMany(Skill, { through: 'TutorSkill' });

// Export the Tutor model
module.exports = Tutor;
