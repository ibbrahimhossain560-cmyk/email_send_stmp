import { NextRequest, NextResponse } from "next/server";
import transporter from "@/lib/smtp";
import { getTemplate, templateList } from "@/lib/templates";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Authentication required. Please login first." }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const adminPassword = process.env.ADMIN_PASSWORD || "nafijpro++";

    if (!decoded.startsWith("nrmail_") || !decoded.endsWith(`_${adminPassword}`)) {
      return NextResponse.json({ error: "Invalid or expired token. Please login again." }, { status: 401 });
    }

    const body = await req.json();
    const { to, subject, templateId, variables, html: customHtml, text: plainText } = body;

    if (!to || !subject) {
      return NextResponse.json({ error: "Missing required fields: to, subject" }, { status: 400 });
    }

    let emailHtml = "";
    let emailText = "";

    // Handle different compose modes
    if (customHtml) {
      // Custom HTML mode
      emailHtml = customHtml;
      emailText = customHtml.replace(/<[^>]*>/g, ''); // Strip HTML for plain text fallback
    } else if (plainText) {
      // Plain text mode
      emailText = plainText;
      emailHtml = `<pre style="font-family: Arial, sans-serif; white-space: pre-wrap; word-wrap: break-word;">${plainText}</pre>`;
    } else if (templateId) {
      // Template mode
      const tpl = templateList.find((t) => t.id === templateId);
      if (!tpl) {
        return NextResponse.json({ error: "Invalid template ID" }, { status: 400 });
      }
      emailHtml = getTemplate(templateId, { ...variables, subject });
    } else {
      return NextResponse.json({ error: "No content provided. Use templateId, html, or text." }, { status: 400 });
    }

    const info = await transporter.sendMail({
      from: `"${process.env.SENDER_NAME || "Nafij"}" <${process.env.SENDER_EMAIL || "admin@nafij.me"}>`,
      replyTo: process.env.REPLY_TO_EMAIL || process.env.SENDER_EMAIL || "admin@nafij.me",
      to,
      subject,
      html: emailHtml,
      text: emailText || undefined,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
