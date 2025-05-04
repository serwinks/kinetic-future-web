
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import Team from '@/components/Team';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Update document title when component mounts
  useEffect(() => {
    document.title = 'Developers Of Tomorrow';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Team />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
