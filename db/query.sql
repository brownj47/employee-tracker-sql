USE company_db;

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;

SELECT title AS 'Job Title', roles.id AS 'Role ID', departments.id AS 'Department ID', salary AS 'Salary' FROM departments JOIN roles ON departments.id = roles.dep_id; -- roles

SELECT employees.id AS 'EID', first_name AS 'First Name', last_name AS 'Last Name', title AS 'Job Title', dep_id AS 'Departments', salary AS 'Salary', man_id AS 'Manager EID' FROM roles JOIN employees ON roles.id = employees.role_id;

INSERT INTO departments(name)
VALUES(?);

-- departments, salaries, and managers that the employees report to