import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
    { id: 'home', label: 'STRONA GŁÓWNA' },
    { id: 'about', label: 'O MNIE' },
    { id: 'services', label: 'USŁUGI' },
    { id: 'training', label: 'TRENING' },
    { id: 'blog', label: 'BLOG' },
    { id: 'contact', label: 'KONTAKT' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo className="text-white" />
        
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`font-['Montserrat'] font-semibold text-sm tracking-wider transition-all duration-200 ${
                activeSection === item.id 
                  ? 'bg-white text-black px-4 py-2' 
                  : 'text-white hover:text-red-500 px-4 py-2'
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </button>
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