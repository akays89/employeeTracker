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
    }


    