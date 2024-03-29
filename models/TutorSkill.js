
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TutorSkill extends Model {}

TutorSkill.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tutor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tutor', 
            key: 'id'
        },
      },
      skill_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'skill', 
            key: 'id'
        },
      }        
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutorSkill',
  }
);

module.exports = TutorSkill;