const db = require('../models');

const seed = async () => {
  try {
    await db.sequelize.sync({ force: true });

    await db.Skill.bulkCreate([
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Backend' },
      { name: 'Microservices' },
      { name: 'Operating Systems' },
      { name: 'Databases' },
    ]);

    await db.Tutor.bulkCreate([
      { tutor_name: 'John Doe', tutor_email: 'john@example.com', tutor_jobtitle: 'Software Engineer' },
      { tutor_name: 'Jane Doe', tutor_email: 'jane@example.com', tutor_jobtitle: 'Web Developer' },
      { tutor_name: 'Alice Smith', tutor_email: 'alice@example.com', tutor_jobtitle: 'Data Analyst' },
      { tutor_name: 'Bob Johnson', tutor_email: 'bob@example.com', tutor_jobtitle: 'System Administrator' },
      { tutor_name: 'Charlie Brown', tutor_email: 'charlie@example.com', tutor_jobtitle: 'Network Engineer' },
      { tutor_name: 'Eve Wilson', tutor_email: 'eve@example.com', tutor_jobtitle: 'Database Administrator' },
      { tutor_name: 'Grace Lee', tutor_email: 'grace@example.com', tutor_jobtitle: 'Full Stack Developer' },
    ]);

    const skills = await db.Skill.findAll();

    const tutors = await db.Tutor.findAll();

    for (const tutor of tutors) {
      await tutor.addSkills(skills);
    }

    console.log('Seeding completed successfully.'); // Add this line

  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seed();
