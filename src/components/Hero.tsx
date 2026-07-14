import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse coordinates relative to center of the viewport
      const cx = (e.clientX / window.innerWidth) - 0.5;
      const cy = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x: cx, y: cy });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Compute parallax offset for the floating shapes
  const getShapeStyle = (depth: number) => {
    const x = mousePosition.x * 60 * depth;
    const y = mousePosition.y * 60 * depth;
    return {
      transform: `translate3d(${x}px, ${y}px, 0)`,
      transition: 'transform 0.2s cubic-bezier(0.22, 0.61, 0.36, 1)',
    };
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Background drifting ambient shapes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] bg-[#ffe9e3] rounded-full blur-[80px] opacity-55 -top-[200px] -right-[100px] animate-[drift1_20s_ease-in-out_infinite]"
          style={{ animation: 'drift1 20s ease-in-out infinite' }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-[#e8e3d8] rounded-full blur-[80px] opacity-55 -bottom-[150px] -left-[100px]"
          style={{ animation: 'drift2 25s ease-in-out infinite' }}
        />
      </div>

      <div className="container max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-neutral-500 font-semibold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D2E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D2E]"></span>
            </span>
            Digital Marketing Executive · India
          </motion.div>

          {/* Heading */}
          <h1 className="font-serif text-[clamp(64px,12vw,180px)] font-normal tracking-tight leading-[0.92] mb-10 select-none">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Pawan
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block italic text-[#FF4D2E] font-light"
              >
                Kunj
              </motion.span>
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg lg:text-xl text-neutral-800 max-w-2xl leading-relaxed mb-10"
          >
            Crafting data-driven marketing campaigns and conversion-focused websites.
            Trusted by 40+ brands across industries — blending strategy, design, and AI tooling into one seamless workflow.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 z-20 relative"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-neutral-950 text-white hover:bg-[#FF4D2E] px-8 py-4.5 rounded-full text-sm font-medium transition-all duration-400 hover:shadow-[0_12px_30px_rgba(255,77,46,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              View Selected Work
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-neutral-200 hover:border-neutral-900 bg-transparent text-neutral-900 px-8 py-4.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-neutral-50"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Parallax Shapes */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* Shape 1 */}
        <div
          className="absolute w-[140px] h-[140px] rounded-[30%] bg-gradient-to-br from-[#efece4] to-[#f7f5f0] border border-black/[0.08] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] top-[20%] right-[8%] hidden lg:block"
          style={getShapeStyle(0.2)}
        />
        {/* Shape 2 */}
        <div
          className="absolute w-[80px] h-[80px] rounded-[30%] bg-[#ffe9e3] border border-black/[0.08] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] top-[62%] right-[18%] hidden lg:block"
          style={getShapeStyle(0.4)}
        />
        {/* Shape 3 */}
        <div
          className="absolute w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#efece4] to-[#f7f5f0] border border-black/[0.08] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] top-[30%] left-[5%] hidden xl:block"
          style={getShapeStyle(0.3)}
        />
        {/* Shape 4 */}
        <div
          className="absolute w-[54px] h-[54px] rounded-full bg-[#FF4D2E] opacity-90 bottom-[25%] left-[14%] hidden xl:block"
          style={getShapeStyle(0.5)}
        />
        {/* Shape 5 */}
        <div
          className="absolute w-[36px] h-[36px] rounded-full bg-neutral-950 top-[18%] left-[42%] hidden xl:block"
          style={getShapeStyle(0.6)}
        />
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-neutral-400">
        <span>Scroll</span>
        <div className="w-[1px] h-[50px] bg-neutral-200 relative overflow-hidden">
          <span 
            className="absolute top-[-50%] left-0 w-full h-[50%] bg-[#FF4D2E]"
            style={{
              animation: 'scrollLine 2.3s cubic-bezier(0.22, 1, 0.36, 1) infinite'
            }}
          />
        </div>

        <style>{`
          @keyframes scrollLine {
            0% { top: -50%; }
            100% { top: 100%; }
          }
          @keyframes drift1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-60px, 80px) scale(1.1); }
          }
          @keyframes drift2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(80px, -60px) scale(0.9); }
          }
        `}</style>
      </div>
    </section>
  );
}
