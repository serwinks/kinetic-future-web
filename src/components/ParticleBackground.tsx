
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize particles - now all white and larger
    particles.current = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1.5, // Increased size from 0.5-2.5 to 1.5-4.5
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: '#FFFFFF' // All particles are now white
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach(particle => {
        // Calculate distance to mouse
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Move particles towards mouse if they're within range
        if (distance < 200) {
          // Stronger pull towards mouse
          particle.x += dx * 0.02;
          particle.y += dy * 0.02;
        } else {
          // Normal movement when not near mouse
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Boundary checking
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
          }
          
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Connect particles close to mouse
        if (distance < 200) {
          ctx.beginPath();
          ctx.strokeStyle = '#FFFFFF';
          ctx.globalAlpha = 1 - distance / 200;
          ctx.lineWidth = 0.8; // Slightly thicker lines
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};

export default ParticleBackground;
