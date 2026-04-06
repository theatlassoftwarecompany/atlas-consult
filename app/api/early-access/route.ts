import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { query } from "@/lib/db";

const FROM_EMAIL = process.env.FROM_EMAIL ?? "The Atlas Company <noreply@theatlascompany.co.uk>";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "info@theatlascompany.co.uk";

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

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New early access request from ${name}${company ? ` at ${company}` : ""}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, "<br>") : "—"}</p>
        <p><a href="${process.env.ARBITOR_APP_URL ?? "https://arbitor.co"}/admin">Review in Arbitor admin</a></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Early access request error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
