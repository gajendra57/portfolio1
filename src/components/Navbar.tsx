import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, Play, Users, Building, MessageCircle } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onAuthClick: () => void;
  onSectionClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Search Mentor', icon: Search, section: 'mentors' },
    { label: 'Upload Video', icon: Play, section: 'videos' },
    { label: 'Our Mentors', icon: Users, section: 'mentors' },
    { label: 'Companies', icon: Building, section: 'companies' },
    { label: 'Reviews', icon: MessageCircle, section: 'reviews' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animation */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onSectionClick('home')}>
            <div className="animate-pulse transition-all duration-300 hover:scale-105">
              <Logo size="md" />
            </div>
          </div>

          {/* Desktop Navigation with Enhanced Styling */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onSectionClick(item.section)}
                  className="group flex items-center space-x-2 text-gray-700 hover:text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 relative overflow-hidden"
                  style={{
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #BBFF9C 0%, #00C853 100%)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(187, 255, 156, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Auth Button with Gradient */}
          <div className="hidden md:block">
            <button
              onClick={onAuthClick}
              className="group flex items-center space-x-2 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #00C853 0%, #0D47A1 100%)',
                boxShadow: '0 4px 20px rgba(0, 200, 83, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 200, 83, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 200, 83, 0.3)';
              }}
            >
              <User className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Login / Sign Up</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 p-2 rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Enhanced Animation */}
      {isOpen && (
        <div className="lg:hidden">
          <div 
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(187, 255, 156, 0.1) 0%, rgba(0, 200, 83, 0.1) 100%)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => {
                  onSectionClick(item.section);
                  setIsOpen(false);
                }}
                className="group flex items-center space-x-3 text-gray-700 hover:text-white block px-4 py-3 rounded-xl text-base font-semibold w-full text-left transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slideInLeft 0.5s ease-out forwards'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #BBFF9C 0%, #00C853 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => {
                onAuthClick();
                setIsOpen(false);
              }}
              className="flex items-center space-x-3 text-white px-4 py-3 rounded-xl w-full justify-center mt-4 font-bold transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #00C853 0%, #0D47A1 100%)',
                boxShadow: '0 4px 20px rgba(0, 200, 83, 0.3)'
              }}
            >
              <User className="w-5 h-5" />
              <span>Login / Sign Up</span>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;