import CaptionCard from "./CaptionCard";
import HashtagCard from "./HashtagCard";

interface Props {
  captions: string[];
  hashtags: string[];
  loading: boolean;
}

export default function ResultsPanel({ captions, hashtags, loading }: Props) {
  return (
    <div className="p-10 space-y-10 overflow-y-auto h-screen">
      
      {loading && (
        <div className="text-[#6B6A72] animate-pulse">Generating results...</div>
      )}

      {captions.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-lg text-[#9896A0]">Captions</h2>
          {captions.map((caption, i) => (
            <CaptionCard key={i} text={caption} />
          ))}
        </div>
      )}

      {hashtags.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-lg text-[#9896A0]">Hashtags</h2>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag, i) => (
              <HashtagCard key={i} text={tag} />
            ))}
          </div>
        </div>
      )}

      {captions.length === 0 && !loading && (
        <div className="text-[#6B6A72] text-center mt-20">
          Your captions will appear here
        </div>
      )}
    </div>
  );
}