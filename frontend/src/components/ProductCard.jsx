import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    // Generate an image based on the ID for visual representation
    const getPlaceholderImage = (id) => {
        return `https://picsum.photos/seed/${id * 7}/400/400`;
    };

    return (
        <div className="group border border-gray-200 rounded-sm overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Image Container with Badges */}
            <div className="relative aspect-square bg-[#f8f9fa] overflow-hidden p-4">
                {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-[#cc0c39] text-white text-xs font-bold px-2 py-1 rounded-sm z-10 shadow-sm">
                        -{product.discount}%
                    </div>
                )}
                {product.isNew && (
                    <div className="absolute top-2 left-2 bg-[#007185] text-white text-xs font-bold px-2 py-1 rounded-sm z-10 shadow-sm">
                        NEW
                    </div>
                )}
                <Link to={`/product/${product.id}`} className="block h-full w-full flex items-center justify-center">
                    <img
                        src={getPlaceholderImage(product.id)}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                </Link>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-sm font-medium text-[#0f1111] leading-tight mb-1 line-clamp-2 hover:text-[#007185] transition-colors">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-[#ff9900]">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={14}
                                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                className={i < Math.floor(product.rating) ? "text-[#ff9900]" : "text-gray-300"}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-blue-600 hover:underline cursor-pointer">
                        {product.reviews.toLocaleString()}
                    </span>
                </div>

                <div className="mt-auto pt-2 flex flex-col">
                    <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-[#cc0c39]">
                            ${(product.price * (1 - (product.discount || 0) / 100)).toFixed(2)}
                        </span>
                        {product.discount > 0 && (
                            <span className="text-sm text-[#565959] line-through">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                    </div>
                    <button className="w-full bg-[#ff9900] hover:bg-[#e68a00] text-[#0f1111] py-2 rounded-full font-medium transition-colors text-sm shadow-sm ring-1 ring-inset ring-[#e68a00]">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
