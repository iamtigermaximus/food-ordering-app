import AboutSection from '@/components/layout/AboutSection';
import ContactSection from '@/components/layout/ContactSection';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import React from 'react';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
