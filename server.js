const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql');
const express = require('express');
const { connection } = require('./db');
const router = express.Router();


db.connect(async function () {
    start();
})

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select an option.',
            choices: [
                'View Employees',
                'View Roles',
                'View Departments',
                'Quit'
            ],
        }
    ]
    )

        .then((answer) => {
            switch (answer.choice) {

                case 'View Employees':

                    viewEmployees();
                    break;
                case 'View Roles':

                    viewRoles();
                    break;
                case 'View Departments':

                    viewDepartments();
                    break;
                case 'Add New Employee':

                    newEmployee();
                    break;


                case 'Quit':

                    Quit();
                    break;
            }

        }

        )
}

function viewEmployees() {
    const request = "SELECT * FROM employees";
    db.query(request, function (err, res) {
        if (err) throw err;
        console.log("Viewing All Employees");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ],
            }
        ])
            .then((answer) => {
                switch (answer.choice) {
                    case 'Main Menu':
                        start();
                        break;
                    case 'Quit':
                        Quit();
                }
            })
        //   start();
    })
};

function viewRoles() {
    let request = "SELECT * FROM roles";
    db.query(request, function (err, res) {
        if (err) throw err;
        console.log("Viewing All Roles");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
            .then((answer) => {
                switch (answer.choice) {
                    case 'Main Menu':
                        start();
                        break;
                    case 'Quit':
                        Quit();
                }
            })

    })
}
function viewDepartments() {
    const request = "SELECT * FROM department";
    db.query(request, function (err, res) {
        if (err) throw err;
        console.log("Viewing All Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
            .then((answer) => {
                switch (answer.choice) {
                    case 'Main Menu':
                        start();
                        break;
                    case 'Quit':
                        Quit();
                }
            })
    })
}



