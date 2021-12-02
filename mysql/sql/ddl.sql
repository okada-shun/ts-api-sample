DROP DATABASE IF EXISTS `user_database`;
CREATE DATABASE `user_database`;
USE `user_database`;

DROP TABLE IF EXISTS `user_database`.`users`;
CREATE TABLE IF NOT EXISTS `user_database`.`users`(
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(32) NOT NULL,
  `email` VARCHAR(32) NOT NULL
);

INSERT INTO users(name, email) VALUES ("sample_user", "sample@gmail.com");
