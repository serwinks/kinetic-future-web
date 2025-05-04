
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  type: 'hackathon' | 'workshop' | 'talk' | 'meetup';
}

// Updated events based on content
const events: Event[] = [
  {
    id: 1,
    title: 'AI Bootcamp Weekend',
    date: 'April 12–14, 2025',
    time: 'All day',
    description: 'Hands-on ML pipelines with Python & Scikit-Learn',
    location: 'Innovation Hub, Building 4',
    type: 'workshop'
  },
  {
    id: 2,
    title: 'DataViz Hackathon',
    date: 'May 3, 2025',
    time: 'All day',
    description: 'Build an interactive dashboard in 8 hours',
    location: 'Tech Campus, Main Hall',
    type: 'hackathon'
  },
  {
    id: 3,
    title: 'Industry Speaker Series',
    date: 'Monthly',
    time: '5:00 PM - 7:00 PM',
    description: 'Roundtable with data leaders',
    location: 'Online / Hybrid',
    type: 'talk'
  },
  {
    id: 4,
    title: 'Spring 2024 Hackathon',
    date: 'March 15, 2024',
    time: 'All day',
    description: '80 students, 15 innovative prototypes',
    location: 'Main Campus',
    type: 'hackathon'
  },
  {
    id: 5,
    title: 'TensorFlow 101 Workshop',
    date: 'February 20, 2024',
    time: '2:00 PM - 5:00 PM',
    description: 'Live coding with Mentor Priya Desai',
    location: 'CSE Building, Room 302',
    type: 'workshop'
  }
];

const getEventColor = (type: Event['type']) => {
  switch (type) {
    case 'hackathon':
      return 'from-purple-500 to-pink-500';
    case 'workshop':
      return 'from-blue-500 to-cyan-500';
    case 'talk':
      return 'from-orange-500 to-red-500';
    case 'meetup':
      return 'from-green-500 to-teal-500';
    default:
      return 'from-dot-cyan to-dot';
  }
};

const EventCard: React.FC<{ event: Event; index: number }> = ({ event, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-bounce-in');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass rounded-xl p-6 transform opacity-0 translate-y-10 transition-all duration-500",
        "hover:shadow-lg hover:shadow-dot/10 hover:-translate-y-1",
        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span 
            className={cn(
              "inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r",
              getEventColor(event.type)
            )}
          >
            {event.type}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        
        <div className="flex items-center space-x-2 mb-1 text-white/70">
          <Calendar size={16} />
          <span className="text-sm">{event.date}</span>
        </div>
        
        <div className="flex items-center space-x-2 mb-4 text-white/70">
          <Clock size={16} />
          <span className="text-sm">{event.time}</span>
        </div>
        
        <p className="text-white/80 mb-4 flex-grow">{event.description}</p>
        
        <div className="text-sm text-white/60">
          <strong>Location:</strong> {event.location}
        </div>
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">What's Happening</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From weekend hackathons to deep-dive bootcamps, here's what's coming up—and what you missed.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-dot-cyan via-dot to-dot-cyan -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={event.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-dot-cyan to-dot hidden md:block"></div>
                
                <div className="md:w-5/12">
                  <EventCard event={event} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute top-1/2 right-0 w-full max-w-4xl h-full max-h-96 bg-gradient-to-b from-dot-cyan/20 to-dot/10 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Events;
