const inquirer = require('inquirer')
const mysql2 = require('mysql2')
const cnsltble = require('console.table')

inquirer.prompt(
    [
        {
            type: 'input',
            message: '1',
            name: 'iceCream'
        }, 
        {
            type: 'input',
            message: '1',
            name: 'iASDF'
        }, 
        {
            type: 'input',
            message: '1',
            name: 'iceADGm'
        }, 
    ]
).then((resp)=>{
    console.log(resp)
}).catch((err) => {
    throw err
})