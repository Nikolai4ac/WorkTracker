<<<<<<< HEAD
const mysql = require ('mysql2');
const {DBUSER, DBHOST, DBPASSWORD} = require ('../config/config');
const con = mysql.createConnection({
    host: DBHOST, 
    user: DBUSER, 
    password: DBPASSWORD,
    database: "myshifts"
})

con.connect(function(err) {
    if (err) { 
        throw err;
    } else {
        console.log(`user ${DBUSER} connected`);
    }
    const sqlString = "CREATE TABLE shifts (encoded VARCHAR(1), shift_start VARCHAR(4), shift_end VARCHAR(4))";
    con.query(sqlString, function(err, result) {
        if (err) {
            throw err;
        } else {
            console.log(`Table created!`);
        }
    })
=======
const mysql = require ('mysql2');
const {DBUSER, DBHOST, DBPASSWORD} = require ('../config/config');
const con = mysql.createConnection({
    host: DBHOST, 
    user: DBUSER, 
    password: DBPASSWORD,
    database: "myshifts"
})

con.connect(function(err) {
    if (err) { 
        throw err;
    } else {
        console.log(`user ${DBUSER} connected`);
    }
    const sqlString = "CREATE TABLE shifts (encoded VARCHAR(1), shift_start VARCHAR(4), shift_end VARCHAR(4))";
    con.query(sqlString, function(err, result) {
        if (err) {
            throw err;
        } else {
            console.log(`Table created!`);
        }
    })
>>>>>>> b159935c0162220044bc8f203a701d9aa0a871e4
})