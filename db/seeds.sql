USE employees_db;

INSERT INTO department (name)
VALUES ("sales"),("finance"), ("legal"),("engineering");

INSERT INTO roles (title, salary,department_id)
VALUES ("sales lead", 120000, 1), ("salesperson", 75000, 1),("lead engineer", 150000, 4),
("software engineer", 125000, 4), ("accountant", 120000, 2), ("lawyer", 190000, 3), ("lead attorney", 250000, 3);