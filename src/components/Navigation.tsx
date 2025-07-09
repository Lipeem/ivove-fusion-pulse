
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
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and brand section */}
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-shrink">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-ivove-fuchsia to-ivove-blue rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base sm:text-lg">I</span>
            </div>
            <Link to="/" className="text-lg sm:text-2xl font-space font-bold text-white hover:text-ivove-fuchsia transition-colors truncate">
              Innoverse
            </Link>
          </div>
          
          {/* Center text */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <span className="text-white font-space font-medium text-lg bg-gradient-to-r from-ivove-fuchsia to-ivove-blue bg-clip-text text-transparent">
              Inove Initiative
            </span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-6 flex-shrink-0">
            <div className="hidden sm:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-ivove-fuchsia transition-colors font-inter">
                Home
              </Link>
              <Link to="/agenda" className="text-white hover:text-ivove-fuchsia transition-colors font-inter">
                Agenda
              </Link>
            </div>
            <Button 
              asChild
              className="bg-gradient-to-r from-ivove-fuchsia to-ivove-blue hover:from-ivove-fuchsia/80 hover:to-ivove-blue/80 text-white font-medium px-3 py-2 sm:px-6 sm:py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm whitespace-nowrap"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Download Agenda
              </a>
            </Button>
          </div>
        </div>
        
        {/* Mobile navigation links - shown below on small screens */}
        <div className="flex sm:hidden justify-center space-x-6 mt-3 pt-3 border-t border-white/10">
          <Link to="/" className="text-white hover:text-ivove-fuchsia transition-colors font-inter text-sm">
            Home
          </Link>
          <Link to="/agenda" className="text-white hover:text-ivove-fuchsia transition-colors font-inter text-sm">
            Agenda
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
