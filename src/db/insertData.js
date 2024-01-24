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
})

function insertUserData(data) {
    const sqlString = "INSERT INTO shifts (username, password) VALUES (?, ?);";
    con.query(sqlString, [data[0], data[1]], function(err, result, fields) {
        if (err) { 
            throw err;
        } else {
            console.log(`Record inserted.`);
        }
    })
}
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
})

function insertUserData(data) {
    const sqlString = "INSERT INTO shifts (username, password) VALUES (?, ?);";
    con.query(sqlString, [data[0], data[1]], function(err, result, fields) {
        if (err) { 
            throw err;
        } else {
            console.log(`Record inserted.`);
        }
    })
}
>>>>>>> b159935c0162220044bc8f203a701d9aa0a871e4
module.exports = {insertUserData};