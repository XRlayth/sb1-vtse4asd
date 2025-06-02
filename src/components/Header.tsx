import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setShouldShow(false);
      } else {
        setShouldShow(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { id: 'home', label: 'STRONA GŁÓWNA', path: '/' },
    { id: 'about', label: 'O MNIE', path: '/#about' },
    { id: 'services', label: 'USŁUGI', path: '/#services' },
    { id: 'training', label: 'TRENING', path: '/#training' },
    { id: 'blog', label: 'BLOG', path: '/blog' },
    { id: 'contact', label: 'KONTAKT', path: '/kontakt' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          shouldShow ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white p-2 hover:text-red-500 transition-colors duration-300"
          >
            <Menu size={24} />
          </button>

          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src="https://raw.githubusercontent.com/XRlayth/zdjeciaeryk/main/5ae659c1-fb33-4652-aefc-b7cb5c37fb05-removebg-preview-modified.png"
              alt="Logo" 
              className="h-16"
            />
          </Link>

          <Link
            to="/sklep"
            className="text-white p-2 hover:text-red-500 transition-colors duration-300"
          >
            <ShoppingCart size={24} />
          </Link>
        </div>
      </header>

      {/* Sliding Menu */}
      <div 
        className={`fixed inset-0 bg-black z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors duration-300"
          >
            <X size={24} />
          </button>

          <nav className="mt-20">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`block text-2xl font-semibold text-white py-4 hover:text-red-500 transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-red-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;