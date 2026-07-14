import { motion } from 'motion/react';

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-[#f7f5f0] relative z-10 select-none">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-serif italic text-sm text-[#FF4D2E]">04</span>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">Selected Work</span>
          <div className="flex-1 h-[1px] bg-neutral-200" />
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-neutral-900 mb-12">
          Featured case study
        </h2>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[28px] overflow-hidden border border-neutral-200/80 shadow-sm transition-transform duration-500 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.12)]"
        >
          {/* Left Side: Visual Graph Area */}
          <div className="lg:col-span-6 bg-neutral-950 p-8 md:p-12 relative overflow-hidden min-h-[360px] md:min-h-[480px] flex items-center justify-center">
            {/* Ambient gradients */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-[250px] h-[250px] rounded-full bg-[#FF4D2E]/25 blur-[50px] top-12 left-12" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px] bottom-6 right-6" />
            </div>

            {/* Case study tag */}
            <span className="absolute top-6 left-6 bg-white/10 backdrop-blur-md text-white text-[10px] tracking-widest font-semibold uppercase px-4 py-1.5 rounded-full z-10">
              Case Study
            </span>

            {/* Brand overlay */}
            <div className="absolute bottom-9 left-9 font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/15 leading-[0.9] select-none pointer-events-none">
              LAKHAN / UNIQUE
            </div>

            {/* Interactive Vector SVG Graph */}
            <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center z-10">
              <svg className="w-full h-full" viewBox="0 0 300 200" fill="none">
                {/* SVG path animation */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  d="M10 180 Q 50 170, 80 140 T 150 90 T 290 20"
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                
                {/* Under-graph Area Fill */}
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.5 }}
                  d="M10 180 Q 50 170, 80 140 T 150 90 T 290 20 L 290 200 L 10 200 Z"
                  fill="url(#grad-paint)"
                />

                {/* Growth nodes */}
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  cx="80" cy="140" r="4.5"
                  fill="#FF4D2E"
                />
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6, duration: 0.4 }}
                  cx="150" cy="90" r="4.5"
                  fill="#FF4D2E"
                />
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2, duration: 0.5 }}
                  cx="290" cy="20" r="6.5"
                  fill="#FF4D2E"
                />

                <defs>
                  <linearGradient id="grad-paint" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF4D2E" />
                    <stop offset="100%" stopColor="#FF4D2E" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Side: Case Study Narrative */}
          <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-widest text-[#FF4D2E] uppercase mb-4 block">
              Social Media · Content Strategy
            </span>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 mb-6 leading-none">
              Lakhan Unique
            </h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-10">
              Led the social media and content strategy for Lakhan Unique, focusing on storytelling and a consistent visual identity. Within months, engagement rates doubled and follower growth entered a sustained upward curve.
            </p>

            {/* Project Metrics Block */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-100">
              <div>
                <div className="font-serif text-3xl md:text-4xl text-[#FF4D2E] font-normal tracking-tight mb-1">
                  2×
                </div>
                <div className="text-[10px] md:text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                  Engagement Rate
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl text-[#FF4D2E] font-normal tracking-tight mb-1">
                  +180%
                </div>
                <div className="text-[10px] md:text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                  Follower Growth
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl text-[#FF4D2E] font-normal tracking-tight mb-1">
                  4.8
                </div>
                <div className="text-[10px] md:text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                  Avg. Post Rating
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
