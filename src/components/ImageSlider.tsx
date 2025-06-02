import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredPreview, setHoveredPreview] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHovering && !isDragging) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [images.length, interval, isHovering, isDragging]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `translateX(${-diff}px)`;
    }
  };

  const handleTouchEnd = () => {
    const slider = sliderRef.current;
    if (slider) {
      const diff = parseInt(slider.style.transform.replace('translateX(', '').replace('px)', '') || '0');
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
      slider.style.transform = '';
    }
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;
    
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transform = `translateX(${-diff}px)`;
    }
  };

  const handleMouseUp = () => {
    const slider = sliderRef.current;
    if (slider) {
      const diff = parseInt(slider.style.transform.replace('translateX(', '').replace('px)', '') || '0');
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
      slider.style.transform = '';
    }
    setIsDragging(false);
  };

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
    <div className="relative w-full" style={{ height: '760px' }}>
      <div 
        ref={sliderRef}
        className="absolute inset-0 w-full h-full overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full ${
              index === currentIndex ? 'z-10' : 'z-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: isDragging ? 'none' : 'transform 0.5s ease-out'
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
          className="absolute z-30 left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
          onClick={goToPrevious}
        >
          <ChevronLeft size={28} />
        </button>
        
        <button 
          className="absolute z-30 right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
          onClick={goToNext}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="absolute z-30 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <button
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-red-600 w-12' : 'bg-white hover:bg-red-400'
              }`}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setHoveredPreview(index)}
              onMouseLeave={() => setHoveredPreview(null)}
            />
            {hoveredPreview === index && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-white p-1 rounded shadow-lg">
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;