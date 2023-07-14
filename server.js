const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql');
const express = require('express');
const { connection } = require('./db');
const router = express.Router();


db.connect(async function () {
    start();
})

function mainMenu() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'option',
          message: 'What would you like to do?',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit',
          ],
        },
      ])
      .then((answer) => {
        switch (answer.option) {
          case 'View all departments':
            viewAllDepartments();
            break;
          case 'View all roles':
            viewAllRoles();
            break;
          case 'View all employees':
            viewAllEmployees();
            break;
          case 'Add a department':
            addDepartment();
            break;
          case 'Add a role':
            addRole();
            break;
          case 'Add an employee':
            addEmployee();
            break;
          case 'Update an employee role':
            updateEmployeeRole();
            break;
          case 'Exit':
            connection.end();
            break;
          default:
            console.log('Invalid option. Please choose again.');
            mainMenu();
        }
      });
  }
  
  // Implement the option handlers here...
  
  // Option: View all departments
  function viewAllDepartments() {
    const query = 'SELECT * FROM departments';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      mainMenu();
    });
  }
  
  // Option: View all roles
  function viewAllRoles() {
    const query = 'SELECT * FROM roles';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      mainMenu();
    });
  }
  
  // Option: View all employees
  function viewAllEmployees() {
    const query = 'SELECT * FROM employees';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      mainMenu();
    });
  }
  
  // Option: Add a department
  function addDepartment() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the department:',
        },
      ])
      .then((answer) => {
        const query = 'INSERT INTO departments (name) VALUES (?)';
        connection.query(query, [answer.departmentName], (err, res) => {
          if (err) throw err;
          console.log('Department added successfully!');
          mainMenu();
        });
      });
  }
  
  // Option: Add a role
  function addRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'roleTitle',
          message: 'Enter the title of the role:',
        },
        {
          type: 'input',
          name: 'roleSalary',
          message: 'Enter the salary for the role:',
        },
        {
          type: 'input',
          name: 'roleDepartment',
          message: 'Enter the department ID for the role:',
        },
      ])
      .then((answer) => {
        const query =
          'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
        connection.query(
          query,
          [answer.roleTitle, answer.roleSalary, answer.roleDepartment],
          (err, res) => {
            if (err) throw err;
            console.log('Role added successfully!');
            mainMenu();
          }
        );
      });
  }
  
  // Option: Add an employee
  function addEmployee() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'employeeFirstName',
          message: 'Enter the first name of the employee:',
        },
        {
          type: 'input',
          name: 'employeeLastName',
          message: 'Enter the last name of the employee:',
        },
        {
          type: 'input',
          name: 'employeeRole',
          message: 'Enter the role ID for the employee:',
        },
        {
          type: 'input',
          name: 'employeeManager',
          message: 'Enter the manager ID for the employee:',
        },
      ])
      .then((answer) => {
        const query =
          'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        connection.query(
          query,
          [
            answer.employeeFirstName,
            answer.employeeLastName,
            answer.employeeRole,
            answer.employeeManager,
          ],
          (err, res) => {
            if (err) throw err;
            console.log('Employee added successfully!');
            mainMenu();
          }
        );
      });
  }
  
  // Option: Update an employee role
  function updateEmployeeRole() {
    // Fetching the employee list for selection
    const employeesQuery = 'SELECT * FROM employees';
    connection.query(employeesQuery, (err, employees) => {
      if (err) throw err;
  
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'employeeId',
            message: 'Select the employee to update:',
            choices: employees.map((employee) => ({
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.id,
            })),
          },
          {
            type: 'input',
            name: 'newRoleId',
            message: 'Enter the new role ID for the employee:',
          },
        ])
        .then((answer) => {
          const query = 'UPDATE employees SET role_id = ? WHERE id = ?';
          connection.query(
            query,
            [answer.newRoleId, answer.employeeId],
            (err, res) => {
              if (err) throw err;
              console.log('Employee role updated successfully!');
              mainMenu();
            }
          );
        });
    });
  }
  
  // Start the application
  mainMenu();
  