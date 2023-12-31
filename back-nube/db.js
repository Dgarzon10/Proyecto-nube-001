// db.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "dbadmin",
  host: "ec2-3-86-247-73.compute-1.amazonaws.com",
  database: "tododatabase",
  password: "dbadmin7",
  port: 5432, // Puerto predeterminado de PostgreSQL
});

pool.on("connect", () => {
  console.log("Conexión exitosa con la base de datos");
});

pool.on("error", (err) => {
  console.error("Error en la conexión con la base de datos:", err.stack);
});

module.exports = pool;
