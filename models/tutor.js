const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Skill = require('./Skill');

class Tutor extends Model {}

Tutor.init(
  {
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
        len: [2, 50]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true
      }
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [2, 100]
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Tutor'
  }
);

// Define association between Tutor and Skill
Tutor.belongsToMany(Skill, { through: 'TutorSkill' });

module.exports = Tutor;
