import { NextRequest, NextResponse } from "next/server";
import { getTemplate } from "@/lib/templates";

export async function POST(req: NextRequest) {
  try {
    const { templateId, variables } = await req.json();
    const html = getTemplate(templateId || "minimal", variables || {});
    return NextResponse.json({ html });
  } catch {
    return NextResponse.json({ error: "Failed to generate preview" }, { status: 500 });
  }
}
