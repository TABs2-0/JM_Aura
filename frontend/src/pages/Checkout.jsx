import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { orderAPI } from '../services/api';

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    full_name: '',
    address: '',
    city: '',
    postal_code: '',
    payment_method: 'card'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error when user typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrors({});
      
      // Map frontend fields to backend expected fields if different
      const orderPayload = {
        ...formData,
        // Assuming the backend handles items from the user's session or cart
        // Otherwise we'd send items: [{ product_id: '...', quantity: 1 }]
      };
      
      await orderAPI.create(orderPayload);
      setSuccess(true);
      
      // Redirect after a short delay
      setTimeout(() => {
        navigate('/profile#orders');
      }, 3000);
      
    } catch (err) {
      console.error('Checkout failed:', err);
      // DRF returns field-specific errors in err.data
      if (err.data) {
        setErrors(err.data);
      } else {
        setErrors({ general: 'An unexpected error occurred. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-6 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
          <span className="material-symbols-outlined text-emerald-600 text-4xl">check</span>
        </div>
        <h2 className="text-5xl font-headline italic mb-4">Order Received</h2>
        <p className="font-body text-on-surface-variant max-w-md leading-relaxed mb-10">
          Your curation has been secured. We are preparing your archival shipment with artisanal care.
        </p>
        <Link to="/profile" className="px-10 py-4 bg-primary text-on-primary rounded-full font-label uppercase tracking-widest text-xs">
          View My Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-6 glass-nav">
        <Link to="/" className="text-2xl font-serif tracking-tight text-[#1b1c19] dark:text-[#fbf9f4] newsreader-regular">JM_Aura</Link>
        <div className="flex items-center gap-8">
          <span className="tracking-[0.1em] uppercase text-xs text-on-surface-variant hidden sm:inline">Secure Checkout</span>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface">lock</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <form onSubmit={handlePlaceOrder} className="lg:col-span-7 space-y-16">
            <section>
              <header className="mb-8">
                <span className="text-xs tracking-[0.2em] uppercase text-on-surface-variant font-label">Step 01</span>
                <h2 className="text-4xl newsreader-regular mt-2">Shipping Information</h2>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">Full Name</label>
                  <input 
                    name="full_name"
                    required
                    className={`w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30 ${errors.full_name ? 'border-error' : ''}`} 
                    placeholder="Julianne Moore" 
                    type="text"
                    value={formData.full_name}
                    onChange={handleInputChange}
                  />
                  {errors.full_name && <p className="mt-1 text-[10px] text-error uppercase tracking-widest">{errors.full_name}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">Street Address</label>
                  <input 
                    name="address"
                    required
                    className={`w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30 ${errors.address ? 'border-error' : ''}`} 
                    placeholder="124 Artisanal Avenue" 
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  {errors.address && <p className="mt-1 text-[10px] text-error uppercase tracking-widest">{errors.address}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">City</label>
                  <input 
                    name="city"
                    required
                    className={`w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30 ${errors.city ? 'border-error' : ''}`} 
                    placeholder="Florence" 
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  {errors.city && <p className="mt-1 text-[10px] text-error uppercase tracking-widest">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2 ml-1 text-on-surface-variant">Postal Code</label>
                  <input 
                    name="postal_code"
                    required
                    className={`w-full bg-surface-container-lowest border-outline-variant/40 rounded-lg px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/30 ${errors.postal_code ? 'border-error' : ''}`} 
                    placeholder="50123" 
                    type="text"
                    value={formData.postal_code}
                    onChange={handleInputChange}
                  />
                  {errors.postal_code && <p className="mt-1 text-[10px] text-error uppercase tracking-widest">{errors.postal_code}</p>}
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
                    <span className="material-symbols-outlined text-primary">credit_card</span>
                    <span className="text-sm tracking-wide uppercase">Credit / Debit Card</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 bg-surface-container rounded-xl flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                    <span className="text-sm tracking-wide uppercase">Digital Wallet</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-outline-variant"></div>
                </div>
              </div>
            </section>
            
            {errors.general && <p className="p-4 bg-error-container text-on-error-container rounded-xl text-sm font-label uppercase tracking-widest text-center">{errors.general}</p>}
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary uppercase tracking-[0.2em] text-sm font-semibold hover:opacity-90 transition-all shadow-xl shadow-primary/10 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>
          </form>

          <aside className="lg:col-span-5">
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
              </div>
              <div className="space-y-4 pt-8 border-t border-outline-variant/20">
                <div className="flex justify-between text-sm uppercase tracking-widest text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>$185.00</span>
                </div>
                <div className="flex justify-between text-sm uppercase tracking-widest text-on-surface-variant">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-xl font-medium pt-4">
                  <span className="newsreader-italic">Total</span>
                  <span className="text-primary">$185.00</span>
                </div>
              </div>
              <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                Secure SSL Encryption &amp; Carbon Neutral Delivery
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="w-full pt-20 pb-10 bg-[#e4e2dd] dark:bg-[#121210]">
        <div className="mt-2 text-center text-[10px] tracking-[0.3em] uppercase text-on-surface-variant opacity-40">
          © 2024 JM_Aura. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Checkout;

