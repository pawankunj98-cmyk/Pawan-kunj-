import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 bg-neutral-950 text-white text-center overflow-hidden z-10 select-none">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-radial from-[#FF4D2E]/25 to-transparent blur-[80px] -top-[200px] left-1/2 -translate-x-1/2" />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Eyebrow Label */}
        <span className="block font-serif italic text-sm text-[#FF4D2E] mb-8">
          06 — Contact
        </span>

        {/* Title */}
        <h2 className="font-serif text-[clamp(48px,8vw,120px)] font-normal tracking-tight leading-[0.95] mb-8">
          Let's build<br />something <em className="italic text-[#FF4D2E] font-light">bold</em>.
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-neutral-400 max-w-lg mx-auto leading-relaxed mb-16">
          Whether you need a marketing strategy that scales or a website that converts — I'd love to hear about your project.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-24">
          {/* Email Box */}
          <a
            href="mailto:Pawankunj98@gmail.com"
            className="group flex items-center gap-5 p-8 text-left bg-neutral-900 border border-neutral-800 rounded-[28px] transition-all duration-400 hover:bg-neutral-900/50 hover:border-[#FF4D2E] hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-[#FF4D2E] transition-all duration-400 group-hover:bg-[#FF4D2E] group-hover:text-white shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] tracking-widest text-neutral-500 uppercase mb-1">
                Email Me
              </span>
              <span className="block font-serif text-lg md:text-xl font-normal text-white truncate">
                Pawankunj98@gmail.com
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-neutral-600 ml-auto transition-all duration-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* WhatsApp Box */}
          <a
            href="https://wa.me/918750027833"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-8 text-left bg-neutral-900 border border-neutral-800 rounded-[28px] transition-all duration-400 hover:bg-neutral-900/50 hover:border-[#FF4D2E] hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-[#FF4D2E] transition-all duration-400 group-hover:bg-[#FF4D2E] group-hover:text-white shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] tracking-widest text-neutral-500 uppercase mb-1">
                WhatsApp
              </span>
              <span className="block font-serif text-lg md:text-xl font-normal text-white truncate">
                +91 87500 27833
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-neutral-600 ml-auto transition-all duration-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Footer info line */}
        <footer className="pt-8 border-t border-neutral-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 tracking-wide">
          <span>© {currentYear} Pawan Kunj — All rights reserved</span>
          <span>Designed &amp; coded with intention.</span>
        </footer>
      </div>
    </section>
  );
}
