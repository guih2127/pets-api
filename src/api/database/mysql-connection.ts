const mysql = require("mysql2/promise");

require("dotenv").config();

async function mySqlConnection() {
  return await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
}

export default mySqlConnection;
