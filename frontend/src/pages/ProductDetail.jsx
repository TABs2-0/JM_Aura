import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productAPI } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // If ID is not a UUID (like the temporary 'pearl-drop-earring' string), we might need to handle it
        // For now, assuming standard API behavior
        const data = await productAPI.getById(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch product:', err);
        setError('The piece you are looking for could not be found.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <span className="font-label uppercase tracking-widest text-xs text-on-surface-variant">Inspecting the Details...</span>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 px-6 text-center">
        <div className="max-w-md">
          <h2 className="text-3xl font-headline mb-4 italic">Piece Not Found</h2>
          <p className="text-on-surface-variant mb-8 font-body leading-relaxed">{error || "The selected item is no longer available in our collections."}</p>
          <Link 
            to="/collections" 
            className="px-8 py-3 bg-primary text-on-primary rounded-full font-label uppercase tracking-widest text-xs transition-opacity hover:opacity-90"
          >
            Return to Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-8">
        <nav className="flex space-x-2 text-xs font-label uppercase tracking-widest text-on-surface-variant/60">
          <Link className="hover:text-primary transition-colors" to="/collections">Collections</Link>
          <span>/</span>
          <Link className="hover:text-primary transition-colors" to={`/collections?product_category=${product.product_category}`}>{product.product_category}</Link>
          <span>/</span>
          <span className="text-on-surface">{product.product_name}</span>
        </nav>
      </div>

      {/* Product Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:grid lg:grid-cols-12 lg:gap-20 items-start">
        {/* Image Side (Asymmetric/Arched) */}
        <div className="lg:col-span-7 space-y-8 mb-12 lg:mb-0">
          <div className="relative group">
            <div className="arched-frame overflow-hidden bg-surface-container aspect-[4/5] w-full">
              <img 
                alt={product.product_name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={product.product_image || "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"}
              />
            </div>
          </div>
        </div>

        {/* Details Side */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="mb-2">
            <span className="font-label uppercase tracking-[0.2em] text-[10px] text-primary font-bold">Aura Signature Collection</span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl text-on-surface serif-tight mb-4">{product.product_name}</h1>
          <div className="text-2xl font-body text-primary-container mb-10">
            ${parseFloat(product.product_price).toLocaleString(undefined, {minimumFractionDigits: 2})}
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-label uppercase tracking-widest text-xs mb-3 text-on-surface-variant">The Narrative</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                {product.product_description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-outline-variant/30">
              <div>
                <span className="block font-label uppercase tracking-widest text-[10px] text-on-surface-variant/60 mb-1">Stock</span>
                <span className="text-sm font-body">{product.product_stock > 0 ? `${product.product_stock} Pieces Available` : "Out of Stock"}</span>
              </div>
              <div>
                <span className="block font-label uppercase tracking-widest text-[10px] text-on-surface-variant/60 mb-1">Category</span>
                <span className="text-sm font-body">{product.product_category}</span>
              </div>
            </div>

            <div className="space-y-4">
              <button disabled={product.product_stock <= 0} className="block text-center w-full py-5 px-8 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/10 disabled:opacity-50 disabled:grayscale">
                {product.product_stock > 0 ? "Add to Cart" : "Currently Unavailable"}
              </button>
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
            </div>
          </div>
        </div>
      </section>

      {/* Relatated Pieces Section */}
      <section className="mt-40 bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
            <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface serif-tight mb-8">Discover More</h2>
            <Link className="font-label uppercase tracking-widest text-xs text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all" to="/collections">Back to All Collections</Link>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
