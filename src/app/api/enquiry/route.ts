import { NextRequest, NextResponse } from "next/server";

interface EnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  certification: string;
  experience?: string;
  learningMode?: string;
  careerGoals?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryPayload = await request.json();

    const { fullName, email, phone, certification } = body;

    if (!fullName || !email || !phone || !certification) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.ENQUIRY_NOTIFY_EMAIL;

    if (webhookUrl) {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "learnicate-academy",
          submittedAt: new Date().toISOString(),
          ...body,
        }),
      });

      if (!webhookRes.ok) {
        throw new Error("Webhook delivery failed");
      }
    } else if (resendApiKey && notifyEmail) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Learnicate <onboarding@resend.dev>",
          to: [notifyEmail],
          subject: `New Enquiry: ${certification} — ${fullName}`,
          html: `
            <h2>New Counselling Enquiry</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Certification:</strong> ${certification}</p>
            ${body.experience ? `<p><strong>Experience:</strong> ${body.experience}</p>` : ""}
            ${body.learningMode ? `<p><strong>Learning Mode:</strong> ${body.learningMode}</p>` : ""}
            ${body.careerGoals ? `<p><strong>Career Goals:</strong> ${body.careerGoals}</p>` : ""}
          `,
        }),
      });

      if (!res.ok) {
        throw new Error("Email delivery failed");
      }
    } else if (process.env.NODE_ENV === "development") {
      console.log("[DEV] Enquiry received:", body);
    } else {
      return NextResponse.json(
        {
          error:
            "Enquiry service is not configured. Please contact the academy directly.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again later." },
      { status: 500 },
    );
  }
}
