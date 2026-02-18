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

// 100 Random Inspirational Quotes
const randomQuotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Everything you've ever wanted is on the other side of fear. - George Addair",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
  "Change your thoughts and you change your world. - Norman Vincent Peale",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. - William James",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "You learn more from failure than from success. Don't let it stop you. - Unknown",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "If you are working on something that you really care about, you don't have to be pushed. - Steve Jobs",
  "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
  "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
  "We may encounter many defeats but we must not be defeated. - Maya Angelou",
  "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
  "Imagine your life is perfect in every respect; what would it look like? - Brian Tracy",
  "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
  "Whether you think you can or think you can't, you're right. - Henry Ford",
  "Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller",
  "The man who has confidence in himself gains the confidence of others. - Hasidic Proverb",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
  "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left. - Erma Bombeck",
  "Few things can help an individual more than to place responsibility on him. - Booker T. Washington",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
  "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
  "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "An unexamined life is not worth living. - Socrates",
  "Eighty percent of success is showing up. - Woody Allen",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "Winning isn't everything, but wanting to win is. - Vince Lombardi",
  "I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
  "Every child is an artist. The problem is how to remain an artist once he grows up. - Pablo Picasso",
  "You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus",
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou",
  "Either you run the day, or the day runs you. - Jim Rohn",
  "Whether you think you can or you think you can't, you're right. - Henry Ford",
  "The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
  "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it. - Johann Wolfgang von Goethe",
  "The best revenge is massive success. - Frank Sinatra",
  "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. - Zig Ziglar",
  "Life shrinks or expands in proportion to one's courage. - Anais Nin",
  "If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced. - Vincent Van Gogh",
  "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. - Aristotle",
  "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. - Jesus",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. - Roy T. Bennett",
  "I learned that courage was not the absence of fear, but the triumph over it. - Nelson Mandela",
  "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
  "Everything has beauty, but not everyone can see. - Confucius",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. - William James",
  "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. - Helen Keller",
  "Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now. - Denis Waitley",
  "We become what we think about most of the time, and that's the strangest secret. - Earl Nightingale",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Try not to become a person of success, but rather try to become a person of value. - Albert Einstein",
  "A winner is a dreamer who never gives up. - Nelson Mandela",
  "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
  "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. - Leonardo da Vinci",
  "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. - Jamie Paolinetti",
  "You take your life in your own hands, and what happens? A terrible thing, no one to blame. - Erica Jong",
  "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. - Bob Dylan",
  "I didn't fail the test. I just found 100 ways to do it wrong. - Benjamin Franklin",
  "In order to succeed, your desire for success should be greater than your fear of failure. - Bill Cosby",
  "A person who never made a mistake never tried anything new. - Albert Einstein",
  "The person who says it cannot be done should not interrupt the person who is doing it. - Chinese Proverb",
  "There are no traffic jams along the extra mile. - Roger Staubach",
  "It is never too late to be what you might have been. - George Eliot",
  "You become what you believe. - Oprah Winfrey",
  "I would rather die of passion than of boredom. - Vincent van Gogh",
  "A truly rich man is one whose children run into his arms when his hands are empty. - Unknown",
  "It is not what you do for your children, but what you have taught them to do for themselves. - Ann Landers",
  "If you want your children to turn out well, spend twice as much time with them, and half as much money. - Abigail Van Buren",
  "Build your own dreams, or someone else will hire you to build theirs. - Farrah Gray",
  "The battles that count aren't the ones for gold medals. The struggles within yourself are where it's at. - Jesse Owens",
  "Education costs money. But then so does ignorance. - Sir Claus Moser",
  "I have learned over the years that when one's mind is made up, this diminishes fear. - Rosa Parks",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
  "Remember that not getting what you want is sometimes a wonderful stroke of luck. - Dalai Lama",
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "Dream big and dare to fail. - Norman Vaughan",
  "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr.",
  "Do what you feel in your heart to be right, for you'll be criticized anyway. - Eleanor Roosevelt",
  "Happiness is not something readymade. It comes from your own actions. - Dalai Lama",
  "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale"
];

function getRandomQuote(): string {
  return randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
}

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
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:620px;margin:0 auto;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:30px;overflow:hidden;box-shadow:0 20px 60px rgba(102,126,234,0.4),0 0 0 1px rgba(255,255,255,0.1) inset">
<tr><td style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);padding:25px 40px;border-bottom:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 32px rgba(0,0,0,0.1)">
<div style="text-align:center">
<div style="width:100px;height:100px;margin:0 auto 20px;background:linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.1));border-radius:50%;display:inline-flex;align-items:center;justify-content:center;border:3px solid rgba(255,255,255,0.5);box-shadow:0 0 40px rgba(255,255,255,0.5),inset 0 0 20px rgba(255,255,255,0.2)">
<span style="font-size:50px">🎉</span>
</div>
<h1 class="mobile-heading" style="color:#fff;margin:0;font-size:36px;font-weight:900;text-shadow:0 4px 20px rgba(0,0,0,0.3),0 0 60px rgba(255,255,255,0.5)">${v.subject || "Welcome Aboard!"}</h1>
</div>
</td></tr>
<tr><td class="mobile-padding" style="padding:50px 45px">
<div style="background:rgba(255,255,255,0.25);backdrop-filter:blur(20px);border-radius:20px;padding:35px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 8px 32px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.5)">
<p class="mobile-text" style="color:#fff;font-size:18px;line-height:1.8;margin:0 0 12px;text-shadow:0 2px 10px rgba(0,0,0,0.2)">Hi <strong style="color:#fff;font-weight:800">${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:rgba(255,255,255,0.95);font-size:16px;line-height:1.9;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<div style="background:rgba(255,223,0,0.2);border-left:4px solid rgba(255,223,0,0.8);border-radius:10px;padding:18px;margin:25px 0;backdrop-filter:blur(5px)">
<p style="color:#fff;font-size:13px;font-style:italic;margin:0;text-shadow:0 1px 3px rgba(0,0,0,0.2)">💭 "${getRandomQuote()}"</p>
</div>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.3);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:18px 45px;border-radius:50px;font-weight:800;font-size:16px;border:2px solid rgba(255,255,255,0.5);box-shadow:0 8px 25px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.6),0 0 0 4px rgba(255,255,255,0.1);text-shadow:0 2px 10px rgba(0,0,0,0.3);transition:all 0.3s ease">GET STARTED ✨</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.2);backdrop-filter:blur(10px);padding:25px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.1)">
<p style="color:rgba(255,255,255,0.8);font-size:12px;margin:0;text-shadow:0 1px 3px rgba(0,0,0,0.3)">${v.senderName} | ${v.companyName} © ${v.year}</p>
</td></tr>
</table>`, "#667eea");

    case "newsletter":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:640px;margin:0 auto;background:linear-gradient(135deg,#10b981 0%,#06b6d4 100%);border-radius:30px;overflow:hidden;box-shadow:0 20px 60px rgba(16,185,129,0.4),0 0 0 1px rgba(255,255,255,0.1) inset">
<tr><td style="background:rgba(255,255,255,0.2);backdrop-filter:blur(15px);padding:40px;border-bottom:1px solid rgba(255,255,255,0.3)">
<div style="text-align:center">
<div style="width:90px;height:90px;margin:0 auto 20px;background:rgba(255,255,255,0.3);backdrop-filter:blur(10px);border-radius:20px;display:inline-flex;align-items:center;justify-content:center;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 50px rgba(255,255,255,0.6),inset 0 0 20px rgba(255,255,255,0.3);transform:rotate(-5deg)">
<span style="font-size:45px;transform:rotate(5deg);display:block">📰</span>
</div>
<h1 class="mobile-heading" style="color:#fff;margin:0;font-size:32px;font-weight:900;text-shadow:0 4px 20px rgba(0,0,0,0.3),0 0 50px rgba(255,255,255,0.4)">${v.subject || "Latest Newsletter"}</h1>
</div>
</td></tr>
<tr><td class="mobile-padding" style="padding:50px 45px">
<div style="background:rgba(255,255,255,0.3);backdrop-filter:blur(25px);border-radius:25px;padding:40px;border:1px solid rgba(255,255,255,0.4);box-shadow:0 10px 40px rgba(0,0,0,0.15),inset 0 1px 0 rgba(255,255,255,0.6)">
<p class="mobile-text" style="color:#fff;font-size:17px;line-height:1.7;margin:0 0 12px;text-shadow:0 2px 8px rgba(0,0,0,0.2)">Hello <strong style="font-weight:800">${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:rgba(255,255,255,0.95);font-size:15px;line-height:1.9;margin:0 0 30px;white-space:pre-wrap">${v.body}</p>
<div style="background:rgba(234,179,8,0.25);border-left:4px solid rgba(234,179,8,0.9);border-radius:12px;padding:20px;margin:25px 0;backdrop-filter:blur(10px);box-shadow:0 4px 15px rgba(0,0,0,0.1)">
<p style="color:#fff;font-size:13px;font-style:italic;margin:0;text-shadow:0 1px 3px rgba(0,0,0,0.3)">✨ "${getRandomQuote()}"</p>
</div>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.35);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:16px 50px;border-radius:50px;font-weight:800;font-size:15px;border:2px solid rgba(255,255,255,0.6);box-shadow:0 8px 25px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.7),0 0 0 4px rgba(255,255,255,0.15);text-shadow:0 2px 10px rgba(0,0,0,0.3)">READ MORE →</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.2);backdrop-filter:blur(10px);padding:25px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.1)">
<p style="color:rgba(255,255,255,0.9);font-size:12px;margin:0;text-shadow:0 1px 3px rgba(0,0,0,0.3)">📧 ${v.senderName} | ${v.companyName} © ${v.year}</p>
</td></tr>
</table>`, "#10b981");

    case "password-reset":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:linear-gradient(135deg,#dc2626 0%,#f97316 100%);border-radius:30px;overflow:hidden;box-shadow:0 20px 60px rgba(220,38,38,0.5),0 0 0 1px rgba(255,255,255,0.1) inset">
<tr><td style="background:rgba(255,255,255,0.2);backdrop-filter:blur(15px);padding:40px;border-bottom:1px solid rgba(255,255,255,0.3)">
<div style="text-align:center">
<div style="width:100px;height:100px;margin:0 auto 20px;background:rgba(255,255,255,0.3);backdrop-filter:blur(10px);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;border:3px solid rgba(255,255,255,0.5);box-shadow:0 0 50px rgba(255,223,0,0.8),inset 0 0 30px rgba(255,255,255,0.3);animation:pulse 2s infinite">
<span style="font-size:50px">🔒</span>
</div>
<h1 class="mobile-heading" style="color:#fff;margin:0;font-size:32px;font-weight:900;text-shadow:0 4px 20px rgba(0,0,0,0.4),0 0 60px rgba(255,255,255,0.6)">Security Alert</h1>
<p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:14px;text-shadow:0 2px 10px rgba(0,0,0,0.3)">Password Reset Request</p>
</div>
</td></tr>
<tr><td class="mobile-padding" style="padding:50px 45px">
<div style="background:rgba(255,255,255,0.25);backdrop-filter:blur(20px);border-radius:25px;padding:35px;border:1px solid rgba(255,255,255,0.4);box-shadow:0 10px 40px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.6)">
<p class="mobile-text" style="color:#fff;font-size:17px;line-height:1.7;margin:0 0 12px;text-shadow:0 2px 8px rgba(0,0,0,0.2)">Hi <strong style="font-weight:800">${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:rgba(255,255,255,0.95);font-size:15px;line-height:1.8;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<div style="background:rgba(255,223,0,0.25);border:2px dashed rgba(255,223,0,0.8);border-radius:15px;padding:20px;margin:25px 0;backdrop-filter:blur(10px);box-shadow:0 0 30px rgba(255,223,0,0.4)">
<p style="color:#fff;font-size:13px;line-height:1.6;margin:0;text-shadow:0 1px 3px rgba(0,0,0,0.3)">⚠️ <strong>Security:</strong> Link expires in 24h. Ignore if not you.</p>
</div>
<div style="background:rgba(147,51,234,0.2);border-left:4px solid rgba(147,51,234,0.8);border-radius:12px;padding:18px;margin:20px 0;backdrop-filter:blur(8px)">
<p style="color:#fff;font-size:12px;font-style:italic;margin:0;text-shadow:0 1px 3px rgba(0,0,0,0.2)">💭 "${getRandomQuote()}"</p>
</div>
<div style="text-align:center;margin:30px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.35);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:18px 50px;border-radius:50px;font-weight:800;font-size:16px;border:2px solid rgba(255,255,255,0.6);box-shadow:0 8px 30px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.7),0 0 0 4px rgba(255,255,255,0.15);text-shadow:0 2px 10px rgba(0,0,0,0.3)">RESET PASSWORD 🔐</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.25);backdrop-filter:blur(10px);padding:25px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.1)">
<p style="color:rgba(255,255,255,0.9);font-size:12px;margin:0;text-shadow:0 1px 3px rgba(0,0,0,0.4)">${v.senderName} | ${v.companyName} © ${v.year}</p>
</td></tr>
</table>`, "#dc2626");

    case "invoice":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;background:linear-gradient(135deg,#1e3a8a 0%,#3b82f6 50%,#60a5fa 100%);border-radius:25px;overflow:hidden;box-shadow:0 20px 60px rgba(30,58,138,0.5),0 0 0 2px rgba(96,165,250,0.3)">
<tr><td style="background:rgba(255,255,255,0.15);backdrop-filter:blur(15px);padding:35px 40px;border-bottom:1px solid rgba(255,255,255,0.2)">
<table width="100%"><tr>
<td><div style="width:55px;height:55px;background:rgba(255,255,255,0.3);backdrop-filter:blur(10px);text-align:center;line-height:55px;color:#fff;font-size:26px;font-weight:900;font-family:monospace;margin-bottom:8px;border-radius:12px;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 25px rgba(255,255,255,0.3)">${v.companyName.charAt(0)}</div><h1 class="mobile-heading" style="color:#fff;margin:0;font-size:20px;font-weight:900;font-family:'Courier New',monospace;letter-spacing:2px;text-shadow:0 2px 8px rgba(0,0,0,0.3)">${v.companyName}</h1></td>
<td style="text-align:right;vertical-align:top"><div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.4);padding:10px 16px;display:inline-block;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.15)"><span style="color:rgba(255,255,255,0.8);font-size:10px;text-transform:uppercase;letter-spacing:2px;display:block;font-weight:700">INVOICE</span><span style="color:#fff;font-size:26px;font-weight:900;font-family:monospace;text-shadow:0 2px 8px rgba(0,0,0,0.3)">#${v.invoiceNumber || "001"}</span></div></td>
</tr></table>
</td></tr>
<tr><td class="mobile-padding" style="padding:40px">
<div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(20px);border-radius:20px;padding:35px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 8px 32px rgba(0,0,0,0.15),inset 0 1px 0 rgba(255,255,255,0.5)">
<table width="100%" style="margin-bottom:20px"><tr>
<td style="vertical-align:top;width:50%"><p style="color:rgba(255,255,255,0.7);font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:800;margin:0 0 6px">BILL TO:</p><p style="color:#fff;font-size:17px;font-weight:800;margin:0;font-family:'Courier New',monospace;text-shadow:0 2px 6px rgba(0,0,0,0.2)">${v.recipientName}</p></td>
<td style="vertical-align:top;text-align:right;width:50%"><p style="color:rgba(255,255,255,0.7);font-size:10px;text-transform:uppercase;letter-spacing:2px;font-weight:800;margin:0 0 6px">DATE:</p><p style="color:#fff;font-size:13px;font-weight:700;margin:0;font-family:monospace">${new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}</p></td>
</tr></table>
<p class="mobile-text" style="color:rgba(255,255,255,0.95);font-size:14px;line-height:1.8;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<table width="100%" cellpadding="14" cellspacing="0" style="background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.25);border-radius:15px;margin-bottom:20px;overflow:hidden">
<tr style="background:rgba(0,0,0,0.3)"><td style="font-weight:800;color:#fff;font-size:11px;text-transform:uppercase;letter-spacing:2px;padding:14px">DESCRIPTION</td><td style="text-align:center;font-weight:800;color:#fff;font-size:11px;text-transform:uppercase;letter-spacing:2px;padding:14px">QTY</td><td style="text-align:right;font-weight:800;color:#fff;font-size:11px;text-transform:uppercase;letter-spacing:2px;padding:14px">AMOUNT</td></tr>
<tr><td style="color:#fff;font-size:14px;padding:14px;border-bottom:1px solid rgba(255,255,255,0.15)">${v.itemName || "Service Fee"}</td><td style="text-align:center;color:#fff;font-size:14px;padding:14px;font-family:monospace;border-bottom:1px solid rgba(255,255,255,0.15)">1</td><td style="text-align:right;color:#fff;font-size:14px;padding:14px;font-family:monospace;border-bottom:1px solid rgba(255,255,255,0.15)">${v.amount || "$99.00"}</td></tr>
<tr style="background:rgba(255,255,255,0.15)"><td colspan="2" style="font-weight:900;color:#fff;font-size:16px;padding:16px 14px;text-transform:uppercase;letter-spacing:1px">TOTAL DUE</td><td style="text-align:right;font-weight:900;color:#fff;font-size:30px;padding:16px 14px;font-family:monospace;text-shadow:0 3px 10px rgba(0,0,0,0.4)">${v.amount || "$99.00"}</td></tr>
</table>
<div style="background:rgba(234,179,8,0.2);border-left:4px solid rgba(234,179,8,0.8);border-radius:10px;padding:16px;margin:20px 0;backdrop-filter:blur(5px)">
<p style="color:#fff;font-size:12px;font-style:italic;margin:0;text-shadow:0 1px 3px rgba(0,0,0,0.2)">\ud83d\udca1 "${getRandomQuote()}"</p>
</div>
<div style="text-align:center;margin:25px 0 10px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.3);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:16px 50px;font-weight:900;font-size:14px;text-transform:uppercase;letter-spacing:2px;border:2px solid rgba(255,255,255,0.5);border-radius:50px;box-shadow:0 8px 25px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.6),0 0 0 4px rgba(255,255,255,0.1);text-shadow:0 2px 10px rgba(0,0,0,0.3)">PAY NOW \ud83d\udcb3</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.25);backdrop-filter:blur(10px);padding:25px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.1)">
<p style="color:rgba(255,255,255,0.8);font-size:11px;margin:0;font-family:monospace;text-shadow:0 1px 3px rgba(0,0,0,0.4)">${v.companyName} | ${v.senderName} | \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#1e3a8a");

    case "promotion":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;border-radius:28px;overflow:hidden;background:linear-gradient(135deg,#ec4899 0%,#f43f5e 40%,#fb923c 100%);box-shadow:0 0 60px rgba(236,72,153,0.5),0 0 120px rgba(244,63,94,0.3)">
<tr><td style="padding:45px 40px 25px;text-align:center;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);border-bottom:1px solid rgba(255,255,255,0.2)">
<div style="display:inline-block;background:rgba(255,255,255,0.2);backdrop-filter:blur(20px);border:2px solid rgba(255,255,255,0.4);border-radius:20px;padding:25px 40px;box-shadow:0 0 40px rgba(255,255,255,0.15),inset 0 1px 0 rgba(255,255,255,0.3)">
<div style="font-size:72px;font-weight:900;line-height:0.9;color:#fff;text-shadow:0 0 30px rgba(255,255,255,0.6)">${v.discount || "50%"}</div>
<div style="font-size:22px;font-weight:800;text-transform:uppercase;letter-spacing:4px;color:rgba(255,255,255,0.9);margin-top:8px">OFF</div>
</div>
<h2 class="mobile-heading" style="color:#fff;margin:25px 0 0;font-size:26px;font-weight:900;text-transform:uppercase;letter-spacing:1px;text-shadow:0 2px 10px rgba(0,0,0,0.2)">${v.subject}</h2>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px">
<div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);border-radius:22px;padding:35px 30px;border:1px solid rgba(255,255,255,0.25);box-shadow:0 8px 32px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.2)">
<div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border:2px dashed rgba(255,255,255,0.5);padding:18px;margin:0 0 25px;border-radius:14px;text-align:center;box-shadow:0 0 25px rgba(255,255,255,0.1)">
<p style="color:#fff;font-size:14px;font-weight:800;margin:0;text-transform:uppercase;text-shadow:0 1px 3px rgba(0,0,0,0.2)">\u23f0 Limited Time Only!</p>
</div>
<p class="mobile-text" style="color:#fff;font-size:18px;line-height:1.7;margin:0 0 12px;font-weight:600">Hey ${v.recipientName}! \ud83c\udf89</p>
<p class="mobile-text" style="color:rgba(255,255,255,0.85);font-size:15px;line-height:1.8;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border-left:4px solid rgba(255,255,255,0.6);padding:15px 20px;border-radius:0 12px 12px 0;margin:0 0 25px">
<p style="color:rgba(255,255,255,0.7);font-size:12px;margin:0 0 4px;font-weight:600">\u2728 Inspiration</p>
<p style="color:#fff;font-size:13px;font-style:italic;margin:0;line-height:1.5">${getRandomQuote()}</p>
</div>
<div style="text-align:center;margin:25px 0 5px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.25);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:18px 55px;font-weight:900;font-size:15px;text-transform:uppercase;letter-spacing:2px;border-radius:50px;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 30px rgba(255,255,255,0.2),0 8px 25px rgba(0,0,0,0.15)">SHOP NOW \ud83d\uded2</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.2);backdrop-filter:blur(10px);padding:22px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.15)">
<p style="color:rgba(255,255,255,0.6);font-size:12px;margin:0;line-height:1.6">${v.senderName} | ${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#fdf2f8");

    case "event-invite":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;border-radius:28px;overflow:hidden;background:linear-gradient(135deg,#7c3aed 0%,#a855f7 50%,#c084fc 100%);box-shadow:0 0 60px rgba(124,58,237,0.5),0 0 120px rgba(168,85,247,0.3)">
<tr><td style="padding:45px 40px 25px;text-align:center;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);border-bottom:1px solid rgba(255,255,255,0.2)">
<div style="width:80px;height:80px;margin:0 auto 20px;background:rgba(255,255,255,0.2);backdrop-filter:blur(20px);border-radius:50%;border:3px solid rgba(255,255,255,0.4);line-height:80px;font-size:40px;box-shadow:0 0 40px rgba(255,255,255,0.2)">\ud83c\udf89</div>
<p style="color:rgba(255,255,255,0.8);font-size:13px;text-transform:uppercase;letter-spacing:4px;font-weight:800;margin:0 0 12px">You're Invited</p>
<h1 class="mobile-heading" style="color:#fff;margin:0;font-size:26px;font-weight:800;line-height:1.3;text-shadow:0 2px 10px rgba(0,0,0,0.2)">${v.subject}</h1>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px">
<div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);border-radius:22px;padding:35px 30px;border:1px solid rgba(255,255,255,0.25);box-shadow:0 8px 32px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.2)">
<p class="mobile-text" style="color:#fff;font-size:16px;line-height:1.7;margin:0 0 10px;text-align:center;font-style:italic">Dear <strong style="color:#fff;text-shadow:0 0 10px rgba(255,255,255,0.5)">${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:rgba(255,255,255,0.85);font-size:14px;line-height:1.9;margin:0 0 28px;white-space:pre-wrap;text-align:center">${v.body}</p>
<div style="background:rgba(255,255,255,0.12);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.2);border-radius:16px;padding:25px;margin-bottom:25px;box-shadow:0 0 25px rgba(255,255,255,0.08)">
<table width="100%" cellpadding="10" cellspacing="0">
<tr><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.15);padding-bottom:15px"><div style="font-size:28px;margin-bottom:6px">\ud83d\udcc5</div><p style="margin:0;color:rgba(255,255,255,0.7);font-weight:800;font-size:11px;text-transform:uppercase;letter-spacing:2px">Date</p><p style="margin:6px 0 0;color:#fff;font-size:15px;font-weight:700">${v.eventDate || "TBA"}</p></td></tr>
<tr><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.15);padding:15px 0"><div style="font-size:28px;margin-bottom:6px">\u23f0</div><p style="margin:0;color:rgba(255,255,255,0.7);font-weight:800;font-size:11px;text-transform:uppercase;letter-spacing:2px">Time</p><p style="margin:6px 0 0;color:#fff;font-size:15px;font-weight:700">${v.eventTime || "TBA"}</p></td></tr>
<tr><td style="text-align:center;padding-top:15px"><div style="font-size:28px;margin-bottom:6px">\ud83d\udccd</div><p style="margin:0;color:rgba(255,255,255,0.7);font-weight:800;font-size:11px;text-transform:uppercase;letter-spacing:2px">Location</p><p style="margin:6px 0 0;color:#fff;font-size:15px;font-weight:700">${v.eventLocation || "Online"}</p></td></tr>
</table>
</div>
<div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border-left:4px solid rgba(255,255,255,0.5);padding:15px 20px;border-radius:0 12px 12px 0;margin:0 0 25px">
<p style="color:rgba(255,255,255,0.7);font-size:12px;margin:0 0 4px;font-weight:600">\u2728 Inspiration</p>
<p style="color:#fff;font-size:13px;font-style:italic;margin:0;line-height:1.5">${getRandomQuote()}</p>
</div>
<div style="text-align:center;margin:20px 0 5px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.25);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:16px 50px;font-weight:800;font-size:14px;text-transform:uppercase;letter-spacing:2px;border-radius:50px;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 30px rgba(255,255,255,0.2),0 8px 25px rgba(0,0,0,0.15)">RSVP NOW</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.2);backdrop-filter:blur(10px);padding:22px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.15)">
<p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0;line-height:1.6;font-style:italic">${v.senderName} \u2022 ${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#f5f3ff");

    case "feedback":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;border-radius:28px;overflow:hidden;background:linear-gradient(135deg,#f59e0b 0%,#eab308 50%,#fbbf24 100%);box-shadow:0 0 60px rgba(245,158,11,0.5),0 0 120px rgba(234,179,8,0.3)">
<tr><td style="padding:45px 40px 25px;text-align:center;background:rgba(255,255,255,0.12);backdrop-filter:blur(15px);border-bottom:1px solid rgba(255,255,255,0.2)">
<div style="display:inline-block;margin-bottom:15px">
<span style="font-size:36px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.5))">\u2b50</span>
<span style="font-size:36px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.5))">\u2b50</span>
<span style="font-size:36px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.5))">\u2b50</span>
<span style="font-size:36px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.5))">\u2b50</span>
<span style="font-size:36px;filter:drop-shadow(0 0 8px rgba(255,255,255,0.5))">\u2b50</span>
</div>
<h1 class="mobile-heading" style="color:#fff;margin:0;font-size:26px;font-weight:800;text-shadow:0 2px 10px rgba(0,0,0,0.15)">How did we do?</h1>
<p style="color:rgba(255,255,255,0.85);margin:10px 0 0;font-size:15px">Your feedback helps us improve</p>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px">
<div style="background:rgba(255,255,255,0.18);backdrop-filter:blur(20px);border-radius:22px;padding:35px 30px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 8px 32px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.3)">
<div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border-left:4px solid rgba(255,255,255,0.6);padding:18px;margin:0 0 25px;border-radius:0 12px 12px 0;box-shadow:0 0 20px rgba(255,255,255,0.1)">
<p style="color:#fff;font-size:13px;font-weight:700;margin:0 0 4px">\ud83d\udca1 Quick Survey</p>
<p style="color:rgba(255,255,255,0.8);font-size:12px;margin:0;line-height:1.6">Takes less than 2 minutes to complete</p>
</div>
<p class="mobile-text" style="color:#fff;font-size:16px;line-height:1.7;margin:0 0 12px">Hi <strong>${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:rgba(255,255,255,0.85);font-size:14px;line-height:1.9;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<div style="background:rgba(255,255,255,0.12);backdrop-filter:blur(15px);border-radius:16px;padding:22px;margin-bottom:25px;border:1px solid rgba(255,255,255,0.2);text-align:center;box-shadow:0 0 25px rgba(255,255,255,0.08)">
<p style="color:rgba(255,255,255,0.8);font-size:13px;margin:0 0 15px;font-weight:600">Rate your experience:</p>
<div style="display:inline-block">
<span style="display:inline-block;width:44px;height:44px;background:rgba(255,255,255,0.2);backdrop-filter:blur(8px);border-radius:10px;line-height:44px;text-align:center;font-size:22px;margin:0 4px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 0 15px rgba(255,255,255,0.1)">\ud83d\ude1e</span>
<span style="display:inline-block;width:44px;height:44px;background:rgba(255,255,255,0.2);backdrop-filter:blur(8px);border-radius:10px;line-height:44px;text-align:center;font-size:22px;margin:0 4px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 0 15px rgba(255,255,255,0.1)">\ud83d\ude10</span>
<span style="display:inline-block;width:44px;height:44px;background:rgba(255,255,255,0.2);backdrop-filter:blur(8px);border-radius:10px;line-height:44px;text-align:center;font-size:22px;margin:0 4px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 0 15px rgba(255,255,255,0.1)">\ud83d\ude42</span>
<span style="display:inline-block;width:44px;height:44px;background:rgba(255,255,255,0.2);backdrop-filter:blur(8px);border-radius:10px;line-height:44px;text-align:center;font-size:22px;margin:0 4px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 0 15px rgba(255,255,255,0.1)">\ud83d\ude04</span>
<span style="display:inline-block;width:44px;height:44px;background:rgba(255,255,255,0.2);backdrop-filter:blur(8px);border-radius:10px;line-height:44px;text-align:center;font-size:22px;margin:0 4px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 0 15px rgba(255,255,255,0.1)">\ud83e\udd29</span>
</div>
</div>
<div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border-left:4px solid rgba(255,255,255,0.5);padding:15px 20px;border-radius:0 12px 12px 0;margin:0 0 25px">
<p style="color:rgba(255,255,255,0.7);font-size:12px;margin:0 0 4px;font-weight:600">\u2728 Thought of the day</p>
<p style="color:#fff;font-size:13px;font-style:italic;margin:0;line-height:1.5">${getRandomQuote()}</p>
</div>
<div style="text-align:center;margin:20px 0 5px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.25);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:15px 45px;border-radius:50px;font-weight:700;font-size:14px;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 30px rgba(255,255,255,0.2),0 8px 25px rgba(0,0,0,0.15)">Share Feedback \ud83d\udcac</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.2);backdrop-filter:blur(10px);padding:22px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.15)">
<p style="color:rgba(255,255,255,0.6);font-size:12px;margin:0;line-height:1.6">${v.senderName} | ${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#fffbeb");

    case "order-confirm":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;border-radius:28px;overflow:hidden;background:linear-gradient(135deg,#059669 0%,#10b981 50%,#34d399 100%);box-shadow:0 0 60px rgba(5,150,105,0.5),0 0 120px rgba(16,185,129,0.3)">
<tr><td style="padding:40px;text-align:center;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);border-bottom:1px solid rgba(255,255,255,0.2)">
<div style="width:90px;height:90px;background:rgba(255,255,255,0.2);backdrop-filter:blur(20px);border-radius:50%;margin:0 auto 15px;line-height:90px;font-size:50px;border:3px solid rgba(255,255,255,0.4);box-shadow:0 0 40px rgba(255,255,255,0.2)">\u2714\ufe0f</div>
<h1 class="mobile-heading" style="color:#fff;margin:0;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:1px;text-shadow:0 2px 10px rgba(0,0,0,0.15)">Order Confirmed</h1>
<div style="display:inline-block;background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);padding:8px 20px;border-radius:20px;margin-top:12px;border:1px solid rgba(255,255,255,0.3)">
<p style="color:#fff;margin:0;font-size:14px;font-weight:600">Order #<span style="font-family:monospace;font-size:16px">${v.orderNumber || "12345"}</span></p>
</div>
</td></tr>
<tr><td style="background:rgba(255,255,255,0.08);backdrop-filter:blur(10px);padding:20px 40px;border-bottom:1px solid rgba(255,255,255,0.15)">
<table width="100%"><tr>
<td style="width:60px;vertical-align:middle"><div style="width:50px;height:50px;background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border-radius:12px;line-height:50px;text-align:center;font-size:24px;border:1px solid rgba(255,255,255,0.3)">\ud83d\ude9a</div></td>
<td style="vertical-align:middle"><p style="color:rgba(255,255,255,0.7);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px">Estimated Delivery</p><p style="color:#fff;font-size:20px;font-weight:900;margin:0;font-family:monospace;text-shadow:0 0 10px rgba(255,255,255,0.3)">${v.deliveryDate || "3-5 Days"}</p></td>
</tr></table>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px">
<div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);border-radius:22px;padding:35px 30px;border:1px solid rgba(255,255,255,0.25);box-shadow:0 8px 32px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.2)">
<p class="mobile-text" style="color:#fff;font-size:16px;line-height:1.7;margin:0 0 12px">Hi <strong style="text-shadow:0 0 10px rgba(255,255,255,0.4)">${v.recipientName}</strong>,</p>
<p class="mobile-text" style="color:rgba(255,255,255,0.85);font-size:14px;line-height:1.8;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.2);border-radius:16px;padding:25px;margin-bottom:25px;box-shadow:0 0 25px rgba(255,255,255,0.08)">
<p style="color:#fff;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin:0 0 15px;border-bottom:1px solid rgba(255,255,255,0.2);padding-bottom:10px">Order Summary</p>
<table width="100%" cellpadding="10" cellspacing="0">
<tr><td style="color:rgba(255,255,255,0.9);font-size:14px;border-bottom:1px solid rgba(255,255,255,0.1)">${v.itemName || "Product"}</td><td style="text-align:right;color:#fff;font-size:14px;font-weight:700;border-bottom:1px solid rgba(255,255,255,0.1);font-family:monospace">${v.amount || "$49.99"}</td></tr>
<tr><td style="color:rgba(255,255,255,0.9);font-size:14px;border-bottom:1px solid rgba(255,255,255,0.1)">Shipping</td><td style="text-align:right;color:#fff;font-size:14px;font-weight:700;border-bottom:1px solid rgba(255,255,255,0.1)">FREE</td></tr>
<tr><td style="color:#fff;font-size:16px;font-weight:800;text-transform:uppercase;padding-top:8px">Total</td><td style="text-align:right;color:#fff;font-size:24px;font-weight:900;font-family:monospace;padding-top:8px;text-shadow:0 0 15px rgba(255,255,255,0.4)">${v.amount || "$49.99"}</td></tr>
</table>
</div>
<div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border-left:4px solid rgba(255,255,255,0.5);padding:15px 20px;border-radius:0 12px 12px 0;margin:0 0 25px">
<p style="color:rgba(255,255,255,0.7);font-size:12px;margin:0 0 4px;font-weight:600">\u2728 Inspiration</p>
<p style="color:#fff;font-size:13px;font-style:italic;margin:0;line-height:1.5">${getRandomQuote()}</p>
</div>
<div style="text-align:center;margin:20px 0 5px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.25);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:16px 50px;font-weight:800;font-size:14px;text-transform:uppercase;letter-spacing:1.5px;border-radius:50px;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 30px rgba(255,255,255,0.2),0 8px 25px rgba(0,0,0,0.15)">TRACK ORDER</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.2);backdrop-filter:blur(10px);padding:22px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.15)">
<p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0;line-height:1.6;font-weight:600">${v.companyName} | ${v.senderName} | \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#ecfdf5");

    case "birthday":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;border-radius:28px;overflow:hidden;background:linear-gradient(135deg,#ec4899 0%,#f43f5e 30%,#fb923c 60%,#fbbf24 100%);box-shadow:0 0 60px rgba(236,72,153,0.4),0 0 120px rgba(244,63,94,0.3),0 0 180px rgba(251,146,60,0.2)">
<tr><td style="padding:40px;text-align:center;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);border-bottom:1px solid rgba(255,255,255,0.2)">
<div style="font-size:48px;margin-bottom:15px;filter:drop-shadow(0 0 10px rgba(255,255,255,0.5))">\ud83c\udf89 \ud83c\udf88 \ud83c\udf81 \ud83c\udf82 \ud83c\udf8a</div>
<div style="display:inline-block;background:rgba(255,255,255,0.2);backdrop-filter:blur(20px);padding:25px 40px;border-radius:20px;border:2px solid rgba(255,255,255,0.4);box-shadow:0 0 40px rgba(255,255,255,0.15),inset 0 1px 0 rgba(255,255,255,0.3)">
<h1 class="mobile-heading" style="margin:0;font-size:38px;font-weight:900;color:#fff;text-shadow:0 0 30px rgba(255,255,255,0.5);line-height:1">HAPPY</h1>
<h1 class="mobile-heading" style="margin:0;font-size:38px;font-weight:900;color:#fff;text-shadow:0 0 30px rgba(255,255,255,0.5);line-height:1">BIRTHDAY!</h1>
</div>
<div style="font-size:48px;margin-top:15px;filter:drop-shadow(0 0 10px rgba(255,255,255,0.5))">\ud83c\udf8a \ud83c\udf82 \ud83c\udf81 \ud83c\udf88 \ud83c\udf89</div>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px">
<div style="background:rgba(255,255,255,0.18);backdrop-filter:blur(20px);border-radius:22px;padding:35px 30px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 8px 32px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.3);text-align:center">
<p class="mobile-text" style="color:#fff;font-size:20px;line-height:1.7;margin:0 0 15px;font-weight:700">Dear <span style="text-shadow:0 0 15px rgba(255,255,255,0.6)">${v.recipientName}</span>! \ud83c\udf88</p>
<p class="mobile-text" style="color:rgba(255,255,255,0.9);font-size:15px;line-height:1.9;margin:0 0 25px;white-space:pre-wrap">${v.body}</p>
<div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3);border-radius:16px;padding:20px;margin:25px 0;box-shadow:0 0 25px rgba(255,255,255,0.1)">
<p style="color:#fff;font-size:16px;font-weight:800;margin:0;text-shadow:0 0 10px rgba(255,255,255,0.4)">\ud83c\udf81 Special Birthday Surprise Inside! \ud83c\udf81</p>
</div>
<div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border-left:4px solid rgba(255,255,255,0.5);padding:15px 20px;border-radius:0 12px 12px 0;margin:0 0 25px;text-align:left">
<p style="color:rgba(255,255,255,0.7);font-size:12px;margin:0 0 4px;font-weight:600">\ud83c\udf1f Birthday wisdom</p>
<p style="color:#fff;font-size:13px;font-style:italic;margin:0;line-height:1.5">${getRandomQuote()}</p>
</div>
<div style="margin:25px 0 5px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.25);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:18px 50px;font-weight:900;font-size:15px;text-transform:uppercase;letter-spacing:2px;border-radius:50px;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 30px rgba(255,255,255,0.25),0 8px 25px rgba(0,0,0,0.15)">CLAIM MY GIFT \ud83c\udf81</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.2);backdrop-filter:blur(10px);padding:22px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.15)">
<p style="color:rgba(255,255,255,0.7);font-size:12px;margin:0;line-height:1.6;font-weight:700">With love from ${v.senderName} \u2764\ufe0f | ${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#fdf2f8");

    case "dark":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;border-radius:28px;overflow:hidden;background:linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f172a 100%);box-shadow:0 0 60px rgba(34,211,238,0.3),0 0 120px rgba(168,85,247,0.2),0 0 180px rgba(244,63,94,0.15);border:1px solid rgba(34,211,238,0.3)">
<tr><td style="padding:40px;text-align:center;background:rgba(34,211,238,0.05);backdrop-filter:blur(15px);border-bottom:1px solid rgba(34,211,238,0.2)">
<div style="position:relative;display:inline-block">
<div style="width:12px;height:12px;background:#22d3ee;border-radius:50%;box-shadow:0 0 20px #22d3ee,0 0 40px #22d3ee;display:inline-block;margin:0 8px"></div>
<div style="width:8px;height:8px;background:#a855f7;border-radius:50%;box-shadow:0 0 15px #a855f7,0 0 30px #a855f7;display:inline-block;margin:0 8px"></div>
<div style="width:10px;height:10px;background:#f43f5e;border-radius:50%;box-shadow:0 0 18px #f43f5e,0 0 35px #f43f5e;display:inline-block;margin:0 8px"></div>
</div>
<h1 class="mobile-heading" style="color:#22d3ee;margin:20px 0 0;font-size:30px;font-weight:900;text-transform:uppercase;letter-spacing:3px;text-shadow:0 0 30px rgba(34,211,238,0.6),0 0 60px rgba(34,211,238,0.3)">${v.subject}</h1>
<div style="width:80px;height:3px;background:linear-gradient(90deg,#22d3ee,#a855f7,#f43f5e);margin:15px auto 0;box-shadow:0 0 15px rgba(34,211,238,0.5)"></div>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px">
<div style="background:rgba(34,211,238,0.08);backdrop-filter:blur(20px);border-radius:22px;padding:35px 30px;border:1px solid rgba(34,211,238,0.2);box-shadow:0 0 40px rgba(34,211,238,0.1),inset 0 1px 0 rgba(34,211,238,0.1)">
<p class="mobile-text" style="color:#e2e8f0;font-size:17px;line-height:1.7;margin:0 0 12px">Hey <strong style="color:#22d3ee;text-shadow:0 0 15px rgba(34,211,238,0.5)">${v.recipientName}</strong>,</p>
<p style="color:#94a3b8;font-size:15px;line-height:1.9;margin:0 0 30px;white-space:pre-wrap">${v.body}</p>
<div style="background:rgba(34,211,238,0.1);backdrop-filter:blur(15px);border:1px solid rgba(34,211,238,0.2);border-radius:16px;padding:20px;margin:0 0 25px;box-shadow:0 0 30px rgba(34,211,238,0.1)">
<table width="100%"><tr>
<td style="width:50px;vertical-align:middle"><div style="width:40px;height:40px;background:rgba(34,211,238,0.15);backdrop-filter:blur(10px);border-radius:10px;line-height:40px;text-align:center;font-size:20px;border:1px solid rgba(34,211,238,0.3);box-shadow:0 0 20px rgba(34,211,238,0.2)">\u26a1</div></td>
<td style="vertical-align:middle;padding-left:15px"><p style="color:#22d3ee;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 4px;text-shadow:0 0 10px rgba(34,211,238,0.3)">System Alert</p><p style="color:#64748b;font-size:12px;margin:0">Your attention required</p></td>
</tr></table>
</div>
<div style="background:rgba(168,85,247,0.1);backdrop-filter:blur(8px);border-left:4px solid rgba(168,85,247,0.6);padding:15px 20px;border-radius:0 12px 12px 0;margin:0 0 25px;box-shadow:0 0 20px rgba(168,85,247,0.1)">
<p style="color:rgba(168,85,247,0.7);font-size:12px;margin:0 0 4px;font-weight:600">\ud83d\udcad Cyber thought</p>
<p style="color:#e2e8f0;font-size:13px;font-style:italic;margin:0;line-height:1.5">${getRandomQuote()}</p>
</div>
<div style="text-align:center;margin:25px 0 5px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(34,211,238,0.15);backdrop-filter:blur(10px);color:#22d3ee;text-decoration:none;padding:16px 50px;font-weight:900;font-size:14px;text-transform:uppercase;letter-spacing:2px;border-radius:50px;border:2px solid rgba(34,211,238,0.5);box-shadow:0 0 30px rgba(34,211,238,0.3),0 0 60px rgba(34,211,238,0.15)">ACCESS NOW</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.3);backdrop-filter:blur(10px);padding:22px 40px;text-align:center;border-top:1px solid rgba(34,211,238,0.15)">
<p style="color:#475569;font-size:11px;margin:0;line-height:1.6;font-family:monospace;text-transform:uppercase;letter-spacing:1px">${v.senderName} | ${v.companyName} | \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#0f172a");

    case "casual":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:600px;margin:0 auto;border-radius:28px;overflow:hidden;background:linear-gradient(135deg,#f97316 0%,#fb923c 50%,#fbbf24 100%);box-shadow:0 0 60px rgba(249,115,22,0.5),0 0 120px rgba(251,146,60,0.3)">
<tr><td class="mobile-padding" style="padding:40px 40px 25px;text-align:center;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);border-bottom:1px solid rgba(255,255,255,0.2)">
<div style="font-size:52px;margin-bottom:8px;filter:drop-shadow(0 0 15px rgba(255,255,255,0.4))">\ud83d\udc4b</div>
<h1 class="mobile-heading" style="color:#fff;margin:0;font-size:32px;font-weight:800;text-shadow:0 2px 10px rgba(0,0,0,0.15)">Hey ${v.recipientName}!</h1>
<div style="width:100px;height:4px;background:rgba(255,255,255,0.5);margin:15px auto 0;border-radius:2px;box-shadow:0 0 10px rgba(255,255,255,0.3)"></div>
</td></tr>
<tr><td class="mobile-padding" style="padding:35px 40px">
<div style="background:rgba(255,255,255,0.18);backdrop-filter:blur(20px);border-radius:22px;padding:35px 30px;border:1px solid rgba(255,255,255,0.3);box-shadow:0 8px 32px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.3);position:relative">
<div style="display:inline-block;background:rgba(255,255,255,0.25);backdrop-filter:blur(10px);color:#fff;padding:6px 18px;border-radius:20px;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:1px;border:1px solid rgba(255,255,255,0.4);margin-bottom:20px;box-shadow:0 0 15px rgba(255,255,255,0.15)">Friendly Note</div>
<p class="mobile-text" style="color:#fff;font-size:17px;line-height:2;margin:0 0 20px;white-space:pre-wrap">${v.body}</p>
<div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border-left:4px solid rgba(255,255,255,0.5);padding:15px 20px;border-radius:0 12px 12px 0;margin:0 0 25px">
<p style="color:rgba(255,255,255,0.7);font-size:12px;margin:0 0 4px;font-weight:600">\u2600\ufe0f Warm thought</p>
<p style="color:#fff;font-size:13px;font-style:italic;margin:0;line-height:1.5">${getRandomQuote()}</p>
</div>
<div style="text-align:center;margin:20px 0 5px">
<a href="#" class="mobile-button" style="display:inline-block;background:rgba(255,255,255,0.25);backdrop-filter:blur(10px);color:#fff;text-decoration:none;padding:15px 45px;border-radius:50px;font-weight:800;font-size:15px;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 30px rgba(255,255,255,0.2),0 8px 25px rgba(0,0,0,0.15)">Reply Back \ud83d\udc8c</a>
</div>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.2);backdrop-filter:blur(10px);padding:22px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.15)">
<p style="color:rgba(255,255,255,0.7);font-size:13px;margin:0;font-weight:600">Sent with warmth by <strong>${v.senderName}</strong> \u2600\ufe0f</p>
<p style="color:rgba(255,255,255,0.5);font-size:11px;margin:6px 0 0">${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#fff7ed");

    case "just-email":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:580px;margin:0 auto;border-radius:28px;overflow:hidden;background:linear-gradient(135deg,#64748b 0%,#94a3b8 50%,#cbd5e1 100%);box-shadow:0 0 50px rgba(100,116,139,0.4),0 0 100px rgba(148,163,184,0.25)">
<tr><td class="mobile-padding" style="padding:40px 35px 15px;background:rgba(255,255,255,0.08);backdrop-filter:blur(15px);border-bottom:1px solid rgba(255,255,255,0.15)">
<p class="mobile-text" style="color:#fff;font-size:15px;line-height:1.7;margin:0 0 5px">Hi ${v.recipientName},</p>
</td></tr>
<tr><td class="mobile-padding" style="padding:25px 35px">
<div style="background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);border-radius:18px;padding:30px 25px;border:1px solid rgba(255,255,255,0.25);box-shadow:0 8px 32px rgba(0,0,0,0.1),inset 0 1px 0 rgba(255,255,255,0.2)">
<div style="color:rgba(255,255,255,0.9);font-size:15px;line-height:1.8;margin:0 0 20px;white-space:pre-line">${v.body}</div>
<div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(8px);border-left:3px solid rgba(255,255,255,0.4);padding:12px 18px;border-radius:0 10px 10px 0;margin:0 0 20px">
<p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0 0 3px;font-weight:600">\u270f\ufe0f Note</p>
<p style="color:rgba(255,255,255,0.85);font-size:12px;font-style:italic;margin:0;line-height:1.5">${getRandomQuote()}</p>
</div>
<p class="mobile-text" style="color:rgba(255,255,255,0.8);font-size:15px;line-height:1.7;margin:0 0 4px">Best,</p>
<p class="mobile-text" style="color:#fff;font-size:15px;line-height:1.7;margin:0;font-weight:600;text-shadow:0 0 10px rgba(255,255,255,0.3)">${v.senderName}</p>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.15);backdrop-filter:blur(10px);padding:18px 35px;border-top:1px solid rgba(255,255,255,0.1)">
<p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0;line-height:1.5">${v.companyName}</p>
<p style="color:rgba(255,255,255,0.35);font-size:11px;margin:4px 0 0">\u00a9 ${v.year}</p>
</td></tr>
</table>`, "#f1f5f9");

    case "minimal":
      template = baseWrapper(`
<table width="100%" cellpadding="0" cellspacing="0" class="container" style="max-width:580px;margin:0 auto;border-radius:28px;overflow:hidden;background:linear-gradient(135deg,#e2e8f0 0%,#f1f5f9 50%,#f8fafc 100%);box-shadow:0 0 50px rgba(226,232,240,0.6),0 0 100px rgba(241,245,249,0.4);border:1px solid rgba(255,255,255,0.8)">
<tr><td class="mobile-padding" style="padding:50px 45px 30px;background:rgba(255,255,255,0.3);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.5)">
<div style="width:40px;height:4px;background:linear-gradient(90deg,#334155,#64748b);margin-bottom:30px;border-radius:2px;box-shadow:0 0 10px rgba(51,65,85,0.2)"></div>
<h1 class="mobile-heading" style="color:#0f172a;margin:0;font-size:28px;font-weight:300;letter-spacing:-1px;line-height:1.2">${v.subject}</h1>
</td></tr>
<tr><td class="mobile-padding" style="padding:30px 45px 40px">
<div style="background:rgba(255,255,255,0.5);backdrop-filter:blur(25px);border-radius:20px;padding:35px 30px;border:1px solid rgba(255,255,255,0.6);box-shadow:0 8px 32px rgba(0,0,0,0.05),inset 0 2px 0 rgba(255,255,255,0.8)">
<p class="mobile-text" style="color:#1e293b;font-size:16px;line-height:1.6;margin:0 0 20px;font-weight:300">Hi <strong style="font-weight:600">${v.recipientName}</strong>,</p>
<div class="mobile-text" style="color:#334155;font-size:15px;line-height:1.8;margin:0 0 25px;white-space:pre-wrap;font-weight:300">${v.body}</div>
<div style="background:rgba(51,65,85,0.06);backdrop-filter:blur(8px);border-left:3px solid rgba(51,65,85,0.3);padding:15px 20px;border-radius:0 12px 12px 0;margin:0 0 25px">
<p style="color:#64748b;font-size:11px;margin:0 0 4px;font-weight:600;text-transform:uppercase;letter-spacing:1px">\u2728 Reflection</p>
<p style="color:#334155;font-size:13px;font-style:italic;margin:0;line-height:1.5">${getRandomQuote()}</p>
</div>
<div style="width:100%;height:1px;background:rgba(0,0,0,0.08);margin:25px 0"></div>
<p class="mobile-text" style="color:#64748b;font-size:14px;line-height:1.6;margin:0;font-weight:300">Best regards,<br><strong style="color:#0f172a;font-weight:600;font-size:15px">${v.senderName}</strong></p>
</div>
</td></tr>
<tr><td style="background:rgba(0,0,0,0.03);backdrop-filter:blur(10px);padding:25px 45px;border-top:1px solid rgba(0,0,0,0.05)">
<p style="color:#94a3b8;font-size:11px;margin:0;font-weight:300;letter-spacing:0.5px">${v.companyName} \u00a9 ${v.year}</p>
</td></tr>
</table>`, "#f8fafc");
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

