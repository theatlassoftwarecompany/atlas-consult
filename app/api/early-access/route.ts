import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { query } from "@/lib/db";

const FROM_EMAIL = process.env.FROM_EMAIL ?? "Arbitor <noreply@theatlascompany.co.uk>";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "info@theatlascompany.co.uk";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, companySize, message } = body;

    // Server-side validation
    const missing: string[] = [];
    if (!firstName?.trim()) missing.push("first name");
    if (!lastName?.trim()) missing.push("last name");
    if (!email?.trim()) missing.push("email");
    if (!company?.trim()) missing.push("company");
    if (!companySize) missing.push("company size");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`;

    await query(
      `INSERT INTO access_requests (first_name, last_name, name, email, company, company_size, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        firstName.trim(),
        lastName.trim(),
        fullName,
        email.trim().toLowerCase(),
        company.trim(),
        companySize,
        message?.trim() || null,
      ]
    );

    const resend = new Resend(process.env.RESEND_API_KEY);

    await Promise.all([
      // Admin notification
      resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        replyTo: email.trim(),
        subject: `New early access request — ${fullName} at ${company.trim()}`,
        html: `
          <h2 style="margin:0 0 16px">New Early Access Request</h2>
          <table style="border-collapse:collapse;width:100%;max-width:480px">
            <tr><td style="padding:8px 0;color:#6b7280;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${fullName}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0">${email.trim()}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Company</td><td style="padding:8px 0">${company.trim()}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Company Size</td><td style="padding:8px 0">${companySize}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;vertical-align:top">Solving</td><td style="padding:8px 0">${message ? message.trim().replace(/\n/g, "<br>") : "—"}</td></tr>
          </table>
        `,
      }),

      // Confirmation to registrant
      resend.emails.send({
        from: FROM_EMAIL,
        to: email.trim(),
        subject: "We've received your Arbitor access request",
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#111827">
            <h1 style="font-size:24px;font-weight:700;margin-bottom:8px">Thanks, ${firstName.trim()}.</h1>
            <p style="color:#374151;line-height:1.6">
              We've received your early access request for Arbitor and saved your details.
              We'll be in touch shortly with access to the platform.
            </p>
            <hr style="margin:32px 0;border:none;border-top:1px solid #e5e7eb" />
            <p style="font-size:12px;color:#9ca3af">The Atlas Company &middot; theatlascompany.co.uk</p>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Early access request error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
