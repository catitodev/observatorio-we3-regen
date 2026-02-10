
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const auraPos = useRef({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer' || target.tagName === 'BUTTON' || target.closest('button') !== null);
    };
    window.addEventListener('mousemove', handleMouseMove);
    let animationFrame: number;
    const update = () => {
      if (mainCursorRef.current) mainCursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      if (lensRef.current) lensRef.current.style.transform = `translate3d(${mousePos.current.x - 48}px, ${mousePos.current.y - 48}px, 0)`;
      const lerpFactor = 0.15;
      auraPos.current.x += (mousePos.current.x - auraPos.current.x) * lerpFactor;
      auraPos.current.y += (mousePos.current.y - auraPos.current.y) * lerpFactor;
      if (auraRef.current) auraRef.current.style.transform = `translate3d(${auraPos.current.x}px, ${auraPos.current.y}px, 0)`;
      animationFrame = requestAnimationFrame(update);
    };
    update();
    return () => { window.removeEventListener('mousemove', handleMouseMove); cancelAnimationFrame(animationFrame); };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <div ref={lensRef} className="absolute w-24 h-24 border border-white/10 rounded-full" style={{ willChange: 'transform', backdropFilter: 'contrast(1.4) brightness(1.1) saturate(1.1) url(#lupa-distortion)', WebkitBackdropFilter: 'contrast(1.4) brightness(1.1) saturate(1.1) url(#lupa-distortion)', boxShadow: 'inset 0 0 30px rgba(34,197,94,0.05), 0 0 15px rgba(0,0,0,0.3)' }}></div>
      <div ref={auraRef} className="absolute w-12 h-12 bg-green-500/10 rounded-full blur-[20px]" style={{ willChange: 'transform', marginLeft: '-1.5rem', marginTop: '-1.5rem' }}></div>
      <div ref={mainCursorRef} className={`absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white,0_0_30px_rgba(34,197,94,0.6)] transition-transform duration-200 ease-out ${isPointer ? 'scale-[3]' : 'scale-100'}`} style={{ willChange: 'transform', marginLeft: '-0.1875rem', marginTop: '-0.1875rem' }}>
        <div className="absolute inset-0 bg-white/50 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
