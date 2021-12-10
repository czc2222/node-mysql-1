const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',

});

connection.connect();
//创建数据库
connection.query('CREATE DATABASE  IF NOT EXISTS cheng DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci'
   , function (error, results, fields) {
  if (error) throw error;
  console.log(results)
});
//创建表
connection.query('use cheng')
connection.query(`CREATE TABLE IF NOT EXISTS user(
   name text,
   age int
)`
  , function (error, results, fields) {
    if (error) throw error;
    console.log(results)
  });

connection.end();