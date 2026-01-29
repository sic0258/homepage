
import React, { useState } from 'react';

interface HeaderProps {
  companyName: string;
  onAdminClick: () => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
}

const Header: React.FC<HeaderProps> = ({ companyName, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '회사소개' },
    { id: 'services', label: '주요사업' },
    { id: 'portfolio', label: '사업실적' },
    { id: 'contact', label: '오시는길' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderCompanyName = () => {
    if (companyName.includes('(')) {
      const parts = companyName.split('(');
      const prefix = parts[0];
      const suffix = parts[1].replace(')', '');
      return (
        <>
          {prefix}
          <span className="text-blue-600 font-medium text-base">({suffix})</span>
        </>
      );
    }
    return companyName;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => handleNavClick('home')}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 md:block hidden">
            {renderCompanyName()}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                activeSection === item.id ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href="tel:070-8806-0258"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            문의하기
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute top-20 left-0 right-0 shadow-xl animate-fade-in-down">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 text-base font-medium border-b border-gray-50 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
