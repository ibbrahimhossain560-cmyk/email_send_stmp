export interface TemplateInfo {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: string;
}

export const templateList: TemplateInfo[] = [
  { id: "welcome", name: "Welcome Email", description: "Onboard new users with a warm welcome message", category: "Onboarding", preview: "bg-gradient-to-br from-blue-500 to-purple-600" },
  { id: "newsletter", name: "Newsletter", description: "Send periodic updates and news to subscribers", category: "Marketing", preview: "bg-gradient-to-br from-green-500 to-teal-600" },
  { id: "password-reset", name: "Password Reset", description: "Secure password reset link for users", category: "Transactional", preview: "bg-gradient-to-br from-red-500 to-orange-600" },
  { id: "invoice", name: "Invoice", description: "Professional invoice and payment details", category: "Business", preview: "bg-gradient-to-br from-gray-600 to-gray-800" },
  { id: "promotion", name: "Promotional Offer", description: "Announce sales, discounts and special offers", category: "Marketing", preview: "bg-gradient-to-br from-pink-500 to-rose-600" },
  { id: "event-invite", name: "Event Invitation", description: "Invite recipients to events and webinars", category: "Events", preview: "bg-gradient-to-br from-indigo-500 to-blue-600" },
  { id: "feedback", name: "Feedback Request", description: "Ask users for their feedback and ratings", category: "Engagement", preview: "bg-gradient-to-br from-yellow-500 to-amber-600" },
  { id: "order-confirm", name: "Order Confirmation", description: "Confirm order details and shipping info", category: "Transactional", preview: "bg-gradient-to-br from-emerald-500 to-green-600" },
  { id: "birthday", name: "Birthday Greeting", description: "Send personalized birthday wishes", category: "Personal", preview: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
  { id: "minimal", name: "Minimal Clean", description: "Simple and clean email for any purpose", category: "General", preview: "bg-gradient-to-br from-slate-500 to-zinc-600" },
  { id: "dark", name: "Dark Mode", description: "Sleek dark-themed email with neon accents", category: "Modern", preview: "bg-gradient-to-br from-gray-900 to-slate-800" },
  { id: "casual", name: "Casual Friendly", description: "Relaxed and friendly email for casual conversations", category: "Personal", preview: "bg-gradient-to-br from-orange-400 to-amber-500" },
  { id: "just-email", name: "Just Email", description: "Plain and simple - just the message, nothing extra", category: "General", preview: "bg-gradient-to-br from-neutral-400 to-stone-500" },
];

function baseWrapper(content: string, bgColor: string = "#f4f4f7"): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Email</title>
<!--[if mso]>
<style type="text/css">
  table { border-collapse: collapse; }
  .mobile-padding { padding: 20px 15px !important; }
</style>
<![endif]-->
<style type="text/css">
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table { border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
  
  /* Client-specific fixes */
  .ExternalClass { width: 100%; }
  .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
  
  /* Responsive styles - Using max-width for better support */
  @media only screen and (max-width: 620px) {
    body { width: 100% !important; min-width: 100% !important; }
    .wrapper { width: 100% !important; padding: 10px 5px !important; }
    .container { max-width: 100% !important; width: 100% !important; min-width: 100% !important; }
    .mobile-padding { padding: 20px 15px !important; }
    .mobile-heading { font-size: 24px !important; line-height: 1.3 !important; padding: 10px !important; }
    .mobile-subheading { font-size: 18px !important; line-height: 1.4 !important; }
    .mobile-text { font-size: 14px !important; line-height: 1.6 !important; }
    .mobile-button { 
      padding: 14px 28px !important; 
      font-size: 15px !important; 
      display: block !important; 
      width: auto !important;
      max-width: 280px !important;
      margin: 10px auto !important; 
      text-align: center !important;
      box-sizing: border-box !important;
    }
    .hide-mobile { display: none !important; max-height: 0 !important; overflow: hidden !important; visibility: hidden !important; }
    .show-mobile { display: block !important; max-height: none !important; visibility: visible !important; }
    .mobile-center { text-align: center !important; }
    .mobile-full-width { width: 100% !important; max-width: 100% !important; }
    .mobile-stack { display: block !important; width: 100% !important; }
    
    /* Force table cells to stack */
    table[class="container"] { width: 100% !important; }
    td[class="mobile-padding"] { padding: 20px 15px !important; }
  }
  
  @media only screen and (max-width: 480px) {
    .wrapper { padding: 5px 2px !important; }
    .mobile-heading { font-size: 22px !important; padding: 8px !important; }
    .mobile-text { font-size: 13px !important; }
    .mobile-button { padding: 12px 24px !important; font-size: 14px !important; }
    .small-padding { padding: 15px 10px !important; }
    .mobile-padding { padding: 15px 12px !important; }
  }
  
  /* iOS-specific fixes */
  @media only screen and (max-device-width: 480px) {
    .mobile-button { width: auto !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:${bgColor};font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:100%;">
<!--[if mso]>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
<tr><td align="center">
<![endif]-->
<table role="presentation" class="wrapper" style="max-width:680px;margin:0 auto;padding:20px 10px;width:100%;" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td align="center">
${content}
</td></tr>
</table>
<!--[if mso]>
</td></tr>
</table>
<![endif]-->
</body>
</html>`;
}

export function getTemplate(id: string, variables: Record<string, string>): string {
  const v: Record<string, string> = {
    recipientName: variables.recipientName || "there",
    senderName: variables.senderName || "Nafij Rahaman",
    subject: variables.subject || "",
    body: variables.body || "",
    companyName: variables.companyName || "NR Mail",
    year: new Date().getFullYear().toString(),
    buttonLink: variables.buttonLink || "#",
    buttonText: variables.buttonText || "Get Started",
    ...variables,
  };

  let template = "";

  switch (id) {
    case "welcome":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:620px;margin:0 auto;background:#ffffff;border:4px solid #6366f1;border-radius:24px;overflow:hidden">
<tr><td style="background:#6366f1;padding:8px 20px">
<table width="100%"><tr>
<td style="text-align:left;color:#fff;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase">Welcome 👋</td>
<td style="text-align:right;color:rgba(255,255,255,0.8);font-size:12px">${v.companyName}</td>
</tr></table>
</td></tr>
<tr><td class="mobile-padding" style="padding:60px 50px;background-image:linear-gradient(180deg,#f8f9ff 0%,#ffffff 100%)">
<div style="background:#6366f1;width:80px;height:80px;border-radius:20px;margin:0 auto 30px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 40px rgba(99,102,241,0.3);transform:rotate(-5deg)">
<span style="font-size:40px;display:block;transform:rotate(5deg)">✨</span>
</div>
<h1 class="mobile-heading" style="color:#1e293b;margin:0 0 20px;font-size:36px;font-weight:900;text-align:center;letter-spacing:-1px;font-family:Georgia,serif">${v.subject}</h1>
<p class="mobile-text" style="color:#64748b;font-size:18px;line-height:1.8;margin:0 0 15px;text-align:center;font-style:italic">Hi ${v.recipientName},</p>
<p class="mobile-text" style="color:#334155;font-size:16px;line-height:1.9;margin:0 0 35px;text-align:center;white-space:pre-wrap">${v.body}</p>
<div style="text-align:center;margin:0 0 20px">
<a href="#" class="mobile-button" style="display:inline-block;background:#6366f1;color:#fff;text-decoration:none;padding:18px 55px;border-radius:12px;font-weight:700;font-size:17px;box-shadow:0 8px 24px rgba(99,102,241,0.35);letter-spacing:0.5px;text-transform:uppercase">Get Started Now</a>
</div>
</td></tr>
<tr><td style="background:#f8fafc;padding:30px 40px;text-align:center">
<p style="color:#94a3b8;font-size:11px;margin:0;line-height:1.6;letter-spacing:1px">Sent by ${v.senderName} • ${v.companyName} © ${v.year}</p>
</td></tr>
</table>`, "#eef2ff");

    case "newsletter":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:640px;margin:0 auto;background:#ffffff;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
<tr><td style="background:#059669;padding:50px 40px;position:relative">
<div style="position:absolute;top:15px;right:20px;background:rgba(255,255,255,0.2);padding:5px 15px;border-radius:20px;font-size:10px;color:#fff;font-weight:600;letter-spacing:1px;text-transform:uppercase">Newsletter</div>
<table width="100%"><tr>
<td style="width:70px;vertical-align:middle"><div style="background:linear-gradient(135deg,#10b981,#34d399);width:60px;height:60px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:32px">📰</div></td>
<td class="mobile-padding" style="padding-left:20px;vertical-align:middle"><h1 class="mobile-heading" style="color:#fff;margin:0;font-size:28px;font-weight:700;line-height:1.2">${v.subject}</h1></td>
</tr></table>
</td></tr>
<tr><td class="mobile-padding" style="padding:45px 40px;background:#f0fdf4">
<div style="border-left:4px solid #10b981;padding-left:20px;margin-bottom:25px">
<p class="mobile-text" style="color:#065f46;font-size:16px;line-height:1.6;margin:0;font-weight:600">Hello ${v.recipientName},</p>
</div>
<p class="mobile-text" style="color:#166534;font-size:15px;line-height:1.9;margin:0 0 30px;white-space:pre-wrap">${v.body}</p>
<table width="100%" style="background:#ffffff;border-radius:12px;padding:25px;box-shadow:0 1px 3px rgba(0,0,0,0.1)">
<tr><td>
<a href="#" class="mobile-button" style="display:inline-block;background:#059669;color:#fff;text-decoration:none;padding:14px 40px;border-radius:8px;font-weight:600;font-size:15px;border:2px solid #059669;transition:all 0.3s">Continue Reading →</a>
</td></tr>
</table>
</td></tr>
<tr><td style="background:#dcfce7;padding:20px 40px;text-align:center;border-top:3px solid #10b981">
<p style="color:#166534;font-size:12px;margin:0;line-height:1.6">📧 ${v.senderName} | ${v.companyName} © ${v.year}</p>
</td></tr>
</table>`, "#f0fdf4");

    case "password-reset":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:580px;margin:0 auto;background:#ffffff;border-radius:0;box-shadow:0 0 0 1px #fee2e2">
<tr><td style="padding:30px 40px;background:#fff5f5;border-bottom:1px solid #fecaca">
<table width="100%"><tr>
<td style="width:50px"><div style="background:#dc2626;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px">🔒</div></td>
<td style="padding-left:15px;vertical-align:middle">
<h1 class="mobile-heading" style="color:#991b1b;margin:0;font-size:22px;font-weight:700;letter-spacing:-0.3px">Security Alert</h1>
<p style="color:#b91c1c;margin:3px 0 0;font-size:12px;font-weight:500">Password Reset Request</p>
</td>
</tr></table>
</td></tr>
<tr><td class="mobile-padding" style="padding:40px 45px">
<p class="mobile-text" style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 10px">Hi <strong style="color:#111827">${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:#4b5563;font-size:14px;line-height:1.8;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<div style="background:#fef2f2;border:1px dashed #fca5a5;border-radius:8px;padding:20px;margin:0 0 30px">
<p style="color:#7f1d1d;font-size:13px;line-height:1.6;margin:0">\u26a0\ufe0f <strong>Security Notice:</strong> This link expires in 24 hours. If you didn't request this, please ignore.</p>
</div>
<div style="text-align:center">
<a href="#" class="mobile-button" style="display:inline-block;background:#dc2626;color:#fff;text-decoration:none;padding:16px 45px;border-radius:6px;font-weight:600;font-size:15px;border:2px solid #dc2626">Reset Password</a>
</div>
</td></tr>
<tr><td style="background:#f9fafb;padding:25px 40px;text-align:center;border-top:1px solid #e5e7eb">
<p style="color:#6b7280;font-size:11px;margin:0;line-height:1.6">${v.senderName} | ${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`);

    case "invoice":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:#ffffff;border:2px solid #e2e8f0">
<tr><td style="background:#ffffff;padding:35px 40px;border-bottom:4px double #cbd5e1">
<table width="100%"><tr>
<td><div style="width:50px;height:50px;background:#1e293b;text-align:center;line-height:50px;color:#fff;font-size:24px;font-weight:900;font-family:monospace;margin-bottom:8px">${v.companyName.charAt(0)}</div><h1 class="mobile-heading" style="color:#1e293b;margin:0;font-size:20px;font-weight:800;font-family:'Courier New',monospace;letter-spacing:1px">${v.companyName}</h1></td>
<td style="text-align:right;vertical-align:top"><div style="border:2px solid #1e293b;padding:8px 14px;display:inline-block"><span style="color:#64748b;font-size:10px;text-transform:uppercase;letter-spacing:2px;display:block;font-weight:600">INVOICE</span><span style="color:#1e293b;font-size:26px;font-weight:900;font-family:monospace">#${v.invoiceNumber || "001"}</span></div></td>
</tr></table>
</td></tr>
<tr><td style="background:#f8fafc;padding:30px 40px;border-bottom:1px solid #e2e8f0">
<table width="100%"><tr>
<td style="vertical-align:top;width:50%"><p style="color:#64748b;font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:700;margin:0 0 8px">BILL TO:</p><p style="color:#0f172a;font-size:17px;font-weight:700;margin:0;font-family:'Courier New',monospace">${v.recipientName}</p></td>
<td style="vertical-align:top;text-align:right;width:50%"><p style="color:#64748b;font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:700;margin:0 0 8px">DATE:</p><p style="color:#0f172a;font-size:13px;font-weight:600;margin:0;font-family:monospace">${new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}</p></td>
</tr></table>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px">
<p class="mobile-text" style="color:#475569;font-size:14px;line-height:1.8;margin:0 0 30px;white-space:pre-wrap">${v.body}</p>
<table width="100%" cellpadding="12" cellspacing="0" style="border:2px solid #e2e8f0;margin-bottom:25px">
<tr style="background:#0f172a"><td style="font-weight:700;color:#fff;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;padding:14px 12px">DESCRIPTION</td><td style="text-align:center;font-weight:700;color:#fff;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;padding:14px 12px">QTY</td><td style="text-align:right;font-weight:700;color:#fff;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;padding:14px 12px">AMOUNT</td></tr>
<tr><td style="color:#334155;font-size:14px;border-bottom:1px solid #e2e8f0;padding:12px">${v.itemName || "Service Fee"}</td><td style="text-align:center;color:#334155;font-size:14px;border-bottom:1px solid #e2e8f0;padding:12px;font-family:monospace">1</td><td style="text-align:right;color:#334155;font-size:14px;border-bottom:1px solid #e2e8f0;padding:12px;font-family:monospace">${v.amount || "$99.00"}</td></tr>
<tr style="background:#f1f5f9"><td colspan="2" style="font-weight:800;color:#0f172a;font-size:15px;padding:16px 12px;text-transform:uppercase;letter-spacing:1px">TOTAL DUE</td><td style="text-align:right;font-weight:900;color:#0f172a;font-size:28px;padding:16px 12px;font-family:monospace">${v.amount || "$99.00"}</td></tr>
</table>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:#0f172a;color:#fff;text-decoration:none;padding:14px 50px;font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:2px;border:2px solid #0f172a">PAY NOW</a>
</div>
</td></tr>
<tr><td style="background:#f8fafc;padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:11px;margin:0;line-height:1.6;font-family:monospace">${v.companyName} | ${v.senderName} | \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#f8fafc");

    case "promotion":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:#fff;position:relative">
<tr><td style="position:relative;overflow:hidden">
<div style="background:linear-gradient(135deg,#ff1744 0%,#f50057 50%,#ff4081 100%);padding:8px 12px;transform:rotate(-3deg);position:absolute;top:20px;right:-30px;width:200px;text-align:center;box-shadow:0 4px 12px rgba(245,0,87,0.3);z-index:10"><span style="color:#fff;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:2px">\ud83d\udd25 HOT DEAL</span></div>
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff">
<tr><td style="padding:50px 40px 30px;text-align:center">
<div style="display:inline-block;background:linear-gradient(135deg,#ff1744,#f50057);color:#fff;padding:25px 40px;transform:rotate(-2deg);box-shadow:0 8px 25px rgba(245,0,87,0.4)">
<div style="font-size:72px;font-weight:900;line-height:0.9;margin:0;text-shadow:3px 3px 0 rgba(0,0,0,0.2)">${v.discount || "50%"}</div>
<div style="font-size:24px;font-weight:800;text-transform:uppercase;letter-spacing:3px;margin-top:8px">OFF</div>
</div>
<h2 class="mobile-heading" style="color:#1a1a2e;margin:30px 0 0;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:1px">${v.subject}</h2>
</td></tr>
<tr><td class="mobile-padding" style="padding:20px 45px 40px;text-align:center">
<div style="background:#fff9c4;border:3px dashed #fdd835;padding:20px;margin:0 0 25px;transform:rotate(1deg)">
<p style="color:#f57f17;font-size:14px;font-weight:800;margin:0;text-transform:uppercase">\u23f0 Limited Time Only!</p>
</div>
<p class="mobile-text" style="color:#1a1a2e;font-size:18px;line-height:1.7;margin:0 0 12px;font-weight:600">Hey ${v.recipientName}! \ud83c\udf89</p>
<p class="mobile-text" style="color:#4a5568;font-size:15px;line-height:1.8;margin:0 0 30px;white-space:pre-wrap">${v.body}</p>
<div style="margin:30px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:#ff1744;color:#fff;text-decoration:none;padding:18px 60px;font-weight:900;font-size:16px;text-transform:uppercase;letter-spacing:2px;box-shadow:0 6px 20px rgba(255,23,68,0.4);border:none;transform:scale(1.05)">SHOP NOW \ud83d\uded2</a>
</div>
</td></tr>
<tr><td style="background:#f5f5f5;padding:25px 40px;text-align:center;border-top:3px solid #ff1744">
<p style="color:#9e9e9e;font-size:12px;margin:0;line-height:1.6">${v.senderName} | ${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>
</td></tr>
</table>`, "#fafafa");

    case "event-invite":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:#ffffff">
<tr><td style="padding:8px;background:linear-gradient(135deg,#7c3aed,#a855f7,#c084fc)">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:3px solid #7c3aed">
<tr><td style="padding:8px;background:#7c3aed">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff">
<tr><td style="padding:40px 40px 30px;text-align:center;border-bottom:2px dashed #c084fc">
<div style="width:80px;height:80px;margin:0 auto 20px;background:linear-gradient(135deg,#7c3aed,#a855f7);border-radius:50%;border:4px solid #c084fc;line-height:72px;font-size:40px">\ud83c\udf89</div>
<p style="color:#a855f7;font-size:13px;text-transform:uppercase;letter-spacing:3px;font-weight:800;margin:0 0 12px">You're Invited</p>
<h1 class="mobile-heading" style="color:#581c87;margin:0;font-size:26px;font-weight:800;font-family:Georgia,serif;line-height:1.3">${v.subject}</h1>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px 25px">
<p class="mobile-text" style="color:#1e293b;font-size:16px;line-height:1.7;margin:0 0 10px;text-align:center;font-style:italic">Dear <strong style="color:#7c3aed">${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:#475569;font-size:14px;line-height:1.9;margin:0 0 28px;white-space:pre-wrap;text-align:center">${v.body}</p>
<div style="border:2px solid #c084fc;border-radius:12px;padding:25px;background:#faf5ff;margin-bottom:25px">
<table width="100%" cellpadding="10" cellspacing="0">
<tr><td style="text-align:center;border-bottom:1px dashed #e9d5ff;padding-bottom:15px"><div style="font-size:32px;margin-bottom:6px">\ud83d\udcc5</div><p style="margin:0;color:#7c3aed;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:1px">Date</p><p style="margin:6px 0 0;color:#0f172a;font-size:15px;font-weight:700">${v.eventDate || "TBA"}</p></td></tr>
<tr><td style="text-align:center;border-bottom:1px dashed #e9d5ff;padding:15px 0"><div style="font-size:32px;margin-bottom:6px">\u23f0</div><p style="margin:0;color:#7c3aed;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:1px">Time</p><p style="margin:6px 0 0;color:#0f172a;font-size:15px;font-weight:700">${v.eventTime || "TBA"}</p></td></tr>
<tr><td style="text-align:center;padding-top:15px"><div style="font-size:32px;margin-bottom:6px">\ud83d\udccd</div><p style="margin:0;color:#7c3aed;font-weight:800;font-size:12px;text-transform:uppercase;letter-spacing:1px">Location</p><p style="margin:6px 0 0;color:#0f172a;font-size:15px;font-weight:700">${v.eventLocation || "Online"}</p></td></tr>
</table>
</div>
<div style="text-align:center;margin:25px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:#7c3aed;color:#fff;text-decoration:none;padding:15px 50px;font-weight:800;font-size:14px;text-transform:uppercase;letter-spacing:2px;border:3px solid #7c3aed;box-shadow:0 4px 15px rgba(124,58,237,0.4)">RSVP NOW</a>
</div>
</td></tr>
<tr><td style="background:#faf5ff;padding:20px 40px;text-align:center;border-top:2px dashed #c084fc">
<p style="color:#a855f7;font-size:11px;margin:0;line-height:1.6;font-style:italic">${v.senderName} \u2022 ${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>
</td></tr>
</table>
</td></tr>
</table>`, "#faf5ff");

    case "feedback":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 30px rgba(0,0,0,0.08)">
<tr><td style="background:#fff;padding:45px 40px 30px;text-align:center">
<div style="display:inline-flex;gap:8px;margin-bottom:20px">
<span style="font-size:36px">\u2b50</span>
<span style="font-size:36px">\u2b50</span>
<span style="font-size:36px">\u2b50</span>
<span style="font-size:36px">\u2b50</span>
<span style="font-size:36px">\u2b50</span>
</div>
<h1 class="mobile-heading" style="color:#1e293b;margin:0;font-size:26px;font-weight:800">How did we do?</h1>
<p style="color:#64748b;margin:10px 0 0;font-size:15px">Your feedback helps us improve</p>
</td></tr>
<tr><td class="mobile-padding" style="padding:0 40px 40px">
<div style="background:#fffbeb;border-left:4px solid #f59e0b;padding:20px;margin:0 0 25px;border-radius:8px">
<p style="color:#92400e;font-size:13px;font-weight:700;margin:0 0 6px">\ud83d\udca1 Quick Survey</p>
<p style="color:#78350f;font-size:12px;margin:0;line-height:1.6">Takes less than 2 minutes to complete</p>
</div>
<p class="mobile-text" style="color:#1a1a2e;font-size:16px;line-height:1.7;margin:0 0 12px">Hi <strong>${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:#4a5568;font-size:14px;line-height:1.9;margin:0 0 30px;white-space:pre-wrap">${v.body}</p>
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:25px">
<tr><td style="padding:20px;background:#f8fafc;border-radius:12px;text-align:center">
<p style="color:#475569;font-size:13px;margin:0 0 15px;font-weight:600">Rate your experience:</p>
<div style="display:inline-flex;gap:10px;justify-content:center">
<div style="width:40px;height:40px;background:#fbbf24;border-radius:8px;line-height:40px;text-align:center;font-size:20px;cursor:pointer">\ud83d\ude1e</div>
<div style="width:40px;height:40px;background:#fbbf24;border-radius:8px;line-height:40px;text-align:center;font-size:20px;cursor:pointer">\ud83d\ude10</div>
<div style="width:40px;height:40px;background:#fbbf24;border-radius:8px;line-height:40px;text-align:center;font-size:20px;cursor:pointer">\ud83d\ude42</div>
<div style="width:40px;height:40px;background:#fbbf24;border-radius:8px;line-height:40px;text-align:center;font-size:20px;cursor:pointer">\ud83d\ude04</div>
<div style="width:40px;height:40px;background:#fbbf24;border-radius:8px;line-height:40px;text-align:center;font-size:20px;cursor:pointer">\ud83e\udd29</div>
</div>
</td></tr>
</table>
<div style="text-align:center;margin:25px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:#f59e0b;color:#fff;text-decoration:none;padding:15px 45px;border-radius:10px;font-weight:700;font-size:14px;box-shadow:0 4px 15px rgba(245,158,11,0.3)">Share Feedback \ud83d\udcac</a>
</div>
</td></tr>
<tr><td style="background:#f8fafc;padding:25px 40px;text-align:center;border-top:1px solid #e5e7eb">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">${v.senderName} | ${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`);

    case "order-confirm":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:#ffffff;border:3px solid #10b981">
<tr><td style="background:#10b981;padding:30px 40px;text-align:center">
<div style="width:90px;height:90px;background:#fff;border-radius:50%;margin:0 auto 15px;line-height:90px;font-size:50px;box-shadow:0 4px 20px rgba(0,0,0,0.15)">\u2714\ufe0f</div>
<h1 class="mobile-heading" style="color:#fff;margin:0;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:1px">Order Confirmed</h1>
<p style="color:rgba(255,255,255,0.9);margin:10px 0 0;font-size:14px;font-weight:600">Order #<span style="font-family:monospace;font-size:16px">${v.orderNumber || "12345"}</span></p>
</td></tr>
<tr><td style="background:#d1fae5;padding:20px 40px;border-bottom:2px dashed #10b981">
<table width="100%"><tr>
<td style="width:60px;vertical-align:middle"><div style="width:50px;height:50px;background:#10b981;border-radius:8px;line-height:50px;text-align:center;font-size:24px">\ud83d\ude9a</div></td>
<td style="vertical-align:middle"><p style="color:#065f46;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px">Estimated Delivery</p><p style="color:#047857;font-size:20px;font-weight:900;margin:0;font-family:monospace">${v.deliveryDate || "3-5 Days"}</p></td>
</tr></table>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px">
<p class="mobile-text" style="color:#1e293b;font-size:16px;line-height:1.7;margin:0 0 12px">Hi <strong style="color:#10b981">${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:#475569;font-size:14px;line-height:1.8;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<div style="background:#f0fdf4;border:2px solid #bbf7d0;border-radius:10px;padding:25px;margin-bottom:25px">
<p style="color:#166534;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin:0 0 15px;border-bottom:2px solid #86efac;padding-bottom:10px">Order Summary</p>
<table width="100%" cellpadding="10" cellspacing="0">
<tr><td style="color:#374151;font-size:14px;border-bottom:1px dashed #bbf7d0">${v.itemName || "Product"}</td><td style="text-align:right;color:#059669;font-size:14px;font-weight:700;border-bottom:1px dashed #bbf7d0;font-family:monospace">${v.amount || "$49.99"}</td></tr>
<tr><td style="color:#374151;font-size:14px;border-bottom:1px dashed #bbf7d0">Shipping</td><td style="text-align:right;color:#10b981;font-size:14px;font-weight:700;border-bottom:1px dashed #bbf7d0">FREE</td></tr>
<tr><td style="color:#0f172a;font-size:16px;font-weight:800;text-transform:uppercase;padding-top:8px">Total</td><td style="text-align:right;color:#059669;font-size:24px;font-weight:900;font-family:monospace;padding-top:8px">${v.amount || "$49.99"}</td></tr>
</table>
</div>
<div style="text-align:center;margin:25px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:#10b981;color:#fff;text-decoration:none;padding:16px 50px;font-weight:800;font-size:14px;text-transform:uppercase;letter-spacing:1.5px;border-radius:8px;box-shadow:0 4px 15px rgba(16,185,129,0.3)">TRACK ORDER</a>
</div>
</td></tr>
<tr><td style="background:#f0fdf4;padding:25px 40px;text-align:center;border-top:2px solid #10b981">
<p style="color:#059669;font-size:11px;margin:0;line-height:1.6;font-weight:600">${v.companyName} | ${v.senderName} | \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#ecfdf5");

    case "birthday":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:linear-gradient(135deg,#fef3c7 0%,#fde68a 100%);border:5px solid #fbbf24">
<tr><td style="padding:40px;text-align:center;position:relative">
<div style="font-size:48px;margin-bottom:15px">\ud83c\udf89 \ud83c\udf88 \ud83c\udf81 \ud83c\udf82 \ud83c\udf8a</div>
<div style="background:linear-gradient(135deg,#ec4899,#f43f5e,#fb923c);color:#fff;display:inline-block;padding:25px 40px;box-shadow:0 10px 30px rgba(0,0,0,0.15);transform:rotate(-2deg);border:4px solid #fff">
<h1 class="mobile-heading" style="margin:0;font-size:38px;font-weight:900;text-shadow:3px 3px 0 rgba(0,0,0,0.2);line-height:1">HAPPY</h1>
<h1 class="mobile-heading" style="margin:0;font-size:38px;font-weight:900;text-shadow:3px 3px 0 rgba(0,0,0,0.2);line-height:1">BIRTHDAY!</h1>
</div>
<div style="font-size:48px;margin-top:15px">\ud83c\udf8a \ud83c\udf82 \ud83c\udf81 \ud83c\udf88 \ud83c\udf89</div>
</td></tr>
<tr><td class="mobile-padding" style="padding:0 40px 40px;text-align:center">
<div style="background:#ffffff;border-radius:20px;padding:35px 30px;box-shadow:0 8px 25px rgba(0,0,0,0.1);border:3px dashed #fbbf24">
<p class="mobile-text" style="color:#1e293b;font-size:20px;line-height:1.7;margin:0 0 15px;font-weight:700">Dear <span style="color:#ec4899">${v.recipientName}</span>! \ud83c\udf88</p>
<p class="mobile-text" style="color:#475569;font-size:15px;line-height:1.9;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<div style="background:linear-gradient(135deg,#fef3c7,#fde68a);border:2px solid #fbbf24;border-radius:12px;padding:20px;margin:25px 0">
<p style="color:#92400e;font-size:16px;font-weight:800;margin:0">\ud83c\udf81 Special Birthday Surprise Inside! \ud83c\udf81</p>
</div>
<div style="margin:25px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:linear-gradient(135deg,#ec4899,#f43f5e);color:#fff;text-decoration:none;padding:18px 50px;font-weight:900;font-size:15px;text-transform:uppercase;letter-spacing:2px;border-radius:50px;box-shadow:0 6px 20px rgba(236,72,153,0.4);border:3px solid #fff">CLAIM MY GIFT \ud83c\udf81</a>
</div>
</div>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#fbbf24,#f59e0b);padding:25px 40px;text-align:center;border-top:3px dashed #fff">
<p style="color:#fff;font-size:12px;margin:0;line-height:1.6;font-weight:700">With love from ${v.senderName} \u2764\ufe0f | ${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#fef3c7");

    case "dark":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:#000;border:2px solid #22d3ee">
<tr><td style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding:40px;text-align:center;position:relative;border-bottom:2px solid #22d3ee">
<div style="position:absolute;top:15px;right:15px;width:10px;height:10px;background:#22d3ee;border-radius:50%;box-shadow:0 0 20px #22d3ee"></div>
<div style="position:absolute;top:30px;left:20px;width:6px;height:6px;background:#a855f7;border-radius:50%;box-shadow:0 0 15px #a855f7"></div>
<div style="position:absolute;bottom:20px;right:40px;width:8px;height:8px;background:#f43f5e;border-radius:50%;box-shadow:0 0 18px #f43f5e"></div>
<h1 class="mobile-heading" style="color:#22d3ee;margin:0;font-size:30px;font-weight:900;text-transform:uppercase;letter-spacing:3px;text-shadow:0 0 20px rgba(34,211,238,0.6)">${v.subject}</h1>
<div style="width:80px;height:3px;background:linear-gradient(90deg,#22d3ee,#a855f7,#f43f5e);margin:15px auto 0"></div>
</td></tr>
<tr><td class="mobile-padding" style="padding:40px;background:#0a0f1c">
<p class="mobile-text" style="color:#e2e8f0;font-size:17px;line-height:1.7;margin:0 0 12px">Hey <strong style="color:#22d3ee;text-shadow:0 0 10px rgba(34,211,238,0.4)">${v.recipientName}</strong>,</p>
<p style="color:#94a3b8;font-size:15px;line-height:1.9;margin:0 0 30px;white-space:pre-wrap">${v.body}</p>
<div style="background:linear-gradient(135deg,#1e293b,#334155);border:1px solid #22d3ee;border-radius:12px;padding:20px;margin:25px 0;box-shadow:0 0 30px rgba(34,211,238,0.2)">
<table width="100%"><tr>
<td style="width:50px;vertical-align:middle"><div style="width:40px;height:40px;background:linear-gradient(135deg,#22d3ee,#a855f7);border-radius:8px;line-height:40px;text-align:center;font-size:20px">\u26a1</div></td>
<td style="vertical-align:middle;padding-left:15px"><p style="color:#22d3ee;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 4px">Cybersecurity Alert</p><p style="color:#94a3b8;font-size:12px;margin:0">Your attention required</p></td>
</tr></table>
</div>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:linear-gradient(135deg,#22d3ee,#6366f1);color:#0a0f1c;text-decoration:none;padding:16px 50px;font-weight:900;font-size:14px;text-transform:uppercase;letter-spacing:2px;border-radius:8px;box-shadow:0 0 25px rgba(34,211,238,0.5);border:2px solid #22d3ee">ACCESS NOW</a>
</div>
</td></tr>
<tr><td style="background:#000;padding:25px 40px;text-align:center;border-top:2px solid #22d3ee">
<p style="color:#475569;font-size:11px;margin:0;line-height:1.6;font-family:monospace;text-transform:uppercase;letter-spacing:1px">${v.senderName} | ${v.companyName} | \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#000");

    case "casual":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:#fffbeb;border-radius:25px;overflow:hidden;box-shadow:0 4px 30px rgba(0,0,0,0.08)">
<tr><td class="mobile-padding" style="padding:40px 40px 25px;text-align:center;background:#fffbeb">
<div style="font-size:52px;margin-bottom:8px;transform:rotate(-5deg)">\ud83d\udc4b</div>
<h1 class="mobile-heading" style="color:#92400e;margin:0;font-size:32px;font-weight:800;font-family:Georgia,serif;font-style:italic">Hey ${v.recipientName}!</h1>
<div style="width:100px;height:4px;background:linear-gradient(90deg,#f59e0b,#fbbf24,#f59e0b);margin:15px auto 0;border-radius:2px;transform:rotate(-1deg)"></div>
</td></tr>
<tr><td style="padding:10px 40px 40px;background:#fffbeb">
<div style="background:#ffffff;border-radius:18px;padding:30px;border:2px solid #fef3c7;box-shadow:0 3px 15px rgba(0,0,0,0.06);position:relative">
<div style="position:absolute;top:-8px;right:30px;background:#fbbf24;color:#78350f;padding:6px 14px;border-radius:20px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:1px;box-shadow:0 3px 10px rgba(251,191,36,0.3)">Friendly Note</div>
<p class="mobile-text" style="color:#44403c;font-size:17px;line-height:2;margin:0;white-space:pre-wrap;font-family:Georgia,serif">${v.body}</p>
</div>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#78350f;text-decoration:none;padding:15px 45px;border-radius:50px;font-weight:800;font-size:15px;box-shadow:0 4px 18px rgba(245,158,11,0.35);border:3px solid #fff;transform:rotate(-1deg)">Reply Back \ud83d\udc8c</a>
</div>
</td></tr>
<tr><td style="padding:25px 40px;text-align:center;border-top:2px dashed #fde68a;background:#fffbeb">
<p style="color:#d97706;font-size:13px;margin:0;font-weight:600">Sent with warmth by <strong>${v.senderName}</strong> \u2600\ufe0f</p>
<p style="color:#b45309;font-size:11px;margin:6px 0 0">${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#fefce8");

    case "just-email":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff">
<tr><td class="mobile-padding" style="padding:40px 30px 10px">
<p class="mobile-text" style="color:#111827;font-size:15px;line-height:1.7;margin:0 0 20px;font-family:'Helvetica Neue',Arial,sans-serif">Hi ${v.recipientName},</p>
<div style="color:#374151;font-size:15px;line-height:1.8;margin:0 0 25px;white-space:pre-line;font-family:'Helvetica Neue',Arial,sans-serif">${v.body}</div>
<p class="mobile-text" style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 4px;font-family:'Helvetica Neue',Arial,sans-serif">Best,</p>
<p class="mobile-text" style="color:#111827;font-size:15px;line-height:1.7;margin:0;font-weight:600;font-family:'Helvetica Neue',Arial,sans-serif">${v.senderName}</p>
</td></tr>
<tr><td style="padding:30px 30px 20px">
<div style="border-top:1px solid #e5e7eb;padding-top:18px">
<p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.5;font-family:'Helvetica Neue',Arial,sans-serif">${v.companyName}</p>
<p style="color:#d1d5db;font-size:11px;margin:4px 0 0;font-family:'Helvetica Neue',Arial,sans-serif">\u00a9 ${v.year}</p>
</div>
</td></tr>
</table>`, "#f9fafb");

    case "minimal":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:580px;margin:0 auto;background:#ffffff">
<tr><td class="mobile-padding" style="padding:50px 45px 30px">
<div style="width:40px;height:4px;background:#000;margin-bottom:30px"></div>
<h1 class="mobile-heading" style="color:#000;margin:0;font-size:28px;font-weight:300;letter-spacing:-1px;line-height:1.2">${v.subject}</h1>
</td></tr>
<tr><td class="mobile-padding" style="padding:0 45px 40px">
<p class="mobile-text" style="color:#000;font-size:16px;line-height:1.6;margin:0 0 20px;font-weight:300">Hi <strong style="font-weight:600">${v.recipientName}</strong>,</p>
<div class="mobile-text" style="color:#333;font-size:15px;line-height:1.8;margin:0 0 30px;white-space:pre-wrap;font-weight:300">${v.body}</div>
<div style="width:100%;height:1px;background:#e5e7eb;margin:35px 0"></div>
<p class="mobile-text" style="color:#666;font-size:14px;line-height:1.6;margin:0;font-weight:300">Best regards,<br><strong style="color:#000;font-weight:600;font-size:15px">${v.senderName}</strong></p>
</td></tr>
<tr><td style="padding:30px 45px;border-top:1px solid #e5e7eb">
<p style="color:#999;font-size:11px;margin:0;font-weight:300;letter-spacing:0.5px">${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#ffffff");
      break;

    default:
      template = baseWrapper(`<p style="padding:40px;text-align:center;color:#64748b">Template not found</p>`);
      break;
  }

  // Post-process: Replace primary action button hrefs and text dynamically
  // This allows button links and text to be customized without modifying each template
  if (v.buttonLink && v.buttonLink !== "#") {
    // Replace the first href="#" with the actual button link (primary CTA)
    template = template.replace(/(<a\s+href="#"[^>]*>)(Get Started Now|Read Full Newsletter|Reset My Password|Pay Invoice|Shop Now|RSVP Now|Track Your Order|View Order Details|Send Feedback|Celebrate\s*&#127881;|Discover More|Submit|Get Started)(<\/a>)/i, (match, openTag, text, closeTag) => {
      const newText = v.buttonText || text;
      return openTag.replace('href="#"', `href="${v.buttonLink}"`) + newText + closeTag;
    });
  } else if (v.buttonText && v.buttonText !== "Get Started") {
    // Just replace button text if only text is provided
    template = template.replace(/(Get Started Now|Read Full Newsletter|Reset My Password|Pay Invoice|Shop Now|RSVP Now|Track Your Order|View Order Details|Send Feedback|Celebrate\s*&#127881;|Discover More|Submit|Get Started)(?=<\/a>)/i, v.buttonText);
  }

  return template;
}

