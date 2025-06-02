import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';

function App() {
  const sliderImages = [
    'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=2160',
    'https://raw.githubusercontent.com/XRlayth/zdjeciaeryk/main/Eryk%20Puzio%20(2)%20(1).png',
    'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <section id="home">
                <ImageSlider images={sliderImages} />
              </section>
              <AboutSection />
              <ServicesSection />
              <TestimonialsSection />
              <ContactSection />
            </main>
          } />
          <Route path="/sklep" element={<ShopSection />} />
          <Route path="/kontakt" element={<ContactSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;