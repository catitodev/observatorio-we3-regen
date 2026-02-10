
import React, { useEffect, useRef, useState } from 'react';

interface LandingScreenProps {
  onEnter?: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onEnter }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isForming, setIsForming] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [titleRect, setTitleRect] = useState({ width: 0, height: 40 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let frameCount = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.font = `bold 32px 'Playfair Display'`;
      const textWidth = ctx.measureText("Observatório Web3 ReGen").width;
      setTitleRect({ width: textWidth, height: 40 });
    };
    window.addEventListener('resize', resize);
    resize();

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@#%&*+=-<>[]{}/\\ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
    const fontSize = 16;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100);
    
    const targetText = "Observatório Web3 ReGen";
    const particles: any[] = [];

    const t1 = setTimeout(() => setIsForming(true), 1000); 
    const t2 = setTimeout(() => setIsFinal(true), 3500);   

    const setupTitleParticles = () => {
      ctx.font = `bold 32px 'Playfair Display'`;
      const textWidth = ctx.measureText(targetText).width;
      const startX = (canvas.width - textWidth) / 2;
      const startY = canvas.height * 0.22;

      for (let i = 0; i < targetText.length; i++) {
        const charWidth = ctx.measureText(targetText[i]).width;
        const currentX = startX + ctx.measureText(targetText.substring(0, i)).width;
        particles.push({
          x: Math.random() * canvas.width,
          y: -50,
          char: targetText[i],
          targetX: currentX + charWidth / 2,
          targetY: startY,
          alpha: 0,
          size: 16,
          active: false
        });
      }
    };

    setupTitleParticles();

    const draw = () => {
      frameCount++;
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono`;
      for (let i = 0; i < drops.length; i++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        const opacity = Math.random() * 0.15 + 0.05;
        ctx.fillStyle = `rgba(160, 160, 160, ${opacity})`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (Math.random() > 0.98) {
          ctx.fillStyle = `rgba(255, 255, 255, 0.3)`;
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        }
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.9;
      }

      if (isForming) {
        particles.forEach((p, i) => {
          if (!p.active && frameCount > 30 + i * 3) {
            p.active = true;
            p.x = (Math.floor(Math.random() * columns)) * fontSize;
            p.y = Math.random() * (canvas.height * 0.4);
          }
          if (p.active) {
            if (!isFinal) {
              const ease = 0.08;
              p.x += (p.targetX - p.x) * ease;
              p.y += (p.targetY - p.y) * ease;
              p.alpha = Math.min(1, p.alpha + 0.05);
              p.size = 16 + (32 - 16) * p.alpha;
            } else {
              p.x = p.targetX; p.y = p.targetY; p.alpha = 1; p.size = 32;
            }
            ctx.shadowBlur = isFinal ? 15 : 4;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
            ctx.fillStyle = isFinal ? '#ffffff' : `rgba(255, 255, 255, ${p.alpha})`;
            ctx.font = `bold ${p.size}px 'Playfair Display'`;
            ctx.textAlign = 'center';
            ctx.fillText(p.char, p.x, p.y);
            ctx.shadowBlur = 0;
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-90" />
      {isFinal && onEnter && (
        <button
          onClick={onEnter}
          className="absolute left-1/2 -translate-x-1/2 z-[30] cursor-pointer outline-none bg-transparent border-none"
          style={{ top: 'calc(22% - 20px)', width: `${titleRect.width + 40}px`, height: `${titleRect.height + 20}px` }}
          aria-label="Entrar no Observatório"
        />
      )}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_10%,rgba(10,10,10,0.9)_100%)]"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className={`relative w-full max-w-[340px] lg:max-w-[760px] aspect-[16/9] transition-all duration-[3000ms] ease-out ${isFinal ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="absolute -inset-2 lg:-inset-4 border border-white/5 rounded-[100%_0] rotate-45 animate-eye-sync opacity-40"></div>
          <div className="w-full h-full overflow-hidden relative shadow-[0_0_100px_rgba(34,197,94,0.15)] bg-neutral-900/40" style={{ clipPath: 'ellipse(50% 40% at 50% 50%)' }}>
            <video autoPlay muted loop playsInline className={`w-full h-full object-cover transition-all duration-1000 grayscale-[0.2] ${isFinal ? 'scale-110' : 'scale-100'}`}>
              <source src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-42564-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
          </div>
        </div>
        <div className={`absolute bottom-[14%] lg:bottom-[16%] text-center transition-all duration-1000 delay-700 ${isFinal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,1)]"></span>
            <p className="text-[10px] lg:text-[12px] font-mono text-white uppercase tracking-[0.6em] font-semibold">Protocolo de Observação Ativa</p>
          </div>
          <p className="mt-6 text-[9px] lg:text-[11px] font-mono text-neutral-300 max-w-xs mx-auto leading-relaxed uppercase tracking-[0.5em]">Sincronização Biosférica v.4.0.2</p>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
