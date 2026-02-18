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
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Email</title></head><body style="margin:0;padding:0;background-color:${bgColor};font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale"><div style="max-width:680px;margin:0 auto;padding:20px 10px">${content}</div></body></html>`;
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
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 40%,#a855f7 100%);padding:50px 40px;text-align:center">
<div style="width:70px;height:70px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 20px;line-height:70px;font-size:32px">&#128075;</div>
<h1 style="color:#fff;margin:0;font-size:32px;font-weight:800;letter-spacing:-0.5px">Welcome Aboard!</h1>
<p style="color:rgba(255,255,255,0.85);margin:12px 0 0;font-size:16px;line-height:1.5">We're absolutely thrilled to have you join us</p>
</td></tr>
<tr><td style="padding:45px 40px">
<p style="color:#1a1a2e;font-size:17px;line-height:1.7;margin:0 0 20px">Hi <strong>${v.recipientName}</strong>,</p>
<p style="color:#4a5568;font-size:15px;line-height:1.9;margin:0 0 25px">${v.body || "Welcome to the family! Your account is all set up and ready to go. We've built something special and we can't wait for you to explore everything we have to offer."}</p>
<table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 30px">
<tr>
<td style="width:33%;padding:15px;text-align:center;background:#f5f3ff;border-radius:12px 0 0 12px"><div style="font-size:24px;margin-bottom:6px">&#9889;</div><p style="margin:0;color:#6366f1;font-size:13px;font-weight:600">Quick Setup</p></td>
<td style="width:33%;padding:15px;text-align:center;background:#faf5ff"><div style="font-size:24px;margin-bottom:6px">&#128640;</div><p style="margin:0;color:#8b5cf6;font-size:13px;font-weight:600">Fast Delivery</p></td>
<td style="width:33%;padding:15px;text-align:center;background:#f5f3ff;border-radius:0 12px 12px 0"><div style="font-size:24px;margin-bottom:6px">&#128737;</div><p style="margin:0;color:#a855f7;font-size:13px;font-weight:600">24/7 Support</p></td>
</tr>
</table>
<div style="text-align:center;margin:35px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#6366f1,#a855f7);color:#fff;text-decoration:none;padding:16px 48px;border-radius:50px;font-weight:700;font-size:16px;box-shadow:0 4px 18px rgba(99,102,241,0.4)">Get Started Now</a>
</div>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">Sent with &#10084; by ${v.senderName} &bull; ${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`);

    case "newsletter":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="background:linear-gradient(135deg,#059669 0%,#10b981 50%,#34d399 100%);padding:45px 40px;text-align:center">
<table width="100%"><tr><td style="text-align:left"><span style="color:rgba(255,255,255,0.7);font-size:12px;text-transform:uppercase;letter-spacing:3px;font-weight:600">Newsletter</span></td><td style="text-align:right"><span style="color:rgba(255,255,255,0.7);font-size:12px">${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span></td></tr></table>
<h1 style="color:#fff;margin:20px 0 0;font-size:30px;font-weight:800;letter-spacing:-0.5px">${v.subject || "What's New This Month"}</h1>
</td></tr>
<tr><td style="padding:40px">
<p style="color:#1a1a2e;font-size:17px;line-height:1.7;margin:0 0 15px">Hi <strong>${v.recipientName}</strong>,</p>
<p style="color:#4a5568;font-size:15px;line-height:1.9;margin:0 0 30px">${v.body || "Here's your curated roundup of the latest updates, insights, and stories you need to know about."}</p>
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:25px">
<tr><td style="padding:20px 25px;background:linear-gradient(135deg,#ecfdf5,#f0fdf4);border-radius:12px;border-left:4px solid #10b981">
<h3 style="color:#065f46;margin:0 0 10px;font-size:17px;font-weight:700">&#127775; Featured Story</h3>
<p style="color:#4a5568;font-size:14px;line-height:1.8;margin:0">Discover the trends shaping the future. We've compiled the best resources and insights just for you.</p>
</td></tr>
</table>
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:25px">
<tr><td style="padding:20px 25px;background:#f8fafc;border-radius:12px;border-left:4px solid #6366f1">
<h3 style="color:#312e81;margin:0 0 10px;font-size:17px;font-weight:700">&#128161; Tips & Tricks</h3>
<p style="color:#4a5568;font-size:14px;line-height:1.8;margin:0">Level up your workflow with these pro tips that you can start using right away.</p>
</td></tr>
</table>
<div style="text-align:center;margin:35px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#059669,#34d399);color:#fff;text-decoration:none;padding:15px 45px;border-radius:50px;font-weight:700;font-size:15px;box-shadow:0 4px 18px rgba(5,150,105,0.35)">Read Full Newsletter</a>
</div>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">Sent by ${v.senderName} &bull; ${v.companyName} &copy; ${v.year}</p>
<p style="color:#94a3b8;font-size:11px;margin:8px 0 0"><a href="#" style="color:#64748b;text-decoration:underline">Unsubscribe</a> &bull; <a href="#" style="color:#64748b;text-decoration:underline">Preferences</a></p>
</td></tr>
</table>`);

    case "password-reset":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="background:linear-gradient(135deg,#dc2626 0%,#ef4444 50%,#f87171 100%);padding:45px 40px;text-align:center">
<div style="width:70px;height:70px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 20px;line-height:70px;font-size:32px">&#128272;</div>
<h1 style="color:#fff;margin:0;font-size:28px;font-weight:800">Password Reset</h1>
<p style="color:rgba(255,255,255,0.85);margin:10px 0 0;font-size:14px">Secure your account in just one click</p>
</td></tr>
<tr><td style="padding:40px">
<p style="color:#1a1a2e;font-size:17px;line-height:1.7;margin:0 0 15px">Hi <strong>${v.recipientName}</strong>,</p>
<p style="color:#4a5568;font-size:15px;line-height:1.9;margin:0 0 20px">${v.body || "We received a request to reset the password for your account. No worries - it happens to the best of us!"}</p>
<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:12px;padding:20px 25px;margin:0 0 25px">
<p style="color:#991b1b;font-size:14px;line-height:1.7;margin:0">&#9888;&#65039; This link will expire in <strong>24 hours</strong>. If you didn't request this reset, you can safely ignore this email.</p>
</div>
<div style="text-align:center;margin:30px 0">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#dc2626,#ef4444);color:#fff;text-decoration:none;padding:16px 48px;border-radius:50px;font-weight:700;font-size:16px;box-shadow:0 4px 18px rgba(220,38,38,0.35)">Reset My Password</a>
</div>
<div style="background:#f8fafc;border-radius:10px;padding:18px;margin-top:25px;text-align:center">
<p style="color:#64748b;font-size:13px;margin:0;line-height:1.5">Having trouble? Contact us at <a href="#" style="color:#dc2626;text-decoration:none;font-weight:600">support@nrmail.com</a></p>
</div>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">Sent by ${v.senderName} &bull; ${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`);

    case "invoice":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="background:linear-gradient(135deg,#1e293b 0%,#334155 50%,#475569 100%);padding:40px">
<table width="100%"><tr>
<td><h1 style="color:#fff;margin:0;font-size:26px;font-weight:800">${v.companyName}</h1><p style="color:#94a3b8;margin:5px 0 0;font-size:13px">Professional Invoice</p></td>
<td style="text-align:right"><div style="background:rgba(255,255,255,0.1);border-radius:10px;padding:12px 18px;display:inline-block"><span style="color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;display:block">Invoice</span><span style="color:#fff;font-size:22px;font-weight:800">#${v.invoiceNumber || "001"}</span></div></td>
</tr></table>
</td></tr>
<tr><td style="padding:40px">
<table width="100%" style="margin-bottom:30px"><tr>
<td style="vertical-align:top"><p style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 6px">Bill To</p><p style="color:#1e293b;font-size:16px;font-weight:600;margin:0">${v.recipientName}</p></td>
<td style="vertical-align:top;text-align:right"><p style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 6px">Date</p><p style="color:#1e293b;font-size:14px;margin:0">${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p></td>
</tr></table>
<p style="color:#4a5568;font-size:15px;line-height:1.8;margin:0 0 30px">${v.body || "Please find your invoice details below. Thank you for your business."}</p>
<table width="100%" cellpadding="14" cellspacing="0" style="border-radius:12px;overflow:hidden;margin-bottom:25px">
<tr style="background:#f1f5f9"><td style="font-weight:700;color:#334155;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e2e8f0">Description</td><td style="text-align:center;font-weight:700;color:#334155;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e2e8f0">Qty</td><td style="text-align:right;font-weight:700;color:#334155;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e2e8f0">Amount</td></tr>
<tr><td style="color:#475569;border-bottom:1px solid #f1f5f9">${v.itemName || "Service Fee"}</td><td style="text-align:center;color:#475569;border-bottom:1px solid #f1f5f9">1</td><td style="text-align:right;color:#475569;border-bottom:1px solid #f1f5f9">${v.amount || "$99.00"}</td></tr>
<tr style="background:#f8fafc"><td colspan="2" style="font-weight:700;color:#1e293b;font-size:16px">Total Due</td><td style="text-align:right;font-weight:800;color:#6366f1;font-size:22px">${v.amount || "$99.00"}</td></tr>
</table>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#1e293b,#475569);color:#fff;text-decoration:none;padding:15px 45px;border-radius:50px;font-weight:700;font-size:15px;box-shadow:0 4px 18px rgba(30,41,59,0.3)">Pay Invoice</a>
</div>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">Sent by ${v.senderName} &bull; ${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`);

    case "promotion":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="background:linear-gradient(135deg,#ec4899 0%,#f43f5e 50%,#fb7185 100%);padding:50px 40px;text-align:center">
<div style="background:rgba(255,255,255,0.2);display:inline-block;padding:8px 20px;border-radius:50px;margin-bottom:15px"><span style="color:#fff;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px">&#128293; Limited Time Only</span></div>
<h1 style="color:#fff;margin:0;font-size:52px;font-weight:900;line-height:1">${v.discount || "50% OFF"}</h1>
<p style="color:rgba(255,255,255,0.9);margin:15px 0 0;font-size:20px;font-weight:600">${v.subject || "Exclusive Deal Just For You!"}</p>
</td></tr>
<tr><td style="padding:40px;text-align:center">
<p style="color:#1a1a2e;font-size:17px;line-height:1.7;margin:0 0 15px">Hey <strong>${v.recipientName}</strong>!</p>
<p style="color:#4a5568;font-size:15px;line-height:1.9;margin:0 0 30px">${v.body || "This is your chance to grab an incredible deal. Don't let it slip away - this offer won't last forever!"}</p>
<div style="background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:2px dashed #f43f5e;border-radius:12px;padding:20px 30px;margin:0 auto 30px;display:inline-block">
<p style="color:#9f1239;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 6px;font-weight:600">Your Promo Code</p>
<span style="color:#e11d48;font-size:28px;font-weight:900;letter-spacing:4px">${v.promoCode || "SAVE50"}</span>
</div>
<div style="margin:30px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#ec4899,#f43f5e);color:#fff;text-decoration:none;padding:16px 55px;border-radius:50px;font-weight:700;font-size:17px;box-shadow:0 4px 20px rgba(244,63,94,0.4)">Shop Now &#8594;</a>
</div>
<p style="color:#94a3b8;font-size:12px;margin:15px 0 0">Offer valid while supplies last</p>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">Sent by ${v.senderName} &bull; ${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`);

    case "event-invite":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 50%,#9333ea 100%);padding:50px 40px;text-align:center">
<div style="background:rgba(255,255,255,0.15);display:inline-block;padding:8px 20px;border-radius:50px;margin-bottom:15px"><span style="color:#fff;font-size:13px;font-weight:600;letter-spacing:1px">&#127881; YOU'RE INVITED</span></div>
<h1 style="color:#fff;margin:0;font-size:30px;font-weight:800;letter-spacing:-0.5px">${v.subject || "Join Our Upcoming Event"}</h1>
<p style="color:rgba(255,255,255,0.8);margin:12px 0 0;font-size:15px">An experience you don't want to miss</p>
</td></tr>
<tr><td style="padding:40px">
<p style="color:#1a1a2e;font-size:17px;line-height:1.7;margin:0 0 15px">Hi <strong>${v.recipientName}</strong>,</p>
<p style="color:#4a5568;font-size:15px;line-height:1.9;margin:0 0 30px">${v.body || "We're hosting something special and we'd love for you to be part of it. Save the date and get ready for an amazing experience."}</p>
<table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#ede9fe,#f5f3ff);border-radius:14px;overflow:hidden;margin-bottom:30px">
<tr><td style="padding:25px 30px">
<table width="100%" cellpadding="8" cellspacing="0">
<tr><td style="width:40px;vertical-align:top"><span style="font-size:22px">&#128197;</span></td><td><p style="margin:0;color:#6d28d9;font-weight:700;font-size:14px">Date</p><p style="margin:4px 0 0;color:#4a5568;font-size:15px">${v.eventDate || "To Be Announced"}</p></td></tr>
<tr><td style="width:40px;vertical-align:top"><span style="font-size:22px">&#9200;</span></td><td><p style="margin:0;color:#6d28d9;font-weight:700;font-size:14px">Time</p><p style="margin:4px 0 0;color:#4a5568;font-size:15px">${v.eventTime || "To Be Announced"}</p></td></tr>
<tr><td style="width:40px;vertical-align:top"><span style="font-size:22px">&#128205;</span></td><td><p style="margin:0;color:#6d28d9;font-weight:700;font-size:14px">Venue</p><p style="margin:4px 0 0;color:#4a5568;font-size:15px">${v.eventLocation || "Online (Link will be shared)"}</p></td></tr>
</table>
</td></tr>
</table>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#4f46e5,#9333ea);color:#fff;text-decoration:none;padding:16px 48px;border-radius:50px;font-weight:700;font-size:16px;box-shadow:0 4px 18px rgba(79,70,229,0.4)">RSVP Now &#8594;</a>
</div>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">Sent by ${v.senderName} &bull; ${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`);

    case "feedback":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="background:linear-gradient(135deg,#f59e0b 0%,#eab308 50%,#fbbf24 100%);padding:45px 40px;text-align:center">
<div style="font-size:48px;margin-bottom:15px">&#128172;</div>
<h1 style="color:#fff;margin:0;font-size:28px;font-weight:800">We'd Love Your Feedback</h1>
<p style="color:rgba(255,255,255,0.9);margin:10px 0 0;font-size:15px">Your opinion truly matters to us</p>
</td></tr>
<tr><td style="padding:40px">
<p style="color:#1a1a2e;font-size:17px;line-height:1.7;margin:0 0 15px">Hi <strong>${v.recipientName}</strong>,</p>
<p style="color:#4a5568;font-size:15px;line-height:1.9;margin:0 0 30px">${v.body || "We're constantly working to improve and your feedback plays a huge role in that. Take a moment to let us know how we're doing!"}</p>
<div style="text-align:center;margin:25px 0">
<p style="color:#78716c;font-size:14px;margin:0 0 15px;font-weight:600">How was your experience?</p>
<table cellpadding="0" cellspacing="0" style="margin:0 auto"><tr>
<td style="padding:0 6px"><a href="#" style="text-decoration:none;display:inline-block;width:52px;height:52px;line-height:52px;text-align:center;font-size:30px;background:#fef3c7;border-radius:12px;transition:transform 0.2s">&#128545;</a></td>
<td style="padding:0 6px"><a href="#" style="text-decoration:none;display:inline-block;width:52px;height:52px;line-height:52px;text-align:center;font-size:30px;background:#fef3c7;border-radius:12px">&#128533;</a></td>
<td style="padding:0 6px"><a href="#" style="text-decoration:none;display:inline-block;width:52px;height:52px;line-height:52px;text-align:center;font-size:30px;background:#fef3c7;border-radius:12px">&#128528;</a></td>
<td style="padding:0 6px"><a href="#" style="text-decoration:none;display:inline-block;width:52px;height:52px;line-height:52px;text-align:center;font-size:30px;background:#fef3c7;border-radius:12px">&#128578;</a></td>
<td style="padding:0 6px"><a href="#" style="text-decoration:none;display:inline-block;width:52px;height:52px;line-height:52px;text-align:center;font-size:30px;background:#fef3c7;border-radius:12px">&#128525;</a></td>
</tr></table>
</div>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#eab308);color:#fff;text-decoration:none;padding:15px 45px;border-radius:50px;font-weight:700;font-size:15px;box-shadow:0 4px 18px rgba(245,158,11,0.35)">Share Detailed Feedback</a>
</div>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">Sent by ${v.senderName} &bull; ${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`);

    case "order-confirm":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="background:linear-gradient(135deg,#059669 0%,#10b981 50%,#34d399 100%);padding:45px 40px;text-align:center">
<div style="width:70px;height:70px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 18px;line-height:70px;font-size:36px">&#10004;</div>
<h1 style="color:#fff;margin:0;font-size:28px;font-weight:800">Order Confirmed!</h1>
<p style="color:rgba(255,255,255,0.85);margin:10px 0 0;font-size:15px">Order <strong>#${v.orderNumber || "12345"}</strong></p>
</td></tr>
<tr><td style="padding:40px">
<p style="color:#1a1a2e;font-size:17px;line-height:1.7;margin:0 0 15px">Hi <strong>${v.recipientName}</strong>,</p>
<p style="color:#4a5568;font-size:15px;line-height:1.9;margin:0 0 30px">${v.body || "Great news! Your order has been confirmed and is being prepared. Here's a quick summary of your purchase."}</p>
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:25px">
<tr><td style="padding:15px 18px;background:#f0fdf4;border-radius:10px;border-left:4px solid #10b981">
<table width="100%"><tr><td>
<p style="color:#065f46;font-size:13px;font-weight:600;margin:0 0 2px">Estimated Delivery</p>
<p style="color:#047857;font-size:18px;font-weight:800;margin:0">${v.deliveryDate || "3-5 Business Days"}</p>
</td><td style="text-align:right;font-size:30px">&#128666;</td></tr></table>
</td></tr>
</table>
<table width="100%" cellpadding="14" cellspacing="0" style="border-radius:12px;overflow:hidden;margin-bottom:25px;border:1px solid #e5e7eb">
<tr style="background:#f9fafb"><td style="font-weight:700;color:#374151;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e5e7eb">Item</td><td style="text-align:right;font-weight:700;color:#374151;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e5e7eb">Price</td></tr>
<tr><td style="color:#4b5563;border-bottom:1px solid #f3f4f6">${v.itemName || "Product"}</td><td style="text-align:right;color:#4b5563;border-bottom:1px solid #f3f4f6">${v.amount || "$49.99"}</td></tr>
<tr><td style="color:#4b5563;border-bottom:1px solid #f3f4f6">Shipping</td><td style="text-align:right;color:#059669;font-weight:600;border-bottom:1px solid #f3f4f6">FREE</td></tr>
<tr style="background:#f0fdf4"><td style="font-weight:800;color:#1e293b;font-size:16px">Total Paid</td><td style="text-align:right;font-weight:800;color:#059669;font-size:22px">${v.amount || "$49.99"}</td></tr>
</table>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#059669,#34d399);color:#fff;text-decoration:none;padding:15px 45px;border-radius:50px;font-weight:700;font-size:15px;box-shadow:0 4px 18px rgba(5,150,105,0.35)">Track Your Order</a>
</div>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">Sent by ${v.senderName} &bull; ${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`);

    case "birthday":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="background:linear-gradient(135deg,#c026d3 0%,#a855f7 30%,#ec4899 60%,#f43f5e 100%);padding:55px 40px;text-align:center">
<div style="font-size:64px;margin-bottom:15px">&#127874;</div>
<h1 style="color:#fff;margin:0;font-size:36px;font-weight:900;letter-spacing:-0.5px">Happy Birthday!</h1>
<p style="color:rgba(255,255,255,0.9);margin:12px 0 0;font-size:17px">&#127881; Wishing you the most amazing day &#127881;</p>
</td></tr>
<tr><td style="padding:40px;text-align:center">
<p style="color:#1a1a2e;font-size:19px;line-height:1.7;margin:0 0 15px">Dear <strong>${v.recipientName}</strong>,</p>
<p style="color:#4a5568;font-size:16px;line-height:1.9;margin:0 0 25px">${v.body || "Today is YOUR day! May this birthday bring you everything you've been hoping for and more. Here's to another incredible year of adventures, growth, and happiness!"}</p>
<div style="margin:25px 0">
<table cellpadding="0" cellspacing="0" style="margin:0 auto"><tr>
<td style="padding:0 5px;font-size:40px">&#127880;</td>
<td style="padding:0 5px;font-size:40px">&#127878;</td>
<td style="padding:0 5px;font-size:40px">&#127874;</td>
<td style="padding:0 5px;font-size:40px">&#127879;</td>
<td style="padding:0 5px;font-size:40px">&#127881;</td>
</tr></table>
</div>
<div style="background:linear-gradient(135deg,#fdf4ff,#fce7f3);border-radius:14px;padding:25px;margin:25px 0">
<p style="color:#a21caf;font-size:22px;font-weight:800;margin:0 0 5px">&#127873; A Special Gift Awaits!</p>
<p style="color:#86198f;font-size:14px;margin:0">Click below to unwrap your birthday surprise</p>
</div>
<div style="margin:25px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#c026d3,#ec4899);color:#fff;text-decoration:none;padding:16px 48px;border-radius:50px;font-weight:700;font-size:16px;box-shadow:0 4px 20px rgba(192,38,211,0.4)">Unwrap My Gift &#127873;</a>
</div>
</td></tr>
<tr><td style="background:linear-gradient(135deg,#f8fafc,#f1f5f9);padding:25px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.6">With love from ${v.senderName} &#10084; ${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`);

    case "dark":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#0f172a;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.5);border:1px solid #1e293b">
<tr><td style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding:45px 40px;text-align:center;border-bottom:1px solid #2d3a4f">
<div style="width:60px;height:60px;background:linear-gradient(135deg,#6366f1,#a855f7);border-radius:14px;margin:0 auto 20px;line-height:60px;font-size:26px;box-shadow:0 4px 20px rgba(99,102,241,0.3)">&#9889;</div>
<h1 style="color:#f1f5f9;margin:0;font-size:28px;font-weight:800;letter-spacing:-0.5px">${v.subject || "Hello From The Dark Side"}</h1>
<p style="color:#64748b;margin:10px 0 0;font-size:14px">Sleek. Modern. Beautiful.</p>
</td></tr>
<tr><td style="padding:40px;background:#0f172a">
<p style="color:#e2e8f0;font-size:17px;line-height:1.7;margin:0 0 15px">Hey <strong style="color:#a5b4fc">${v.recipientName}</strong>,</p>
<p style="color:#94a3b8;font-size:15px;line-height:1.9;margin:0 0 25px">${v.body || "Welcome to the dark side of email. Clean, focused, distraction-free. This template is designed for maximum readability with a modern dark theme."}</p>
<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:25px">
<tr><td style="padding:20px;background:linear-gradient(135deg,#1e293b,#334155);border-radius:12px;border:1px solid #334155">
<table width="100%"><tr>
<td style="width:50%;padding:12px;text-align:center;border-right:1px solid #475569"><p style="color:#6366f1;font-size:24px;font-weight:800;margin:0">99.9%</p><p style="color:#64748b;font-size:12px;margin:4px 0 0;text-transform:uppercase;letter-spacing:1px">Uptime</p></td>
<td style="width:50%;padding:12px;text-align:center"><p style="color:#a855f7;font-size:24px;font-weight:800;margin:0">24/7</p><p style="color:#64748b;font-size:12px;margin:4px 0 0;text-transform:uppercase;letter-spacing:1px">Support</p></td>
</tr></table>
</td></tr>
</table>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#6366f1,#a855f7);color:#fff;text-decoration:none;padding:15px 45px;border-radius:50px;font-weight:700;font-size:15px;box-shadow:0 0 25px rgba(99,102,241,0.4)">Explore More</a>
</div>
</td></tr>
<tr><td style="background:#0b1120;padding:25px 40px;text-align:center;border-top:1px solid #1e293b">
<p style="color:#475569;font-size:12px;margin:0;line-height:1.6">Sent by ${v.senderName} &bull; ${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`, "#080e1e");

    case "casual":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#fffbeb;border-radius:20px;overflow:hidden;box-shadow:0 4px 30px rgba(0,0,0,0.06);border:2px solid #fde68a">
<tr><td style="padding:40px 40px 30px;text-align:center">
<div style="font-size:48px;margin-bottom:12px">&#128400;</div>
<h1 style="color:#92400e;margin:0;font-size:26px;font-weight:800">Hey ${v.recipientName}!</h1>
<div style="width:60px;height:3px;background:linear-gradient(90deg,#f59e0b,#fbbf24);margin:15px auto 0;border-radius:2px"></div>
</td></tr>
<tr><td style="padding:10px 40px 40px">
<div style="background:#ffffff;border-radius:14px;padding:28px;border:1px solid #fef3c7;box-shadow:0 2px 10px rgba(0,0,0,0.03)">
<p style="color:#44403c;font-size:16px;line-height:2;margin:0 0 20px">${v.body || "Just dropping by to say hi! Hope you're doing well. Nothing fancy here, just a friendly message to brighten up your day. &#128522;"}</p>
<p style="color:#44403c;font-size:16px;line-height:1.8;margin:0">Catch you later! &#128075;</p>
</div>
<div style="margin:25px 0 0;padding:20px;background:#fef9c3;border-radius:12px;text-align:center">
<p style="color:#a16207;font-size:14px;margin:0;font-style:italic">"Life is short. Send more emails to the people you care about." &#128155;</p>
</div>
<div style="text-align:center;margin:25px 0 10px">
<a href="#" style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#78350f;text-decoration:none;padding:14px 40px;border-radius:50px;font-weight:700;font-size:15px;box-shadow:0 4px 15px rgba(245,158,11,0.3)">Reply Back &#128140;</a>
</div>
</td></tr>
<tr><td style="padding:20px 40px;text-align:center;border-top:2px dashed #fde68a">
<p style="color:#d97706;font-size:13px;margin:0">Sent with warmth by <strong>${v.senderName}</strong> &#9728;&#65039;</p>
<p style="color:#b45309;font-size:11px;margin:6px 0 0">${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`, "#fefce8");

    case "just-email":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.06)">
<tr><td style="padding:35px 35px 0">
<p style="color:#111827;font-size:16px;line-height:1.8;margin:0 0 18px">Hi ${v.recipientName},</p>
<p style="color:#374151;font-size:15px;line-height:1.9;margin:0 0 25px;white-space:pre-line">${v.body || "Just a quick note to reach out. No fancy graphics or buttons needed - sometimes a simple email is all it takes."}</p>
<p style="color:#374151;font-size:15px;line-height:1.8;margin:0 0 5px">Best,</p>
<p style="color:#111827;font-size:15px;line-height:1.6;margin:0;font-weight:600">${v.senderName}</p>
</td></tr>
<tr><td style="padding:25px 35px 20px">
<div style="border-top:1px solid #e5e7eb;padding-top:15px">
<p style="color:#9ca3af;font-size:11px;margin:0">${v.companyName} &copy; ${v.year}</p>
</div>
</td></tr>
</table>`, "#f9fafb");

    case "minimal":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1)">
<tr><td style="padding:45px 40px 35px;border-bottom:3px solid #1e293b">
<h1 style="color:#1e293b;margin:0;font-size:24px;font-weight:800;letter-spacing:-0.5px">${v.subject || "Hello"}</h1>
</td></tr>
<tr><td style="padding:35px 40px">
<p style="color:#1a1a2e;font-size:17px;line-height:1.7;margin:0 0 15px">Hi <strong>${v.recipientName}</strong>,</p>
<p style="color:#4a5568;font-size:15px;line-height:1.9;margin:0 0 25px">${v.body || "This is a clean, minimal email template designed for clarity and simplicity. Perfect for any purpose where the content speaks for itself."}</p>
<div style="border-left:3px solid #1e293b;padding-left:20px;margin:25px 0">
<p style="color:#64748b;font-size:14px;line-height:1.8;margin:0;font-style:italic">Clean design focuses attention on what truly matters - your message.</p>
</div>
<p style="color:#4a5568;font-size:15px;line-height:1.8;margin:25px 0 0">Best regards,<br><strong style="color:#1e293b">${v.senderName}</strong></p>
</td></tr>
<tr><td style="background:#f8fafc;padding:22px 40px;text-align:center;border-top:1px solid #e2e8f0">
<p style="color:#94a3b8;font-size:12px;margin:0">${v.companyName} &copy; ${v.year}</p>
</td></tr>
</table>`);
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

