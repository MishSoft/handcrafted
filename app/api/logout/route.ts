// app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res = NextResponse.json({ message: "Logged out" });

  // Cookie წაშლა
  res.cookies.set("userId", "", {
    path: "/", // cookie-ს path
    maxAge: 0, // 0 ნიშნავს წაშლას
  });

  return res;
}
