import React from 'react';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  // Sample image URLs for the slider (replace with actual images)
  const sliderImages = [
    'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  return (
    <div className="font-sans">
      <Header />
      <main>
        <section id="home">
          <ImageSlider images={sliderImages} />
        </section>
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;