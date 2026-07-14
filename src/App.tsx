import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Work from './components/Work';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <>
      {/* Dynamic Cursor tracking */}
      <Cursor />

      {/* Intro Loader Screen */}
      <Loader onComplete={() => setLoaderComplete(true)} />

      {/* Main Content Showcase */}
      <AnimatePresence>
        {loaderComplete && (
          <motion.main
            id="portfolio-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-screen selection:bg-[#FF4D2E] selection:text-white"
          >
            {/* Header Navigation */}
            <Navbar />

            {/* Core Section Elements */}
            <Hero />
            <Marquee />
            <About />
            <Expertise />
            <Experience />
            <Work />
            <Achievements />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
