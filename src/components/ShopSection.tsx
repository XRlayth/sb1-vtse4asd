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
    <section className="min-h-screen py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">OFERTA ONLINE</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-black border border-gray-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
              <p className="text-3xl font-bold text-red-600 mb-6">{product.price}</p>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-red-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300">
                Kup Teraz
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-4">Zainteresowany treningiem personalnym face to face?</p>
          <Link 
            to="/kontakt"
            className="inline-block bg-white hover:bg-gray-200 text-black py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300"
          >
            Skontaktuj się ze mną
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;