"use client";

import { useState, useEffect, useRef } from "react";

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

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [selectedCaption, setSelectedCaption] = useState<string | null>(null);
  const [selectedHashtags, setSelectedHashtags] = useState<string | null>(null);
  const copyButtonRef = useRef<HTMLDivElement | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem("postpilot_history");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
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

  setSelectedCaption(null);
  setSelectedHashtags(null);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("prompt", prompt);
  formData.append("tone", tone);

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
    const newCaption = data.caption || "No caption returned";

    setResult(newCaption);
    setLoading(false);

    const updatedHistory = [newCaption, ...history].slice(0, 10);
    setHistory(updatedHistory);
    localStorage.setItem("postpilot_history", JSON.stringify(updatedHistory));
  } catch (err: any) {
    setLoading(false);
    console.error("Error generating caption:", err);
    alert(err.message || "Failed to generate caption. Check backend logs.");
  }
};

  return (
    <main className="min-h-screen w-full flex flex-col items-center px-4 py-6 bg-gradient-to-br from-gray-50 to-gray-200 text-black overflow-x-hidden">
      <div className="w-full flex flex-col items-center text-center mb-6">
        <h1 className="text-4xl font-extrabold mb-2">PostPilot 🚀</h1>
        <p className="text-gray-600 font-medium">AI-powered captions that convert 🎉</p>
      </div>

      <form
        className="flex flex-col w-full max-w-5xl bg-white p-4 md:p-6 rounded-xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-6 items-start w-full">

          {/* Image Left */}
          <div className="w-full md:flex-shrink-0 flex justify-center md:justify-start">
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

          {/* Controls Right */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <p className="font-medium text-gray-700 mb-2">
              ✨ <strong>Instructions:</strong> Upload your image 📸, enter an optional prompt 💡, choose a tone 🎯, then generate engaging captions and hashtags 🚀
            </p>



            <textarea
              placeholder="Enter prompt (optional)"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="border p-4 rounded-lg w-full h-64 resize-none"
            />
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="border p-2 rounded-lg w-full max-w-xs text-gray-700 bg-white"
            >
              <option value="">Select Tone</option>
              <option value="luxury and premium">Luxury</option>
              <option value="high-energy fitness">Fitness</option>
              <option value="Gen Z hype and trendy">Gen Z</option>
              <option value="corporate and professional">Corporate</option>
              <option value="minimalist and clean">Minimalist</option>
            </select>

            <div className="flex gap-2 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 active:scale-95"
              >
                {loading ? "Generating..." : "Generate"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                  setResult("");
                  setPrompt("");
                  setTone("");
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
            const blocks = result
              .split("\n\n")
              .filter((block) => block.trim().length > 20)
              .slice(0, 6);

            const captions = blocks
              .map((block) =>
                block
                  .split("\n")
                  .filter((line) => !line.trim().startsWith("#"))
                  .join(" ")
              )
              .filter((text) => text.trim().length > 0)
              .slice(0, 3);

            const hashtags: string[] = [];
            blocks.forEach(block => {
              const lines = block.split("\n");
              lines.forEach(line => {
                if (line.trim().startsWith("#")) {
                  const clean = line.trim();
                  if (clean.length > 0) hashtags.push(clean);
                }
              });
            });
            const topHashtags = hashtags.slice(0, 3); // take first 3 hashtags

            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* CAPTIONS */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Caption Options</h3>
                    <div className="space-y-4">
                      {captions.map((caption, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedCaption(caption)}
                          className={`relative p-4 border rounded-lg cursor-pointer transition transform hover:scale-[1.01] ${
                            selectedCaption === caption
                              ? "border-blue-600 bg-blue-50 scale-[1.02] shadow-lg shadow-blue-200/50"
                              : "bg-white hover:border-gray-400"
                          }`}
                        >
                          {idx === 0 && (
                            <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full mr-2 mb-1">
                              Top Pick
                            </span>
                          )}
                          {selectedCaption === caption && (
                            <span className="absolute top-2 right-2 text-blue-600 font-bold">
                              ✓
                            </span>
                          )}
                          {caption
                            .split(" ")
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}
                          <p className="text-xs mt-2 opacity-60 text-right">{caption.length} chars</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* HASHTAGS */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Hashtag Options</h3>
                    <div className="space-y-4">
                      {topHashtags.map((tag, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedHashtags(tag)}
                          className={`relative p-4 border rounded-lg cursor-pointer transition transform hover:scale-[1.01] ${
                            selectedHashtags === tag
                              ? "border-green-600 bg-green-50 scale-[1.02] shadow-lg shadow-green-200/50"
                              : "bg-white hover:border-gray-400"
                          }`}
                        >
                          {selectedHashtags === tag && (
                            <span className="absolute top-2 right-2 text-green-600 font-bold">
                              ✓
                            </span>
                          )}
                          {tag
                            .split(" ")
                            .map(word => {
                              if (word.startsWith("#")) {
                                const clean = word.replace(/[^a-zA-Z0-9]/g, "");
                                return "#" + clean.replace(/([a-zA-Z0-9]+)/g, (match) =>
                                  match.charAt(0).toUpperCase() + match.slice(1)
                                );
                              }
                              return word;
                            })
                            .join(" ")}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* COPY COMBO BUTTON */}
                {selectedCaption && selectedHashtags && (
                  <div ref={copyButtonRef} className="mt-8 text-center space-y-4">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `${selectedCaption}\n\n${selectedHashtags}`
                        );
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

                    <button
                      onClick={() => {
                        setSelectedCaption(null);
                        setSelectedHashtags(null);
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
                    onClick={handleSubmit}
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
  );
}