import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
  gravity: number;
}

interface Firework {
  x: number;
  y: number;
  vy: number;
  targetY: number;
  color: string;
  exploded: boolean;
}

const COLORS = [
  '#FFD700', // Gold
  '#FF4444', // Red
  '#FF6B35', // Orange
  '#FFE66D', // Yellow
  '#FF1744', // Crimson
  '#FFC107', // Amber
  '#FF9800', // Deep Orange
];

export const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const fireworksRef = useRef<Firework[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const targetY = canvas.height * 0.2 + Math.random() * canvas.height * 0.3;
      
      fireworksRef.current.push({
        x,
        y: canvas.height,
        vy: -12 - Math.random() * 4,
        targetY,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        exploded: false,
      });
    };

    const explodeFirework = (firework: Firework) => {
      const particleCount = 80 + Math.floor(Math.random() * 40);
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 2 + Math.random() * 4;
        
        particlesRef.current.push({
          x: firework.x,
          y: firework.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          alpha: 1,
          color: firework.color,
          size: 2 + Math.random() * 2,
          decay: 0.015 + Math.random() * 0.01,
          gravity: 0.05,
        });
      }

      // Add sparkle particles
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 1 + Math.random() * 2;
        
        particlesRef.current.push({
          x: firework.x,
          y: firework.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          alpha: 1,
          color: '#FFFFFF',
          size: 1 + Math.random(),
          decay: 0.02 + Math.random() * 0.02,
          gravity: 0.03,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 30, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw fireworks
      fireworksRef.current = fireworksRef.current.filter((firework) => {
        if (!firework.exploded) {
          firework.y += firework.vy;
          firework.vy += 0.1;

          // Draw trail
          ctx.beginPath();
          ctx.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = firework.color;
          ctx.fill();

          // Glow effect
          const gradient = ctx.createRadialGradient(
            firework.x, firework.y, 0,
            firework.x, firework.y, 15
          );
          gradient.addColorStop(0, firework.color + '60');
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fillRect(firework.x - 15, firework.y - 15, 30, 30);

          if (firework.y <= firework.targetY || firework.vy >= 0) {
            firework.exploded = true;
            explodeFirework(firework);
          }
          return true;
        }
        return false;
      });

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.alpha -= particle.decay;
        particle.vx *= 0.99;

        if (particle.alpha > 0) {
          ctx.save();
          ctx.globalAlpha = particle.alpha;
          
          // Main particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();

          // Glow effect
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          gradient.addColorStop(0, particle.color + '80');
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Launch fireworks at intervals
    const launchInterval = setInterval(() => {
      const count = 1 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        setTimeout(createFirework, i * 200);
      }
    }, 1500);

    // Initial fireworks
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(createFirework, i * 300);
      }
    }, 500);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(launchInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};
