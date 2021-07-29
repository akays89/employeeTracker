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

   
  });



    