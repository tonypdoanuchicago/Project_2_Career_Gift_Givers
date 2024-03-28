-- Drop table if it exists (for development purposes)
DROP TABLE IF EXISTS tutors;

-- Create tutors table
CREATE TABLE IF NOT EXISTS tutors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  job_title VARCHAR(100) NOT NULL,
  skills VARCHAR(255) NOT NULL
);
