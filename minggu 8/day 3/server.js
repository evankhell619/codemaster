import express from "express";
import mysql2 from "mysql2";

const server = express();

const db = mysql.createConnection({
  host: " localhost",
  user: "root",
  password: "",
  database: "indo_region",
});

// const db = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
// });

export default server;
