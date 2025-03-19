// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, contactInfo, message } = await request.json();

    // Validate the input
    if (!name || !contactInfo || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Log the form data (replace with actual database/email logic)
    console.log("Received contact form submission:", { name, contactInfo, message });

    // Simulate saving to a database or sending an email
    // For example, you could use a service like SendGrid to send an email
    // or save to a database like MongoDB, Supabase, etc.

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}