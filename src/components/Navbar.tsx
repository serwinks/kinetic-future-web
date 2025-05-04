
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Mentors', href: '/mentors' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-lg'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/dot-logo.png" alt="DOT Logo" className="h-10" />
          <span className="text-2xl font-bold font-rajdhani text-gradient">DOT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-gradient-to-r from-dot-cyan to-dot hover:opacity-90 transition-opacity">
            Join Us
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white/90 hover:text-white"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden transition-transform duration-300 pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container mx-auto px-6 flex flex-col items-center space-y-6 py-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <Button className="w-full bg-gradient-to-r from-dot-cyan to-dot hover:opacity-90 transition-opacity">
            Join Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
