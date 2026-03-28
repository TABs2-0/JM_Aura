import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-32 bg-[#e4e2dd]">
      <div className="max-w-screen-xl mx-auto px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline text-5xl italic text-on-surface mb-6">Stay in the Aura</h2>
          <p className="text-on-surface-variant font-light mb-12">Join our inner circle for exclusive previews of new collections, artisan stories, and private atelier events.</p>
          <form className="relative group max-w-md mx-auto">
            <input className="w-full bg-transparent border-b border-outline-variant/60 py-4 px-2 focus:outline-none focus:border-primary placeholder:text-outline-variant placeholder:text-xs placeholder:tracking-widest transition-all" placeholder="YOUR EMAIL ADDRESS" type="email" />
            <button className="absolute right-0 bottom-4 font-label text-xs tracking-widest uppercase text-primary hover:opacity-70 transition-opacity">Subscribe</button>
          </form>
          <div className="mt-12 flex justify-center gap-8 text-on-surface-variant/60">
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="share">share</span></a>
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="mail">mail</span></a>
            <a className="hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="location_on">location_on</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
