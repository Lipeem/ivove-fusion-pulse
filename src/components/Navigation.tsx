
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ivove-dark/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-space font-bold text-white hover:text-ivove-fuchsia transition-colors">
            Projeto Ivove
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-ivove-fuchsia transition-colors font-inter">
              Home
            </Link>
            <Link to="/agenda" className="text-white hover:text-ivove-fuchsia transition-colors font-inter">
              Agenda
            </Link>
            <Button 
              asChild
              className="bg-gradient-to-r from-ivove-fuchsia to-ivove-blue hover:from-ivove-fuchsia/80 hover:to-ivove-blue/80 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/agenda">View Agenda</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
