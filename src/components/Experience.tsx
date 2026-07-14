import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      period: "2023 — Present",
      role: "Freelance Digital Marketing & Web Design Specialist",
      company: "Independent Consultant",
      description: "Partnering with 40+ clients across e-commerce, education, hospitality, and local services to deliver end-to-end digital growth — from first audit to scalable campaign.",
      bullets: [
        "Design and execute full-funnel marketing strategies spanning SEO, paid social, email, and content.",
        "Conduct deep SEO audits that lifted organic traffic by an average of 35% per client.",
        "Build responsive, conversion-optimized websites in WordPress and Elementor.",
        "Integrate AI tools (ChatGPT, Midjourney, Jasper) into creative workflows to 3× content output without sacrificing quality.",
        "Manage end-to-end client engagement: strategy, execution, reporting, and iteration."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-white relative z-10">
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="font-serif italic text-sm text-[#FF4D2E]">03</span>
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">Experience</span>
          <div className="flex-1 h-[1px] bg-neutral-100" />
        </div>

        {/* Experience Timeline Stack */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-neutral-200/80 rounded-[28px] p-8 md:p-12 transition-all duration-400 hover:border-neutral-900 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.08)]"
            >
              {/* Year Badge */}
              <span className="inline-block text-xs font-semibold tracking-widest text-[#FF4D2E] uppercase bg-[#ffe9e3] px-4 py-1.5 rounded-full mb-6">
                {exp.period}
              </span>

              {/* Title & Organization */}
              <h3 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-neutral-950 mb-2 leading-tight">
                {exp.role}
              </h3>
              <p className="text-sm font-medium text-neutral-500 tracking-wide uppercase mb-6">
                {exp.company}
              </p>

              {/* Core Paragraph */}
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-8 max-w-3xl">
                {exp.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-4 max-w-3xl">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="relative pl-6 text-sm md:text-base text-neutral-700 leading-relaxed">
                    {/* Styled bullet indicator */}
                    <span className="absolute left-0 top-[10px] w-2 h-2 rounded-full bg-[#FF4D2E]" />
                    {bullet}
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
