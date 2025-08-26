import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  audience?: "Business" | "User" | string;
  topic?: "Sales Demo" | "Partnership" | "Support" | "Other" | string;
  message: string;
}

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const errors: Record<string, string> = {};
    if (!body.name || !body.name.trim()) errors.name = "Name is required";
    if (!body.email || !body.email.trim()) errors.email = "Email is required";
    else if (!isValidEmail(body.email)) errors.email = "Invalid email";
    if (!body.message || !body.message.trim()) errors.message = "Message is required";
    else if (body.message.trim().length < 10) errors.message = "Message must be at least 10 characters";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const payload: ContactPayload = {
      name: body.name!.trim(),
      email: body.email!.trim(),
      company: body.company?.trim() || undefined,
      audience: body.audience || "Business",
      topic: body.topic || "Sales Demo",
      message: body.message!.trim(),
    };

    // TODO: integrate with email/CRM provider (e.g., Resend, SendGrid, HubSpot) using env keys
    console.log("[contact] New submission:", payload);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Error handling submission", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
