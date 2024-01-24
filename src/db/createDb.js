<<<<<<< HEAD
const mysql = require ('mysql2') 
const {DBHOST, DBPASSWORD, DBUSER} = require ('../config/config');
const con = mysql.createConnection({
    host: DBHOST, 
    user: DBUSER, 
    password: DBPASSWORD
})

con.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log(`Connected!`);
    }
    con.query("CREATE DATABASE myshifts", function(err, result) {
        if (err) { 
            throw err;
        } else {
            console.log(`Database succesfully created!`);
        }
    })
=======
const mysql = require ('mysql2') 
const {DBHOST, DBPASSWORD, DBUSER} = require ('../config/config');
const con = mysql.createConnection({
    host: DBHOST, 
    user: DBUSER, 
    password: DBPASSWORD
})

con.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log(`Connected!`);
    }
    con.query("CREATE DATABASE myshifts", function(err, result) {
        if (err) { 
            throw err;
        } else {
            console.log(`Database succesfully created!`);
        }
    })
>>>>>>> b159935c0162220044bc8f203a701d9aa0a871e4
})