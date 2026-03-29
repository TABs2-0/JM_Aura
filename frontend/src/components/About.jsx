import React from 'react';

const About = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="editorial-arch w-4/5 overflow-hidden aspect-[4/5] mx-auto z-10 relative shadow-xl">
            <img className="w-full h-full object-cover" alt="Hands of a jeweler carefully working on a silver piece with specialized tools at a wooden workbench" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQhtsSVHCweouYtmoKpPgB2jcDZTB5qzcJggTrLI1Iajt3GoQJH_qyzhKz_e44pEmxH_rawAG4Z7QbvhwnvjZRs3-LfBFOqnQtZUiI68gGQ_0j73lqBQH8yRr9p3yX4xsIwlUfd8txuhoxC-fe1eK3CP2COs2Xu0YcMk2apei9I25xofHMol_x5OPgCpxr9VpEyM5iyO2xc8_XW2R0MLkTbg5iGOUJ_RAIrwrJxBUUtiw0_VHhw3japkDVna-srBNzloSV1cNtGYI" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-surface-container border border-outline-variant/30 editorial-arch -z-0"></div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="font-label tracking-[0.2em] uppercase text-xs text-primary mb-8">Craftsmanship</p>
          <h2 className="font-headline text-5xl md:text-6xl italic leading-tight mb-10 text-on-surface">The Alchemist’s <br />Touch</h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed text-lg max-w-xl">
            <p>At JM_Aura, we believe jewelry is more than an accessory; it is a narrative of identity. Our process begins with raw inspiration from the rugged Mediterranean coastline—translated into gold, silver, and stones.</p>
            <p>Every piece is finished by hand, ensuring that no two items are identical. It is this intentional imperfection that gives our work its soul and its "Aura".</p>
          </div>
          <div className="mt-12">
            <a className="inline-flex items-center gap-4 group" href="#">
              <span className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined" data-icon="play_arrow">play_arrow</span>
              </span>
              <span className="font-label text-xs tracking-widest uppercase">Watch the process</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
