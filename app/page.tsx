"use client";

// Helper to format dates with ordinals (e.g., March 2nd)
function formatOrdinalDate(date: Date) {
  const day = date.getDate();
  let ordinal = 'th';
  if (day % 10 === 1 && day !== 11) ordinal = 'st';
  else if (day % 10 === 2 && day !== 12) ordinal = 'nd';
  else if (day % 10 === 3 && day !== 13) ordinal = 'rd';
  const month = date.toLocaleString('default', { month: 'long' });
  return `${month} ${day}${ordinal}`;
}

import { useState, useEffect, useRef } from "react";


export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [tone, setTone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [goal, setGoal] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [contentType, setContentType] = useState("");
  const [emojiStyle, setEmojiStyle] = useState<"none" | "light" | "heavy">("light");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [selectedCaptionIndex, setSelectedCaptionIndex] = useState<number | null>(null);
  const [selectedHashtagIndex, setSelectedHashtagIndex] = useState<number | null>(null);
  const [refineMode, setRefineMode] = useState<"similar" | "custom" | "manual" | null>(null);
  const [baseCaption, setBaseCaption] = useState<string | null>(null);
  // Store manual edits per caption index
  const [manualEdits, setManualEdits] = useState<Record<number, string>>({});
  // Store manual edits per hashtag index
  const [manualHashtagEdits, setManualHashtagEdits] = useState<Record<number, string>>({});
  // Manual editing state for hashtags
  const [manualEditingHashtagIndex, setManualEditingHashtagIndex] = useState<number | null>(null);
  const [refinePrompt, setRefinePrompt] = useState("");
  const copyButtonRef = useRef<HTMLDivElement | null>(null);
  const [showToast, setShowToast] = useState(false);
  // Add manual editing index state at the top level of the HomePage component
  // (this is needed for the new inline editing logic)
  // (insert below the other useState hooks)
  const [manualEditingIndex, setManualEditingIndex] = useState<number | null>(null);
  // Add loading dots state for dynamic animation
  const [loadingDots, setLoadingDots] = useState("");
  // Store generated hashtags after caption generation
  const [generatedHashtags, setGeneratedHashtags] = useState<string[]>([]);

  // Animate loading dots when loading is true
  useEffect(() => {
    if (!loading) {
      setLoadingDots("");
      return;
    }
    const interval = setInterval(() => {
      setLoadingDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    // Reset history on load (clean slate)
    localStorage.removeItem("postpilot_history");
    setHistory([]);
  }, []);


  useEffect(() => {
    if (result) {
      const el = document.getElementById("results-container");
      if (el) {
        el.classList.remove("opacity-0");
        el.classList.add("opacity-100");
      }
    }
  }, [result]);

  if (!authenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center">PostPilot Access</h2>
          <input
            type="password"
            placeholder="Enter access password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            onClick={() => {
              if (password === " ") {
                setAuthenticated(true);
              } else {
                alert("Incorrect password");
              }
            }}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Enter
          </button>
        </div>
      </main>
    );
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!file) return alert("Please select a file");

  const currentRefineMode = refineMode;

  setSelectedCaptionIndex(null);
  setSelectedHashtagIndex(null);

  const formData = new FormData();
  formData.append("file", file);
  // -----------------------------
  // SMART DROPDOWN PROMPT ENGINEERING
  // -----------------------------
  const audienceMap: Record<string, string> = {
    "Small business owners":
      "Speak directly to small business owners. Focus on growth, efficiency, ROI, and practical wins.",
    "Entrepreneurs":
      "Speak to ambitious entrepreneurs. Emphasize scaling, freedom, impact, and bold action.",
    "Gen Z":
      "Write for Gen Z. Use punchy sentences, trend-aware language, relatable humor, and high energy.",
    "Corporate professionals":
      "Write in a polished, strategic, value-driven tone for corporate professionals.",
    "Fitness audience":
      "Use high-energy, motivational language that inspires discipline, strength, and transformation.",
    "Moms and families":
      "Write in a warm, relatable, supportive tone that resonates with families and busy parents.",
    "Students":
      "Write for students. Make it relatable to school life, growth, ambition, productivity, and future success. Keep it engaging and modern."
  };

  const toneMap: Record<string, string> = {
    "luxury and premium":
      "Use elevated, refined language. Focus on exclusivity, sophistication, and premium value.",
    "high-energy fitness":
      "Use intense, motivating, action-driven language. Short impactful lines.",
    "Gen Z hype and trendy":
      "Use trendy phrasing, scroll-stopping hooks, and expressive energy.",
    "corporate and professional":
      "Use structured, confident, authoritative language with clear value propositions.",
    "minimalist and clean":
      "Use concise, sharp, and minimal wording. Avoid fluff."
  };

  const goalMap: Record<string, string> = {
    "Increase sales":
      "Drive urgency and conversions. Highlight benefits and clear calls-to-action.",
    "Drive website traffic":
      "Encourage curiosity and clicks. Tease value and insights.",
    "Build brand awareness":
      "Focus on storytelling and memorability.",
    "Increase engagement":
      "Encourage comments, shares, and interaction.",
    "Promote event":
      "Create excitement and urgency around the event.",
    "Launch announcement":
      "Make the launch feel important and exciting.",
    "Educate audience":
      "Provide clear, actionable value and insights."
  };

  const contentTypeMap: Record<string, string> = {
    "Product post":
      "Highlight features, benefits, and transformation outcomes.",
    "Testimonial":
      "Frame it as social proof. Emphasize results and credibility.",
    "Behind the scenes":
      "Make it personal, authentic, and insider-style.",
    "Announcement":
      "Make it bold and clear.",
    "Educational":
      "Break down insights in a clear, digestible format.",
    "Trend or meme":
      "Lean into relatability, humor, and cultural relevance."
  };

  // Example: If you want to insert a specific date into the prompt/caption, use formatOrdinalDate
  // const flashSaleDate = new Date('2026-03-02');
  // const formattedDate = formatOrdinalDate(flashSaleDate); // 'March 2nd'
  // Then use ${formattedDate} in your prompt/caption instead of a plain date string.

  const enhancedPrompt = `
You are an expert social media copywriter.

The user has uploaded a post. Focus on creating captions that relate to the **content of the post itself**. Use the following information only to tailor the captions, not to dictate them:

${companyName ? `Brand: ${companyName}.` : ""}
${goal ? `Goal: ${goal}.` : ""}
${targetAudience ? `Target Audience: ${targetAudience}.` : ""}
${tone ? `Tone: ${tone}.` : ""}
${contentType ? `Content Type: ${contentType}.` : ""}

Additional user instructions:
${prompt || "None provided."}

REQUIREMENTS:
- Start with a strong hook.
- Make each caption structurally different.
- Include a natural CTA aligned with the goal.
- Match the selected audience and tone **where relevant**.
- Focus on content relevance first; dropdowns only guide the style and approach.
- Avoid generic language.
`;

  formData.append("prompt", enhancedPrompt);
  formData.append("tone", tone);
  formData.append("companyName", companyName);
  formData.append("goal", goal);
  formData.append("targetAudience", targetAudience);
  formData.append("contentType", contentType);
  formData.append("variationSeed", Date.now().toString());
  if (refineMode && baseCaption) {
    formData.append("refineMode", refineMode);
    formData.append("baseCaption", baseCaption);

    if (refineMode === "custom" && refinePrompt.trim().length > 0) {
      formData.append("refinePrompt", refinePrompt.trim());
    }

    if (refineMode === "similar") {
      // Detect if user is refining hashtags (not captions)
      const isHashtagSelection = selectedHashtagIndex !== null && (selectedCaptionIndex === null || manualEditingHashtagIndex !== null);
      if (isHashtagSelection) {
        const similarHashtagPrompt = `
Rewrite the following hashtags so they stay VERY similar in:
- Topic relevance
- Niche focus
- Intent (growth, branding, community, etc.)
- Length and count

Keep them closely related to the same theme, but vary wording slightly.
Do NOT add random generic tags.
Do NOT repeat the exact same hashtags.

Original Hashtags:
"""
${baseCaption}
"""
`;
        formData.append("refinePrompt", similarHashtagPrompt);
      } else {
        const similarCaptionPrompt = `
Rewrite the following caption so it stays VERY similar in:
- Structure
- Tone
- Length
- Formatting (line breaks, emojis, CTA placement)
- Overall vibe

Keep it stylistically almost identical, but slightly vary the wording so it feels fresh.

Do NOT change the theme.
Do NOT make it shorter or longer.
Do NOT drastically change emojis.

Original Caption:
"""
${baseCaption}
"""
`;
        formData.append("refinePrompt", similarCaptionPrompt);
      }
    }
  }

  try {
    setLoading(true);

    const res = await fetch("https://postpilot-backend-o3tg.onrender.com/generate-caption", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server error: ${res.status} - ${text}`);
    }

    const data = await res.json();
    const newCaption =
      data.caption ||
      data.output_text ||
      data.choices?.[0]?.message?.content ||
      "No caption returned";

    setResult(newCaption);
    setLoading(false);

    if (currentRefineMode) {
      setRefineMode(null);
      setRefinePrompt("");
    }

  } catch (err: any) {
    setLoading(false);
    console.error("Error generating caption:", err);
    alert(err.message || "Failed to generate caption. Check backend logs.");
  }
};

  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      <main className="min-h-screen w-full flex flex-col items-center px-4 py-6 bg-gradient-to-br from-gray-50 to-gray-200 text-black overflow-x-hidden">
      <div className="w-full flex flex-col items-center text-center mb-6">
        <h1 className="text-4xl font-extrabold mb-2">PostPilot 🚀</h1>
        <p className="text-gray-600 font-medium">AI-powered captions that convert</p>
      </div>

      <form
        className="flex flex-col w-full max-w-5xl bg-white p-4 md:p-6 rounded-xl shadow-lg overflow-hidden"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row w-full gap-6 items-start">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div
              className="relative w-full md:max-w-md aspect-square cursor-pointer"
              onClick={() => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0] || null;
                  setFile(selectedFile);
                  if (selectedFile) setPreview(URL.createObjectURL(selectedFile));
                }}
                className="hidden"
              />
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg border"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 border rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Upload Post</span>
                </div>
              )}
              {preview && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-30 rounded-lg transition">
                  <span className="text-white font-semibold">Replace Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300"></div>

          {/* Right: Controls */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="font-medium text-gray-700 mb-2">
              <strong>How it works:</strong> Upload your image, choose your goal and audience, adjust tone, then generate high-converting captions and hashtags.
            </p>
            <input
              type="text"
              placeholder="Company Name (optional)"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="border p-3 rounded-lg w-full"
            />

            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="border p-2 rounded-lg w-full text-gray-700 bg-white"
            >
              <option value="">Select Goal</option>
              <option value="Increase sales">Increase Sales & Conversions 💰</option>
              <option value="Drive website traffic">Drive Clicks to Website 🌐</option>
              <option value="Build brand awareness">Build Brand Visibility 👀</option>
              <option value="Increase engagement">Boost Engagement (Likes, Comments, Shares) 💬</option>
              <option value="Promote event">Promote an Event 📅</option>
              <option value="Launch announcement">Announce a Launch 🚀</option>
              <option value="Educate audience">Educate & Provide Value 📚</option>
            </select>


<select
  value={targetAudience}
  onChange={(e) => setTargetAudience(e.target.value)}
  className="border p-2 rounded-lg w-full text-gray-700 bg-white"
>
  <option value="">Select Target Audience</option>
  <option value="Small business owners">Small Business Owners (Growth Focused) 🏪</option>
  <option value="Entrepreneurs">Entrepreneurs & Founders 🚀</option>
  <option value="Gen Z">Gen Z (Trendy & Social) 📱</option>
  <option value="Corporate professionals">Corporate Professionals 💼</option>
  <option value="Fitness audience">Fitness & Gym Audience 💪</option>
  <option value="Moms and families">Moms & Families 👩‍👧</option>
  <option value="Students">Students (Ambitious & Career-Focused) 🎓</option>
</select>
<select
  value={contentType}
  onChange={(e) => setContentType(e.target.value)}
  className="border p-2 rounded-lg w-full text-gray-700 bg-white"
>
  <option value="">Select Content Type</option>
  <option value="Product post">Product Highlight 🛍</option>
  <option value="Testimonial">Customer Testimonial ⭐</option>
  <option value="Behind the scenes">Behind-the-Scenes Content 🎬</option>
  <option value="Announcement">Important Announcement 📢</option>
  <option value="Educational">Educational / Value Post 📚</option>
  <option value="Trend or meme">Trend / Meme Style 😎</option>
</select>
            
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="border p-2 rounded-lg w-full max-w-xs text-gray-700 bg-white"
            >
              <option value="">Select Tone</option>
              <option value="luxury and premium">Luxury & Premium ✨</option>
              <option value="high-energy fitness">High-Energy & Motivational 💪</option>
              <option value="Gen Z hype and trendy">Gen Z Hype & Trendy 🔥</option>
              <option value="corporate and professional">Corporate & Professional 💼</option>
              <option value="minimalist and clean">Minimalist & Clean 🧼</option>
            </select>
            <textarea
              placeholder="Describe exactly how you want the caption written (hook style, emotion, audience angle, CTA style, formatting, etc.)"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="border p-4 rounded-lg w-full h-40 resize-none"
            ></textarea>
            <div className="flex gap-2 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 active:scale-95"
              >
                {loading ? `Generating${loadingDots}` : "Generate"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                  setResult("");
                  setPrompt("");
                  setTone("");
                  setCompanyName("");
                  setGoal("");
                  setTargetAudience("");
                  setContentType("");
                  setEmojiStyle("light");
                }}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition active:scale-95"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>

      {loading && (
        <div className="mt-8 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-24 bg-gray-200 rounded-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
              </div>
            ))}
            {[...Array(3)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="h-24 bg-gray-200 rounded-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      )}


      {result && !loading && (
        <div
          id="results-container"
          className="mt-8 w-full max-w-5xl transition-opacity duration-500 opacity-0 animate-fadeIn"
        >
          <p className="mb-4 text-gray-600 font-medium">
            Select one caption and one hashtag to copy.
          </p>

          {(() => {
            // Clean raw result
            const cleaned = result.replace(/---/g, "").trim();

            // -----------------------------
            // SMART, POST-TAILORED HASHTAG GENERATION
            // -----------------------------
            // Only generate hashtags if none exist in state
            let topHashtags: string[] = generatedHashtags;
            if (generatedHashtags.length === 0) {
              const captionText = cleaned.toLowerCase();

              // Extract keywords from caption, remove stopwords, short words, numbers
              const stopwords = ['the','and','for','with','this','that','from','your','are','you','have','will','can'];
              const words = captionText
                .replace(/[^a-zA-Z\s]/g, '')
                .split(/\s+/)
                .filter(w => w.length > 4 && !stopwords.includes(w));

              const uniqueWords = Array.from(new Set(words));

              // Turn keywords into hashtags, capitalize first letter
              let generatedTags = uniqueWords.map(word => `#${word.charAt(0).toUpperCase()}${word.slice(1)}`);

              // Contextual and goal-based tags
              const contextTags: string[] = [];
              if (goal === 'Increase sales') contextTags.push('#BuyNow','#ShopToday','#LimitedOffer');
              if (goal === 'Increase engagement') contextTags.push('#CommentBelow','#ShareYourThoughts','#JoinTheConversation');
              if (goal === 'Build brand awareness') contextTags.push('#BrandStory','#GrowingTogether','#OurJourney');
              if (targetAudience === 'Students') contextTags.push('#StudentLife','#LevelUp','#CampusVibes');
              if (targetAudience === 'Fitness audience') contextTags.push('#GymLife','#TrainHard','#NoDaysOff');
              if (targetAudience === 'Entrepreneurs') contextTags.push('#HustleMode','#StartupLife','#FounderMindset');

              generatedTags.push(...contextTags);

              // Add universal high-performing tags
              const universalTags = ['#Motivation','#Inspiration','#Success','#Growth','#DailyTips','#ContentThatConverts'];
              generatedTags.push(...universalTags);

              // Remove duplicates
              generatedTags = Array.from(new Set(generatedTags));

              // Shuffle the array
              function shuffle(array:string[]) { return [...array].sort(() => Math.random() - 0.5); }
              const shuffledTags = shuffle(generatedTags);

              // Pick top 30 tags and split into 3 groups
              topHashtags = [
                shuffledTags.slice(0,10).join(' '),
                shuffledTags.slice(10,20).join(' '),
                shuffledTags.slice(20,30).join(' ')
              ];
              // Save hashtags to state so they persist for this result
              setGeneratedHashtags(topHashtags);
            }
            // -----------------------------
            // END SMART HASHTAG GENERATION
            // -----------------------------

            const textWithoutHashtags = cleaned
              .replace(/#[a-zA-Z0-9_]+/g, "")
              .replace(/\*\*/g, "")
              .trim();

            // Replace any dates like 'Jan 17', 'Jan 17, 2025', 'January 17', etc. with ordinal format
            const dateRegex = /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s(\d{1,2})(,\s\d{4})?/gi;

            const formattedTextWithoutHashtags = textWithoutHashtags.replace(dateRegex, (_, monthAbbr, dayStr, yearStr) => {
              const monthMap: Record<string, number> = {
                Jan:0, January:0, Feb:1, February:1, Mar:2, March:2, Apr:3, April:3, May:4, Jun:5, June:5, Jul:6, July:6, Aug:7, August:7,
                Sep:8, Sept:8, September:8, Oct:9, October:9, Nov:10, November:10, Dec:11, December:11
              };
              const day = parseInt(dayStr, 10);
              const year = yearStr ? parseInt(yearStr.replace(/,\s/, ''), 10) : new Date().getFullYear();
              const date = new Date(year, monthMap[monthAbbr], day);
              if (isNaN(date.getTime())) return `${monthAbbr} ${day}${yearStr || ''}`;
              return formatOrdinalDate(date);
            });

            const userInstructionBoost = prompt
  ? prompt.trim()
  : "";

            let captionCandidates: string[] = [];

            // Try structured list first
            if (/\d+\./.test(formattedTextWithoutHashtags)) {
              captionCandidates = formattedTextWithoutHashtags
                .split(/\d+\.\s+/)
                .map(t => t.trim())
                .filter(t => t.length > 40);
            }

            // Try double line break separation
            if (captionCandidates.length < 3 && formattedTextWithoutHashtags.includes("\n\n")) {
              captionCandidates = formattedTextWithoutHashtags
                .split("\n\n")
                .map(t => t.trim())
                .filter(t => t.length > 40);
            }

            // Fallback: sentence chunking
            if (captionCandidates.length < 3) {
              const sentences = formattedTextWithoutHashtags
                .split(/(?<=[.!?])\s+/)
                .filter(t => t.length > 40);

              for (let i = 0; i < sentences.length; i += 2) {
                const combined = (sentences[i] + " " + (sentences[i + 1] || "")).trim();
                if (combined.length > 60) captionCandidates.push(combined);
              }
            }

            const emojiSet = ["🔥", "🚀", "✨", "💡", "📈", "🎯", "💪", "🌟", "⚡", "👀"];

            function addEmojisBetweenSentences(text: string) {
              if (emojiStyle === "none") return text;

              const sentences = text.split(/(?<=[.!?])\s+/);

              return sentences
                .map((sentence, index) => {
                  if (index === sentences.length - 1) return sentence;

                  if (emojiStyle === "heavy") {
                    const fixedEmoji = emojiSet[index % emojiSet.length];
                    return sentence + " " + fixedEmoji;
                  }

                  if (emojiStyle === "light" && index === 0) {
                    const fixedEmoji = emojiSet[index % emojiSet.length];
                    return sentence + " " + fixedEmoji;
                  }

                  return sentence;
                })
                .join(" ");
            }

            function ensureEmoji(text: string) {
              if (emojiStyle === "none") return text;

              const hasEmoji = /[\u{1F300}-\u{1FAFF}]/u.test(text);
              if (hasEmoji) return text;

              const fixedEmoji = emojiSet[0];
              return text + " " + fixedEmoji;
            }

            function stripAllEmojis(text: string) {
  return text
    // Emoticons
    .replace(/[\u{1F600}-\u{1F64F}]/gu, "")
    // Symbols & pictographs
    .replace(/[\u{1F300}-\u{1F5FF}]/gu, "")
    // Transport & map
    .replace(/[\u{1F680}-\u{1F6FF}]/gu, "")
    // Misc symbols (⚡ is here)
    .replace(/[\u{2600}-\u{26FF}]/gu, "")
    // Dingbats
    .replace(/[\u{2700}-\u{27BF}]/gu, "")
    // Supplemental symbols
    .replace(/[\u{1F900}-\u{1F9FF}]/gu, "")
    // Extended pictographs
    .replace(/[\u{1FA00}-\u{1FAFF}]/gu, "")
    // Variation selectors
    .replace(/\uFE0F/gu, "")
    // Clean leftover spacing
    .replace(/\s{2,}/g, " ")
    .trim();
}

            function improveQuality(text: string) {
              let improved = text.trim();

              // Natural CTA enforcement
              if (!/\b(shop|learn|discover|get|try|join|start|click|order|comment|share|dm)\b/i.test(improved)) {
                improved += "\n\nTap the link in bio to learn more.";
              }

              // Clean extra spacing
              improved = improved.replace(/\s{2,}/g, " ").trim();

              // Do not append user instructions here; they are already applied via backend prompt

              if (emojiStyle === "none") {
                return stripAllEmojis(improved);
              }

              improved = addEmojisBetweenSentences(improved);
              return ensureEmoji(improved);
            }

            let topCaptions = captionCandidates.slice(0, 3).map(improveQuality);

            // Hard fallback (rare case)
            while (topCaptions.length < 3) {
              topCaptions.push(
                improveQuality(
                  "This caption is crafted to capture attention, highlight value, and drive meaningful engagement with your audience."
                )
              );
            }

            topCaptions = topCaptions.slice(0, 3);
            // -----------------------------
            // COMPANY NAME DUPLICATION PREVENTION (IMPROVED)
            // -----------------------------
            if (companyName?.trim()) {
              topCaptions = topCaptions.map(caption => {
                // If the caption already includes the company name, do not prepend/duplicate
                const regex = new RegExp(`\\b${companyName.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, 'i');
                if (regex.test(caption)) {
                  return caption; // Company name already present, leave as-is
                }
                // Otherwise, prepend company name at the beginning
                return `${companyName.trim()} ${caption}`;
              });
            }

            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* CAPTIONS */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Caption Options</h3>
                    <div className="space-y-4">
                      {topCaptions.map((caption, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedCaptionIndex(idx)}
                          className={`relative p-4 border rounded-lg cursor-pointer transition transform hover:scale-[1.01] ${
                            selectedCaptionIndex === idx
                              ? 'border-blue-600 bg-blue-50 scale-[1.02] shadow-lg shadow-blue-200/50'
                              : 'bg-white hover:border-gray-400'
                          }`}
                        >
                          {idx === 0 && (
                            <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full mr-2 mb-1">
                              Top Pick
                            </span>
                          )}

                          {/* Caption content and inline checkmark */}
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              {manualEditingIndex === idx && refineMode === 'manual' ? (
                                <textarea
                                  value={manualEdits[idx] ?? caption}
                                  onChange={(e) => setManualEdits(prev => ({ ...prev, [idx]: e.target.value }))}
                                  className="w-full border p-4 rounded-lg resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-gray-300"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              ) : (
                                <p>{manualEdits[idx] ?? caption}</p>
                              )}
                            </div>
                            {selectedCaptionIndex === idx && (
                              <span className="text-blue-600 font-bold text-sm ml-2 flex-shrink-0">
                                ✓
                              </span>
                            )}
                          </div>

                          {/* Buttons for selected caption only */}
                          {selectedCaptionIndex === idx && manualEditingIndex !== idx && (
                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setRefineMode('manual');
                                  setManualEditingIndex(idx);
                                  setManualEdits(prev => ({ ...prev, [idx]: manualEdits[idx] ?? caption }));
                                }}
                                className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95"
                              >
                                Edit Manually ✏️
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setRefineMode('similar');
                                  setBaseCaption(manualEdits[idx] ?? caption);
                                  handleSubmit(new Event('submit') as any);
                                }}
                                className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95"
                              >
                                Similar 🔁
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEmojiStyle(prev => prev === 'light' ? 'heavy' : prev === 'heavy' ? 'none' : 'light');
                                }}
                                className="flex-1 border px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 hover:bg-gray-200 transition"
                              >
                                {
                                  emojiStyle === 'light'
                                    ? 'Heavy 🔥'
                                    : emojiStyle === 'heavy'
                                    ? 'No Emojis 🚫'
                                    : 'Light 🙂'
                                }
                              </button>
                            </div>
                          )}
                          {selectedCaptionIndex === idx && manualEditingIndex === idx && (
                            <div className="flex gap-2 mt-4">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigator.clipboard.writeText(manualEdits[idx] ?? caption);
                                  setShowToast(true);
                                  setTimeout(() => setShowToast(false), 2000);
                                }}
                                className="flex-1 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95"
                              >
                                Copy Edited Caption
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setManualEdits(prev => {
                                    const updated = { ...prev };
                                    delete updated[idx];
                                    return updated;
                                  });
                                  setManualEditingIndex(null);
                                  setRefineMode(null);
                                }}
                                className="flex-1 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-400 transition active:scale-95"
                              >
                                Revert to Original
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* HASHTAGS */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Hashtag Options</h3>
                    <div className="space-y-4">
                      {generatedHashtags.map((tag, idx) => (
                        <div
                          key={idx}
                          className={`relative p-4 border rounded-lg cursor-pointer transition transform hover:scale-[1.01] ${
                            selectedHashtagIndex === idx
                              ? "border-green-600 bg-green-50 scale-[1.02] shadow-lg shadow-green-200/50"
                              : "bg-white hover:border-gray-400"
                          }`}
                          onClick={() => setSelectedHashtagIndex(idx)}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              {manualEditingHashtagIndex === idx ? (
                                <textarea
                                  value={manualHashtagEdits[idx] ?? tag}
                                  onChange={e => setManualHashtagEdits(prev => ({ ...prev, [idx]: e.target.value }))}
                                  className="w-full border p-4 rounded-lg resize-none min-h-[80px] focus:outline-none focus:ring-2 focus:ring-gray-300"
                                />
                              ) : (
                                <p>{manualHashtagEdits[idx] ?? tag}</p>
                              )}
                            </div>
                            {selectedHashtagIndex === idx && (
                              <span className="text-green-600 font-bold text-sm ml-2 flex-shrink-0">✓</span>
                            )}
                          </div>

                          {/* Edit/Copy/Revert buttons for hashtags */}
                          {selectedHashtagIndex === idx && !(manualEditingHashtagIndex === idx) && (
                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setManualEditingHashtagIndex(idx);
                                  setManualHashtagEdits(prev => ({ ...prev, [idx]: manualHashtagEdits[idx] ?? tag }));
                                }}
                                className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95"
                              >
                                Edit Manually ✏️
                              </button>
                            </div>
                          )}
                          {manualEditingHashtagIndex === idx && (
                            <div className="flex gap-2 mt-2">
                              <button
                                type="button"
                                onClick={() => {
                                  navigator.clipboard.writeText(manualHashtagEdits[idx] ?? tag);
                                  setShowToast(true);
                                  setTimeout(() => setShowToast(false), 2000);
                                }}
                                className="flex-1 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95"
                              >
                                Copy Edited Hashtag
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setManualHashtagEdits(prev => {
                                    const updated = { ...prev };
                                    delete updated[idx];
                                    return updated;
                                  });
                                  setManualEditingHashtagIndex(null);
                                }}
                                className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition active:scale-95"
                              >
                                Revert to Original
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* COPY COMBO BUTTON */}
                {selectedCaptionIndex !== null && (
                  <div ref={copyButtonRef} className="mt-8 text-center space-y-4">
                    {/* Only show copy button if both are selected */}
                    {selectedHashtagIndex !== null && (
                      <button
                        onClick={() => {
                          // Use manual edit if present, otherwise use original topCaptions
                          const captionToCopy =
                            manualEdits[selectedCaptionIndex!] !== undefined
                              ? manualEdits[selectedCaptionIndex!]
                              : topCaptions[selectedCaptionIndex!];
                          // Use manual hashtag edit if present, otherwise original
                          const hashtagToCopy =
                            manualHashtagEdits[selectedHashtagIndex!] !== undefined
                              ? manualHashtagEdits[selectedHashtagIndex!]
                              : generatedHashtags[selectedHashtagIndex!];
                          const combinedText = `${captionToCopy}\n\n${hashtagToCopy}`;

                          navigator.clipboard.writeText(combinedText);

                          // Save ONLY on copy
                          const updatedHistory = [combinedText, ...history]
                            .filter((item, index, self) => self.indexOf(item) === index) // remove duplicates
                            .slice(0, 10);

                          setHistory(updatedHistory);
                          localStorage.setItem("postpilot_history", JSON.stringify(updatedHistory));

                          setShowToast(true);
                          setTimeout(() => setShowToast(false), 2000);
                        }}
                        className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition active:scale-95"
                      >
                        {showToast ? (
                          <span className="animate-bounce">Copied!</span>
                        ) : (
                          "Copy Selected Caption + Hashtags"
                        )}
                      </button>
                    )}

                    <button
                      onClick={() => {
                        setSelectedCaptionIndex(null);
                        setSelectedHashtagIndex(null);
                        setRefinePrompt("");
                        setRefineMode(null);
                      }}
                      className="block mx-auto text-sm text-gray-500 hover:underline"
                    >
                      Clear Selection
                    </button>
                  </div>
                )}

                {/* Regenerate Captions Button at bottom */}
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setGeneratedHashtags([]); // clear hashtags so new ones are generated next render
                      handleSubmit(new Event('submit') as unknown as React.FormEvent);
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition active:scale-95"
                  >
                    Regenerate Captions
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-12 w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Generations</h2>
          <div className="space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="p-3 bg-white border rounded-lg text-sm shadow-sm flex justify-between items-center transition transform hover:scale-[1.01]">
                <span>{item.substring(0, 150)}...</span>
                <button
                  onClick={() => navigator.clipboard.writeText(item)}
                  className="text-sm text-blue-600 hover:underline ml-4"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-5 py-3 rounded-lg shadow-lg transition-opacity">
          Copied to clipboard ✅
        </div>
      )}
      </main>
    </>
  );
}