import React from 'react';
import { Timeline } from './ui/timeline';

const ServicesSection: React.FC = () => {
  const timelineData = [
    {
      title: "Trening Personalny",
      content: (
        <div className="bg-[#2C2C2C] p-8 rounded-lg">
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Indywidualne sesje treningowe dostosowane do Twoich potrzeb i celów. 
            Maksymalne rezultaty przy minimalnym ryzyku kontuzji.
          </p>
          <img
            src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Personal Training"
            className="w-full h-48 md:h-64 object-cover rounded-lg mb-6"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all duration-300">
            Dowiedz się więcej
          </button>
        </div>
      ),
    },
    {
      title: "Trening Grupowy",
      content: (
        <div className="bg-[#2C2C2C] p-8 rounded-lg">
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Dynamiczne treningi w małych grupach. Motywacja, energia i wspólne 
            osiąganie celów w przyjaznej atmosferze.
          </p>
          <img
            src="https://images.pexels.com/photos/6456301/pexels-photo-6456301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Group Training"
            className="w-full h-48 md:h-64 object-cover rounded-lg mb-6"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all duration-300">
            Dowiedz się więcej
          </button>
        </div>
      ),
    },
    {
      title: "Plany Dietetyczne",
      content: (
        <div className="bg-[#2C2C2C] p-8 rounded-lg">
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Spersonalizowane plany żywieniowe, które pomogą Ci osiągnąć wymarzoną sylwetkę. 
            Zdrowe i smaczne posiłki dostosowane do Twojego stylu życia.
          </p>
          <img
            src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dietary Plans"
            className="w-full h-48 md:h-64 object-cover rounded-lg mb-6"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all duration-300">
            Dowiedz się więcej
          </button>
        </div>
      ),
    },
  ];

  return <Timeline data={timelineData} />;
};

export default ServicesSection;