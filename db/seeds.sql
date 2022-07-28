USE company_db;

INSERT INTO departments(name)
VALUES(Sales),
(Ops),
(Engineering);

INSERT INTO roles(salary, title, dep_id)
VALUES(500, 'sales manager', 1),
(600, 'sales grunt', 1),
(700, 'sales manager', 2),
(800, 'sales manager', 2),
(900, 'sales manager', 3),
(30000, 'sales manager', 3);
