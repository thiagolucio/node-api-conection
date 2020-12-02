const mysql = require('mysql');

var pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    queueLimit: 0,
    connectionLimit: 0,
    multipleStatements: true
});

exports.pool = pool;