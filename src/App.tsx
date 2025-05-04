import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import TeamPage from '@/pages/TeamPage';
import MentorsPage from '@/pages/MentorsPage';
import EventsPage from '@/pages/EventsPage';
import AboutPage from '@/pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
