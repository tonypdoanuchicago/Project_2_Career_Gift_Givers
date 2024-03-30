const {TutorSkill} =  require('../models')

const tsData = [
    {
        tutor_id: 1,
        skill_id: 1
    },
    {
        tutor_id: 1,
        skill_id: 2
    },
    {
        tutor_id: 2,
        skill_id: 3
    },
    {
        tutor_id: 2,
        skill_id: 4
    },
    {
        tutor_id: 3,
        skill_id: 1
    },
    {
        tutor_id: 3,
        skill_id: 5
    },
    {
        tutor_id: 4,
        skill_id: 2
    },
    {
        tutor_id: 4,
        skill_id: 6
    },
    {
        tutor_id: 5,
        skill_id: 5
    },
    {
        tutor_id: 5,
        skill_id: 7
    },
    {
        tutor_id: 6,
        skill_id: 4
    },
    {
        tutor_id: 6,
        skill_id: 6
    },
    {
        tutor_id: 7,
        skill_id: 7
    },
    {
        tutor_id: 7,
        skill_id: 3
    },
]

const seedTS = () => TutorSkill.bulkCreate(tsData)
module.exports = seedTS