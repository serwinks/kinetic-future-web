
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Who We Are</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our mission is to bridge the gap between academic theory and industry practice
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-xl p-8 mb-8 transform transition-all animate-fade-in">
            <p className="text-lg mb-6 text-white/80">
              Developers Of Tomorrow was founded in 2024 under the Department of CSE Data Science. 
              We noticed a widening gap between theory taught in classrooms and the skills demanded by industry. 
              Our mission: deliver hands-on experiences that prepare students for real-world challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gradient">Project Mentorship</h3>
                <p className="text-white/70">
                  From ideation to deployment, get mentorship for your capstone or side-projects.
                </p>
              </div>
              
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gradient">Community & Networking</h3>
                <p className="text-white/70">
                  Connect with peers, alumni, and industry experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute top-1/3 right-0 w-full max-w-4xl h-full max-h-96 bg-gradient-to-b from-dot/20 to-dot-cyan/10 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default About;
