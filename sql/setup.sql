-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    released SMALLINT NOT NULL
);

INSERT INTO books (title, released) VALUES
('The Ingenious Gentleman Don Quixote of La Mancha', 1615),
('La Galatea', 1585),
('Frankenstein', 1818),
('The Invisible Man', 1952),
('Going to the Territory', 1986),
('Narrative of the Life of Frederick Douglas', 1845),
('My Bondage and My Freedom', 1855),
('The Lottery in Babylon', 1941),
('A Tale of Two Cities', 1859),
('David Copperfield', 1850),
('The Count of Monte Cristo', 1844),
('The Scarlett Letter', 1850),
('The Color Purple', 1982),
('A Hitchikers Guide to the Galaxy', 1979),
('Black Beauty', 1877),
('Moby Dick', 1851),
('Brave New World', 1932),
('The Perrenial Philosophy', 1945);
