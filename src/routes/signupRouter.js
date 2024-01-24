const express = require('express');
const signupRouter = express.Router();
const dataValidation = require ('../validations/validateData');
const {insertUserData} = require ('../db/insertData');
const bcrypt = require('bcrypt');
const saltRounds = 10;
signupRouter.get('/signup', function(req, res) {
    res.render('signup');
})
signupRouter.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let errorPromptMessage = dataValidation.validatePassword(password).msg;
    let usernameErrorMessage = dataValidation.validateUsername(username).msg;
    let msgToDisplay = errorPromptMessage + usernameErrorMessage + '\n';
    if (dataValidation.validatePassword(password).status === "OK" && dataValidation.validateUsername(username).status === "OK") {
        bcrypt.genSalt(saltRounds, function (err, salt) { 
            bcrypt.hash(password, salt, function (err, hash) {
                insertUserData([username, hash]);
            })
        })
        setTimeout(() => {
            res.render('index', {message: `Success! Welcome, ${username}`});
        }, 3000);
    } else {
        res.render('signup', {errmsg: msgToDisplay , error: false});
    }
})
module.exports = signupRouter;