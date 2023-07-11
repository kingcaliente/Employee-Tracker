const inquirer = require('inquierer');
const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'Iggyberto13',
    database: 'employee_db'
  },
  console.log(`Connected to the employees database.`)
);


function runApp() {
    inquirer.prompt({
        name: 'startQuestions',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Search an Employee', 'Search Employee by Department', 'Search Employee by Role', 'Add Employee', 'Remove Employee', 'Add Department', 'Add Role', 'Quit']
    }).then(function (answer) 
}






