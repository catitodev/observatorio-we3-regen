
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const auraPos = useRef({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const handleTouch = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouch);

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
    return () => { 
      window.removeEventListener('mousemove', handleMouseMove); 
      window.removeEventListener('touchstart', handleTouch);
      cancelAnimationFrame(animationFrame); 
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden lg:block">
      {/* Lente Transparente com Distorção */}
      <div 
        ref={lensRef} 
        className="absolute w-24 h-24 border border-white/20 rounded-full bg-transparent" 
        style={{ 
          willChange: 'transform', 
          backdropFilter: 'contrast(1.2) brightness(1.05) saturate(1.1) url(#lupa-distortion)', 
          WebkitBackdropFilter: 'contrast(1.2) brightness(1.05) saturate(1.1) url(#lupa-distortion)',
          boxShadow: '0 0 20px rgba(255,255,255,0.05)'
        }}
      ></div>
      
      {/* Aura de fundo */}
      <div ref={auraRef} className="absolute w-12 h-12 bg-green-500/5 rounded-full blur-[25px]" style={{ willChange: 'transform', marginLeft: '-1.5rem', marginTop: '-1.5rem' }}></div>
      
      {/* Ponto central do cursor */}
      <div ref={mainCursorRef} className={`absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white] transition-transform duration-200 ease-out ${isPointer ? 'scale-[4]' : 'scale-100'}`} style={{ willChange: 'transform', marginLeft: '-0.125rem', marginTop: '-0.125rem' }}>
        <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default CustomCursor;
