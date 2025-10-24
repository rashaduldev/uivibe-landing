"use client"
import AboutSection from '@/components/Homepage/AboutSection';
import ContactSection from '@/components/Homepage/ContactSection';
import HeroSection from '@/components/Homepage/HeroSection';
import PortfolioSection from '@/components/Homepage/PortfolioSection';
import ServicesSection from '@/components/Homepage/ServicesSection';
import TestimonialSection from '@/components/Homepage/TestimonialSection';
import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';
import Newsletter from '@/components/Shared/Newsletter';
import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <ServicesSection darkMode={darkMode} />
      <PortfolioSection darkMode={darkMode} />
      <TestimonialSection darkMode={darkMode} />
      <Newsletter darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;