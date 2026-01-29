
import React, { useState } from 'react';
import { SiteSettings } from '../types';

interface Props {
  settings: SiteSettings;
}

const Navbar: React.FC<Props> = ({ settings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '서비스', href: '#services' },
    { name: '주요실적', href: '#projects' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold text-blue-600 tracking-tight">
              SIC <span className="text-gray-900 font-bold text-lg ml-1">에스아이씨</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-blue-600 font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="blue-gradient text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:opacity-90 transition-all"
            >
              견적 문의
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 p-2"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
