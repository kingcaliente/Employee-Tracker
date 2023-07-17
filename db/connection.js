const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Iggyberto13',
database:"business"
},
console.log('connected to MYSQL') 
);
 
module.exports = connection;