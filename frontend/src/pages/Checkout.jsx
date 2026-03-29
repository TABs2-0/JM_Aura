import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-6 w-full max-w-screen-2xl mx-auto glass-nav">
        <Link to="/" className="text-2xl font-serif tracking-tight text-[#1b1c19] dark:text-[#fbf9f4] newsreader-regular">JM_Aura</Link>
        <div className="flex items-center gap-8">
          <span className="tracking-[0.1em] uppercase text-xs text-on-surface-variant">Secure Checkout</span>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface" data-icon="lock">lock</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-16">
            <section>
              <header className="mb-8">
                <span className="text-xs tracking-[0.2em] uppercase text-on-surface-variant font-label">Step 01</span>
                <h2 className="text-4xl newsreader-regular mt-2">Shipping Information</h2>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">Full Name</label>
                  <input className="w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30" placeholder="Julianne Moore" type="text"/>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">Street Address</label>
                  <input className="w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30" placeholder="124 Artisanal Avenue" type="text"/>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">City</label>
                  <input className="w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30" placeholder="Florence" type="text"/>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">Postal Code</label>
                  <input className="w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30" placeholder="50123" type="text"/>
                </div>
              </div>
            </section>
            <section>
              <header className="mb-8">
                <span className="text-xs tracking-[0.2em] uppercase text-on-surface-variant font-label">Step 02</span>
                <h2 className="text-4xl newsreader-regular mt-2">Payment Method</h2>
              </header>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container-lowest border border-primary/20 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary" data-icon="credit_card">credit_card</span>
                    <span className="text-sm tracking-wide uppercase">Credit / Debit Card</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">Card Number</label>
                    <input className="w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30" placeholder="0000 0000 0000 0000" type="text"/>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">Expiry Date</label>
                    <input className="w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30" placeholder="MM / YY" type="text"/>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">CVV</label>
                    <input className="w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30" placeholder="***" type="password"/>
                  </div>
                </div>
                <div className="p-6 bg-surface-container rounded-xl flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
                    <span className="text-sm tracking-wide uppercase">Digital Wallet</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-outline-variant"></div>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-surface-container-low rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl newsreader-regular mb-10 pb-6 border-b border-outline-variant/20">Order Summary</h3>
              <div className="space-y-8 mb-10">
                <div className="flex gap-6 group">
                  <div className="w-24 h-32 rounded-xl overflow-hidden bg-surface-container-highest shrink-0">
                    <img alt="Aura Essence" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhRjOJMdCLBNT4XnfZBLqsF5ONFh8MgHkiE0Uq5OR62xNnFFwZt6kV8gfg5pWj8ChXTZIxQebClpGv3mSxmAW9-qMS9ktp-bWcQ9vKkPBZ-TmpDCpcLWPEMi_D9i00keBIQJC8WYGXu49rZXFLonJoff3qmVZFn_jSR34aXxFvlVSpr8aiIJ6hg4ms0_wVWJ2yEDi3wbuWBQoCV2lGT9vrjapfyIfpCn-552gQdWyqfD8OjaTUYBKHnZxebkJ3S_lA6fRNLvP3AdY"/>
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-lg font-medium">Aura Essence No. 04</h4>
                      <p className="text-xs tracking-widest uppercase text-on-surface-variant mt-1">50ml Eau de Parfum</p>
                    </div>
                    <span className="text-primary font-medium">$185.00</span>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-24 h-32 rounded-xl overflow-hidden bg-surface-container-highest shrink-0">
                    <img alt="Ceramic Vessel" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbNQXeTygX0Y0fTVQAQr3C6jUudqFOa41XU924GLYeRDWSnoWOBRGpDKMow7Q6ebLpr-rlfRt53s-Qn-hyXI9PNT97xuUlTAtMRwqeaqpN2hfx5mJdkVjP8zUgkIg9J9mKFLnJTZQgVzhAPoH9WldKv0RSfAajtuaYLCaMOHFiFccdsyRYXKce_ALRhfVuv28woEKfltFa11cgNSfJMGMKJGonDuCMiQZQ69UZckZNFI6iifoU3HW-8Nd8niLb2uzh-HaBnPJWEhU"/>
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-lg font-medium">Faceted Stone Vessel</h4>
                      <p className="text-xs tracking-widest uppercase text-on-surface-variant mt-1">Artisanal Decor</p>
                    </div>
                    <span className="text-primary font-medium">$320.00</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8 border-t border-outline-variant/20">
                <div className="flex justify-between text-sm uppercase tracking-widest text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>$505.00</span>
                </div>
                <div className="flex justify-between text-sm uppercase tracking-widest text-on-surface-variant">
                  <span>Shipping</span>
                  <span>$25.00</span>
                </div>
                <div className="flex justify-between text-xl font-medium pt-4">
                  <span className="newsreader-italic">Total</span>
                  <span className="text-primary">$530.00</span>
                </div>
              </div>
              <button className="w-full mt-10 py-5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary uppercase tracking-[0.2em] text-sm font-semibold hover:opacity-90 transition-all shadow-xl shadow-primary/10">
                Place Order
              </button>
              <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                Secure SSL Encryption &amp; Carbon Neutral Delivery
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full pt-20 pb-10 bg-[#e4e2dd] dark:bg-[#121210]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
          <div className="md:col-span-1">
            <div className="text-3xl font-serif text-[#1b1c19] dark:text-[#fbf9f4] mb-8 newsreader-regular">JM_Aura</div>
            <p className="text-xs tracking-widest uppercase text-on-surface-variant">Artisanal Excellence.</p>
          </div>
          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase font-bold mb-6">Service</h5>
            <ul className="space-y-4 text-sm font-light">
              <li><a className="text-[#1b1c19]/60 hover:text-[#79542e] transition-all" href="#">Shipping</a></li>
              <li><a className="text-[#1b1c19]/60 hover:text-[#79542e] transition-all" href="#">Returns</a></li>
              <li><a className="text-[#1b1c19]/60 hover:text-[#79542e] transition-all" href="#">Care Guide</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase font-bold mb-6">Explore</h5>
            <ul className="space-y-4 text-sm font-light">
              <li><a className="text-[#1b1c19]/60 hover:text-[#79542e] transition-all" href="#">Journal</a></li>
              <li><a className="text-[#1b1c19]/60 hover:text-[#79542e] transition-all" href="#">Sustainability</a></li>
              <li><a className="text-[#1b1c19]/60 hover:text-[#79542e] transition-all" href="#">Process</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase font-bold mb-6">Newsletter</h5>
            <div className="flex border-b border-on-surface/20 pb-2">
              <input className="bg-transparent border-none text-sm w-full focus:ring-0 placeholder:text-on-surface/30" placeholder="Your Email" type="email"/>
              <span className="material-symbols-outlined text-sm cursor-pointer" data-icon="arrow_forward">arrow_forward</span>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center text-[10px] tracking-[0.3em] uppercase text-on-surface-variant opacity-40">
          © 2024 JM_Aura. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Checkout;
