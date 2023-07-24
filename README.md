# Employee-Tracker

### User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
![Capture2](https://github.com/kingcaliente/Employee-Tracker/assets/15383027/4679ff67-e732-4dbe-b305-6e791da36583)

![snsht](https://github.com/kingcaliente/Employee-Tracker/assets/15383027/599b455c-4b7e-4c06-93d8-3459b9478a27)

Requirements

Node.js | Inquirer | MySQL

Once Installed:

    Clone the Repository on to your machine.
    Open the terminal and ensure you are in the right file path.
    Run the command npm install to download the packages.
    Then run the command node index.js to run the software.
    The command prompt will begin on your terminal


### Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
