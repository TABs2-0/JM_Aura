import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  return (
    <main className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-8">
        <nav className="flex space-x-2 text-xs font-label uppercase tracking-widest text-on-surface-variant/60">
          <Link className="hover:text-primary transition-colors" to="/collections">Collections</Link>
          <span>/</span>
          <Link className="hover:text-primary transition-colors" to="#">Earrings</Link>
          <span>/</span>
          <span className="text-on-surface">Pearl Drop Earring</span>
        </nav>
      </div>

      {/* Product Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:grid lg:grid-cols-12 lg:gap-20 items-start">
        {/* Image Side (Asymmetric/Arched) */}
        <div className="lg:col-span-7 space-y-8 mb-12 lg:mb-0">
          <div className="relative group">
            <div className="arched-frame overflow-hidden bg-surface-container aspect-[4/5] w-full">
              <img alt="Artisanal pearl drop earring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMOBTSEkkTcri8VRq5eV1PzeJVir0NyTv2CJpyApBXt-gFh5pCJE8TAqoCxgJKUzrAQeVp1Xpu53Sa8wpz0ValqklM6jUJ5T4GHLrZUwkkh_xC02dAInKPigWnCKumTt0vwnfqpLS3H_xWoDOMfJqvCMOWYn-iNFA83G3afEihRb6LGr_fbNA7k2zOxh_9NXvz_V64d9Wvi8wK4NcBcVOkwS-2_kxnebcAQUaMcrG528IMHvSco80tGyYvTQG5gzRj_g4zTCApta4"/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-surface-container overflow-hidden rounded-lg">
              <img alt="Detail shot of pearl" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaj9EHfiUvYbxOHzHriQgGhJGOaOMpwZbGqU3KFq1NElsWEIkAalanclhhmLAxiIvg7Pmta7so2U9xDH9teC2lGOEh8JUK7sBFsLiGducfpTT0I1fb3NHriEUgso6LUOifWZh_WADP0DvKVQ5PWsIYFUkMlZDcWKhfqTzidpbPbozKeh5nOxR83otVNUL629_O-E_plai6LRehnky4xHIpkbDMpwD_yXhXovpN6vjlvOxiRa56iOee0_-ppbA3hyzOawJPBR0jhek"/>
            </div>
            <div className="aspect-square bg-surface-container overflow-hidden rounded-lg">
              <img alt="Jewelry on model" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk5RHH-umeM4EbKGqFk5jaz3Tz9hPRLGTat22eCe1AQkYxugsI6whCdR3IsO2e66eCxexZeFOH-t1Kh69T-7f_TtLDKh9m3nmTYjP30ChvFWNP_QguprD2Rj0lTerx5gDTpC8GSeCJl5jUNaR-1IpEUww3tU8mZIs-FVWNJhqeumYjMlfRzQeEVy9DlyAwsTHN8gsxX4X_FUCGFbvl1A3CECaUG38E0RD9CG6Cl0HbZFgtWzuDB9JkSj2vSAKSQXOtFeWMncg16PI"/>
            </div>
          </div>
        </div>

        {/* Details Side */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="mb-2">
            <span className="font-label uppercase tracking-[0.2em] text-[10px] text-primary font-bold">Lumière Collection</span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl text-on-surface serif-tight mb-4">Pearl Drop Earring</h1>
          <div className="text-2xl font-body text-primary-container mb-10">$450.00</div>
          <div className="space-y-8">
            <div>
              <h3 className="font-label uppercase tracking-widest text-xs mb-3 text-on-surface-variant">The Craft</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                Each piece is meticulously hand-sculpted in our atelier. We select individual baroque pearls for their unique silhouettes, ensuring that no two earrings are ever identical—a testament to nature's intentional imperfection.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-outline-variant/30">
              <div>
                <span className="block font-label uppercase tracking-widest text-[10px] text-on-surface-variant/60 mb-1">Material</span>
                <span className="text-sm font-body">18k Recycled Gold</span>
              </div>
              <div>
                <span className="block font-label uppercase tracking-widest text-[10px] text-on-surface-variant/60 mb-1">Stone</span>
                <span className="text-sm font-body">Freshwater Baroque Pearl</span>
              </div>
            </div>
            <div className="space-y-4">
              <Link to="/checkout" className="block text-center w-full py-5 px-8 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/10">
                Add to Cart
              </Link>
              <button className="w-full py-5 px-8 rounded-full border border-outline-variant/40 hover:border-primary/40 transition-colors font-label uppercase tracking-widest text-xs text-on-surface">
                Add to Wishlist
              </button>
            </div>
            {/* Accordion Items */}
            <div className="pt-6 space-y-4">
              <details className="group border-b border-outline-variant/20 pb-4 cursor-pointer">
                <summary className="flex justify-between items-center list-none font-label uppercase tracking-widest text-[11px]">
                  Shipping &amp; Delivery
                  <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="pt-4 font-body text-xs text-on-surface-variant leading-relaxed">
                  Complimentary worldwide shipping on all orders over $300. Delivered in our signature FSC-certified archival packaging.
                </div>
              </details>
              <details className="group border-b border-outline-variant/20 pb-4 cursor-pointer">
                <summary className="flex justify-between items-center list-none font-label uppercase tracking-widest text-[11px]">
                  Product Care
                  <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="pt-4 font-body text-xs text-on-surface-variant leading-relaxed">
                  Avoid contact with perfumes and water. Clean gently with a soft microfiber cloth to maintain the luster of the pearl.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Relatated Pieces Section */}
      <section className="mt-40 bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface serif-tight">You May Also Like</h2>
            <Link className="font-label uppercase tracking-widest text-xs text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all" to="/collections">View All Collections</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Related 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface mb-6 relative">
                <img alt="Gold Ring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9xfEP_FtKq5gkYFde3PyQha9fx2mfmFqzsVW2V0uAO7ErlWMPNX-lAw0jnHSo9d18qjF6xxeLdKqtIjrA4nrRjg93G1DI86R9daXQAbnHhwJC7URdezGOboNlqUOOru5wVZ2gHl4RDACsd3dMDO_lUv_e5GzWRBxwx2DmHTgRtn6TzaRcPYHt7mNLckOPDGXxXBfFK7t-tGPZXoMCornh93qVbU-_11E2R6snYQ1xG0pIFK8Pz_6U5NoJLuIzy9byTqCWU2SmE3c"/>
                <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/5 transition-colors duration-300"></div>
              </div>
              <h3 className="font-body text-lg mb-1">Horizon Band Ring</h3>
              <div className="font-label tracking-widest text-xs text-on-surface-variant/70 uppercase mb-2">Gold • $280.00</div>
            </div>
            {/* Related 2 */}
            <div className="group cursor-pointer md:mt-12">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface mb-6 relative">
                <img alt="Necklace Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd9HPAdh5sC9eGAc9zWvJq9_QwBpAziYcQOGuOC2b-jJ3zPVOWfc29nWcQXmysCD5b5LEvjrQ_RI-bw987HBDEfX1wqDe0aNoVvlx5ueci01bCafjNqAPaSksL5PIPpwFIW_0ioI8k6bUiafgOuYj-IBRfQ3K1NQOegddAQf3jpuYY0AddYC9vW6w-mYPSCgqmoyVdpmnCzwC7Rj7x0kZCUS2IUewtllBA4-4KCDym1oRlvY63sdauC-iVwiq9Gfm3MhdFqnl6VIc"/>
                <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/5 transition-colors duration-300"></div>
              </div>
              <h3 className="font-body text-lg mb-1">Ether Pendant</h3>
              <div className="font-label tracking-widest text-xs text-on-surface-variant/70 uppercase mb-2">Gold • $590.00</div>
            </div>
            {/* Related 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface mb-6 relative">
                <img alt="Bracelet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRt5a7sXV9sHGQs24blyj0G5MyH4soPfwXgYFjVL1nOr9F04gAKLOOH05uGcbglYvnbYE5uhu9rq9YRajws2LobLYajbmWZSLEfpalCMIeOiR476aXWBM67OVAUwRbkwfNoOCYKRO_gACrStGGfr01SHlCEZ3oXJynxcoJtIpHk2_AimNiQU77Lx7xJu-KozY6GegCSrN3Th5N7GeXGS4SItZ0Rcl_nYPFwKH1J1Yf_kjxNxQ6KrCD_w1yMBKlf0McPww26LirNO0"/>
                <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/5 transition-colors duration-300"></div>
              </div>
              <h3 className="font-body text-lg mb-1">Aura Cuff</h3>
              <div className="font-label tracking-widest text-xs text-on-surface-variant/70 uppercase mb-2">Gold • $820.00</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
