-- Define the tutors table
CREATE TABLE tutors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Define the skills table
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Define the junction table for Tutor-Skill relationship
CREATE TABLE tutor_skills (
    id SERIAL PRIMARY KEY,
    tutor_id INTEGER REFERENCES tutors(id),
    skill_id INTEGER REFERENCES skills(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
