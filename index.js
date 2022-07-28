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
                });
                break
            case 'view all roles':
                db.query('SELECT * FROM roles', function (err, results) {
                    if (err) { throw err };
                    console.table(results);
                });
                break
            case 'view all employees':
                db.query('SELECT * FROM employees', function (err, results) {
                    if (err) { throw err };
                    console.table(results);
                });
                break
            case 'add a department':
                break
            case 'add a role':
                break
            case 'add an employee':
                break
            case 'update an employee role':
                break
            case 'exit':
                close() /// some way to quit?
                break
            default:
                throw new Error
        };
        console.log(resp.mainMenu)
    }).catch((err) => {
        throw err
    });
};

mainMenLoop();