const Tutor = require('./tutor')
const Skill = require('./Skill')
const User = require('./User')
const TutorSkill =  require('./TutorSkill')

Tutor.belongsToMany(Skill, {
    foreignKey: 'tutor_id',
    through: TutorSkill
});

module.exports = { Tutor, Skill, User, TutorSkill}

