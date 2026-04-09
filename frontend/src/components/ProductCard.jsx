import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ProductCard component compatible with Django REST API results.
 * Expects a product object with snake_case fields matching the Django model:
 * - id (UUID string)
 * - product_name
 * - product_price
 * - product_category
 * - product_image
 * - product_stock
 */
const ProductCard = ({ product, index }) => {
  if (!product) return null;

  // Handles both DRF absolute URLs for images and relative paths if needed
  const imageUrl = product.product_image || "/assets/best_choice.jpg";


  return (
    <div className="flex flex-col">


      <div className={`relative overflow-hidden aspect-[4/5] group bg-surface-container-low ${index % 2 === 0 ? 'rounded-t-full' : 'rounded-lg'}`}>
        <img 
          alt={product.product_name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src={imageUrl}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
        {product.product_stock <= 0 && (
          <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
            Out of Stock
          </div>
        )}
        <Link 
          to={`/product/${product.id}`}
          className="absolute inset-0 z-10"
          aria-label={`View details for ${product.product_name}`}
        />
      </div>
      <div className="mt-8 flex justify-between items-start px-2">
        <div>
          <h3 className="text-2xl font-headline italic mb-2 tracking-tight">{product.product_name}</h3>
          <p className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">{product.product_category}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-body mb-2">
            ${parseFloat(product.product_price || 0).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </p>
          <Link 
            to={`/product/${product.id}`} 
            className="text-primary font-label uppercase tracking-widest text-[10px] border-b border-primary/30 pb-1 hover:border-primary transition-all inline-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
