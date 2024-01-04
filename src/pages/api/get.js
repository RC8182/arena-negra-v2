import { connection } from "../../../db/connection/connection";

export default async function handler(req, res) {
  try {
    // Hacer la consulta SQL
    const [rows] = await connection.query("SELECT id, title_file, url_image, description FROM photos");

    // Formatear los resultados en un objeto JSON
    const photos = rows.map(row => ({
      id: row.id,
      title_file: row.title_file,  
      url: row.url_image,
      comment: row.description
    }));

    // Devolver los resultados
    res.status(200).json(photos);
  } catch (error) {
    console.error('Error al obtener las fotos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
