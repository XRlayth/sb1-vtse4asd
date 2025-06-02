import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo className="text-white mb-4" />
            <p className="mb-4 text-gray-300">
              Profesjonalny trener personalny z pasją do sportu i zdrowego stylu życia. 
              Pomagam klientom osiągać ich cele fitness od 2015 roku.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">Strona główna</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">O mnie</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">Usługi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">Trening</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Godziny otwarcia</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-300">
                <span>Poniedziałek - Piątek:</span>
                <span>8:00 - 21:00</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Sobota:</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Niedziela:</span>
                <span>10:00 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#333333] text-center">
          <p className="text-gray-400">&copy; 2025 Eryk Puzio - Trener Personalny. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;