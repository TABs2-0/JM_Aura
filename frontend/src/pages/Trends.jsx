import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Trends = () => {
  const trends = [
    {
      id: 1,
      title: "Mediterranean Minimalism",
      description: "Clean lines and organic textures inspired by the Aegean coast.",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Style Guide"
    },
    {
      id: 2,
      title: "Mixed Metal Mastery",
      description: "How to combine gold, silver, and rose gold for a curated look.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      category: "Tutorial"
    },
    {
      id: 3,
      title: "The Return of The Choker",
      description: "A 90s classic reimagined with modern architectural elements.",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Trend Alert"
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        {/* Header Section */}
        <section className="px-12 max-w-screen-2xl mx-auto mb-24">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">Seasonal Insights</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-headline text-6xl md:text-8xl tracking-tighter leading-none">The Aura <br /><span className="italic">Lookbook</span></h1>
            <p className="text-on-surface-variant font-light text-xl max-w-md leading-relaxed">
              Curated trends, style guides, and the artistic narratives behind our latest inspirations.
            </p>
          </div>
        </section>

        {/* Hero Trend */}
        <section className="px-12 max-w-screen-2xl mx-auto mb-32">
          <div className="relative group overflow-hidden rounded-2xl aspect-[21/9]">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
              alt="Model wearing mixed metal jewelry in a sun-drenched architectural setting" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-16">
              <span className="text-surface font-label text-xs uppercase tracking-widest mb-4">Summer 2026 Collection</span>
              <h2 className="text-surface font-headline text-5xl mb-6 max-w-2xl">The Sculpture of Sunlight</h2>
              <button className="w-fit px-8 py-3 bg-surface text-on-surface rounded-full font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Read Journal</button>
            </div>
          </div>
        </section>

        {/* Trend Grid */}
        <section className="px-12 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {trends.map(trend => (
            <article key={trend.id} className="group flex flex-col h-full">
              <div className="editorial-arch overflow-hidden aspect-[3/4] mb-8 bg-surface-container-low shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={trend.image} 
                  alt={trend.title} 
                />
              </div>
              <div className="flex-1 flex flex-col">
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mb-4">{trend.category}</p>
                <h3 className="font-headline text-3xl mb-4 group-hover:italic transition-all">{trend.title}</h3>
                <p className="text-on-surface-variant font-light leading-relaxed mb-8">{trend.description}</p>
                <button className="mt-auto font-label text-xs uppercase tracking-widest border-b border-primary/20 pb-1 w-fit hover:border-primary transition-all">Explore Trend</button>
              </div>
            </article>
          ))}
        </section>

        {/* Newsletter Section Integration */}
        <section className="mt-32 px-12 max-w-screen-2xl mx-auto">
          <div className="bg-surface-container rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-6xl mb-8">Curate Your <br /><span className="italic">Aura Monthly</span></h2>
              <p className="text-on-surface-variant font-light mb-12 max-w-lg mx-auto">Join our inner circle for early collection previews and exclusive design insights sent directly to your inbox.</p>
              <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
                <input 
                  className="flex-1 bg-surface border border-outline-variant/30 rounded-full px-8 py-4 font-body focus:ring-1 focus:ring-primary focus:border-transparent transition-all outline-none" 
                  placeholder="Email address" 
                  type="email" 
                />
                <button className="bg-on-surface text-surface px-10 py-4 rounded-full font-label text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all">Join</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trends;
