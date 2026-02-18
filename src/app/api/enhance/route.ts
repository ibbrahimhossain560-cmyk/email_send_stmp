import { NextRequest, NextResponse } from "next/server";

// Verify authentication token (same logic as /api/send)
function verifyToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const adminPassword = process.env.ADMIN_PASSWORD || "nafijpro++";
    return decoded.startsWith("nrmail_") && decoded.endsWith(`_${adminPassword}`);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized - Please login first" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    if (!verifyToken(token)) {
      return NextResponse.json({ error: "Invalid or expired token - Please login again" }, { status: 401 });
    }

    const { text, type } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const apiKey = process.env.AI_API_KEY;
    const apiUrl = process.env.AI_API_URL || "https://api.groq.com/openai/v1/chat/completions";
    const model = process.env.AI_MODEL || "llama-3.3-70b-versatile";

    if (!apiKey || apiKey === "gsk_get_your_free_key_from_groq" || apiKey === "your_groq_api_key_here") {
      return NextResponse.json(
        { error: "AI API key not configured. Please set a valid AI_API_KEY in .env.local file." },
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
      
      // Provide more specific error messages
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Invalid AI API key. Please check your Groq API key in .env.local" },
          { status: 500 }
        );
      } else if (response.status === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please wait a moment and try again." },
          { status: 500 }
        );
      } else if (response.status === 400) {
        return NextResponse.json(
          { error: `Invalid request: ${errorData.error?.message || "Check your AI_MODEL setting"}` },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { error: `AI API error: ${errorData.error?.message || response.statusText}` },
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
