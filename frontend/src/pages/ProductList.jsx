import { Link } from 'react-router-dom';
import { Star, ChevronRight, SlidersHorizontal, ChevronDown, Check, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductList() {
    const products = [
        { id: 101, name: "Premium Over-Ear Headphones ANC", price: 129.99, discount: 20, rating: 4.8, reviews: 1024 },
        { id: 102, name: "Professional DSLR Camera 24MP", price: 1299.00, rating: 4.9, reviews: 345 },
        { id: 103, name: "Portable Bluetooth Speaker Waterproof", price: 49.99, rating: 4.5, reviews: 890 },
        { id: 104, name: "Smart Watch Fitness Tracker", price: 89.99, rating: 4.6, reviews: 567 },
        { id: 105, name: "Ergonomic Gaming Mouse RGB", price: 39.99, rating: 4.7, reviews: 1234 },
        { id: 106, name: "Mechanical Keyboard RGB", price: 79.99, rating: 4.8, reviews: 890 },
        { id: 107, name: "1080p HD Webcam", price: 59.99, rating: 4.4, reviews: 432 },
        { id: 108, name: "Tablet 10-inch 64GB", price: 249.99, rating: 4.5, reviews: 678 },
        { id: 109, name: "Polarized Sunglasses Black", price: 29.99, rating: 4.6, reviews: 901 },
        { id: 110, name: "Laptop Backpack Water Resistant", price: 45.99, rating: 4.7, reviews: 234 },
        { id: 111, name: "USB-C Hub Multiport Adapter", price: 29.99, rating: 4.5, reviews: 567 },
        { id: 112, name: "Running Shoes Men's Black", price: 79.99, rating: 4.6, reviews: 890 },
        { id: 113, name: "Men's Canvas Sneakers Low Top", price: 54.99, discount: 15, rating: 4.4, reviews: 345 },
        { id: 114, name: "Ceramic Planter Set of 3", price: 39.99, rating: 4.8, reviews: 123 },
        { id: 115, name: "Aerial Drone with 4K Camera", price: 299.99, rating: 4.7, reviews: 456 },
        { id: 116, name: "Bamboo Desk Organizer", price: 35.00, rating: 4.6, reviews: 789 },
        { id: 117, name: "LED Desk Lamp USB Port", price: 39.99, rating: 4.5, reviews: 234 },
        { id: 118, name: "Coffee Maker Programmable", price: 89.99, rating: 4.4, reviews: 567 },
        { id: 119, name: "Air Fryer 5.8 Quart", price: 119.99, discount: 10, rating: 4.8, reviews: 3456 },
        { id: 120, name: "Fitness Tracker Watch White", price: 149.99, discount: 25, rating: 4.7, reviews: 890 },
        { id: 121, name: "Yoga Mat Non-Slip", price: 29.99, rating: 4.8, reviews: 1234 },
        { id: 122, name: "Adjustable Dumbbells Set", price: 199.99, rating: 4.9, reviews: 2345 },
        { id: 123, name: "Modern Floor Lamp Brass", price: 79.99, rating: 4.5, reviews: 345 },
        { id: 124, name: "Wireless Earbuds with Case", price: 59.99, rating: 4.6, reviews: 890 },
    ];

    return (
        <div className="bg-[#f3f3f3] min-h-screen pb-12 w-full pt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs & Title */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Link to="/" className="hover:text-[#007185] hover:underline">Home</Link>
                    <ChevronRight size={14} className="mx-1" />
                    <span className="text-gray-900 font-medium">Search Results</span>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Sidebar Filters */}
                    <div className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white p-4 rounded-sm border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-3">Categories</h3>
                            <ul className="space-y-2 text-sm text-gray-700 ml-1">
                                <li><a href="#" className="font-bold hover:text-[#e68a00]">Any Category</a></li>
                                <li className="pl-2"><a href="#" className="font-bold hover:text-[#e68a00]">Electronics</a></li>
                                <li className="pl-4"><a href="#" className="font-bold hover:text-[#e68a00]">Audio</a></li>
                                <li className="pl-6"><a href="#" className="font-bold text-gray-900 hover:text-[#e68a00]">Headphones & Earbuds</a></li>
                                <li className="pl-8"><a href="#" className="hover:text-[#e68a00]">Over-Ear</a></li>
                                <li className="pl-8"><a href="#" className="hover:text-[#e68a00]">On-Ear</a></li>
                                <li className="pl-8"><a href="#" className="hover:text-[#e68a00]">Earbuds</a></li>
                                <li className="pl-8"><a href="#" className="hover:text-[#e68a00]">Accessories</a></li>
                            </ul>

                            <hr className="my-4 border-gray-200" />

                            <h3 className="font-bold text-gray-900 mb-3">Price</h3>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="text-sm text-gray-700 hover:text-[#e68a00]">Under $25</a>
                                <a href="#" className="text-sm text-gray-700 hover:text-[#e68a00]">$25 to $50</a>
                                <a href="#" className="text-sm text-gray-700 hover:text-[#e68a00]">$50 to $100</a>
                                <a href="#" className="text-sm text-gray-700 hover:text-[#e68a00]">$100 to $200</a>
                                <a href="#" className="text-sm font-bold text-gray-900 hover:text-[#e68a00]">$200 & Above</a>

                                <div className="flex items-center gap-2 mt-2">
                                    <input type="text" placeholder="Min" className="w-16 border border-gray-300 rounded-sm px-2 py-1 text-sm shadow-inner" />
                                    <span>-</span>
                                    <input type="text" placeholder="Max" className="w-16 border border-gray-300 rounded-sm px-2 py-1 text-sm shadow-inner" />
                                    <button className="border border-gray-300 rounded-lg px-3 py-1 text-sm hover:bg-gray-100 shadow-sm">Go</button>
                                </div>
                            </div>

                            <hr className="my-4 border-gray-200" />

                            <h3 className="font-bold text-gray-900 mb-3">Customer Reviews</h3>
                            <div className="flex flex-col gap-2">
                                {[4, 3, 2, 1].map((stars) => (
                                    <a href="#" key={stars} className="flex items-center group">
                                        <div className="flex text-[#ff9900]">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} fill={i < stars ? "currentColor" : "none"} className={i < stars ? "text-[#ff9900]" : "text-gray-300"} />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-700 ml-1 group-hover:text-[#e68a00]">& Up</span>
                                    </a>
                                ))}
                            </div>

                            <hr className="my-4 border-gray-200" />

                            <h3 className="font-bold text-gray-900 mb-3">Brand</h3>
                            <div className="flex flex-col gap-2">
                                {['Sony', 'Bose', 'Apple', 'Sennheiser', 'Jabra', 'JBL', 'Beats'].map((brand) => (
                                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                        <span className="text-sm text-gray-700 hover:text-[#e68a00]">{brand}</span>
                                    </label>
                                ))}
                            </div>

                            <hr className="my-4 border-gray-200" />

                            <h3 className="font-bold text-gray-900 mb-3">Availability</h3>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <span className="text-sm text-gray-700 hover:text-[#e68a00]">Include Out of Stock</span>
                            </label>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {/* Header bar */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-sm border border-gray-200 mb-4 shadow-sm">
                            <span className="text-sm font-medium text-gray-700 mb-3 sm:mb-0">
                                1-24 of over 1,000 results for <span className="text-[#cc0c39] font-bold">"headphones"</span>
                            </span>

                            <div className="flex items-center gap-2 bg-gray-100 rounded-md border border-gray-300 px-3 py-1.5 shadow-sm text-sm cursor-pointer hover:bg-gray-200 transition-colors">
                                <span className="text-gray-700">Sort by:</span>
                                <span className="font-bold">Featured</span>
                                <ChevronDown size={16} />
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {products.map((product) => (
                                <div key={product.id} className="relative">
                                    <ProductCard product={product} />
                                    {/* Add Fav Icon overlay just for list view simulation */}
                                    <button className="absolute top-4 right-4 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-all z-20">
                                        <Heart size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center mt-8 gap-1">
                            <button className="px-4 py-2 border border-gray-300 rounded shadow-sm text-gray-600 bg-white hover:bg-gray-50 disabled:opacity-50 text-sm font-medium">Previous</button>
                            <button className="w-10 h-10 border border-gray-300 rounded shadow-inner bg-gray-100 text-black font-bold flex items-center justify-center">1</button>
                            <button className="w-10 h-10 border border-transparent rounded hover:border-gray-300 text-gray-700 flex items-center justify-center">2</button>
                            <button className="w-10 h-10 border border-transparent rounded hover:border-gray-300 text-gray-700 flex items-center justify-center">3</button>
                            <span className="px-2 text-gray-500">...</span>
                            <button className="w-10 h-10 border border-transparent rounded hover:border-gray-300 text-gray-700 flex items-center justify-center">42</button>
                            <button className="px-4 py-2 border border-blue-500 rounded shadow-sm text-blue-600 bg-white hover:bg-blue-50 text-sm font-medium">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
