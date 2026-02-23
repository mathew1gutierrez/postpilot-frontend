(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// Helper to format dates with ordinals (e.g., March 2nd)
function formatOrdinalDate(date) {
    const day = date.getDate();
    let ordinal = 'th';
    if (day % 10 === 1 && day !== 11) ordinal = 'st';
    else if (day % 10 === 2 && day !== 12) ordinal = 'nd';
    else if (day % 10 === 3 && day !== 13) ordinal = 'rd';
    const month = date.toLocaleString('default', {
        month: 'long'
    });
    return `${month} ${day}${ordinal}`;
}
;
function HomePage() {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tone, setTone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [targetAudience, setTargetAudience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [contentType, setContentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [emojiStyle, setEmojiStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copiedIndex, setCopiedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authenticated, setAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCaptionIndex, setSelectedCaptionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedHashtagIndex, setSelectedHashtagIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [refineMode, setRefineMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [baseCaption, setBaseCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Store manual edits per caption index
    const [manualEdits, setManualEdits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Store manual edits per hashtag index
    const [manualHashtagEdits, setManualHashtagEdits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Manual editing state for hashtags
    const [manualEditingHashtagIndex, setManualEditingHashtagIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [refinePrompt, setRefinePrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const copyButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add manual editing index state at the top level of the HomePage component
    // (this is needed for the new inline editing logic)
    // (insert below the other useState hooks)
    const [manualEditingIndex, setManualEditingIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add loading dots state for dynamic animation
    const [loadingDots, setLoadingDots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Store generated hashtags after caption generation
    const [generatedHashtags, setGeneratedHashtags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Animate loading dots when loading is true
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (!loading) {
                setLoadingDots("");
                return;
            }
            const interval = setInterval({
                "HomePage.useEffect.interval": ()=>{
                    setLoadingDots({
                        "HomePage.useEffect.interval": (prev)=>prev.length >= 3 ? "" : prev + "."
                    }["HomePage.useEffect.interval"]);
                }
            }["HomePage.useEffect.interval"], 500);
            return ({
                "HomePage.useEffect": ()=>clearInterval(interval)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], [
        loading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            // Reset history on load (clean slate)
            localStorage.removeItem("postpilot_history");
            setHistory([]);
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (result) {
                const el = document.getElementById("results-container");
                if (el) {
                    el.classList.remove("opacity-0");
                    el.classList.add("opacity-100");
                }
            }
        }
    }["HomePage.useEffect"], [
        result
    ]);
    if (!authenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex items-center justify-center bg-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-center",
                        children: "PostPilot Access"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Enter access password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (password === " ") {
                                setAuthenticated(true);
                            } else {
                                alert("Incorrect password");
                            }
                        },
                        className: "bg-blue-600 text-white p-2 rounded hover:bg-blue-700",
                        children: "Enter"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this);
    }
    const handleSubmit = async (e)=>{
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
        const audienceMap = {
            "Small business owners": "Speak directly to small business owners. Focus on growth, efficiency, ROI, and practical wins.",
            "Entrepreneurs": "Speak to ambitious entrepreneurs. Emphasize scaling, freedom, impact, and bold action.",
            "Gen Z": "Write for Gen Z. Use punchy sentences, trend-aware language, relatable humor, and high energy.",
            "Corporate professionals": "Write in a polished, strategic, value-driven tone for corporate professionals.",
            "Fitness audience": "Use high-energy, motivational language that inspires discipline, strength, and transformation.",
            "Moms and families": "Write in a warm, relatable, supportive tone that resonates with families and busy parents.",
            "Students": "Write for students. Make it relatable to school life, growth, ambition, productivity, and future success. Keep it engaging and modern."
        };
        const toneMap = {
            "luxury and premium": "Use elevated, refined language. Focus on exclusivity, sophistication, and premium value.",
            "high-energy fitness": "Use intense, motivating, action-driven language. Short impactful lines.",
            "Gen Z hype and trendy": "Use trendy phrasing, scroll-stopping hooks, and expressive energy.",
            "corporate and professional": "Use structured, confident, authoritative language with clear value propositions.",
            "minimalist and clean": "Use concise, sharp, and minimal wording. Avoid fluff."
        };
        const goalMap = {
            "Increase sales": "Drive urgency and conversions. Highlight benefits and clear calls-to-action.",
            "Drive website traffic": "Encourage curiosity and clicks. Tease value and insights.",
            "Build brand awareness": "Focus on storytelling and memorability.",
            "Increase engagement": "Encourage comments, shares, and interaction.",
            "Promote event": "Create excitement and urgency around the event.",
            "Launch announcement": "Make the launch feel important and exciting.",
            "Educate audience": "Provide clear, actionable value and insights."
        };
        const contentTypeMap = {
            "Product post": "Highlight features, benefits, and transformation outcomes.",
            "Testimonial": "Frame it as social proof. Emphasize results and credibility.",
            "Behind the scenes": "Make it personal, authentic, and insider-style.",
            "Announcement": "Make it bold and clear.",
            "Educational": "Break down insights in a clear, digestible format.",
            "Trend or meme": "Lean into relatability, humor, and cultural relevance."
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
                body: formData
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Server error: ${res.status} - ${text}`);
            }
            const data = await res.json();
            const newCaption = data.caption || data.output_text || data.choices?.[0]?.message?.content || "No caption returned";
            setResult(newCaption);
            setLoading(false);
            if (currentRefineMode) {
                setRefineMode(null);
                setRefinePrompt("");
            }
        } catch (err) {
            setLoading(false);
            console.error("Error generating caption:", err);
            alert(err.message || "Failed to generate caption. Check backend logs.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "aa0f441893c8dd8e",
                children: "@keyframes shimmer{0%{background-position:-200% 0}to{background-position:200% 0}}.animate-shimmer{background-size:200% 100%;animation:1.5s infinite shimmer}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn{animation:.5s ease-out forwards fadeIn}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "jsx-aa0f441893c8dd8e" + " " + "min-h-screen w-full flex flex-col items-center px-4 py-6 bg-gradient-to-br from-gray-50 to-gray-200 text-black overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-aa0f441893c8dd8e" + " " + "w-full flex flex-col items-center text-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-aa0f441893c8dd8e" + " " + "text-4xl font-extrabold mb-2",
                                children: "PostPilot 🚀"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 338,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-aa0f441893c8dd8e" + " " + "text-gray-600 font-medium",
                                children: "AI-powered captions that convert"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 339,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 337,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "jsx-aa0f441893c8dd8e" + " " + "flex flex-col w-full max-w-5xl bg-white p-4 md:p-6 rounded-xl shadow-lg overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-aa0f441893c8dd8e" + " " + "flex flex-col md:flex-row w-full gap-6 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-aa0f441893c8dd8e" + " " + "w-full md:w-1/2 flex justify-center md:justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>document.querySelector('input[type="file"]')?.click(),
                                        className: "jsx-aa0f441893c8dd8e" + " " + "relative w-full md:max-w-md aspect-square cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "image/*",
                                                onChange: (e)=>{
                                                    const selectedFile = e.target.files?.[0] || null;
                                                    setFile(selectedFile);
                                                    if (selectedFile) setPreview(URL.createObjectURL(selectedFile));
                                                },
                                                className: "jsx-aa0f441893c8dd8e" + " " + "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, this),
                                            preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: preview,
                                                alt: "Preview",
                                                className: "jsx-aa0f441893c8dd8e" + " " + "w-full h-full object-cover rounded-lg border"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-aa0f441893c8dd8e" + " " + "w-full h-full bg-gray-100 border rounded-lg flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-aa0f441893c8dd8e" + " " + "text-gray-400 font-medium",
                                                    children: "Upload Post"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this),
                                            preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-aa0f441893c8dd8e" + " " + "absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-30 rounded-lg transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-aa0f441893c8dd8e" + " " + "text-white font-semibold",
                                                    children: "Replace Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 375,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-aa0f441893c8dd8e" + " " + "hidden md:block w-px bg-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-aa0f441893c8dd8e" + " " + "w-full md:w-1/2 flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-aa0f441893c8dd8e" + " " + "font-medium text-gray-700 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "How it works:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 15
                                                }, this),
                                                " Upload your image, choose your goal and audience, adjust tone, then generate high-converting captions and hashtags."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Company Name (optional)",
                                            value: companyName,
                                            onChange: (e)=>setCompanyName(e.target.value),
                                            className: "jsx-aa0f441893c8dd8e" + " " + "border p-3 rounded-lg w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: goal,
                                            onChange: (e)=>setGoal(e.target.value),
                                            className: "jsx-aa0f441893c8dd8e" + " " + "border p-2 rounded-lg w-full text-gray-700 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Select Goal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Increase sales",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Increase Sales & Conversions 💰"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Drive website traffic",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Drive Clicks to Website 🌐"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Build brand awareness",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Build Brand Visibility 👀"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Increase engagement",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Boost Engagement (Likes, Comments, Shares) 💬"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Promote event",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Promote an Event 📅"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Launch announcement",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Announce a Launch 🚀"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Educate audience",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Educate & Provide Value 📚"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: targetAudience,
                                            onChange: (e)=>setTargetAudience(e.target.value),
                                            className: "jsx-aa0f441893c8dd8e" + " " + "border p-2 rounded-lg w-full text-gray-700 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Select Target Audience"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Small business owners",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Small Business Owners (Growth Focused) 🏪"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Entrepreneurs",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Entrepreneurs & Founders 🚀"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Gen Z",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Gen Z (Trendy & Social) 📱"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Corporate professionals",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Corporate Professionals 💼"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Fitness audience",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Fitness & Gym Audience 💪"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Moms and families",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Moms & Families 👩‍👧"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Students",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Students (Ambitious & Career-Focused) 🎓"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 3
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: contentType,
                                            onChange: (e)=>setContentType(e.target.value),
                                            className: "jsx-aa0f441893c8dd8e" + " " + "border p-2 rounded-lg w-full text-gray-700 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Select Content Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Product post",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Product Highlight 🛍"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Testimonial",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Customer Testimonial ⭐"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Behind the scenes",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Behind-the-Scenes Content 🎬"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Announcement",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Important Announcement 📢"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Educational",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Educational / Value Post 📚"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Trend or meme",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Trend / Meme Style 😎"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 3
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: tone,
                                            onChange: (e)=>setTone(e.target.value),
                                            className: "jsx-aa0f441893c8dd8e" + " " + "border p-2 rounded-lg w-full max-w-xs text-gray-700 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Select Tone"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "luxury and premium",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Luxury & Premium ✨"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "high-energy fitness",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "High-Energy & Motivational 💪"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Gen Z hype and trendy",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Gen Z Hype & Trendy 🔥"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "corporate and professional",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Corporate & Professional 💼"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "minimalist and clean",
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: "Minimalist & Clean 🧼"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 442,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Describe exactly how you want the caption written (hook style, emotion, audience angle, CTA style, formatting, etc.)",
                                            value: prompt,
                                            onChange: (e)=>setPrompt(e.target.value),
                                            className: "jsx-aa0f441893c8dd8e" + " " + "border p-4 rounded-lg w-full h-40 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-aa0f441893c8dd8e" + " " + "flex gap-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: loading,
                                                    className: "jsx-aa0f441893c8dd8e" + " " + "bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 active:scale-95",
                                                    children: loading ? `Generating${loadingDots}` : "Generate"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
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
                                                    },
                                                    className: "jsx-aa0f441893c8dd8e" + " " + "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition active:scale-95",
                                                    children: "Reset"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 346,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 342,
                        columnNumber: 7
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-aa0f441893c8dd8e" + " " + "mt-8 w-full max-w-5xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-aa0f441893c8dd8e" + " " + "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                [
                                    ...Array(3)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-aa0f441893c8dd8e" + " " + "h-24 bg-gray-200 rounded-lg relative overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-aa0f441893c8dd8e" + " " + "absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, this)),
                                [
                                    ...Array(3)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-aa0f441893c8dd8e" + " " + "h-24 bg-gray-200 rounded-lg relative overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-aa0f441893c8dd8e" + " " + "absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 17
                                        }, this)
                                    }, `h-${i}`, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    result && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "results-container",
                        className: "jsx-aa0f441893c8dd8e" + " " + "mt-8 w-full max-w-5xl transition-opacity duration-500 opacity-0 animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-aa0f441893c8dd8e" + " " + "mb-4 text-gray-600 font-medium",
                                children: "Select one caption and one hashtag to copy."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this),
                            (()=>{
                                // Clean raw result
                                const cleaned = result.replace(/---/g, "").trim();
                                // -----------------------------
                                // SMART, POST-TAILORED HASHTAG GENERATION
                                // -----------------------------
                                // Only generate hashtags if none exist in state
                                let topHashtags = generatedHashtags;
                                if (generatedHashtags.length === 0) {
                                    const captionText = cleaned.toLowerCase();
                                    // Extract keywords from caption, remove stopwords, short words, numbers
                                    const stopwords = [
                                        'the',
                                        'and',
                                        'for',
                                        'with',
                                        'this',
                                        'that',
                                        'from',
                                        'your',
                                        'are',
                                        'you',
                                        'have',
                                        'will',
                                        'can'
                                    ];
                                    const words = captionText.replace(/[^a-zA-Z\s]/g, '').split(/\s+/).filter((w)=>w.length > 4 && !stopwords.includes(w));
                                    const uniqueWords = Array.from(new Set(words));
                                    // Turn keywords into hashtags, capitalize first letter
                                    let generatedTags = uniqueWords.map((word)=>`#${word.charAt(0).toUpperCase()}${word.slice(1)}`);
                                    // Contextual and goal-based tags
                                    const contextTags = [];
                                    if (goal === 'Increase sales') contextTags.push('#BuyNow', '#ShopToday', '#LimitedOffer');
                                    if (goal === 'Increase engagement') contextTags.push('#CommentBelow', '#ShareYourThoughts', '#JoinTheConversation');
                                    if (goal === 'Build brand awareness') contextTags.push('#BrandStory', '#GrowingTogether', '#OurJourney');
                                    if (targetAudience === 'Students') contextTags.push('#StudentLife', '#LevelUp', '#CampusVibes');
                                    if (targetAudience === 'Fitness audience') contextTags.push('#GymLife', '#TrainHard', '#NoDaysOff');
                                    if (targetAudience === 'Entrepreneurs') contextTags.push('#HustleMode', '#StartupLife', '#FounderMindset');
                                    generatedTags.push(...contextTags);
                                    // Add universal high-performing tags
                                    const universalTags = [
                                        '#Motivation',
                                        '#Inspiration',
                                        '#Success',
                                        '#Growth',
                                        '#DailyTips',
                                        '#ContentThatConverts'
                                    ];
                                    generatedTags.push(...universalTags);
                                    // Remove duplicates
                                    generatedTags = Array.from(new Set(generatedTags));
                                    // Shuffle the array
                                    function shuffle(array) {
                                        return [
                                            ...array
                                        ].sort(()=>Math.random() - 0.5);
                                    }
                                    const shuffledTags = shuffle(generatedTags);
                                    // Pick top 30 tags and split into 3 groups
                                    topHashtags = [
                                        shuffledTags.slice(0, 10).join(' '),
                                        shuffledTags.slice(10, 20).join(' '),
                                        shuffledTags.slice(20, 30).join(' ')
                                    ];
                                    // Save hashtags to state so they persist for this result
                                    setGeneratedHashtags(topHashtags);
                                }
                                // -----------------------------
                                // END SMART HASHTAG GENERATION
                                // -----------------------------
                                const textWithoutHashtags = cleaned.replace(/#[a-zA-Z0-9_]+/g, "").replace(/\*\*/g, "").trim();
                                // Replace any dates like 'Jan 17', 'Jan 17, 2025', 'January 17', etc. with ordinal format
                                const dateRegex = /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s(\d{1,2})(,\s\d{4})?/gi;
                                const formattedTextWithoutHashtags = textWithoutHashtags.replace(dateRegex, (_, monthAbbr, dayStr, yearStr)=>{
                                    const monthMap = {
                                        Jan: 0,
                                        January: 0,
                                        Feb: 1,
                                        February: 1,
                                        Mar: 2,
                                        March: 2,
                                        Apr: 3,
                                        April: 3,
                                        May: 4,
                                        Jun: 5,
                                        June: 5,
                                        Jul: 6,
                                        July: 6,
                                        Aug: 7,
                                        August: 7,
                                        Sep: 8,
                                        Sept: 8,
                                        September: 8,
                                        Oct: 9,
                                        October: 9,
                                        Nov: 10,
                                        November: 10,
                                        Dec: 11,
                                        December: 11
                                    };
                                    const day = parseInt(dayStr, 10);
                                    const year = yearStr ? parseInt(yearStr.replace(/,\s/, ''), 10) : new Date().getFullYear();
                                    const date = new Date(year, monthMap[monthAbbr], day);
                                    if (isNaN(date.getTime())) return `${monthAbbr} ${day}${yearStr || ''}`;
                                    return formatOrdinalDate(date);
                                });
                                const userInstructionBoost = prompt ? prompt.trim() : "";
                                let captionCandidates = [];
                                // Try structured list first
                                if (/\d+\./.test(formattedTextWithoutHashtags)) {
                                    captionCandidates = formattedTextWithoutHashtags.split(/\d+\.\s+/).map((t)=>t.trim()).filter((t)=>t.length > 40);
                                }
                                // Try double line break separation
                                if (captionCandidates.length < 3 && formattedTextWithoutHashtags.includes("\n\n")) {
                                    captionCandidates = formattedTextWithoutHashtags.split("\n\n").map((t)=>t.trim()).filter((t)=>t.length > 40);
                                }
                                // Fallback: sentence chunking
                                if (captionCandidates.length < 3) {
                                    const sentences = formattedTextWithoutHashtags.split(/(?<=[.!?])\s+/).filter((t)=>t.length > 40);
                                    for(let i = 0; i < sentences.length; i += 2){
                                        const combined = (sentences[i] + " " + (sentences[i + 1] || "")).trim();
                                        if (combined.length > 60) captionCandidates.push(combined);
                                    }
                                }
                                function getContextualEmojis(text) {
                                    const lower = text.toLowerCase();
                                    if (lower.includes("sale") || lower.includes("shop") || lower.includes("buy")) {
                                        return [
                                            "🛍️",
                                            "💸",
                                            "🔥"
                                        ];
                                    }
                                    if (lower.includes("fitness") || lower.includes("gym") || lower.includes("train")) {
                                        return [
                                            "💪",
                                            "🏋️",
                                            "🔥"
                                        ];
                                    }
                                    if (lower.includes("launch") || lower.includes("new") || lower.includes("announcement")) {
                                        return [
                                            "🚀",
                                            "🎉",
                                            "✨"
                                        ];
                                    }
                                    if (lower.includes("learn") || lower.includes("tips") || lower.includes("guide")) {
                                        return [
                                            "📚",
                                            "💡",
                                            "🧠"
                                        ];
                                    }
                                    if (lower.includes("success") || lower.includes("growth") || lower.includes("level")) {
                                        return [
                                            "📈",
                                            "🚀",
                                            "🌟"
                                        ];
                                    }
                                    // fallback
                                    return [
                                        "✨",
                                        "🔥",
                                        "🚀"
                                    ];
                                }
                                function addEmojisBetweenSentences(text) {
                                    if (emojiStyle === "none") return text;
                                    const contextualEmojis = getContextualEmojis(text);
                                    const sentences = text.split(/(?<=[.!?])\s+/);
                                    return sentences.map((sentence, index)=>{
                                        if (index === sentences.length - 1) return sentence;
                                        if (emojiStyle === "heavy") {
                                            const fixedEmoji = contextualEmojis[index % contextualEmojis.length];
                                            return sentence + " " + fixedEmoji;
                                        }
                                        if (emojiStyle === "light" && index === 0) {
                                            const fixedEmoji = contextualEmojis[index % contextualEmojis.length];
                                            return sentence + " " + fixedEmoji;
                                        }
                                        return sentence;
                                    }).join(" ");
                                }
                                function ensureEmoji(text) {
                                    if (emojiStyle === "none") return text;
                                    const hasEmoji = /[\u{1F300}-\u{1FAFF}]/u.test(text);
                                    if (hasEmoji) return text;
                                    const contextualEmojis = getContextualEmojis(text);
                                    const fixedEmoji = contextualEmojis[0];
                                    return text + " " + fixedEmoji;
                                }
                                function stripAllEmojis(text) {
                                    return text// Emoticons
                                    .replace(/[\u{1F600}-\u{1F64F}]/gu, "")// Symbols & pictographs
                                    .replace(/[\u{1F300}-\u{1F5FF}]/gu, "")// Transport & map
                                    .replace(/[\u{1F680}-\u{1F6FF}]/gu, "")// Misc symbols (⚡ is here)
                                    .replace(/[\u{2600}-\u{26FF}]/gu, "")// Dingbats
                                    .replace(/[\u{2700}-\u{27BF}]/gu, "")// Supplemental symbols
                                    .replace(/[\u{1F900}-\u{1F9FF}]/gu, "")// Extended pictographs
                                    .replace(/[\u{1FA00}-\u{1FAFF}]/gu, "")// Variation selectors
                                    .replace(/\uFE0F/gu, "")// Clean leftover spacing
                                    .replace(/\s{2,}/g, " ").trim();
                                }
                                function improveQuality(text) {
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
                                while(topCaptions.length < 3){
                                    topCaptions.push(improveQuality("This caption is crafted to capture attention, highlight value, and drive meaningful engagement with your audience."));
                                }
                                topCaptions = topCaptions.slice(0, 3);
                                // -----------------------------
                                // COMPANY NAME DUPLICATION PREVENTION (IMPROVED)
                                // -----------------------------
                                if (companyName?.trim()) {
                                    topCaptions = topCaptions.map((caption)=>{
                                        // If the caption already includes the company name, do not prepend/duplicate
                                        const regex = new RegExp(`\\b${companyName.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, 'i');
                                        if (regex.test(caption)) {
                                            return caption; // Company name already present, leave as-is
                                        }
                                        // Otherwise, prepend company name at the beginning
                                        return `${companyName.trim()} ${caption}`;
                                    });
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-aa0f441893c8dd8e" + " " + "grid grid-cols-1 md:grid-cols-2 gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-aa0f441893c8dd8e" + " " + "text-lg font-semibold mb-4",
                                                            children: "Caption Options"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 773,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-aa0f441893c8dd8e" + " " + "space-y-4",
                                                            children: topCaptions.map((caption, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>setSelectedCaptionIndex(idx),
                                                                    className: "jsx-aa0f441893c8dd8e" + " " + `relative p-4 border rounded-lg cursor-pointer transition transform hover:scale-[1.01] ${selectedCaptionIndex === idx ? 'border-blue-600 bg-blue-50 scale-[1.02] shadow-lg shadow-blue-200/50' : 'bg-white hover:border-gray-400'}`,
                                                                    children: [
                                                                        idx === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-aa0f441893c8dd8e" + " " + "inline-block text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full mr-2 mb-1",
                                                                            children: "Top Pick"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 786,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-aa0f441893c8dd8e" + " " + "flex justify-between items-start",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "flex-1",
                                                                                    children: manualEditingIndex === idx && refineMode === 'manual' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                        value: manualEdits[idx] ?? caption,
                                                                                        onChange: (e)=>setManualEdits((prev)=>({
                                                                                                    ...prev,
                                                                                                    [idx]: e.target.value
                                                                                                })),
                                                                                        onClick: (e)=>e.stopPropagation(),
                                                                                        className: "jsx-aa0f441893c8dd8e" + " " + "w-full border p-4 rounded-lg resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-gray-300"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.tsx",
                                                                                        lineNumber: 795,
                                                                                        columnNumber: 33
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "jsx-aa0f441893c8dd8e",
                                                                                        children: manualEdits[idx] ?? caption
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.tsx",
                                                                                        lineNumber: 802,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 793,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                selectedCaptionIndex === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "text-blue-600 font-bold text-sm ml-2 flex-shrink-0",
                                                                                    children: "✓"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 806,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 792,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        selectedCaptionIndex === idx && manualEditingIndex !== idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-aa0f441893c8dd8e" + " " + "flex flex-col sm:flex-row gap-3 mt-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setRefineMode('manual');
                                                                                        setManualEditingIndex(idx);
                                                                                        setManualEdits((prev)=>({
                                                                                                ...prev,
                                                                                                [idx]: manualEdits[idx] ?? caption
                                                                                            }));
                                                                                    },
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95",
                                                                                    children: "Edit Manually ✏️"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 815,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setRefineMode('similar');
                                                                                        setBaseCaption(manualEdits[idx] ?? caption);
                                                                                        handleSubmit(new Event('submit'));
                                                                                    },
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95",
                                                                                    children: "Similar 🔁"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 827,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setEmojiStyle((prev)=>prev === 'light' ? 'heavy' : prev === 'heavy' ? 'none' : 'light');
                                                                                    },
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "flex-1 border px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 hover:bg-gray-200 transition",
                                                                                    children: emojiStyle === 'light' ? 'Heavy 🔥' : emojiStyle === 'heavy' ? 'No Emojis 🚫' : 'Light 🙂'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 839,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 814,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        selectedCaptionIndex === idx && manualEditingIndex === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-aa0f441893c8dd8e" + " " + "flex gap-2 mt-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        navigator.clipboard.writeText(manualEdits[idx] ?? caption);
                                                                                        setShowToast(true);
                                                                                        setTimeout(()=>setShowToast(false), 2000);
                                                                                    },
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "flex-1 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95",
                                                                                    children: "Copy Edited Caption"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 859,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setManualEdits((prev)=>{
                                                                                            const updated = {
                                                                                                ...prev
                                                                                            };
                                                                                            delete updated[idx];
                                                                                            return updated;
                                                                                        });
                                                                                        setManualEditingIndex(null);
                                                                                        setRefineMode(null);
                                                                                    },
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "flex-1 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-400 transition active:scale-95",
                                                                                    children: "Revert to Original"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 871,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 858,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 776,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 774,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 772,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-aa0f441893c8dd8e",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-aa0f441893c8dd8e" + " " + "text-lg font-semibold mb-4",
                                                            children: "Hashtag Options"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 896,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-aa0f441893c8dd8e" + " " + "space-y-4",
                                                            children: generatedHashtags.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>setSelectedHashtagIndex(idx),
                                                                    className: "jsx-aa0f441893c8dd8e" + " " + `relative p-4 border rounded-lg cursor-pointer transition transform hover:scale-[1.01] ${selectedHashtagIndex === idx ? "border-green-600 bg-green-50 scale-[1.02] shadow-lg shadow-green-200/50" : "bg-white hover:border-gray-400"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-aa0f441893c8dd8e" + " " + "flex justify-between items-start",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "flex-1",
                                                                                    children: manualEditingHashtagIndex === idx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                        value: manualHashtagEdits[idx] ?? tag,
                                                                                        onChange: (e)=>setManualHashtagEdits((prev)=>({
                                                                                                    ...prev,
                                                                                                    [idx]: e.target.value
                                                                                                })),
                                                                                        className: "jsx-aa0f441893c8dd8e" + " " + "w-full border p-4 rounded-lg resize-none min-h-[80px] focus:outline-none focus:ring-2 focus:ring-gray-300"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.tsx",
                                                                                        lineNumber: 911,
                                                                                        columnNumber: 33
                                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "jsx-aa0f441893c8dd8e",
                                                                                        children: manualHashtagEdits[idx] ?? tag
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/page.tsx",
                                                                                        lineNumber: 917,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 909,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                selectedHashtagIndex === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "text-green-600 font-bold text-sm ml-2 flex-shrink-0",
                                                                                    children: "✓"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 921,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 908,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        selectedHashtagIndex === idx && !(manualEditingHashtagIndex === idx) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-aa0f441893c8dd8e" + " " + "flex flex-col sm:flex-row gap-3 mt-4",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    setManualEditingHashtagIndex(idx);
                                                                                    setManualHashtagEdits((prev)=>({
                                                                                            ...prev,
                                                                                            [idx]: manualHashtagEdits[idx] ?? tag
                                                                                        }));
                                                                                },
                                                                                className: "jsx-aa0f441893c8dd8e" + " " + "flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95",
                                                                                children: "Edit Manually ✏️"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 928,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 927,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        manualEditingHashtagIndex === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-aa0f441893c8dd8e" + " " + "flex gap-2 mt-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>{
                                                                                        navigator.clipboard.writeText(manualHashtagEdits[idx] ?? tag);
                                                                                        setShowToast(true);
                                                                                        setTimeout(()=>setShowToast(false), 2000);
                                                                                    },
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "flex-1 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition active:scale-95",
                                                                                    children: "Copy Edited Hashtag"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 943,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>{
                                                                                        setManualHashtagEdits((prev)=>{
                                                                                            const updated = {
                                                                                                ...prev
                                                                                            };
                                                                                            delete updated[idx];
                                                                                            return updated;
                                                                                        });
                                                                                        setManualEditingHashtagIndex(null);
                                                                                    },
                                                                                    className: "jsx-aa0f441893c8dd8e" + " " + "flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition active:scale-95",
                                                                                    children: "Revert to Original"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 954,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 942,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 899,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 897,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 770,
                                            columnNumber: 17
                                        }, this),
                                        selectedCaptionIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: copyButtonRef,
                                            className: "jsx-aa0f441893c8dd8e" + " " + "mt-8 text-center space-y-4",
                                            children: [
                                                selectedHashtagIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        // Use manual edit if present, otherwise use original topCaptions
                                                        const captionToCopy = manualEdits[selectedCaptionIndex] !== undefined ? manualEdits[selectedCaptionIndex] : topCaptions[selectedCaptionIndex];
                                                        // Use manual hashtag edit if present, otherwise original
                                                        const hashtagToCopy = manualHashtagEdits[selectedHashtagIndex] !== undefined ? manualHashtagEdits[selectedHashtagIndex] : generatedHashtags[selectedHashtagIndex];
                                                        const combinedText = `${captionToCopy}\n\n${hashtagToCopy}`;
                                                        navigator.clipboard.writeText(combinedText);
                                                        // Save ONLY on copy
                                                        const updatedHistory = [
                                                            combinedText,
                                                            ...history
                                                        ].filter((item, index, self)=>self.indexOf(item) === index) // remove duplicates
                                                        .slice(0, 10);
                                                        setHistory(updatedHistory);
                                                        localStorage.setItem("postpilot_history", JSON.stringify(updatedHistory));
                                                        setShowToast(true);
                                                        setTimeout(()=>setShowToast(false), 2000);
                                                    },
                                                    className: "jsx-aa0f441893c8dd8e" + " " + "bg-black text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition active:scale-95",
                                                    children: showToast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-aa0f441893c8dd8e" + " " + "animate-bounce",
                                                        children: "Copied!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 27
                                                    }, this) : "Copy Selected Caption + Hashtags"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 981,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSelectedCaptionIndex(null);
                                                        setSelectedHashtagIndex(null);
                                                        setRefinePrompt("");
                                                        setRefineMode(null);
                                                    },
                                                    className: "jsx-aa0f441893c8dd8e" + " " + "block mx-auto text-sm text-gray-500 hover:underline",
                                                    children: "Clear Selection"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 1018,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 978,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-aa0f441893c8dd8e" + " " + "mt-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setGeneratedHashtags([]); // clear hashtags so new ones are generated next render
                                                    handleSubmit(new Event('submit'));
                                                },
                                                className: "jsx-aa0f441893c8dd8e" + " " + "bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition active:scale-95",
                                                children: "Regenerate Captions"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1034,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 1033,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true);
                            })()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this),
                    history.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-aa0f441893c8dd8e" + " " + "mt-12 w-full max-w-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-aa0f441893c8dd8e" + " " + "text-xl font-semibold mb-4",
                                children: "Recent Generations"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1053,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-aa0f441893c8dd8e" + " " + "space-y-3",
                                children: history.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-aa0f441893c8dd8e" + " " + "p-3 bg-white border rounded-lg text-sm shadow-sm flex justify-between items-center transition transform hover:scale-[1.01]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-aa0f441893c8dd8e",
                                                children: [
                                                    item.substring(0, 150),
                                                    "..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1057,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>navigator.clipboard.writeText(item),
                                                className: "jsx-aa0f441893c8dd8e" + " " + "text-sm text-blue-600 hover:underline ml-4",
                                                children: "Copy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 1054,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1052,
                        columnNumber: 9
                    }, this),
                    showToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-aa0f441893c8dd8e" + " " + "fixed bottom-6 right-6 bg-black text-white px-5 py-3 rounded-lg shadow-lg transition-opacity",
                        children: "Copied to clipboard ✅"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 1070,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "x9P90rQikuV88zOd5loi+o+RR/8=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_tsx_dda9881a._.js.map