
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FireworksBackgroundProps {
  className?: string;
  color?: string;
}

export function FireworksBackground({ className, color = 'white' }: FireworksBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      size: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.color = color;
        this.size = Math.random() * 3 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1; // gravity
        this.alpha -= 0.01;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Rocket {
      x: number;
      y: number;
      targetY: number;
      vy: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.targetY = Math.random() * canvas.height * 0.5 + 50;
        this.vy = -8;
        const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f', '#fff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.vy;
        return this.y <= this.targetY;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      explode() {
        for (let i = 0; i < 50; i++) {
          particles.push(new Particle(this.x, this.y, this.color));
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new rockets randomly
      if (Math.random() < 0.03) {
        rockets.push(new Rocket());
      }

      // Update and draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const rocket = rockets[i];
        if (!rocket.update()) {
          rocket.explode();
          rockets.splice(i, 1);
        } else {
          rocket.draw(ctx);
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        if (particle.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          particle.draw(ctx);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-none', className)}
    />
  );
}
