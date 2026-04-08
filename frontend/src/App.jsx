import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Trends from './pages/Trends';
import Contact from './pages/Contact';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/collections" element={
          <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
            <Navbar />
            <Collections />
            <Footer />
          </div>
        } />
        <Route path="/product/:id" element={
          <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
            <Navbar />
            <ProductDetail />
            <Footer />
          </div>
        } />
        <Route path="/checkout" element={
          <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
            <Checkout />
          </div>
        } />
        <Route path="/profile" element={
          <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
            <Navbar />
            <Profile />
            <Footer />
          </div>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={
          <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center font-headline text-4xl text-on-surface-variant pt-32">Page Not Found</div>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
