
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
    particles.current = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 3, // Increased size from 2.5-7.5 to 3-9
      speedX: (Math.random() - 0.5) * 1.0, // Slightly faster movement
      speedY: (Math.random() - 0.5) * 1.0,
      color: '#000000' // Changed to black
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
        if (distance < 300) { // Increased from 250 to 300
          // Stronger pull towards mouse
          particle.x += dx * 0.04; // Increased from 0.03 to 0.04
          particle.y += dy * 0.04;
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
        if (distance < 300) { // Increased from 250 to 300
          ctx.beginPath();
          ctx.strokeStyle = '#000000'; // Changed to black
          ctx.globalAlpha = 0.8 - distance / 300; // Increased opacity
          ctx.lineWidth = 1.5; // Thicker connection lines
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
          
          if (distance < 150) { // Increased from 120 to 150
            ctx.beginPath();
            ctx.strokeStyle = '#000000'; // Changed to black
            ctx.globalAlpha = 0.3 * (1 - distance / 150); // Increased opacity
            ctx.lineWidth = 1.0; // Increased line width
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
      className="fixed inset-0 pointer-events-none z-0 opacity-80" // Increased opacity
    />
  );
};

export default ParticleBackground;
