const express = require ('express');
const indexRouter = express.Router();
indexRouter.get('/', function(req, res) {
    const defaultMessage = "Welcome! Please select an option.";
    const successMessage = req.query.message || defaultMessage;
    res.render('index', {message: successMessage})
})

module.exports = indexRouter;