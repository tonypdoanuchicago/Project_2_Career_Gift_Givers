const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Tutor = sequelize.define('Tutor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Tutor;
