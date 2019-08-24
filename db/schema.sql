DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db ;

CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT NULL,
burger_name varchar (50) NOT NULL,
Devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);