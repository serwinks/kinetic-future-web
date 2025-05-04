
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: {
    name: string;
    level: number;
  }[];
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

// Mock data - replace with real data when available
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer specializing in AI and cloud architecture. Can debug complex systems while blindfolded.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    skills: [
      { name: 'React', level: 95 },
      { name: 'AI/ML', level: 80 },
      { name: 'DevOps', level: 75 }
    ],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'UX/UI Design Lead',
    bio: 'Creative designer passionate about accessible and inclusive digital experiences. Turns complex workflows into intuitive interfaces.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    skills: [
      { name: 'UI/UX', level: 90 },
      { name: 'Animation', level: 85 },
      { name: 'Frontend', level: 70 }
    ],
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 3,
    name: 'Marcus Wong',
    role: 'Backend Architect',
    bio: 'System architect specializing in scalable cloud solutions and database design. Creates systems that survive any traffic spike.',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919',
    skills: [
      { name: 'Cloud', level: 95 },
      { name: 'Databases', level: 90 },
      { name: 'Security', level: 85 }
    ],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 4,
    name: 'Priya Patel',
    role: 'Community Manager',
    bio: 'Community builder focused on creating inclusive spaces for developers. Connects people and ideas across disciplines.',
    image: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574',
    skills: [
      { name: 'Community', level: 90 },
      { name: 'Content', level: 85 },
      { name: 'Events', level: 80 }
    ],
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="w-full md:w-64 h-80 perspective-1000 group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={cn(
        "w-full h-full transition-transform duration-500 transform-style-preserve-3d relative",
        isFlipped ? "rotate-y-180" : ""
      )}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass rounded-xl overflow-hidden">
          <div className="h-full flex flex-col">
            <div 
              className="h-3/5 bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>
            <div className="flex flex-col justify-center items-center p-4 h-2/5 bg-black/30">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm text-white/70">{member.role}</p>
            </div>
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass rounded-xl overflow-hidden p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-sm text-white/80 mb-4">{member.bio}</p>
            
            {/* Skills */}
            <div className="space-y-3">
              {member.skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-dot-cyan to-dot"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social */}
          <div className="flex justify-center space-x-4 pt-3">
            {member.social.github && (
              <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Meet the Engine: Our Core Team</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A lean squad of passionate students — the heartbeat of D.O.T. Each of us wears multiple hats, from event coordinator to full-stack coder.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-96 bg-gradient-to-b from-dot/20 to-dot-cyan/10 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Team;
