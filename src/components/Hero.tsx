
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "From classroom concepts to real-world solutions, we're the CSE Data Science Department that lights the spark.";
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Typing effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < textToType.length) {
        setTypedText(textToType.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
    
    // Text reveal animation
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    return () => clearInterval(typeInterval);
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background z-10"></div>
      </div>
      
      <div className="container mx-auto text-center z-10 mt-20">
        <div className="mb-8 flex justify-center">
          <img src="/dot-logo.png" alt="DOT Logo" className="h-32 animate-bounce-in" />
        </div>
        
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0"
        >
          <span className="text-gradient">Building Tomorrow's Developers, Today.</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/80 h-16">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
        
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-10 text-white/70">
          Developers Of Tomorrow (D.O.T.) is a student-led community driven by curiosity, 
          collaboration, and code. Whether you're just starting out or ready to level up, 
          join us for hands-on workshops, cutting-edge hackathons, and peer projects that 
          bridge the gap between academics and industry.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-dot-cyan to-dot text-white hover:opacity-90 transition-opacity animate-bounce-in"
          >
            Join the Next Cohort
            <ArrowRight size={18} className="ml-2" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="neon-border text-white hover:bg-white/5 transition-colors animate-bounce-in"
            style={{ animationDelay: '0.2s' }}
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <a href="#team" className="inline-block">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center">
              <div className="w-1.5 h-3 bg-white/70 rounded-full animate-float mt-2"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
