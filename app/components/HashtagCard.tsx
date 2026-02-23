interface Props {
  text: string;
}

export default function HashtagCard({ text }: Props) {
  return (
    <div className="inline-block bg-[#1C1C21] text-[#FFB563] border border-white/10 rounded-full px-3 py-1 text-sm font-medium hover:bg-[#252529] transition">
      #{text}
    </div>
  );
}