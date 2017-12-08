var mysql = require("mysql")

var connection = mysql.createConnection({
  port: 3000,
  host: "localhost",
  user: "root",
  password: "Tiger1932",
  database: "burger_db"
});

connection.connect(function(err){
  if (err) {
    console.log("error connect" + err.stack);
    return;
  }
  console.log("connected successfully" + connection.threadId);
});

module.exports = connection;
