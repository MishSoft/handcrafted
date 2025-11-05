import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(req: Request) {
  try {
    const cookieHeader = req.headers.get("cookie");
    const userId = cookieHeader
      ?.split("; ")
      .find((c) => c.startsWith("userId="))
      ?.split("=")[1];

    if (!userId) {
      return NextResponse.json({ error: "Not logged in" });
    }

    const user = await prisma.users.findUnique({
      where: { id: Number(userId) },
      select: { id: true, name: true, lastname: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not Found" });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
