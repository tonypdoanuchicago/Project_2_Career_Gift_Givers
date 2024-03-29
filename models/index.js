const Tutor = require('./tutor')
const Skill = require('./Skill')
const User = require('./User')

User.hasMany(Skill, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Skill.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { Tutor, Skill, User}

