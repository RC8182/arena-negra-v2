// Importar el módulo mysql2
require('dotenv').config();
import { createPool } from "mysql2/promise";

// Crear el pool de conexiones con la base de datos
const connection = createPool({
host: process.env.MYSQL_HOST,
database: process.env.MYSQL_DATABASE,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PASSWORD,
});

async function testConnection() {
    try {
      const [rows, fields] = await connection.query('SELECT 1');
      console.log('Conexión a la base de datos exitosa!');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  }

  export { connection, testConnection };