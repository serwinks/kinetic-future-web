
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Events from '@/components/Events';
import ParticleBackground from '@/components/ParticleBackground';

const EventsPage = () => {
  useEffect(() => {
    document.title = 'Events | Developers Of Tomorrow';
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-24">
        <Events />
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
