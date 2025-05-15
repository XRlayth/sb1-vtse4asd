import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">KONTAKT</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Skontaktuj się ze mną</h3>
            <p className="mb-8 text-lg">
              Masz pytania dotyczące treningów, planów żywieniowych lub chcesz umówić się na 
              pierwszą konsultację? Wypełnij formularz lub skorzystaj z podanych danych kontaktowych.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="text-red-600 mr-4" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-red-600 mr-4" />
                <span>kontakt@erykpuzio.pl</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-red-600 mr-4" />
                <span>ul. Sportowa 15, Warszawa</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition-colors duration-300">
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
                    className="w-full p-3 border border-gray-300 focus:border-red-600 focus:outline-none"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 focus:border-red-600 focus:outline-none"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-semibold">Temat</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 focus:border-red-600 focus:outline-none"
                  placeholder="W czym mogę pomóc?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">Wiadomość</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 focus:border-red-600 focus:outline-none"
                  placeholder="Twoja wiadomość..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300 w-full md:w-auto"
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