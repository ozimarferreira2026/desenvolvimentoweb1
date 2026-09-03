CREATE DATABASE clientes;
USE clientes;
CREATE TABLE clientes(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
telefone VARCHAR(20)
);
SELECT * FROM clientes;
DELETE FROM clientes
WHERE id = 3;
