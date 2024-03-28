const Tutor = require('./Tutor');
const Skill = require('./Skill');

Tutor.hasMany(Skill, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Skill.belongsTo(Tutor, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };