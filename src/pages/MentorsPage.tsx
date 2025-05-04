
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mentors from '@/components/Mentors';
import ParticleBackground from '@/components/ParticleBackground';

const MentorsPage = () => {
  useEffect(() => {
    document.title = 'Our Mentors | Developers Of Tomorrow';
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-24">
        <Mentors />
      </div>
      <Footer />
    </div>
  );
};

export default MentorsPage;
