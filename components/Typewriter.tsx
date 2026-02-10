
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  as?: 'p' | 'h1' | 'h2' | 'span' | 'div';
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 5, 
  delay = 0, 
  className = "", 
  as: Component = 'span' 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        setIsDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <Component className={className}>
      {displayedText}
      {!isDone && started && (
        <span className="inline-block w-1.5 h-[1.1em] ml-1 bg-white/40 animate-pulse align-middle" />
      )}
    </Component>
  );
};

export default Typewriter;
