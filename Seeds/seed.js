const sequelize = require('../config/connection');
const { Tutor, Skill, User } = require('../models');

const tutorData = require('./tutor-seeds.json');
const skillData = require('./skills.json'); // Assuming you have seed data for skills
const userData = require('./userData.json');
const tutorSkillData = require('./TS-seeds')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create tutors
  const tutors = await Tutor.bulkCreate(tutorData, {
    individualHooks: true,
    returning: true,
  });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Create skills
  for (const skill of skillData) {

    await Skill.create({
      ...skill,
      user_id: users[Math.floor(Math.random() * users.length)].id,

    })
  }


  await tutorSkillData();

  console.log('Database seeded successfully.');

  process.exit(0);
};

seedDatabase();
