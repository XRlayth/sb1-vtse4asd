import React from 'react';
import { Users, User, Utensils, Calendar } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <User size={40} className="mb-4 text-red-600" />,
      title: "Trening Personalny",
      description: "Indywidualne sesje treningowe dostosowane do Twoich potrzeb i celów. Maksymalne rezultaty przy minimalnym ryzyku kontuzji."
    },
    {
      icon: <Users size={40} className="mb-4 text-red-600" />,
      title: "Trening Grupowy",
      description: "Dynamiczne treningi w małych grupach. Motywacja, energia i wspólne osiąganie celów w przyjaznej atmosferze."
    },
    {
      icon: <Utensils size={40} className="mb-4 text-red-600" />,
      title: "Plany Dietetyczne",
      description: "Spersonalizowane plany żywieniowe, które pomogą Ci osiągnąć wymarzoną sylwetkę. Zdrowe i smaczne posiłki dostosowane do Twojego stylu życia."
    },
    {
      icon: <Calendar size={40} className="mb-4 text-red-600" />,
      title: "Plany Treningowe",
      description: "Profesjonalne plany treningowe do samodzielnego wykonania. Regularne konsultacje i aktualizacje w miarę postępów."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">MOJE USŁUGI</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 text-center transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <button className="text-red-500 font-bold hover:text-red-400 transition-colors duration-300">
                  DOWIEDZ SIĘ WIĘCEJ
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl mb-8">
            Potrzebujesz spersonalizowanego podejścia do treningu i diety?
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300">
            Skontaktuj się ze mną
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;