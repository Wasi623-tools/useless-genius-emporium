
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
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
                <Link to="/about" className="hover:underline flex items-center">
                  <span className="mr-2">👀</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:underline flex items-center">
                  <span className="mr-2">⚠️</span> Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline flex items-center">
                  <span className="mr-2">🕵️</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline flex items-center">
                  <span className="mr-2">📬</span> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-bold mb-3">Generators</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/useless-fun" className="hover:underline flex items-center">
                  <span className="mr-2">🎲</span> Useless But Fun
                </Link>
              </li>
              <li>
                <Link to="/bad-advice" className="hover:underline flex items-center">
                  <span className="mr-2">🤖</span> Bad Advice Bot
                </Link>
              </li>
              <li>
                <Link to="/compliments" className="hover:underline flex items-center">
                  <span className="mr-2">🙃</span> Awkward Compliments
                </Link>
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
