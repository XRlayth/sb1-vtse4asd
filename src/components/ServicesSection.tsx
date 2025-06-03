import React from 'react';
import { Timeline } from './ui/timeline';
import { Check, X } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const timelineData = [
    {
      title: "Trening Personalny",
      imagePosition: "left",
      image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Indywidualne plany treningowe",
        "Monitoring postępów",
        "Wsparcie motywacyjne"
      ]
    },
    {
      title: "Prowadzenie Online",
      imagePosition: "right",
      image: "https://images.pexels.com/photos/6456301/pexels-photo-6456301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Elastyczny harmonogram",
        "Stały kontakt online",
        "Regularne konsultacje"
      ]
    },
    {
      title: "Plan Treningowy",
      imagePosition: "left",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Szczegółowy plan ćwiczeń",
        "Plan dietetyczny",
        "Wskazówki techniczne"
      ]
    }
  ];

  return (
    <>
      <Timeline data={timelineData} />
      
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">NASI PODOPIECZNI WYGRYWAJĄ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
              "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
              "https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg"
            ].map((image, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <img src={image} alt="Progress" className="w-full h-96 object-cover rounded-lg shadow-lg" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 text-lg font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
              Zapoznaj się z ofertą
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-8">TWOJE CIAŁO JEST TWOIM NAJBARDZIEJ WARTOŚCIOWYM ZASOBEM</h2>
              <img 
                src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg" 
                alt="Motivation" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="space-y-6 text-xl">
                <p>Zainwestuj w siebie.</p>
                <p>Wzmocnij swoje ciało. Wyostrz umysł. Podnieś jakość swojego życia.</p>
                <p>Poczuj różnicę. Zobacz rezultaty. Osiągnij swoje cele.</p>
                <p>Dokonaj zmiany.</p>
              </div>
              <button className="mt-8 bg-red-600 hover:bg-red-700 text-white py-4 px-8 text-lg font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                Zapoznaj się z ofertą
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">WYBÓR JEST TWÓJ</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#1A1A1A] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Nie rób nic</h3>
              <div className="space-y-4">
                {[
                  "Oglądaj Netflix",
                  "Trać zdrowie",
                  "Ryzykuj chorobami",
                  "Pozostań w stagnacji",
                  "Bądź niepewny swojego wyglądu"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <X className="text-red-600 w-6 h-6" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#2C2C2C] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Zacznij działać</h3>
              <p className="mb-4 text-xl">Zacznij budować siebie</p>
              <ul className="mb-6 space-y-2">
                <li>- Trening personalny</li>
                <li>- Coaching online</li>
                <li>- Plany treningowe</li>
              </ul>
              <div className="space-y-4">
                {[
                  "Lepsze zdrowie",
                  "Zdrowsze stawy",
                  "Silniejsze więzadła",
                  "Zwiększone samopoczucie"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="text-green-500 w-6 h-6" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl mb-6">Zadbaj o zdrowie jak najszybciej.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 text-lg font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
              Zapoznaj się z ofertą
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;