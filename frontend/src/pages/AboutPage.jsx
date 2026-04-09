import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Full Page Hero for About */}
        <section className="pt-48 pb-24 px-12 max-w-screen-2xl mx-auto text-center">
            <p className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-8 underline underline-offset-8">Our Philosophy</p>
            <h1 className="font-headline text-7xl md:text-[10rem] tracking-tighter leading-[0.8] mb-12">Artistry<br /><span className="italic ml-8 md:ml-24">Unveiled</span></h1>
            <p className="max-w-2xl mx-auto text-on-surface-variant font-light text-2xl leading-relaxed mt-12">
                JM_Aura was born from a singular vision: to bridge the gap between ancient goldsmithing traditions and contemporary architectural forms.
            </p>
        </section>

        {/* Narrative Section 1 */}
        <section className="py-32 bg-surface-container-low overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-12 flex flex-col md:flex-row items-center gap-24">
                <div className="w-full md:w-1/2 relative">
                    <div className="editorial-arch w-full aspect-[3/4] overflow-hidden shadow-2xl relative z-10">
                        <img src="/assets/IMG-20260225-WA0069.jpg" alt="Atelier detail from the Aura workshop" className="w-full h-full object-cover" />

                    </div>
                    <div className="absolute top-1/2 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="font-headline text-4xl md:text-5xl mb-8 leading-tight italic">The Weight <br />of History</h3>
                    <div className="space-y-6 text-on-surface-variant font-light leading-relaxed text-lg">
                        <p>Our journey began in a small workshop overlooking the Mediterranean, where our founder, JM, spent years apprenticing under master artisans who have kept 18th-century techniques alive.</p>
                        <p>We believe that speed is the enemy of beauty. While modern manufacturing prioritizes quantity, we choose the slow path—where a single pair of earrings might take days to reach its final form.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* The Component - Already excellent */}
        <About />

        {/* Values Section */}
        <section className="py-32 px-12 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                    <span className="font-headline text-6xl mb-6 block italic">01</span>
                    <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-4 font-bold">Ethical Sourcing</h4>
                    <p className="text-on-surface-variant font-light leading-relaxed">Every stone is conflict-free and every ounce of gold is recycled or comes from certified sustainable mines.</p>
                </div>
                <div>
                    <span className="font-headline text-6xl mb-6 block italic">02</span>
                    <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-4 font-bold">Timeless Design</h4>
                    <p className="text-on-surface-variant font-light leading-relaxed">We don't follow seasons; we follow beauty. Our pieces are designed to be relevant now and fifty years from today.</p>
                </div>
                <div>
                    <span className="font-headline text-6xl mb-6 block italic">03</span>
                    <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-4 font-bold">Bespoke Aura</h4>
                    <p className="text-on-surface-variant font-light leading-relaxed">Our atelier offers personalized consulting to create one-of-a-kind pieces that tell your specific narrative.</p>
                </div>
            </div>
        </section>

        {/* Visionary Link */}
        <section className="pb-40 text-center">
            <div className="inline-block relative">
                <img src="/assets/IMG-20260225-WA0065.jpg" alt="Artistic composition of JM_Aura pieces" className="w-[800px] h-48 object-cover rounded-full opacity-30 grayscale blur-[2px]" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <Link to="/contact" className="group">
                        <h2 className="font-headline text-4xl md:text-6xl tracking-tight transition-all group-hover:scale-105">Start Your <span className="italic underline underline-offset-8">Commission</span></h2>
                    </Link>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
