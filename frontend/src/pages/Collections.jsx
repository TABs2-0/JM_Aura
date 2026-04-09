import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productAPI } from '../services/api';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/mockProducts';

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // DRF standard search/filter/order parameters
  const category = searchParams.get('product_category');
  const ordering = searchParams.get('ordering');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Simulating the premium discovery experience
        await new Promise(resolve => setTimeout(resolve, 800));

        let results = [...mockProducts];

        // Apply Category Filter (Matching plural names in mockProducts)
        if (category) {
          results = results.filter(p => p.product_category === category);
        }

        // Apply Ordering
        if (ordering) {
          if (ordering === 'product_price') {
            results.sort((a, b) => a.product_price - b.product_price);
          } else if (ordering === '-product_price') {
            results.sort((a, b) => b.product_price - a.product_price);
          } else if (ordering === 'product_name') {
            results.sort((a, b) => a.product_name.localeCompare(b.product_name));
          }
        }
        
        setProducts(results);
        setError(null);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('Unable to load our curated collections at this time.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, ordering]);



  const updateFilter = (key, value) => {
    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    setSearchParams(searchParams);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <span className="font-label uppercase tracking-widest text-xs text-on-surface-variant">Curating Excellency...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 px-6">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-headline mb-4 italic">Something Went Wrong</h2>
          <p className="text-on-surface-variant mb-8 font-body leading-relaxed">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-8 py-3 bg-primary text-on-primary rounded-full font-label uppercase tracking-widest text-xs transition-opacity hover:opacity-90"
          >
            Retry Discovery
          </button>
        </div>
      </div>
    );
  }

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
              {category || 'Category'} <span className="material-symbols-outlined text-sm">expand_more</span>
            </span>
            <div className="absolute top-full left-0 mt-2 bg-surface shadow-xl py-4 px-6 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 rounded-lg">
              <ul className="space-y-3 font-label text-xs tracking-wider">
                <li onClick={() => updateFilter('product_category', '')} className="hover:text-primary transition-colors cursor-pointer">All Categories</li>
                <li onClick={() => updateFilter('product_category', 'Necklaces')} className="hover:text-primary transition-colors cursor-pointer">Necklaces</li>
                <li onClick={() => updateFilter('product_category', 'Rings')} className="hover:text-primary transition-colors cursor-pointer">Rings</li>
                <li onClick={() => updateFilter('product_category', 'Bracelets')} className="hover:text-primary transition-colors cursor-pointer">Bracelets</li>
                <li onClick={() => updateFilter('product_category', 'Earrings')} className="hover:text-primary transition-colors cursor-pointer">Earrings</li>

              </ul>
            </div>
          </div>
          
          <div className="group relative cursor-pointer">
            <span className="font-label uppercase tracking-widest text-xs flex items-center gap-2">
              Sort By <span className="material-symbols-outlined text-sm">expand_more</span>
            </span>
            <div className="absolute top-full left-0 mt-2 bg-surface shadow-xl py-4 px-6 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 rounded-lg">
              <ul className="space-y-3 font-label text-xs tracking-wider">
                <li onClick={() => updateFilter('ordering', '')} className="hover:text-primary transition-colors cursor-pointer">Featured</li>
                <li onClick={() => updateFilter('ordering', '-product_price')} className="hover:text-primary transition-colors cursor-pointer">Price: High to Low</li>
                <li onClick={() => updateFilter('ordering', 'product_price')} className="hover:text-primary transition-colors cursor-pointer">Price: Low to High</li>
                <li onClick={() => updateFilter('ordering', 'product_name')} className="hover:text-primary transition-colors cursor-pointer">A-Z</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="font-label uppercase tracking-widest text-xs text-on-surface-variant">
          {products.length} Items Found
        </div>
      </section>

      {/* Product Gallery (Dynamic Asymmetric Layout) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">

        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </section>

      {/* Pagination / Load More (Placeholder logic) */}
      {products.length > 0 && products.length % 10 === 0 && (
        <div className="mt-32 flex flex-col items-center">
          <button className="group flex flex-col items-center gap-4">
            <span className="font-label uppercase tracking-[0.3em] text-xs transition-colors group-hover:text-primary">Discovery More</span>
            <span className="material-symbols-outlined text-3xl animate-bounce text-primary-container">expand_more</span>
          </button>
        </div>
      )}
    </main>
  );
};

export default Collections;

