import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/writeClient";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, role, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const doc = await writeClient.create({
      _type: "contactSubmission",
      name,
      email,
      company: company || "",
      role: role || "",
      message: message || "",
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, id: doc._id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
