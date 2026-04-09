import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';
import ProductCard from './ProductCard';

const FeaturedCollections = () => {
  // Get first 6 featured products
  // Get a selection of unique products for the gallery (first 8)
  const featuredProducts = mockProducts.slice(0, 8);
  
  // Hand-pick specific premium pieces for the bento grid section
  const heroProduct = mockProducts.find(p => p.id === 'local-product-12') || mockProducts[0]; // Best Choice
  const sideProduct1 = mockProducts.find(p => p.id === 'local-product-15') || mockProducts[1]; // Infinity Set
  const sideProduct2 = mockProducts.find(p => p.id === 'local-product-24') || mockProducts[2]; // Tanzanite
  const sideProducts = [sideProduct1, sideProduct2];



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
        
        {/* Bento Grid Layout - Responsive and Robust */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">


          {/* Hero Product - Large */}
          <div className="md:col-span-7 group relative overflow-hidden bg-surface-container-lowest rounded-xl aspect-[4/5] md:aspect-auto md:h-[700px]">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt={heroProduct.product_name}
              src={heroProduct.product_image}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="text-white/80 font-label text-xs tracking-widest uppercase mb-2">Signature Series</span>
              <h3 className="text-white font-headline text-4xl mb-6">{heroProduct.product_name}</h3>
              <Link 
                to={`/product/${heroProduct.id}`} 
                className="w-fit text-white font-label text-[10px] tracking-widest uppercase flex items-center gap-2 group/btn bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 transition-all"
              >
                Explore Piece <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>


          
          {/* Side Products */}
          <div className="md:col-span-5 flex flex-col gap-8 md:h-[700px]">
            {sideProducts.map((product, idx) => (
              <Link 
                key={idx}
                to={`/product/${product.id}`}
                className="group relative overflow-hidden bg-surface-container-lowest rounded-xl flex-1 min-h-[300px]"
              >
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={product.product_name}
                  src={product.product_image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white font-headline text-3xl">{product.product_name}</h3>
                  <p className="text-white/90 font-label text-[10px] tracking-widest uppercase mt-2">${parseFloat(product.product_price).toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Featured Products Grid */}
        <div className="mt-32">
          <h3 className="font-headline text-3xl text-on-surface mb-12">Featured Items</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">

            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
