
import React from 'react';

interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Dr. Anitha ML",
    role: "Program Head, CSE Data Science",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 2,
    name: "Dr. Mahesh Kalouti",
    role: "Assistant Professor, CSE Data Science",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => {
  return (
    <div className="glass rounded-xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-dot/20 duration-300">
      <div 
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${mentor.image})` }}
      ></div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{mentor.name}</h3>
        <p className="text-white/70">{mentor.role}</p>
      </div>
    </div>
  );
};

const Mentors: React.FC = () => {
  return (
    <section id="mentors" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Guides from Industry & Academia</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We're proud to introduce our mentors who volunteer their time to speak, 
            review projects, and constantly supporting our cause. Their real-world insights 
            accelerate your learning and help you avoid common pitfalls.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map(mentor => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute bottom-0 left-0 w-full max-w-4xl h-full max-h-96 bg-gradient-to-t from-dot-cyan/20 to-dot/10 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Mentors;
