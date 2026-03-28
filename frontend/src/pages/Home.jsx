import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
