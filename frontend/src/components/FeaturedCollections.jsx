import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCollections = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="font-headline text-5xl md:text-6xl text-on-surface mb-4">The Collections</h2>
            <p className="text-on-surface-variant font-light tracking-wide">Curated selections for the modern curator.</p>
          </div>
          <Link className="font-label text-xs tracking-widest uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all" to="/collections">View All Categories</Link>
        </div>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[800px]">
          <div className="md:col-span-7 group relative overflow-hidden bg-surface-container-lowest rounded-xl">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Luxury display of emerald and gold necklaces arranged on a textured cream linen surface with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ei6UKEidFnvwkziVxLx90CcvHhN3q-sTYpt0kuGVl6r5r2qIsfZJAwuDyVmurBuWlVXGfUWIB5qDsIKa1z2WWtIsfLEKNIUmBVdocnvYM5TbKomSYxkaHJof4Wd15NgYpeZ7-vDMSET8Lify1nu4ywXrVeZzhSWbDhGV387iDznLHyYHSn65Lmsc6t06aTQ4jX5UGQNIxK1tE-IVwVZbKUHLQ1QEcDjhfnVBWRsSWNoHMtTG43zx1DMLe_76YJgAilF7KQPKEWg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-10">
              <span className="text-white/80 font-label text-xs tracking-widest uppercase mb-2">Signature Series</span>
              <h3 className="text-white font-headline text-4xl mb-6">The Eternal Link</h3>
              <Link to="/product/the-eternal-link" className="w-fit text-white font-label text-xs tracking-widest uppercase flex items-center gap-2 group/btn">
                Explore <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-rows-2 gap-8">
            <div className="group relative overflow-hidden bg-surface-container-lowest rounded-xl">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Minimalist gold rings stacked on a model's hand against a neutral warm background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDY4ws3_OUvAO0pd-pCxTZeFkU7UQI9YHdTSncSgrDjNE9kJQO1PBMRxvF6P1vcOxxClUlFeIXNvUqCjYtEI_Qt8SqXazq5aqwbjqjtnrzuyvGOtmc55GDW5_XA_HftlUEcyOhm6CBUbLy82zLZyhvTFD-JxjfH3ujWhVw86Cy5Y-wySgid0U8Tr83h_Ygu-mAn5dqkVmmaGkbJJ6UwmdcFTtAoVDZ610qxTQcL7V_pvdYy0LQscm9RoXArORaszCvM9xs9jsG0nM" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white font-headline text-3xl">Sculptural Rings</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-surface-container-lowest rounded-xl">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Elegant pearl and gold drop earrings hanging from a ceramic stand in a well-lit studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi7Kw4RYbhkuXTlTqqadosmbv-NJSB0s2VnFPPx0HtbsJhmq0y5CJN6IevHFmPGYNRh0sUBBH6VxtlA_MtlPq8tdXojAfoxoTYtNvk_7BAISanVSSE7BWLii98MPzMSxPERYkX1ipLDe43WfarvJIiFv7zqWI03mtOGWiTqVnTP7J_G4y0oMSVuzblZncr6a2KPVqNOkE6KCURl6jsbYnOuzvkeglhDtDeTgG4Myf_rmyI4cm-Dp9zPw1b1cNf9i9OtEWZRk-nDyc" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white font-headline text-3xl">The Pearl Edit</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
