import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface CountUpProps {
  target: number;
  suffix?: string;
}

function CountUp({ target, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic easeOut function
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={ref} className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-neutral-950 mb-2 flex items-baseline gap-1">
      <span>{count}</span>
      <span className="text-[#FF4D2E] text-2xl md:text-3xl font-light">{suffix}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-white relative z-10">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-serif italic text-sm text-[#FF4D2E]">01</span>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">About</span>
          <div className="flex-1 h-[1px] bg-neutral-100" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] text-neutral-900 mb-8">
              A marketer who designs.<br />A designer who <em className="italic text-[#FF4D2E] font-light">measures</em>.
            </h2>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6 max-w-2xl">
              I'm Pawan Kunj — a digital marketing executive and web designer with a track record of helping 40+ clients across e-commerce, education, hospitality and local services grow their online presence.
            </p>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-2xl">
              My approach blends creative storytelling with analytical precision. Every campaign I build is engineered for measurable ROI — from SEO audits and paid social to conversion-optimized landing pages powered by AI tooling.
            </p>
          </div>

          {/* Stats Bento Box Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-[1px] bg-neutral-200/60 border border-neutral-200/60 rounded-[28px] overflow-hidden shadow-sm">
            <div className="bg-[#f7f5f0] hover:bg-[#efece4] p-8 transition-colors duration-300">
              <CountUp target={40} suffix="+" />
              <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">Clients Served</div>
            </div>
            <div className="bg-[#f7f5f0] hover:bg-[#efece4] p-8 transition-colors duration-300">
              <CountUp target={3} suffix="+" />
              <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">Years Freelancing</div>
            </div>
            <div className="bg-[#f7f5f0] hover:bg-[#efece4] p-8 transition-colors duration-300">
              <CountUp target={120} suffix="+" />
              <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">Projects Delivered</div>
            </div>
            <div className="bg-[#f7f5f0] hover:bg-[#efece4] p-8 transition-colors duration-300">
              <CountUp target={15} suffix="+" />
              <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
