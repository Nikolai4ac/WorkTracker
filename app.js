const express = require ('express');
const app = express();
const path = require('path');
const {PORT} = require ('./src/config/config'); 
const indexRouter = require('./src/routes/indexRouter')
const {signupRouter} = require('./src/routes/signupRouter')
const signinRouter = require('./src/routes/signinRouter');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true, limit: '20mb'}))
app.set('view engine', 'ejs');
app.set('views', 'public/views')
app.use('/', indexRouter);
app.use('/', signupRouter)
app.use('/', signinRouter)
app.listen(PORT, (err) => {
    if (err) { 
        throw err;
    } else {
        console.log(`Application is running on port ${PORT}`);
    }
})

app.use(express.static('public'));