// Import necessary modules
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' // Assuming you're using MySQL
});

// Import models
const Tutor = require('./Tutor');
const Skill = require('./Skill');

// Define associations
Tutor.belongsToMany(Skill, { through: 'TutorSkill' });
Skill.belongsToMany(Tutor, { through: 'TutorSkill' });

// Define models
const models = {
  Tutor,
  Skill
};

// Initialize models with Sequelize
Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

// Export models and Sequelize instance
module.exports = {
  ...models,
  sequelize
};
