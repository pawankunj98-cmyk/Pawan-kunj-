import { Megaphone, TrendingUp, Laptop, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Expertise() {
  const skills = [
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Digital Marketing",
      items: [
        "Search Engine Optimization",
        "Search Engine Marketing",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
      ],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data & Analytics",
      items: [
        "Google Analytics",
        "Search Console",
        "Meta Business Suite",
        "Conversion Tracking",
        "A/B Testing",
      ],
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Web Design Tools",
      items: [
        "WordPress & Elementor",
        "HTML / CSS",
        "Canva Pro",
        "Figma",
      ],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI Tools",
      items: [
        "ChatGPT",
        "Midjourney",
        "Jasper AI",
        "Notion AI",
      ],
    },
  ];

  return (
    <section id="expertise" className="py-24 md:py-32 px-6 md:px-12 bg-[#f7f5f0] relative z-10">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-serif italic text-sm text-[#FF4D2E]">02</span>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">Expertise</span>
          <div className="flex-1 h-[1px] bg-neutral-200" />
        </div>

        {/* Header Text */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight leading-[1.05] text-neutral-900 mb-16 max-w-4xl">
          A full-stack <em className="italic text-[#FF4D2E] font-light">digital</em> toolkit — from keyword to conversion.
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-neutral-200/80 rounded-[28px] p-8 md:p-9 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] interactive-card"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF4D2E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#f7f5f0] text-[#FF4D2E] flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-[#FF4D2E] group-hover:text-white group-hover:rotate-[-6deg] group-hover:scale-105">
                {skill.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-2xl font-medium tracking-tight text-neutral-950 mb-5">
                {skill.title}
              </h3>

              {/* Skill Items */}
              <ul className="space-y-0.5">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-neutral-700 py-2.5 border-b border-neutral-100 last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
