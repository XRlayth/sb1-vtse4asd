import React from 'react';
import { Link } from 'react-router-dom';

const ShopSection: React.FC = () => {
  const products = [
    {
      title: "Online Coaching",
      price: "299 zł / miesiąc",
      features: [
        "Spersonalizowany plan treningowy",
        "Plan dietetyczny",
        "Cotygodniowe konsultacje online",
        "Wsparcie przez komunikator",
        "Analiza postępów",
      ],
      isSubscription: true,
    },
    {
      title: "Plan Treningowy",
      price: "199 zł",
      features: [
        "Szczegółowy plan 8-tygodniowy",
        "Filmy instruktażowe",
        "Dziennik treningowy",
        "Jednorazowa konsultacja",
      ],
      isSubscription: false,
    },
  ];

  return (
    <section className="min-h-screen py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">OFERTA ONLINE</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-[#1F1F1F] border border-[#333333] rounded-none p-8 hover:border-red-600 transition-all duration-300 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]"
            >
              <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
              <p className="text-3xl font-bold text-red-600 mb-6">{product.price}</p>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-red-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-[#2C2C2C] to-[#1A1A1A] hover:from-red-600 hover:to-red-700 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300 border border-[#333333] rounded-none [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                Kup Teraz
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-4 text-gray-300">Zainteresowany treningiem personalnym face to face?</p>
          <Link 
            to="/kontakt"
            className="inline-block bg-gradient-to-r from-[#2C2C2C] to-[#1A1A1A] hover:from-red-600 hover:to-red-700 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300 border border-[#333333] rounded-none [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))] hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"
          >
            Skontaktuj się ze mną
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;