-- Assumptions:
-- 1. Name and Email has to be non-null
-- 2. Email has to be unique to avoid duplicate entries
-- 3. ID will be the primary key and the unique identifier

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE
);

-- Inserting a sample user
INSERT INTO users (id, name, email) VALUES (1, 'Thrishapriya', 'thrishapriyaselvaraj@gmail.com');

-- Script to retrieve user
SELECT * from users;