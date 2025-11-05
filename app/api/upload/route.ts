import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import prisma from "@/app/lib/prisma";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    // current user id cookie-დან
    const cookieHeader = req.headers.get("cookie");
    const userId = cookieHeader
      ?.split("; ")
      .find((c) => c.startsWith("userId="))
      ?.split("=")[1];
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // ფაილის შენახვა
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true });
    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);

    const imageUrl = `/uploads/${filename}`;

    // ბაზაში განახლება
    await prisma.users.update({
      where: { id: Number(userId) },
      data: { profileImage: imageUrl },
    });

    return NextResponse.json({ success: true, imageUrl });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
