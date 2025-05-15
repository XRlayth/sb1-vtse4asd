import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'STRONA GŁÓWNA', path: '/' },
    { id: 'about', label: 'O MNIE', path: '/#about' },
    { id: 'services', label: 'USŁUGI', path: '/#services' },
    { id: 'training', label: 'TRENING', path: '/#training' },
    { id: 'blog', label: 'BLOG', path: '/blog' },
    { id: 'sklep', label: 'SKLEP', path: '/sklep' },
    { id: 'contact', label: 'KONTAKT', path: '/kontakt' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="bg-transparent">
          <img 
            src="/home/project/5ae659c1-fb33-4652-aefc-b7cb5c37fb05-removebg-preview.png" 
            alt="Logo" 
            className="h-16"
          />
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`font-['Montserrat'] font-semibold text-sm tracking-wider transition-all duration-200 bg-black px-4 py-2 ${
                location.pathname === item.path || (location.pathname === '/' && activeSection === item.id)
                  ? 'text-white bg-opacity-100' 
                  : 'text-white bg-opacity-75 hover:bg-opacity-100'
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <button className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;