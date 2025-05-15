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
    'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    '/home/project/dfe0eb94-428f-42a1-80d9-d4b916892c05.png',
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