import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">KONTAKT</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Skontaktuj się ze mną</h3>
            <p className="mb-8 text-lg text-gray-300">
              Masz pytania dotyczące treningów, planów żywieniowych lub chcesz umówić się na 
              pierwszą konsultację? Wypełnij formularz lub skorzystaj z podanych danych kontaktowych.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center group">
                <Phone className="text-red-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">+48 123 456 789</span>
              </div>
              <div className="flex items-center group">
                <Mail className="text-red-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">kontakt@erykpuzio.pl</span>
              </div>
              <div className="flex items-center group">
                <MapPin className="text-red-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">ul. Sportowa 15, Warszawa</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-[#1F1F1F] text-white p-3 rounded-full hover:bg-red-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-[#1F1F1F] text-white p-3 rounded-full hover:bg-red-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold">Imię i nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#1F1F1F] border border-[#333333] focus:border-red-600 focus:outline-none text-white rounded-none [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-[#1F1F1F] border border-[#333333] focus:border-red-600 focus:outline-none text-white rounded-none [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-semibold">Temat</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 bg-[#1F1F1F] border border-[#333333] focus:border-red-600 focus:outline-none text-white rounded-none [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
                  placeholder="W czym mogę pomóc?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">Wiadomość</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 bg-[#1F1F1F] border border-[#333333] focus:border-red-600 focus:outline-none text-white rounded-none [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]"
                  placeholder="Twoja wiadomość..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-gradient-to-r from-[#2C2C2C] to-[#1A1A1A] hover:from-red-600 hover:to-red-700 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300 w-full md:w-auto border border-[#333333] rounded-none [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;