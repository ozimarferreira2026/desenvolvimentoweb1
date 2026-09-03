CREATE DATABASE filmes;
USE filmes;
CREATE TABLE filmes ( 
id INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100),
ano INT
);
SELECT * FROM filmes;
describe filmes;