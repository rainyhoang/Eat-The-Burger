DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

-- Create the table plans.
CREATE TABLE burger
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(30) NOT NULL,
devour boolean not null default 0,
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

