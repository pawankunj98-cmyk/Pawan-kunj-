import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Increments dynamically with variable speed
      currentProgress += Math.random() * 8 + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 600); // Small pause for high-end feel before fading out
      }
      setProgress(Math.floor(currentProgress));
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          id="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 bg-white z-[9999] flex items-center justify-center pointer-events-none select-none"
        >
          <div className="text-center w-full max-w-xs px-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-serif text-8xl font-medium tracking-tight bg-gradient-to-r from-neutral-900 via-[#FF4D2E] to-neutral-900 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_3s_linear_infinite] mb-8"
              style={{
                backgroundImage: 'linear-gradient(120deg, #0a0a0a 0%, #FF4D2E 50%, #0a0a0a 100%)',
                backgroundSize: '200% 100%',
              }}
            >
              PK
            </motion.div>
            
            {/* Loader bar container */}
            <div className="w-full h-[2px] bg-neutral-100 rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-[#FF4D2E] absolute left-0 top-0"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Percentage indicator */}
            <span className="text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
