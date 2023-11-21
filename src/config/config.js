const env = require('dotenv').config().parsed;
const config = {
    PORT: env.PORT,
    DBHOST: env.DBHOST, 
    DBUSER: env.DBUSER,
    DBPASSWORD: env.DBPASSWORD
}

module.exports = config;