const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Iggyberto13',
});
 
module.exports = connection;