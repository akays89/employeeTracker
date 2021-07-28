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
