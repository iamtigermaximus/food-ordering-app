import AboutSection from '@/components/layout/AboutSection';
import ContactSection from '@/components/layout/ContactSection';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeMenu />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
