import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#e4e2dd] dark:bg-[#121210] w-full pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-headline italic text-[#1b1c19] dark:text-[#fbf9f4] mb-8">JM_Aura</h2>
          <p className="text-[#1b1c19]/60 dark:text-[#fbf9f4]/60 font-body text-sm leading-relaxed">
            Elevating the ordinary into the extraordinary through sculptural design and ethical craftsmanship.
          </p>
        </div>
        <div>
          <h4 className="font-label tracking-widest uppercase text-xs mb-8 text-[#79542e]">Discover</h4>
          <ul className="space-y-4">
            <li><a className="text-[#1b1c19]/60 dark:text-[#fbf9f4]/60 font-body text-sm hover:text-[#79542e] transition-all" href="#">Journal</a></li>
            <li><a className="text-[#1b1c19]/60 dark:text-[#fbf9f4]/60 font-body text-sm hover:text-[#79542e] transition-all" href="#">Care Guide</a></li>
            <li><a className="text-[#1b1c19]/60 dark:text-[#fbf9f4]/60 font-body text-sm hover:text-[#79542e] transition-all" href="#">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label tracking-widest uppercase text-xs mb-8 text-[#79542e]">Service</h4>
          <ul className="space-y-4">
            <li><a className="text-[#1b1c19]/60 dark:text-[#fbf9f4]/60 font-body text-sm hover:text-[#79542e] transition-all" href="#">Shipping</a></li>
            <li><a className="text-[#1b1c19]/60 dark:text-[#fbf9f4]/60 font-body text-sm hover:text-[#79542e] transition-all" href="#">Returns</a></li>
            <li><a className="text-[#1b1c19]/60 dark:text-[#fbf9f4]/60 font-body text-sm hover:text-[#79542e] transition-all" href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label tracking-widest uppercase text-xs mb-8 text-[#79542e]">Atelier</h4>
          <p className="text-[#1b1c19]/60 dark:text-[#fbf9f4]/60 font-body text-sm mb-4">
            Via della Conciliazione, 4<br />
            00193 Roma RM, Italy
          </p>
          <p className="text-[#1b1c19]/60 dark:text-[#fbf9f4]/60 font-body text-sm">
            contact@jmaura.com
          </p>
        </div>
      </div>
      <div className="mt-20 px-12 max-w-screen-2xl mx-auto border-t border-outline-variant/20 pt-10 text-center">
        <p className="font-label tracking-widest uppercase text-[10px] text-[#1b1c19]/40 dark:text-[#fbf9f4]/40">
          © 2024 JM_Aura. Artisanal Excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
