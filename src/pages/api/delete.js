import { unlink } from "fs/promises";
import path from "path";
import { connection } from "../../../db/connection/connection";

export default async function DELETE(req, res) {
  const id = req.body.id;

  try {
    // Check if id is present in the query parameters
    if (!id) {
      return res.status(400).json({ error: 'Missing id in the request' });
    }

    // Obtén la URL de la imagen de la base de datos
    const [rows] = await connection.query("SELECT url_image FROM photos WHERE id = ?", [id]);
    console.log(req.body.id)
    if (rows.length > 0) {
      const url_image = rows[0].url_image;

      // Elimina la entrada de la base de datos
      await connection.query("DELETE FROM photos WHERE id = ?", [id]);

      // Elimina el archivo de la foto del sistema de archivos
      const filePath = path.join(process.cwd(), "public", url_image);
      await unlink(filePath);

      // Devuelve una respuesta exitosa
      return res.status(200).json({ success: true });

    } else {
      return res.status(404).json({ message: 'Photo not found' });
    }
  } catch (error) {
    console.error('Error al eliminar la foto:', error);
    // Asegúrate de que el objeto de error es serializable
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
