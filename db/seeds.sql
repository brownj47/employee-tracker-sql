USE company_db;

INSERT INTO departments(name)
VALUES('Sales'),
('Ops'),
('Engineering');

INSERT INTO roles(salary, title, dep_id)
VALUES(500, 'sales manager', 1),
(600, 'sales grunt', 1),
(700, 'HR rep', 2),
(800, 'Billing rep', 2),
(900, 'lead engineer', 3),
(30000, 'engineer', 3);

INSERT INTO employees(first_name, last_name, role_id, man_id)
VALUES('joe', 'schmo', 1, NULL),
('vincent', 'van', 2,1),
('bob', 'smith', 3, NULL),
('mitch', 'ell', 4, 3),
('SAM', 'jones', 5, NULL),
('ann', 'farmer', 6, 5);