import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { connection, testConnection } from "../../../../db/connection/connection";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");
  const titleFile=data.get("title_file")
  const comment= data.get("especialidades")
  const folder=data.get("folder")


  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  //   const filePath = `/tmp/${file.name}`
  const filePath = path.join(process.cwd(), `public/uploads/${folder}/`, file.name);
  await writeFile(filePath, buffer);
  // Connect to db
  await testConnection();

  // Insert into database
  const url_image = `/uploads/${folder}/${file.name}`;
  const title_file = titleFile;
  const description = comment;
  const sql = `INSERT INTO photos (title_file, description, url_image) VALUES (?, ?, ?)`;
  await connection.query(sql, [title_file, description, url_image]);


  return NextResponse.json({ success: true });
}