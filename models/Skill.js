const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Skill = sequelize.define('Skill', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Skill;
