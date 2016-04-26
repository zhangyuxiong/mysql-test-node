var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.241.131',
  user     : 'root',
  password : '111111',
  database : 'test'
});
 
connection.connect();
 
connection.end();