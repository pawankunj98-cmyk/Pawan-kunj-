import { Trophy, GraduationCap, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Achievements() {
  const recognitions = [
    {
      icon: <Trophy className="w-5 h-5 text-[#FF4D2E]" />,
      title: "3rd Place — School Competition",
      description: "Awarded for academic and co-curricular excellence, recognized among top performers across all disciplines.",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#FF4D2E]" />,
      title: "Class XII Commerce — 78%",
      description: "Graduating in 2026 with strong fundamentals in business, economics, and accountancy.",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#FF4D2E]" />,
      title: "Core Strengths",
      description: "Efficiency · Leadership · Adaptability · Creative problem-solving · Cross-functional communication.",
    },
  ];

  return (
    <section id="recognition" className="py-24 md:py-32 px-6 md:px-12 bg-white relative z-10">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-serif italic text-sm text-[#FF4D2E]">05</span>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">Recognition &amp; Strengths</span>
          <div className="flex-1 h-[1px] bg-neutral-100" />
        </div>

        {/* Recognition Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {recognitions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-neutral-200/80 rounded-[28px] p-8 md:p-10 transition-all duration-400 hover:bg-neutral-950 hover:text-white hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] interactive-card"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#f7f5f0] flex items-center justify-center mb-8 transition-all duration-400 group-hover:bg-[#FF4D2E] group-hover:text-white">
                <div className="transition-transform duration-400 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h4 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-neutral-950 group-hover:text-white mb-4 leading-snug transition-colors duration-400">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed transition-colors duration-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
