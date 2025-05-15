import React from 'react';
import { Award, Target, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8 relative inline-block">
              O MNIE
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600"></span>
            </h2>
            <p className="text-lg mb-6">
              Jestem Eryk Puzio, certyfikowany trener personalny z ponad 8-letnim doświadczeniem w branży fitness. 
              Specjalizuję się w treningu siłowym, funkcjonalnym oraz w układaniu spersonalizowanych planów treningowych i dietetycznych.
            </p>
            <p className="text-lg mb-6">
              Moja filozofia treningowa opiera się na naukowych podstawach, indywidualnym podejściu 
              do każdego klienta oraz systematycznej pracy nad osiąganiem wyznaczonych celów.
            </p>
            <p className="text-lg mb-8">
              Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z fitnessem, czy jesteś zaawansowanym sportowcem, 
              pomogę Ci osiągnąć wymarzoną sylwetkę i poprawić jakość życia.
            </p>
            <button className="bg-black hover:bg-gray-900 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300">
              Poznaj mnie lepiej
            </button>
          </div>
          
          <div className="md:w-1/2 bg-gray-100 p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Moje Kwalifikacje</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Award className="text-red-600 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="text-lg font-bold mb-2">Certyfikowany Trener Personalny</h4>
                  <p>Międzynarodowe certyfikaty z zakresu treningu siłowego i funkcjonalnego.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Target className="text-red-600 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="text-lg font-bold mb-2">Specjalista ds. Żywienia Sportowego</h4>
                  <p>Ukończone kursy z zakresu dietetyki i suplementacji w sporcie.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Zap className="text-red-600 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="text-lg font-bold mb-2">Doświadczenie Zawodnicze</h4>
                  <p>Wieloletnie doświadczenie w startach w zawodach sylwetkowych i siłowych.</p>
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