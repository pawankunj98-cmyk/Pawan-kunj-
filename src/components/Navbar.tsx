import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Recognition', href: '#recognition' },
  ];

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -50, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-48px)] max-w-[1100px]"
      >
        <div
          className={`flex items-center justify-between border border-black/10 px-4 py-2 md:py-2.5 md:px-6 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled || mobileMenuOpen
              ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
              : 'bg-white/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.04)]'
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="font-serif text-xl font-medium tracking-tight hover:opacity-80 transition-opacity">
            Pawan Kunj<span className="text-[#FF4D2E]">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium px-4 py-2 rounded-full text-neutral-800 hover:bg-[#efece4] hover:text-black transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions: CTA and Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-block bg-neutral-950 text-white hover:bg-[#FF4D2E] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              Let's Talk
            </a>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2.5 rounded-full hover:bg-neutral-100 text-neutral-900 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Expandable Drawer Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-16 md:hidden bg-white/95 backdrop-blur-xl border border-black/10 rounded-[24px] shadow-[0_15px_35px_rgba(0,0,0,0.1)] overflow-hidden p-6 flex flex-col gap-4 mt-2"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium px-4 py-3 rounded-xl text-neutral-800 hover:bg-neutral-50 hover:text-black transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA (only shown inside drawer on extra small screens) */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                onClick={() => setMobileMenuOpen(false)}
                className="sm:hidden w-full text-center bg-neutral-950 text-white hover:bg-[#FF4D2E] py-4 rounded-xl text-sm font-medium transition-all"
              >
                Let's Talk
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

