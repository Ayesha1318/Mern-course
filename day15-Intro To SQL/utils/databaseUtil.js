const mysql = require("mysql2");

const pool = mysql.createPool({
  host : "localhost",
  user : "root",
  password : "Ayesha26.04",
  database : "airbnb"
});

module.exports = pool.promise();