const { Tutor, Skill, sequelize } = require('../models/index');

async function seed() {
  try {
    await sequelize.sync({ force: true });

    const tutors = await Tutor.bulkCreate([
      { name: 'John Doe', email: 'john@example.com', job_title: 'Web Developer' },
      { name: 'Jane Smith', email: 'jane@example.com', job_title: 'Software Engineer' },
      { name: 'Alice Johnson', email: 'alice@example.com', job_title: 'Frontend Developer' },
      { name: 'Bob Williams', email: 'bob@example.com', job_title: 'Full Stack Developer' },
      { name: 'Charlie Brown', email: 'charlie@example.com', job_title: 'Backend Developer' },
      { name: 'Eva Lee', email: 'eva@example.com', job_title: 'Database Administrator' }
    ]);

    const skills = await Skill.bulkCreate([
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Backend' },
      { name: 'Microservices' },
      { name: 'Operating Systems' },
      { name: 'Databases' }
    ]);

    await tutors[0].addSkills([skills[0]]);
    await tutors[1].addSkills([skills[1]]);
    await tutors[2].addSkills([skills[2]]);
    await tutors[3].addSkills([skills[3]]);
    await tutors[4].addSkills([skills[4]]);
    await tutors[5].addSkills([skills[5], skills[6]]);

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
}

seed();
