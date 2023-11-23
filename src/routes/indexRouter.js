const express = require ('express');
const indexRouter = express.Router();
indexRouter.get('/', function(req, res) {
    res.render('index', {message: "Welcome! Please select an option."})
})

module.exports = indexRouter;