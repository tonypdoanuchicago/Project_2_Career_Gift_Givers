// Import necessary modules
const { Tutor, Skill, sequelize } = require('../models/index'); // Adjust the import path here

// Seed function to populate the database
async function seed() {
  try {
    // Sync models with database
    await sequelize.sync({ force: true });

    // Create tutors
    const tutors = await Tutor.bulkCreate([
      { name: 'John Doe', email: 'john@example.com', job_title: 'Web Developer' },
      { name: 'Jane Smith', email: 'jane@example.com', job_title: 'Software Engineer' },
      { name: 'Alice Johnson', email: 'alice@example.com', job_title: 'Frontend Developer' },
      { name: 'Bob Williams', email: 'bob@example.com', job_title: 'Full Stack Developer' },
      { name: 'Charlie Brown', email: 'charlie@example.com', job_title: 'Backend Developer' },
      { name: 'Eva Lee', email: 'eva@example.com', job_title: 'Database Administrator' }
    ]);

    // Create skills
    const skills = await Skill.bulkCreate([
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Backend' },
      { name: 'Microservices' },
      { name: 'Operating Systems' },
      { name: 'Databases' }
    ]);

    // Assign tutors to skills
    await tutors[0].addSkills([skills[0]]); // John Doe: JavaScript
    await tutors[1].addSkills([skills[1]]); // Jane Smith: HTML
    await tutors[2].addSkills([skills[2]]); // Alice Johnson: CSS
    await tutors[3].addSkills([skills[3]]); // Bob Williams: Backend
    await tutors[4].addSkills([skills[4]]); // Charlie Brown: Microservices
    await tutors[5].addSkills([skills[5], skills[6]]); // Eva Lee: Operating Systems, Databases

    // Duplicate tutors for skills with less than 2 tutors
    await tutors[1].addSkills([skills[0]]); // Jane Smith: JavaScript
    await tutors[2].addSkills([skills[0]]); // Alice Johnson: JavaScript
    await tutors[3].addSkills([skills[1]]); // Bob Williams: HTML
    await tutors[4].addSkills([skills[1]]); // Charlie Brown: HTML
    await tutors[0].addSkills([skills[2]]); // John Doe: CSS

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the Sequelize connection
    await sequelize.close();
  }
}

// Call the seed function
seed();
