import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect mobile touch devices to hide custom cursor entirely
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animate = () => {
      // Lerp (linear interpolation) for smooth delay effect
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Expand on interactive items
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('.interactive-card');

      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Circle (lagging lerped pointer) */}
      <div
        ref={cursorRef}
        id="custom-cursor-outer"
        className={`fixed top-0 left-0 w-[30px] height-[30px] w-8 h-8 rounded-full border border-neutral-900 pointer-events-none z-[10000] -ml-4 -mt-4 mix-blend-difference border-white transition-[width,height,background-color] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
          isHovered ? 'w-[60px] h-[60px] -ml-[30px] -mt-[30px] bg-white/10' : ''
        }`}
      />
      {/* Inner Dot (instant precise pointer) */}
      <div
        ref={dotRef}
        id="custom-cursor-inner"
        className="fixed top-0 left-0 w-[5px] h-[5px] bg-[#FF4D2E] rounded-full pointer-events-none z-[10001] -ml-[2.5px] -mt-[2.5px]"
      />
    </>
  );
}
