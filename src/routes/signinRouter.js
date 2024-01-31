const express = require('express');
const signinRouter = express.Router();

signinRouter.get('/signin', function(req, res) {
    res.render('signin');
})

module.exports = signinRouter;

