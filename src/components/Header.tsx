
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white py-4 px-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="text-2xl font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-funpink">
            Pointlessly Genius
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors font-medium">
            About
          </Link>
          <Link to="/disclaimer" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors font-medium">
            Disclaimer
          </Link>
          <Link to="/privacy" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors font-medium">
            Privacy
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl py-4 px-6 z-50">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors font-medium" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors font-medium" onClick={closeMenu}>
              About
            </Link>
            <Link to="/disclaimer" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors font-medium" onClick={closeMenu}>
              Disclaimer
            </Link>
            <Link to="/privacy" className="px-3 py-2 rounded-lg hover:bg-muted transition-colors font-medium" onClick={closeMenu}>
              Privacy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
