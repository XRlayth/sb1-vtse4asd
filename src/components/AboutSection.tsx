import React from 'react';
import { Award, Target, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a192f] relative">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/XRlayth/zdjeciaeryk/main/524ce553-2616-48ed-818e-27adb92e563d.png')"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8 relative inline-block text-white">
              O MNIE
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600"></span>
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Jestem Eryk Puzio, certyfikowany trener personalny z ponad 8-letnim doświadczeniem w branży fitness. 
              Specjalizuję się w treningu siłowym, funkcjonalnym oraz w układaniu spersonalizowanych planów treningowych i dietetycznych.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Moja filozofia treningowa opiera się na naukowych podstawach, indywidualnym podejściu 
              do każdego klienta oraz systematycznej pracy nad osiąganiem wyznaczonych celów.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z fitnessem, czy jesteś zaawansowanym sportowcem, 
              pomogę Ci osiągnąć wymarzoną sylwetkę i poprawić jakość życia.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
              Poznaj mnie lepiej
            </button>
          </div>
          
          <div className="md:w-1/2 bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Moje Kwalifikacje</h3>
            <div className="space-y-6">
              <div className="flex items-start group">
                <Award className="text-red-600 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={32} />
                <div>
                  <h4 className="text-lg font-bold mb-2 text-white">Certyfikowany Trener Personalny</h4>
                  <p className="text-gray-300">Międzynarodowe certyfikaty z zakresu treningu siłowego i funkcjonalnego.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <Target className="text-red-600 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={32} />
                <div>
                  <h4 className="text-lg font-bold mb-2 text-white">Specjalista ds. Żywienia Sportowego</h4>
                  <p className="text-gray-300">Ukończone kursy z zakresu dietetyki i suplementacji w sporcie.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <Zap className="text-red-600 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={32} />
                <div>
                  <h4 className="text-lg font-bold mb-2 text-white">Doświadczenie Zawodnicze</h4>
                  <p className="text-gray-300">Wieloletnie doświadczenie w startach w zawodach sylwetkowych i siłowych.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;