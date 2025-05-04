
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

    // Initialize particles - increased count and size
    particles.current = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 2.5, // Increased size from 1.5-4.5 to 2.5-7.5
      speedX: (Math.random() - 0.5) * 0.8, // Slightly faster movement
      speedY: (Math.random() - 0.5) * 0.8,
      color: '#FFFFFF' // All particles remain white
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach(particle => {
        // Calculate distance to mouse
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Move particles towards mouse if they're within range - increased range
        if (distance < 250) { // Increased from 200 to 250
          // Stronger pull towards mouse
          particle.x += dx * 0.03; // Increased from 0.02 to 0.03
          particle.y += dy * 0.03;
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
        
        // Connect particles close to mouse - increased range
        if (distance < 250) { // Increased from 200 to 250
          ctx.beginPath();
          ctx.strokeStyle = '#FFFFFF';
          ctx.globalAlpha = 1 - distance / 250;
          ctx.lineWidth = 1.2; // Thicker connection lines
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        
        // Connect nearby particles to each other
        particles.current.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) { // Only connect particles that are close to each other
            ctx.beginPath();
            ctx.strokeStyle = '#FFFFFF';
            ctx.globalAlpha = 0.2 * (1 - distance / 120); // Fade based on distance
            ctx.lineWidth = 0.6;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
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
      className="fixed inset-0 pointer-events-none z-0 opacity-70" // Increased opacity
    />
  );
};

export default ParticleBackground;
