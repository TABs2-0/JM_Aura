import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-12 max-w-screen-2xl mx-auto">
        {/* Contact Header */}
        <header className="mb-24 text-center">
            <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6 italic">Support & Inquiries</p>
            <h1 className="font-headline text-7xl md:text-8xl tracking-tight mb-8">Reach the <br />Studio</h1>
            <p className="max-w-xl mx-auto text-on-surface-variant font-light text-xl leading-relaxed">
              Whether searching for a bespoke creation or tracking a recent order, our studio is dedicated to providing a seamless experience.
            </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-24">
            {/* Contact Info Side */}
            <section className="w-full lg:w-1/3 order-2 lg:order-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-16">
                    <div>
                        <h3 className="font-headline text-3xl mb-4 italic">The Atelier</h3>
                        <p className="text-on-surface-variant font-light leading-relaxed">
                            142 Via del Corso<br />
                            Rome, 00186<br />
                            Italy
                        </p>
                    </div>

                    <div>
                        <h3 className="font-headline text-3xl mb-4 italic">Inquiries</h3>
                        <div className="space-y-2 text-on-surface-variant font-light">
                            <p className="flex items-baseline gap-4 group cursor-pointer hover:text-primary transition-colors">
                                <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">General</span>
                                <span>hello@jmaura.studio</span>
                            </p>
                            <p className="flex items-baseline gap-4 group cursor-pointer hover:text-primary transition-colors">
                                <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Bespoke</span>
                                <span>artisan@jmaura.studio</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-headline text-3xl mb-4 italic">Hours</h3>
                        <div className="space-y-1 text-on-surface-variant font-light">
                            <p className="flex justify-between border-b border-outline-variant/10 pb-2 mb-2">
                                <span>Mon — Fri</span>
                                <span>10:00 — 19:00</span>
                            </p>
                            <p className="flex justify-between border-b border-outline-variant/10 pb-2 mb-2 opacity-50">
                                <span>Sat — Sun</span>
                                <span>By appointment</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 p-8 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                    <p className="font-headline text-2xl mb-4 tracking-tight">Need direct assistance?</p>
                    <p className="text-on-surface-variant text-sm mb-6 font-light">Our concierge team typically responds within 24–48 hours.</p>
                    <button className="flex items-center gap-3 text-primary font-label text-xs uppercase tracking-widest group">
                        Live Concierge 
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                </div>
            </section>

            {/* Form Side */}
            <section className="w-full lg:w-2/3 order-1 lg:order-2 bg-surface-container-lowest p-12 md:p-16 rounded-[40px] shadow-sm border border-outline-variant/10">
                <form className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-2">
                            <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">First Name</label>
                            <input 
                                className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant/30" 
                                placeholder="Giovanni" 
                                type="text" 
                                required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Last Name</label>
                            <input 
                                className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant/30" 
                                placeholder="Rossi" 
                                type="text" 
                                required 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Email Address</label>
                        <input 
                            className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant/30" 
                            placeholder="giovanni@rossi.it" 
                            type="email" 
                            required 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Interest</label>
                        <select className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all appearance-none cursor-pointer">
                            <option>Collection Inquiry</option>
                            <option>Bespoke Commission</option>
                            <option>Order Support</option>
                            <option>Collaborations</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">Message</label>
                        <textarea 
                            className="w-full bg-transparent border-none border-b border-outline-variant/30 focus:border-primary focus:ring-0 py-4 px-0 font-body text-on-surface transition-all placeholder:text-outline-variant/30 min-h-[160px] resize-none" 
                            placeholder="How can we assist with your curation?" 
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full md:w-auto px-16 py-5 bg-on-surface text-surface rounded-full font-label text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-on-surface/10"
                    >
                        Send Inquiry
                    </button>
                </form>
            </section>
        </div>

        {/* Studio Gallery Integration */}
        <section className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            <div className="editorial-arch overflow-hidden aspect-[4/5] opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1544365313-094cfb46573c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" alt="Detail of artisan workspace" className="w-full h-full object-cover" />
            </div>
            <div className="editorial-arch overflow-hidden aspect-[4/5] mt-12 opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1579294273030-2fe5da84f3cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" alt="Silver casting process" className="w-full h-full object-cover" />
            </div>
            <div className="editorial-arch overflow-hidden aspect-[4/5] mt-6 opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" alt="Polishing a gold ring" className="w-full h-full object-cover" />
            </div>
            <div className="editorial-arch overflow-hidden aspect-[4/5] mt-20 opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1610488661559-0db7f90f2ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" alt="Sketches of jewelry designs" className="w-full h-full object-cover" />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
