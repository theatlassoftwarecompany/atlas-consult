import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'eu-west-2',
});

const BUCKET_NAME = process.env.S3_BUCKET_NAME || 'atlas-consult-contact-submissions';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create submission object with timestamp
    const submission = {
      ...body,
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Generate unique key for S3
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const sanitizedEmail = body.email.replace(/[^a-zA-Z0-9]/g, '_');
    const key = `submissions/${timestamp}_${sanitizedEmail}.json`;

    // Upload to S3
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: JSON.stringify(submission, null, 2),
      ContentType: 'application/json',
    });

    await s3Client.send(command);

    return NextResponse.json(
      { success: true, message: 'Thank you for your message. We will be in touch soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
