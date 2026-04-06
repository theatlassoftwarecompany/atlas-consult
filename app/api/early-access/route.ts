import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "name and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    await query(
      "INSERT INTO access_requests (name, email, company, message) VALUES ($1, $2, $3, $4)",
      [name, email, company || null, message || null]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Early access request error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
