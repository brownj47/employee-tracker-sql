//TODO: add a way to quit

const inquirer = require('inquirer')
const mysql2 = require('mysql2')
const cnsltble = require('console.table')


const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
});

function mainMenLoop() {
    inquirer.prompt(
        [
            {
                type: 'list',
                message: 'Please choose one of the folowing options.',
                name: 'mainMenu',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit']
            }
        ]
        //view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    ).then((resp) => {
        switch (resp.mainMenu) {
            case 'view all departments':
                console.log('yay')
                db.query('SELECT * FROM departments', function (err, results) {
                    if (err) { throw err };
                    console.table(results);
                    mainMenLoop();
                });
                break
            case 'view all roles':
                db.query(`SELECT title AS 'Job Title', roles.id AS 'Role ID', departments.id AS 'Department ID', salary AS 'Salary' FROM departments JOIN roles ON departments.id = roles.dep_id;`, function (err, results) {
                    if (err) { throw err };
                    console.table(results);
                    mainMenLoop();
                });
                break
            case 'view all employees':
                db.query(`SELECT employees.id AS 'EID', first_name AS 'First Name', last_name AS 'Last Name', title AS 'Job Title', dep_id AS 'Departments', salary AS 'Salary', man_id AS 'Manager EID' FROM roles JOIN employees ON roles.id = employees.role_id;`, function (err, results) {
                    if (err) { throw err };
                    console.table(results);
                    mainMenLoop();
                });
                break
            case 'add a department':
                addDept();
                break
            case 'add a role':
                addRole();
                break
            case 'add an employee':
                addEmp();
                break
            case 'update an employee role':
                updateEmp();
                break
            case 'exit':
                close() /// some way to quit?
                break
            default:
                throw Error(err)
        };
        console.log(resp.mainMenu)
    }).catch((err) => {
        throw err
    });
};
function addDept() {
    inquirer.prompt(
        [{
            type: 'input',
            name: 'deptName',
            message: 'Type the name of the department you are adding.'
        }]
    ).then(resp => {
        db.query(`INSERT INTO departments(name)
        VALUES(?);`, resp.deptName, function (err, results) {
            if (err) {
                throw Error(err)
            }
            console.table(results)
            mainMenLoop();
        })
    })
}
function addRole() {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'roleName',
                message: 'Type the title of the role you are adding.'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Type the salary for this role.'
            },
            {
                type: 'input',
                name: 'depID',
                message: 'Type the ID of the department for this role.'
            }
        ]
    ).then(resp => {
        db.query(`INSERT INTO roles(salary, title, dep_id)
        VALUES(?, ?, ?);`, [resp.salary, resp.roleName, resp.depID], function (err, results) {
            if (err) {
                throw Error(err)
            }
            console.table(results)
            mainMenLoop();
        });
    })
}
function addEmp() {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'firstName',
                message: 'Type employee first name'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Type employee last name'
            },
            {
                type: 'input',
                name: 'role',
                message: 'Type role number for this employee.'
            },
            {
                type: 'input',
                name: 'manID',
                message: 'Type the EID of the manager for this employee, or NULL if they are a manager'
            }
        ]
    ).then(resp => {
        db.query(`INSERT INTO employees(first_name, last_name, role_id, man_id)
        VALUES(?, ?, ?,?)`, [resp.firstName, resp.lastName, resp.role, resp.manID], function (err, results) {
            if (err) {
                throw Error(err)
            }
            console.table(results)
            mainMenLoop();
        });
    })
}
function updateEmp() {
    db.query(`SELECT employees.id AS 'EID', first_name AS 'First Name', last_name AS 'Last Name', title AS 'Job Title', dep_id AS 'Departments', salary AS 'Salary', man_id AS 'Manager EID' FROM roles JOIN employees ON roles.id = employees.role_id;`, function (err, results) {
        if (err) { throw Error(err) };
        console.table(results);
        db.query(`SELECT title AS 'Job Title', roles.id AS 'Role ID', departments.id AS 'Department ID', salary AS 'Salary' FROM departments JOIN roles ON departments.id = roles.dep_id;`, function (err, results) {
            if (err) { throw err };
            console.table(results);
            updateEmpQs();
        });
    });
}

function updateEmpQs(){
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'EID',
                message: 'Enter the EID for the employee you would like to update.'
            },
            {
                type: 'input',
                name: 'newRole',
                message: 'Enter the Role ID for the new employee role'
            }

        ]
    ).then(resp => {
        db.query(`UPDATE employees SET role_id = ? WHERE id = ?;`, [resp.newRole, resp.EID], function (err, results) {
            if (err) {
                throw Error(err)
            };
            console.table(results);
            mainMenLoop();
        })
    })
}

mainMenLoop();


