import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/XRlayth/zdjeciaeryk/main/524ce553-2616-48ed-818e-27adb92e563d.png')",
          filter: 'brightness(0.3)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-wider">
            ZDROWIE JEST NAJWAŻNIEJSZE
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl font-['Baseneuetrial'] text-gray-400">
            <p>
              Stań się <span className="text-white font-semibold">najlepszą wersją siebie</span>
            </p>
            
            <p>
              Bądź prowadzonym przez certyfikowanego <span className="text-white font-semibold">Trenera Personalnego</span> z doświadczeniem.
            </p>
            
            <p>
              Zdrowie to <span className="text-white font-semibold">bogactwo</span>, dlatego warto o nie dbać.
            </p>
            
            <p>
              Ciężko o nie dbać z niewykwalifikowanymi <span className="text-white font-semibold">pseudotrenerami</span>, którzy patrzą się w telefon.
            </p>
          </div>
          
          <button className="mt-12 bg-red-600 hover:bg-red-700 text-white py-4 px-8 text-lg font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
            Zapoznaj się z ofertą
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;