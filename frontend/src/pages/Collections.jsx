import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Hero Header */}
      <header className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-4 block">Curated Excellence</span>
            <h1 className="text-6xl md:text-8xl font-headline font-normal leading-[0.9] tracking-tight mb-8">Collections</h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-light max-w-lg leading-relaxed">
              A definitive curation of artisanal jewelry, where timeless heritage meets the precision of modern craftsmanship.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-48 w-48 rounded-full overflow-hidden relative">
              <img alt="Luxury Diamond Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDdDia6W2wuDdEjyD8oLhMChdd7uXZJM5TbyFilqtRtyYhBI-j18oPdxhYCH5Ts4RZyth7hl-x5z-q6EBF1xJ7FXA1bc4Sdl7JnkqnLZAyIgSvpHt24C6ylZgpGpukWZTrkdfkFo8eGZBUBMCTWSeTpYV1b2xAVK5RaNbjt27pMQkUF_idBDK5vOXwALVTDPqsWU7izSe5nObow7brsk9cblNCKyxJxYMrxdgeEjfmunyPMd46_tZLurofuxOP655_j3gvy4duK3w"/>
            </div>
          </div>
        </div>
      </header>

      {/* Filters & Sort */}
      <section className="mb-16 border-t border-outline-variant/30 pt-8 flex flex-wrap items-center justify-between gap-y-6">
        <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
          <div className="group relative cursor-pointer">
            <span className="font-label uppercase tracking-widest text-xs flex items-center gap-2">
              Category <span className="material-symbols-outlined text-sm">expand_more</span>
            </span>
            <div className="absolute top-full left-0 mt-2 bg-surface shadow-xl py-4 px-6 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 rounded-lg">
              <ul className="space-y-3 font-label text-xs tracking-wider">
                <li className="hover:text-primary transition-colors cursor-pointer">All Categories</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Necklaces</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Rings</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Bracelets</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Earrings</li>
              </ul>
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <span className="font-label uppercase tracking-widest text-xs flex items-center gap-2">
              Material <span className="material-symbols-outlined text-sm">expand_more</span>
            </span>
            <div className="absolute top-full left-0 mt-2 bg-surface shadow-xl py-4 px-6 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 rounded-lg">
              <ul className="space-y-3 font-label text-xs tracking-wider">
                <li className="hover:text-primary transition-colors cursor-pointer">Gold</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Silver</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Platinum</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Rose Gold</li>
              </ul>
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <span className="font-label uppercase tracking-widest text-xs flex items-center gap-2">
              Price <span className="material-symbols-outlined text-sm">expand_more</span>
            </span>
          </div>
        </div>
        <div className="font-label uppercase tracking-widest text-xs text-on-surface-variant">
          12 Items Found
        </div>
      </section>

      {/* Product Gallery (Asymmetric Layout) */}
      <section className="grid grid-cols-12 gap-8">
        {/* Item 1: Large Featured */}
        <div className="col-span-12 md:col-span-7 mb-12">
          <div className="relative overflow-hidden aspect-[4/5] rounded-t-full group">
            <img alt="Aurelia Gold Necklace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv-zreUhbDDxGMCiMckR8sGSRFgytnR0psv1JssaJhlr-ZOa-2IJ21DaMeks_n9VJdy3eowKDb-MPOTuB96fWZj9-rr4pr3JJbmQKgFmEHnZJRjxyyQFiGhY7FOn__MIXPEuivXfnmsuyhLmapJf71PEJU5MOiczkDOuKEFdsB99dAHQ1lUR1AH8IrOzZIqTOYYJ6esWz9UHl1UnkMze_eGjbDOh8qVsLPe_CZZSOHL3uNeSRyoPVy20laGOaHW6BLKnzh2lclaM4"/>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
          </div>
          <div className="mt-8 flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-headline italic mb-2">Aurelia Gold Necklace</h3>
              <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant">Collection: Solstice</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-body mb-4">$2,450.00</p>
              <Link to="/product/pearl-drop-earring" className="text-primary font-label uppercase tracking-widest text-[10px] border-b border-primary/30 pb-1 hover:border-primary transition-all">View Details</Link>
            </div>
          </div>
        </div>
        
        {/* Item 2: Compact */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-24 mb-12">
          <div className="relative overflow-hidden aspect-square rounded-lg group bg-surface-container-low">
            <img alt="Obsidian Signet Ring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB62H20NB66x4A2nzg2hiN202pnbuHoURVso7fEP2Rc1IGf7TjIOrnO_OkZzcRrs68VlvuT8dJfhDF7WBbZjtLNwSUj-f8K4ZoCwKIF92v-phHcnnkENJBQS2ljKBrKFyYrBx-vnZjvaE3DOv0WUMyg8LlDFt6G46l3lpEIIh2MmIuHo5Ie38VQby14X2DCu5mmamOvV3Goc24micuB-e9Yq6bMleSx8UWOI6lYbM2GYsYkeOfeZ1x4U2w4JAcgIoLfGr2H91x4fkQ"/>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-headline mb-1">Obsidian Signet Ring</h3>
            <p className="text-lg font-body text-on-surface-variant mb-4">$1,120.00</p>
            <Link to="/product/pearl-drop-earring" className="text-primary font-label uppercase tracking-widest text-[10px] border-b border-primary/30 pb-1 hover:border-primary transition-all">View Details</Link>
          </div>
        </div>

        {/* Item 3: Tall */}
        <div className="col-span-12 md:col-span-4 mb-12">
          <div className="relative overflow-hidden aspect-[3/4] rounded-lg group">
            <img alt="Pearl Drop Earrings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApV_i7A1JRWsHdaT77ujj5T_eBCDiHI7PnV88pKlaSheCRg6njXTk6fWq4ij-rcDtKbCROOhhenBOBijYc3341Qcc-kFRjPqppmFcEzijdHGD3_-qNBv3X3eIUHVdRKXs74BoQ44yZy6XXuczP5PCRKk5h7YxphrF9AfDTjRccysdBUZPSODoMMIu6yS7jBcKLZA0WcSsFRLhs8z2hwlvz6JBJl-bHLTfpVoDRBc7uoAW1xw4hawEaBiFh6CxMIH6rlyA-_hLJT3o"/>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-headline mb-1">Ethereal Pearl Drops</h3>
            <p className="text-lg font-body text-on-surface-variant mb-4">$890.00</p>
            <Link to="/product/pearl-drop-earring" className="text-primary font-label uppercase tracking-widest text-[10px] border-b border-primary/30 pb-1 hover:border-primary transition-all">View Details</Link>
          </div>
        </div>

        {/* Item 4: Wide/Floating Typography */}
        <div className="col-span-12 md:col-span-8 mb-12 relative flex items-center">
          <div className="w-full md:w-3/4 ml-auto overflow-hidden aspect-[16/9] rounded-lg group">
            <img alt="Silver Link Bracelet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZOKrwj7nFhIjGrUVKu_YLohQj_42_cuIvFpszqkAqP5f-7yZkm7NqOSHPyyxjRKAH8LJ_-dtHh_ycRuXeVj1uOsl9pk7Uxl40dboiTX1jkKxz5AULDL_GtLxNskXT0CND6aua0pyCdonHZMKUGTFRS6f0MYcVq5k-u_sKLbj-KBr3WzPT9ypbGPmsOQQthTPb-te-y3QZgtRoAMLvx0X9ySO26U9S5_EF-67A9BTlHxTWPTpRw4WLV1xwkwTPp46CVwAanTuMPlw"/>
          </div>
          <div className="absolute left-0 bg-surface/80 backdrop-blur-md p-10 max-w-sm hidden md:block">
            <p className="font-label uppercase tracking-widest text-[10px] mb-4">Limited Edition</p>
            <h3 className="text-4xl font-headline italic mb-4">Sterling Chain Link</h3>
            <p className="text-lg font-body mb-6">$1,680.00</p>
            <Link to="/product/pearl-drop-earring" className="px-8 py-3 bg-primary text-on-primary rounded-full font-label uppercase tracking-widest text-[10px] hover:opacity-90 transition-opacity flex items-center justify-center w-max">View Details</Link>
          </div>
          <div className="mt-6 md:hidden">
            <h3 className="text-2xl font-headline mb-1">Sterling Chain Link</h3>
            <p className="text-lg font-body text-on-surface-variant mb-4">$1,680.00</p>
            <Link to="/product/pearl-drop-earring" className="text-primary font-label uppercase tracking-widest text-[10px] border-b border-primary/30 pb-1 hover:border-primary transition-all">View Details</Link>
          </div>
        </div>

        {/* Item 5: Compact Right */}
        <div className="col-span-12 md:col-span-4 mb-12">
          <div className="relative overflow-hidden aspect-square rounded-full group">
            <img alt="Diamond Cluster Studs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWUqipDm6b7EjbDt5eH_FbXaR5WNXZhIVe9iFMdwhC3xFVmgP6oNirz4m6sAxdseenAReq3Q9tJcXXYNy7nnRMcYu5PMawBQl2-Hb9QVmJUfi0dJysCRlhvUFejCZ3tbLjsvOlCH5FmQUoCZl8E5lhP3ZUpe3Yyj0HnBBgrifUQCKKR9rlnKq5raVGet3Q7ARvZsT9gZWYSkDXr9TAkMyJ1Ni7GTU_u66330MpZJPNehTHH96NOzMnmDcJC0CTjeH1Ax4ZY-HXry8"/>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-headline mb-1">Stardust Cluster Studs</h3>
            <p className="text-lg font-body text-on-surface-variant mb-4">$3,200.00</p>
            <Link to="/product/pearl-drop-earring" className="text-primary font-label uppercase tracking-widest text-[10px] border-b border-primary/30 pb-1 hover:border-primary transition-all">View Details</Link>
          </div>
        </div>

        {/* Item 6: Arched Bottom */}
        <div className="col-span-12 md:col-span-7 md:col-start-6 mb-12">
          <div className="relative overflow-hidden aspect-[4/3] rounded-b-full group">
            <img alt="Emerald Horizon Ring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC81uronen7CcjrC6bQVGowZPmxQsTEld6Q0WufJG4nFfMkZvgw3h4uc5DO-0YuAi3XD1OMhR1pkq_bpBKCYqLZ4UsO-aAtHWJd4oUZXdzSmqe5SHvgoiDshowenC-NRu4zv7KorImMd2G0QG6MADIS9sTzzQHXzkp5zdUKmmZSQd98We7dSzCBZCF0oEnoSFAq0hca7HlLRVI1qQP51Xyc-WaHuSGJqd50J9Lc2gGrXBK1bep8t3u1_y2p-9RRLjq8bliJfnhDIHM"/>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-3xl font-headline mb-2">Emerald Horizon Ring</h3>
              <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant italic">Vintage Reimagined</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xl font-body mb-4">$4,800.00</p>
              <Link to="/product/pearl-drop-earring" className="text-primary font-label uppercase tracking-widest text-[10px] border-b border-primary/30 pb-1 hover:border-primary transition-all">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination / Load More */}
      <div className="mt-32 flex flex-col items-center">
        <button className="group flex flex-col items-center gap-4">
          <span className="font-label uppercase tracking-[0.3em] text-xs transition-colors group-hover:text-primary">Discovery More</span>
          <span className="material-symbols-outlined text-3xl animate-bounce text-primary-container">expand_more</span>
        </button>
      </div>
    </main>
  );
};

export default Collections;
