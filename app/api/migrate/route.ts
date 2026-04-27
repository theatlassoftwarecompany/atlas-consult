/**
 * One-shot migration endpoint.
 * Call once with the correct secret, then delete this file.
 *
 * Usage:
 *   curl -X POST https://<your-domain>/api/migrate \
 *        -H "x-migrate-secret: <MIGRATE_SECRET>"
 */

import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-migrate-secret");

  if (!secret || secret !== process.env.MIGRATE_SECRET) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    await pool.query(`
      ALTER TABLE access_requests
        ADD COLUMN IF NOT EXISTS first_name   TEXT,
        ADD COLUMN IF NOT EXISTS last_name    TEXT,
        ADD COLUMN IF NOT EXISTS company_size TEXT;
    `);

    return NextResponse.json({ success: true, message: "Migration complete. Delete this endpoint now." });
  } catch (error) {
    console.error("Migration error:", error);
    return NextResponse.json({ error: "Migration failed", detail: String(error) }, { status: 500 });
  }
}
