import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [images.length, interval, isHovering]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {currentIndex === 0 && (
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white">
          <div className="bg-black bg-opacity-60 px-6 py-2 mb-4 text-center">
            <h1 className="text-xl font-['Montserrat'] uppercase tracking-wider">
              Oficjalna Strona
            </h1>
          </div>
          <div className="bg-black bg-opacity-60 px-8 py-6 text-center max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              TRANSFORMACJA ZACZYNA SIĘ TU
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              Profesjonalny trening personalny z Erykiem Puzio
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105">
              Umów trening
            </button>
          </div>
        </div>
      )}

      <button 
        className="absolute z-30 left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
        onClick={goToPrevious}
      >
        <ChevronLeft size={28} />
      </button>
      
      <button 
        className="absolute z-30 right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
        onClick={goToNext}
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute z-30 bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-red-600 w-12' : 'bg-white'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;