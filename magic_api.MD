# ✨ Magic API Guide - AI Email Enhancement

Welcome to the **Magic \u2728** feature! This powerful AI-powered tool automatically improves your email content by fixing grammar, spelling, and rearranging text for better clarity and professionalism.

---

## 🎯 What Does Magic \u2728 Do?

The Magic button uses **free AI models** to enhance your emails in real-time:

### For Subject Lines:
- ✅ Fixes spelling and grammar errors
- ✅ Makes subjects more professional and engaging
- ✅ Keeps it concise (under 60 characters)
- ✅ Improves clarity and impact

### For Message Body:
- ✅ Corrects grammar, spelling, and punctuation
- ✅ Rearranges sentences for better flow
- ✅ Maintains your original message intent
- ✅ Makes content more professional
- ✅ Improves readability and structure

---

## 🚀 Quick Setup (FREE API)

### Step 1: Get Your Free Groq API Key

**Groq** provides **FREE** high-speed AI inference with generous rate limits:

1. Visit **[https://console.groq.com](https://console.groq.com)**
2. Sign up for a free account (no credit card required)
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Give it a name (e.g., "Email Sender Platform")
6. Copy your API key (starts with `gsk_...`)

**Free Tier Includes:**
- 🎁 **30 requests per minute**
- 🎁 **14,400 requests per day**
- 🎁 **No credit card required**
- 🎁 **Super fast inference** (faster than OpenAI!)

### Step 2: Add API Key to Your Environment

Edit your `.env.local` file:

```bash
# AI Enhancement Configuration
AI_API_KEY=gsk_your_actual_api_key_here_from_groq
AI_API_URL=https://api.groq.com/openai/v1/chat/completions
AI_MODEL=llama-3.3-70b-versatile
```

**Available Groq Models** (all FREE):
- `llama-3.3-70b-versatile` - Best for general text (recommended) 🌟
- `llama-3.1-70b-versatile` - Alternative high-quality model
- `mixtral-8x7b-32768` - Good for longer content
- `gemma2-9b-it` - Faster, good for simple enhancements

### Step 3: Restart Your Development Server

```bash
npm run dev
```

### Step 4: Test the Magic \u2728 Button

1. Go to **[http://localhost:3000/send](http://localhost:3000/send)**
2. Log in with your admin password
3. Type a subject or message body
4. Click the **Magic \u2728** button next to the field
5. Watch your text get enhanced in real-time!

---

## 🎨 How to Use in Your Emails

### Example 1: Fixing a Messy Subject

**Before (Original):**
```
hey can u help me wit project pls urgent!
```

**After (Magic \u2728):**
```
Request for Urgent Project Assistance
```

### Example 2: Improving Email Body

**Before (Original):**
```
hi there i need u to send me the files we talked about yesterday
its really important and i need them asap
can u do that plz
```

**After (Magic \u2728):**
```
Hello,

I hope this message finds you well. I wanted to follow up on our conversation from yesterday regarding the files we discussed.

Could you please send them to me at your earliest convenience? This is time-sensitive, and I would greatly appreciate your prompt assistance.

Thank you for your help!
```

### Example 3: Professional Enhancement

**Before (Original):**
```
wanna know if ur available next week for meeting about the new product launch
```

**After (Magic \u2728):**
```
Are you available next week to discuss the new product launch?
```

---

## 🔧 Advanced Configuration

### Using Different AI Providers

The Magic \u2728 feature works with **any OpenAI-compatible API**. Here are some alternatives:

#### Option 1: OpenAI (Paid)

```bash
AI_API_KEY=sk-your_openai_api_key
AI_API_URL=https://api.openai.com/v1/chat/completions
AI_MODEL=gpt-4o-mini  # Cheaper than GPT-4
```

**Pricing:** ~$0.15 per 1M input tokens (affordable for email enhancement)

#### Option 2: Together AI (Free + Paid)

```bash
AI_API_KEY=your_together_api_key
AI_API_URL=https://api.together.xyz/v1/chat/completions
AI_MODEL=meta-llama/Llama-3.2-90B-Vision-Instruct-Turbo
```

**Free Tier:** $25 free credits on signup

#### Option 3: Replicate (Pay-per-use)

```bash
AI_API_KEY=r8_your_replicate_token
AI_API_URL=https://api.replicate.com/v1/models/meta/llama-2-70b-chat/predictions
AI_MODEL=meta/llama-2-70b-chat
```

#### Option 4: Local LLM (Completely Free + Private)

Run your own AI model using **Ollama**:

```bash
# Install Ollama: https://ollama.ai
ollama pull llama3.2

# Update .env.local:
AI_API_KEY=not-needed-for-local
AI_API_URL=http://localhost:11434/v1/chat/completions
AI_MODEL=llama3.2
```

**Benefits:** Free, private, no API limits!

---

## 🛡️ Security & Privacy

### Data Privacy

- ✅ Your emails are **only sent to the AI API** when you click Magic \u2728
- ✅ **NOT** stored or logged by the email platform
- ✅ Groq processes requests securely and doesn't train on your data
- ✅ All communication happens over **HTTPS**

### API Key Protection

- 🔒 **Never commit** your `.env.local` file to git (it's already in `.gitignore`)
- 🔒 API keys are stored as **environment variables** (not in code)
- 🔒 Only accessible on the **server-side** (Next.js API routes)
- 🔒 Not exposed to browser/client

### Rate Limiting

The Magic \u2728 feature includes built-in protection:

- Requires **authentication** (admin password)
- Validates input before sending to AI
- Returns clear error messages if API fails
- Respects Groq's rate limits (30 req/min)

---

## 🐛 Troubleshooting

### Problem: "AI API key not configured" Error

**Solution:**
1. Make sure `AI_API_KEY` is set in `.env.local`
2. Restart your Next.js dev server (`npm run dev`)
3. Clear browser cache and refresh

### Problem: "Rate limit exceeded" Error

**Solution:**
- Wait 1 minute and try again
- Groq free tier: 30 requests/minute
- Consider upgrading or using a different AI provider

### Problem: Magic Button is Disabled

**Causes:**
- No text entered in the field yet
- Already enhancing (wait for current request to finish)

**Solution:** Type some text first, then click Magic \u2728

### Problem: Enhanced Text is Weird/Incorrect

**Solution:**
1. Try a different AI model (see Advanced Configuration)
2. The original text might be too ambiguous
3. You can always undo by typing manually

### Problem: API Returns Error 401 Unauthorized

**Solution:**
- Check your Groq API key is correct
- Make sure you're logged in to the email platform
- Your admin password token might have expired - log out and log back in

---

## 📊 API Endpoint Details

### `/api/enhance` - POST

Enhances email text using AI.

**Authentication:** Required (Bearer token)

**Request Body:**
```json
{
  "text": "your text to enhance",
  "type": "subject" | "body"
}
```

**Response (Success):**
```json
{
  "enhanced": "Your improved text here"
}
```

**Response (Error):**
```json
{
  "error": "Error message description"
}
```

**Status Codes:**
- `200` - Success
- `400` - Bad request (missing text)
- `401` - Unauthorized (invalid/missing token)
- `500` - Server error (AI API failed)

---

## 💡 Best Practices

### When to Use Magic \u2728

✅ **DO use for:**
- Quick draft emails that need polishing
- Fixing typos and grammar errors
- Making casual messages more professional
- Improving unclear subject lines
- Non-native language speakers

❌ **DON'T use for:**
- Highly sensitive/confidential information
- Legal or medical communications (review carefully)
- Creative writing that requires your personal style
- Very short messages that are already clear

### Tips for Best Results

1. **Write a draft first** - Don't rely on AI for everything
2. **Review the output** - Always read the enhanced version
3. **Edit as needed** - Feel free to modify the AI's suggestions
4. **Use for inspiration** - Treat it as a writing assistant, not a replacement
5. **Combine with templates** - Use Magic \u2728 to customize template content

---

## 🔄 API Version & Compatibility

### Current Version: 1.0

**Compatible with:**
- ✅ Groq (OpenAI-compatible)
- ✅ OpenAI GPT-3.5/GPT-4
- ✅ Together AI
- ✅ Replicate
- ✅ Ollama (Local)
- ✅ Any OpenAI-compatible endpoint

**Requirements:**
- Next.js 14+
- Node.js 18+
- Valid AI API key

---

## 📞 Support & Contact

**Need Help?**

- **Email:** nafijthepro@gmail.com
- **Website:** https://nafij.me
- **GitHub Issues:** [Report a bug](https://github.com/nafijrahaman/email_send_stmp/issues)

**Documentation:**
- [Groq Documentation](https://console.groq.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [SECURITY.md](SECURITY.md) - Security best practices

---

## 🎉 Credits & Acknowledgments

**Powered By:**
- 🦙 **Groq** - Lightning-fast AI inference
- 🤖 **Meta Llama 3.3** - Open-source language model
- ⚡ **Next.js** - React framework
- 💅 **Tailwind CSS** - Styling

**Built with ❤️ by Nafij Rahaman**

---

## 📝 Changelog

### v1.0 (Current)
- ✨ Initial release
- 🎯 Subject line enhancement
- ✍️ Body text enhancement
- 🔒 Secure authentication
- 🆓 Free Groq API integration

---

**🚀 Ready to make your emails magical? Click the Magic \u2728 button and see the difference!**
