
import { unlink } from "fs/promises";
import path from "path";
import { connection } from "../../../../db/connection/connection";
import { NextResponse } from "next/server";

export async function DELETE(request) {

  const body = await request.json();
  const id = body.id; // Obtén el id de la foto que quieres eliminar

  try {
    // Obtén la URL de la imagen de la base de datos
    const [rows] = await connection.query("SELECT url_image FROM photos WHERE id = ?", [id]);
    if (rows.length > 0) {
      const url_image = rows[0].url_image;

      // Elimina la entrada de la base de datos
      await connection.query("DELETE FROM photos WHERE id = ?", [id]);

      // Elimina el archivo de la foto del sistema de archivos
      const filePath = path.join(process.cwd(), "public", url_image);
      await unlink(filePath);

      // Devuelve una respuesta exitosa
      return NextResponse.json({ success: true });

    } else {
     return NextResponse.json({ message: 'Photo not found' }, {status:404});
    }
  } catch (error) {
    console.error('Error al eliminar la foto:', error);
    // Asegúrate de que el objeto de error es serializable
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, {status:500});
  }
}
