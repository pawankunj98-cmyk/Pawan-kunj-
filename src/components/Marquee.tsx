export default function Marquee() {
  const items = [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Web Design",
    "Content Strategy",
    "Google Analytics",
    "AI Workflows",
    "WordPress",
  ];

  return (
    <div className="py-8 border-t border-b border-black/10 overflow-hidden bg-white relative z-10 select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Looping Track Container (repeated twice for seamless end-to-start transition) */}
        <div className="flex items-center gap-10 shrink-0 min-w-full animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {[...items, ...items, ...items].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 text-neutral-900 font-serif text-2xl md:text-3xl lg:text-4xl italic font-normal">
              <span>{item}</span>
              <span className="text-[#FF4D2E] font-sans not-italic text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33333%); }
        }
      `}</style>
    </div>
  );
}
