"use client";

import { useState } from "react";
import InputPanel from "./components/InputPanel";
import ResultsPanel from "./components/ResultsPanel";
import BackgroundOrbs from "./components/BackgroundOrbs";

export default function Home() {
  const [captions, setCaptions] = useState<string[]>([]);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F0EEE9] relative overflow-hidden">
      
      {/* Premium background effects */}
      <BackgroundOrbs />

      <div className="grid md:grid-cols-[420px_1fr] min-h-screen relative z-10">
        
        {/* LEFT PANEL */}
        <InputPanel
          setCaptions={setCaptions}
          setHashtags={setHashtags}
          setLoading={setLoading}
          loading={loading}
        />

        {/* RIGHT PANEL */}
        <ResultsPanel
          captions={captions}
          hashtags={hashtags}
          loading={loading}
        />

      </div>
    </div>
  );
}