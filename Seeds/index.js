const sequelize = require('../config/connection');
const Tutor = require('../models/Tutor');
const Skill = require('../models/Skill');
const tutorData = require('./tutor-seeds.json');
const skillData = require('./skill-seeds.json'); // Assuming you have seed data for skills

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create tutors
  const tutors = await Tutor.bulkCreate(tutorData, {
    individualHooks: true,
    returning: true,
  });

  // Create skills
  await Skill.bulkCreate(skillData);

  // Associate tutors with skills
  for (const tutor of tutors) {
    // Assuming each tutor has a 'skillIds' property containing an array of skill IDs
    for (const skillId of tutor.skillIds) {
      const skill = await Skill.findByPk(skillId);
      if (skill) {
        await tutor.addSkill(skill);
      }
    }
  }

  console.log('Database seeded successfully.');

  process.exit(0);
};

seedDatabase();
