import { NextRequest, NextResponse } from "next/server";

// Verify authentication token
function verifyToken(token: string): boolean {
  const password = process.env.ADMIN_PASSWORD || "";
  const expected = Buffer.from(password).toString("base64");
  return token === expected;
}

export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    if (!verifyToken(token)) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const { text, type } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const apiKey = process.env.AI_API_KEY;
    const apiUrl = process.env.AI_API_URL || "https://api.groq.com/openai/v1/chat/completions";
    const model = process.env.AI_MODEL || "llama-3.3-70b-versatile";

    if (!apiKey) {
      return NextResponse.json(
        { error: "AI API key not configured. Please set AI_API_KEY in environment variables." },
        { status: 500 }
      );
    }

    // Create appropriate prompt based on type
    const systemPrompt =
      type === "subject"
        ? "You are an expert email subject line writer. Improve the given subject line to be more professional, clear, and engaging. Keep it concise (under 60 characters). Fix any grammar or spelling errors. Return ONLY the improved subject line, no explanations."
        : "You are an expert email writer. Improve the given email body text to be more professional, clear, and well-structured. Fix grammar, spelling, and punctuation errors. Rearrange sentences for better flow. Maintain the original message intent and tone. Return ONLY the improved text, no explanations or additional commentary.";

    // Call Groq API (OpenAI-compatible)
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: text },
        ],
        temperature: 0.7,
        max_tokens: type === "subject" ? 100 : 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("AI API Error:", errorData);
      return NextResponse.json(
        { error: `AI API error: ${response.status} ${response.statusText}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    const enhancedText = data.choices?.[0]?.message?.content?.trim() || text;

    return NextResponse.json({ enhanced: enhancedText });
  } catch (error) {
    console.error("Enhance API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
