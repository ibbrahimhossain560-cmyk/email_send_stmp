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

    const { description, length, templateStyle } = await req.json();

    if (!description || typeof description !== "string") {
      return NextResponse.json({ error: "Description is required" }, { status: 400 });
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

    // Build the prompt based on user preferences
    const lengthInstruction = length 
      ? `The content should be approximately ${length} ${length > 100 ? 'words' : 'characters'} long.`
      : 'Use an appropriate length for the content.';

    const styleInstruction = templateStyle === 'html'
      ? `Create RICH, BEAUTIFUL, and VISUALLY STUNNING HTML with modern design:
- Use inline CSS styles with vibrant colors, gradients (linear-gradient), shadows (box-shadow)
- Apply beautiful typography: varied font sizes (18px-32px for headings), line-height (1.6-1.8), letter-spacing
- Use eye-catching color schemes: gradients like (#6366f1 to #a855f7), (#ec4899 to #f43f5e), (#059669 to #34d399)
- Add visual hierarchy with styled headings, decorated sections, colored backgrounds
- Include spacing: generous padding (20px-40px), margins (15px-30px), border-radius (12px-16px)
- Use tables for layout with background colors, borders, and padding
- Add decorative elements: colored dividers, gradient boxes, icon emojis (🎉✨🎊💫)
- Create sections with background colors (#f8fafc, #fef3c7, #ecfdf5) or gradients
- Style lists with colors, spacing, and visual appeal
- Make it look like a professional, modern, premium email design
- DO NOT use plain black (#000000) backgrounds or basic Arial text
- Think luxury brand newsletter, not plain text email`
      : templateStyle === 'plain'
      ? 'Return the content as plain text without any HTML tags or formatting. Use simple line breaks and spacing.'
      : `Create elegant HTML with modern styling:
- Use inline CSS with beautiful colors, gradients, and spacing
- Apply professional typography and visual elements
- Add decorative touches like emojis (🎉✨) and colored sections
- Use gradients like (#6366f1 to #a855f7), backgrounds (#f8fafc, #ecfdf5)
- Make it visually appealing with proper spacing (padding/margins)
- Think modern email design, not plain text`;

    const systemPrompt = `You are an expert email content writer and HTML designer who creates STUNNING, VISUALLY BEAUTIFUL emails.

Requirements:
- ${lengthInstruction}
- ${styleInstruction}
- Be professional, clear, and engaging
- Include appropriate greetings and sign-offs
- Match the tone to the purpose described
- Do NOT include subject lines unless specifically requested
- Return ONLY the email body content
- If generating HTML: Make it look PREMIUM and MODERN - think luxury brand, not basic email
- Use RICH visual design with colors, gradients, spacing, and beautiful typography`;

    // Call Groq API
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
          { role: "user", content: description },
        ],
        temperature: 0.8,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("AI API Error:", errorData);
      
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
    const generatedContent = data.choices?.[0]?.message?.content?.trim() || "";

    if (!generatedContent) {
      return NextResponse.json(
        { error: "AI generated empty content. Please try again." },
        { status: 500 }
      );
    }

    // Also generate a suggested subject line
    const subjectResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { 
            role: "system", 
            content: "Generate a short, professional, and engaging email subject line (under 60 characters) based on the description. Return ONLY the subject line, no quotes or explanations." 
          },
          { role: "user", content: description },
        ],
        temperature: 0.7,
        max_tokens: 50,
      }),
    });

    let suggestedSubject = "";
    if (subjectResponse.ok) {
      const subjectData = await subjectResponse.json();
      suggestedSubject = subjectData.choices?.[0]?.message?.content?.trim() || "";
    }

    return NextResponse.json({ 
      content: generatedContent,
      subject: suggestedSubject
    });
  } catch (error) {
    console.error("Generate API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
