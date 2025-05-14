
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Custom link handler that navigates and scrolls to top
  const handleLinkClick = (to: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Only navigate if we're going to a different page
    if (location.pathname !== to) {
      navigate(to);
    }
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-poppins font-bold mb-4">Pointlessly Genius</h3>
          <p className="text-primary-foreground mb-4">Making the Web 2% More Useless, One Click at a Time</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-poppins font-bold mb-3">Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => handleLinkClick('/about', e)} 
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">👀</span> About Us
                </a>
              </li>
              <li>
                <a 
                  href="/disclaimer" 
                  onClick={(e) => handleLinkClick('/disclaimer', e)} 
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">⚠️</span> Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  onClick={(e) => handleLinkClick('/privacy', e)} 
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">🕵️</span> Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  onClick={(e) => handleLinkClick('/contact', e)} 
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">📬</span> Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-bold mb-3">Generators</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/useless-fun" 
                  onClick={(e) => handleLinkClick('/useless-fun', e)} 
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">🎲</span> Useless But Fun
                </a>
              </li>
              <li>
                <a 
                  href="/bad-advice" 
                  onClick={(e) => handleLinkClick('/bad-advice', e)} 
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">🤖</span> Bad Advice Bot
                </a>
              </li>
              <li>
                <a 
                  href="/compliments" 
                  onClick={(e) => handleLinkClick('/compliments', e)} 
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">🙃</span> Awkward Compliments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-primary-foreground/30 text-center text-sm">
        <p>© {new Date().getFullYear()} Pointlessly Genius. All rights pointlessly reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
