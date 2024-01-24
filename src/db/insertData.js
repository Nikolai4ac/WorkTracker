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
module.exports = {insertUserData};