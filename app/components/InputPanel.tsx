"use client";

import { useState } from "react";

interface Props {
  setCaptions: (c: string[]) => void;
  setHashtags: (h: string[]) => void;
  setLoading: (l: boolean) => void;
  loading: boolean;
}

export default function InputPanel({ setCaptions, setHashtags, setLoading, loading }: Props) {
  const [description, setDescription] = useState("");
  const [selectedVibe, setSelectedVibe] = useState("aesthetic");
  const [captionCount, setCaptionCount] = useState(3);
  const [length, setLength] = useState("medium");
  const [hashtags, setHashtagsOption] = useState("minimal");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [emojiToggle, setEmojiToggle] = useState(true);
  const [ctaToggle, setCtaToggle] = useState(false);
  const [linebreakToggle, setLinebreakToggle] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Handle image upload
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedImage(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPreviewUrl(ev.target?.result as string);
    reader.readAsDataURL(file);
  }

  function removeImage() {
    setUploadedImage(null);
    setPreviewUrl(null);
  }

  // Stepper
  function adjustCount(delta: number) {
    setCaptionCount((prev) => Math.min(5, Math.max(1, prev + delta)));
  }

  // Keywords
  function addKeyword(kw: string) {
    if (!kw || keywords.includes(kw) || keywords.length >= 6) return;
    setKeywords([...keywords, kw]);
  }
  function removeKeyword(kw: string) {
    setKeywords(keywords.filter(k => k !== kw));
  }

  // Generate captions
  async function handleGenerate() {
    if (!description && !uploadedImage) return alert("Add a photo or description first");

    setLoading(true);

    try {
      const body: any = {
        description,
        vibe: selectedVibe,
        length,
        hashtags,
        count: captionCount,
        keywords,
        options: { emojiToggle, ctaToggle, linebreakToggle }
      };

      if (uploadedImage) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          body.imageBase64 = (e.target?.result as string).split(",")[1];

          const res = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });

          const data = await res.json();
          setCaptions(data.captions);
          setHashtags(data.hashtags || []);
          setLoading(false);
        };
        reader.readAsDataURL(uploadedImage);
      } else {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await res.json();
        setCaptions(data.captions);
        setHashtags(data.hashtags || []);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Generation failed.");
    }
  }

  return (
    <div className="input-panel border-r border-white/10 p-8 bg-[#0E0E11] flex flex-col h-full sticky top-0 overflow-y-auto">

      <h1 className="text-2xl font-semibold mb-6">PostPilot</h1>

      {/* Image upload */}
      <div className="mb-4">
        {previewUrl ? (
          <div className="relative">
            <img src={previewUrl} className="rounded-xl mb-2" />
            <button
              className="absolute top-2 right-2 bg-red-600/80 text-white rounded-full px-2"
              onClick={removeImage}
            >✕</button>
          </div>
        ) : (
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-sm mb-2" />
        )}
      </div>

      {/* Description */}
      <textarea
        placeholder="Describe the mood, moment, people, or place..."
        className="w-full bg-[#131316] border border-white/10 rounded-xl p-3 mb-4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Vibe pills */}
      <div className="mb-4 flex flex-wrap gap-2">
        {["aesthetic","funny","inspirational","romantic","witty","casual","professional","mysterious","travel","foodie","fitness","bold"].map(v => (
          <button
            key={v}
            className={`px-3 py-1 rounded-full border ${selectedVibe===v?"border-orange-500 bg-orange-500 text-black":"border-white/10 text-white/70"}`}
            onClick={() => setSelectedVibe(v)}
          >
            {v}
          </button>
        ))}
      </div>

      {/* Length & hashtags */}
      <div className="mb-4 flex gap-2">
        <select value={length} onChange={(e)=>setLength(e.target.value)} className="flex-1 bg-[#131316] border border-white/10 rounded-xl p-2">
          <option value="short">Short & punchy</option>
          <option value="medium">Medium</option>
          <option value="long">Storytelling</option>
        </select>
        <select value={hashtags} onChange={(e)=>setHashtagsOption(e.target.value)} className="flex-1 bg-[#131316] border border-white/10 rounded-xl p-2">
          <option value="yes">Full set (10+)</option>
          <option value="minimal">Few (3-5)</option>
          <option value="no">None</option>
        </select>
      </div>

      {/* Stepper */}
      <div className="mb-4 flex items-center gap-2">
        <span>Number of captions:</span>
        <button onClick={()=>adjustCount(-1)} disabled={captionCount<=1} className="px-3 py-1 border rounded">−</button>
        <span>{captionCount}</span>
        <button onClick={()=>adjustCount(1)} disabled={captionCount>=5} className="px-3 py-1 border rounded">+</button>
      </div>

      {/* Keywords */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add keywords..."
          className="w-full bg-[#131316] border border-white/10 rounded-xl p-2 mb-2"
          onKeyDown={e => e.key==="Enter" && addKeyword((e.target as HTMLInputElement).value)}
        />
        <div className="flex flex-wrap gap-2">
          {keywords.map(k => (
            <span key={k} className="px-2 py-1 bg-[#252529] rounded-full flex items-center gap-1">
              {k} <button onClick={()=>removeKeyword(k)}>✕</button>
            </span>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <div className="mb-4 space-y-2">
        <label className="flex items-center justify-between">
          Add emojis
          <input type="checkbox" checked={emojiToggle} onChange={()=>setEmojiToggle(!emojiToggle)} />
        </label>
        <label className="flex items-center justify-between">
          Include CTA
          <input type="checkbox" checked={ctaToggle} onChange={()=>setCtaToggle(!ctaToggle)} />
        </label>
        <label className="flex items-center justify-between">
          Line breaks
          <input type="checkbox" checked={linebreakToggle} onChange={()=>setLinebreakToggle(!linebreakToggle)} />
        </label>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-auto w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FFB563] hover:shadow-lg transition-all"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

    </div>
  );
}ok