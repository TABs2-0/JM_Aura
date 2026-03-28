import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f4]/80 dark:bg-[#1b1c19]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-12 py-6 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-12">
          <Link className="text-2xl font-headline tracking-tight text-[#1b1c19] dark:text-[#fbf9f4]" to="/">JM_Aura</Link>
          <div className="hidden lg:flex gap-8">
            <Link className="tracking-[0.1em] uppercase text-xs text-[#79542e] dark:text-[#a67c52] border-b border-[#79542e] pb-1 font-label" to="/">Home</Link>
            <Link className="tracking-[0.1em] uppercase text-xs text-[#1b1c19] dark:text-[#fbf9f4] hover:text-[#79542e] transition-colors font-label" to="/collections">Collections</Link>
            <Link className="tracking-[0.1em] uppercase text-xs text-[#1b1c19] dark:text-[#fbf9f4] hover:text-[#79542e] transition-colors font-label" to="/trends">Trends</Link>
            <Link className="tracking-[0.1em] uppercase text-xs text-[#1b1c19] dark:text-[#fbf9f4] hover:text-[#79542e] transition-colors font-label" to="/about">About</Link>
            <Link className="tracking-[0.1em] uppercase text-xs text-[#1b1c19] dark:text-[#fbf9f4] hover:text-[#79542e] transition-colors font-label" to="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/profile" className="hover:opacity-70 transition-opacity duration-300">
            <span className="material-symbols-outlined text-xl" data-icon="person">person</span>
          </Link>
          <Link to="/checkout" className="hover:opacity-70 transition-opacity duration-300 relative">
            <span className="material-symbols-outlined text-xl" data-icon="shopping_bag">shopping_bag</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
