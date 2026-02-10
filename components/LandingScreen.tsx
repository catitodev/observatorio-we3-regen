
import React, { useEffect, useRef, useState } from 'react';

interface LandingScreenProps {
  onEnter?: () => void;
}

interface Particle {
  x: number;
  y: number;
  char: string;
  targetX: number;
  targetY: number;
  alpha: number;
  size: number;
  active: boolean;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onEnter }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [isForming, setIsForming] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [titleRect, setTitleRect] = useState({ width: 0, height: 40 });
  const targetText = "Observatório Web3 ReGen";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let frameCount = 0;

    const calculateTargets = (width: number, height: number) => {
      ctx.font = `bold 32px 'Playfair Display'`;
      const textWidth = ctx.measureText(targetText).width;
      const startX = (width - textWidth) / 2;
      const startY = height * 0.22;
      setTitleRect({ width: textWidth, height: 40 });

      if (particlesRef.current.length === 0) {
        for (let i = 0; i < targetText.length; i++) {
          const charWidth = ctx.measureText(targetText[i]).width;
          const currentX = startX + ctx.measureText(targetText.substring(0, i)).width;
          particlesRef.current.push({
            x: Math.random() * width,
            y: -50,
            char: targetText[i],
            targetX: currentX + charWidth / 2,
            targetY: startY,
            alpha: 0,
            size: 16,
            active: false
          });
        }
      } else {
        for (let i = 0; i < targetText.length; i++) {
          const charWidth = ctx.measureText(targetText[i]).width;
          const currentX = startX + ctx.measureText(targetText.substring(0, i)).width;
          particlesRef.current[i].targetX = currentX + charWidth / 2;
          particlesRef.current[i].targetY = startY;
        }
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      calculateTargets(canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize();

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@#%&*+=-<>[]{}/\\ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100);
    
    const t1 = setTimeout(() => setIsForming(true), 800); 
    const t2 = setTimeout(() => setIsFinal(true), 3200);   

    const draw = () => {
      frameCount++;
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono`;
      for (let i = 0; i < drops.length; i++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        const opacity = Math.random() * 0.1 + 0.02;
        ctx.fillStyle = `rgba(140, 140, 140, ${opacity})`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.7;
      }

      if (isForming) {
        particlesRef.current.forEach((p, i) => {
          if (!p.active && frameCount > 20 + i * 2) p.active = true;
          if (p.active) {
            const ease = isFinal ? 0.12 : 0.05;
            p.x += (p.targetX - p.x) * ease;
            p.y += (p.targetY - p.y) * ease;
            p.alpha = Math.min(1, p.alpha + 0.03);
            p.size = isFinal ? 32 : (16 + (32 - 16) * p.alpha);
            ctx.fillStyle = isFinal ? '#ffffff' : `rgba(255, 255, 255, ${p.alpha})`;
            ctx.font = `bold ${p.size}px 'Playfair Display'`;
            ctx.textAlign = 'center';
            ctx.fillText(p.char, p.x, p.y);
          }
        });
      }
      animationFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      clearTimeout(t1); clearTimeout(t2);
    };
  }, [isForming, isFinal]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />
      
      {isFinal && onEnter && (
        <button
          onClick={onEnter}
          className="absolute left-1/2 -translate-x-1/2 z-[30] cursor-pointer outline-none bg-transparent"
          style={{ top: 'calc(22% - 25px)', width: `${titleRect.width + 40}px`, height: '60px' }}
        />
      )}

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#0a0a0a_100%)]"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className={`relative w-full max-w-[320px] lg:max-w-[650px] aspect-[16/9] transition-all duration-[2500ms] ease-out ${isFinal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute -inset-4 border border-white/5 rounded-[100%_0] rotate-45 animate-eye-sync opacity-30"></div>
          <div className="w-full h-full overflow-hidden relative shadow-[0_0_80px_rgba(34,197,94,0.08)] bg-neutral-900/20" style={{ clipPath: 'ellipse(50% 40% at 50% 50%)' }}>
            <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-50 contrast-125">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-torus-mesh-on-a-black-background-44165-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
          </div>
        </div>

        <div className={`absolute bottom-[10%] lg:bottom-[12%] text-center transition-all duration-1000 delay-500 ${isFinal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-[8px] font-mono text-white/40 uppercase tracking-[0.6em]">Protocolo ReGen v4.0.2</p>
          </div>
          <p className="text-[7px] font-mono text-neutral-700 uppercase tracking-[0.4em]">Sincronização de Biosfera Ativa</p>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
