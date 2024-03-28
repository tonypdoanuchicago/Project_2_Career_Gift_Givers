const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const TutorSkill = sequelize.define('TutorSkill', {
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = TutorSkill;
