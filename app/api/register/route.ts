// app/api/register/route.ts
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, lastname, email, password, phone } = body;

    // შეამოწმე რომ ყველა ველი შევსებულია
    if (!name || !lastname || !email || !password || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // შეამოწმე უკვე არსებობს თუ არა user
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // დაშიფრე პაროლი
    const hashedPassword = await bcrypt.hash(password, 10);

    // შექმენი მომხმარებელი
    const user = await prisma.users.create({
      data: {
        name,
        lastname,
        email,
        password: hashedPassword,
        phone,
      },
    });

    return NextResponse.json({ message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
