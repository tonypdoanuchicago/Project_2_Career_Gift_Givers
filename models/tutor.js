
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tutor extends Model {}

Tutor.init(
  {
    Tutor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Tutor_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    Tutor_jobtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor',
  }
);

module.exports = Tutor;
