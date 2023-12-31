const express = require('express');
const signupRouter = express.Router();
const dataValidation = require ('../validations/validateData')
signupRouter.get('/signup', function(req, res) {
    res.render('signup');
})
signupRouter.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log(password); //returns the text from req.body.username
    console.log(dataValidation.validatePassword(password)); //returns undefined >>> fixed
    if (username.length > 0 && password.length > 0 ) {
        setTimeout(() => {
            res.render('index', {message: "Success!"});
        }, 3000);
    }
})
module.exports = signupRouter;