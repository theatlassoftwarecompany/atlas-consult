import { NextRequest, NextResponse } from "next/server";

const API_GATEWAY_URL = "https://6qzulpm59c.execute-api.eu-west-2.amazonaws.com/prod/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(API_GATEWAY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Contact proxy error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
