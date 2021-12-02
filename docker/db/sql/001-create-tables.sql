DROP DATABASE IF EXISTS `test_database`;
CREATE DATABASE `test_database`;
USE `test_database`;

DROP TABLE IF EXISTS `test_database`.`users`;
CREATE TABLE IF NOT EXISTS `test_database`.`users`(
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(32) NOT NULL,
  `email` VARCHAR(32) NOT NULL
);

INSERT INTO users(name, email) VALUES ("sample_user", "sample@gmail.com");