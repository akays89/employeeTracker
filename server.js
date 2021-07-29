require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const conTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: process.env.DB_PASS,

    database: "employees_db"
});


 connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    console.log("Welcome to the Employee Tracking App..."); 

   start();
  });

  function start() {

    console.log(" "); 
      inquirer
      .prompt({
        name: "actions",
        type: "rawlist",
        message: "What would you like to do?",
        choices: ["View all employees", 
                  "View all roles", 
                  "View all departments", 
                  "Add an employee", 
                  "Add a role", 
                  "Add a department", 
                  "Update an employee's role", 
                  "Delete an employee", 
                  "Delete a role", 
                  "Delete a department",
                  "Exit"]
      })

      .then(function(answer) {
          switch (answer.actions){
            case "View all employees":
                return allEmployees();
                break;

            case "View all roles":
                return allRoles();
                break;

            case "View all departments":
                return allDepartments();
                break;

            case "Add an employee":
                return addEmployee();
                break;

            case "Add a role":
                return addRole();
                break;

            case "Add a department":
                return addDepartment();
                break;

            case "Update an employee's role":
                return updateEmployee();
                break;

            case "Delete an employee":
                return deleteEmployee();
                break;

            case "Delete a role":
                return deleteRole();
                break;

            case "Delete a department":
                return deleteDepartment();
                break;
            
            case "Exit":
                return exitApp();
                break;

            }
        });
    }
        

  
   function allEmployees() {
    
    var query = "SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name AS department, CONCAT(manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id"
  connection.query(query, function(err, res) {
    if (err) throw err;
   
      console.table(res);
    
    start(); 
  })
  }  





    