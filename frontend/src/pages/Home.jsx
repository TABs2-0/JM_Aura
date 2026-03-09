import { ArrowRight, ChevronLeft, ChevronRight, Smartphone, Shirt, Home as HomeIcon, Monitor, Dumbbell, Sparkles, Book, Gamepad2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Home() {
    const categoryIcons = [
        { name: "Electronics", icon: <Smartphone size={28} className="text-blue-500 mb-2" />, link: "/category/electronics" },
        { name: "Fashion", icon: <Shirt size={28} className="text-blue-500 mb-2" />, link: "/category/fashion" },
        { name: "Home & Kitchen", icon: <HomeIcon size={28} className="text-blue-500 mb-2" />, link: "/category/home" },
        { name: "Computers", icon: <Monitor size={28} className="text-blue-500 mb-2" />, link: "/category/computers" },
        { name: "Beauty", icon: <Sparkles size={28} className="text-blue-500 mb-2" />, link: "/category/beauty" },
        { name: "Sports", icon: <Dumbbell size={28} className="text-blue-500 mb-2" />, link: "/category/sports" },
        { name: "Books", icon: <Book size={28} className="text-blue-500 mb-2" />, link: "/category/books" },
        { name: "Toys", icon: <Gamepad2 size={28} className="text-blue-500 mb-2" />, link: "/category/toys" },
    ];

    const dealsProducts = [
        { id: 1, name: "Premium Wireless Headphones with Noise Cancellation", price: 159.99, discount: 20, rating: 4.5, reviews: 128 },
        { id: 2, name: "Minimalist Smart Watch with Heart Rate Monitor", price: 89.99, discount: 30, rating: 4.7, reviews: 256 },
        { id: 3, name: "Polarized Sunglasses Lightweight Frame", price: 54.99, discount: 15, rating: 4.6, reviews: 89 },
        { id: 4, name: "Athletic Running Shoes Breathable Mesh", price: 79.99, discount: 25, rating: 4.3, reviews: 312 },
    ];

    const featuredProducts = [
        { id: 5, name: "Smart Watch - Black Edition with GPS tracking", price: 199.99, rating: 4.8, reviews: 1420 },
        { id: 6, name: "Professional DSLR Camera 24.1MP - 4K Video", price: 1250.00, rating: 4.9, reviews: 345 },
        { id: 7, name: "Bluetooth Speaker Portable Waterproof IPX7", price: 49.99, rating: 4.5, reviews: 892 },
        { id: 8, name: "Ergonomic Gaming Mouse RGB 10000 DPI", price: 39.99, rating: 4.6, reviews: 521 },
        { id: 9, name: "Mechanical Keyboard Blue Switches RGB Backlit", price: 79.99, rating: 4.7, reviews: 633 },
        { id: 10, name: "1080p HD Webcam with Privacy Cover", price: 59.99, rating: 4.4, reviews: 419 },
        { id: 11, name: "10.4\" Tablet 64GB WiFi Only - Space Gray", price: 249.99, rating: 4.6, reviews: 1024 },
        { id: 12, name: "12-Cup Programmable Coffee Maker with Glass Carafe", price: 89.99, rating: 4.3, reviews: 278 },
        { id: 13, name: "Digital Air Fryer 5.8 Quart - 1700W", price: 119.99, rating: 4.8, reviews: 3105 },
        { id: 14, name: "Modern Floor Lamp - Brushed Brass Finish", price: 79.99, rating: 4.5, reviews: 156 },
        { id: 15, name: "Yoga Mat - Eco-friendly Non-Slip with Strap", price: 29.99, rating: 4.7, reviews: 842 },
        { id: 16, name: "Adjustable Dumbbells Set 5-52.5 lbs per hand", price: 199.99, rating: 4.8, reviews: 2100 },
    ];

    const recommendedProducts = [
        { id: 17, name: "Campus Laptop Backpack Water Resistant", price: 45.99, rating: 4.6, reviews: 1890 },
        { id: 18, name: "Bamboo Desk Organizer with 5 Compartments", price: 35.00, rating: 4.7, reviews: 512 },
        { id: 19, name: "LED Desk Lamp with USB Charging Port", price: 39.99, rating: 4.5, reviews: 3200 },
        { id: 20, name: "Men's Classic Canvas Sneakers", price: 55.00, rating: 4.4, reviews: 456 },
        { id: 21, name: "Ceramic Planter Pot with Stand Set of 2", price: 45.99, rating: 4.8, reviews: 231 },
    ];

    return (
        <div className="bg-[#f3f3f3] min-h-screen pb-12 w-full">
            {/* Hero Carousel Banner */}
            <div className="relative bg-gradient-to-r from-orange-400 to-red-500 text-white overflow-hidden">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 relative z-10 flex flex-col justify-center min-h-[200px]">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl leading-tight">
                        Summer Sale Up to 50%<br />Off
                    </h1>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Grab the best deals of the year
                    </p>
                    <div>
                        <button className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 rounded text-lg font-bold transition-colors shadow-lg">
                            Shop Now
                        </button>
                    </div>
                </main>

                {/* Decorative background curves/circles */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[800px] h-[800px] right-[-200px] top-[-200px]">
                        <path fill="none" stroke="#ffffff" strokeWidth="1" d="M42.7,-73.4C55.9,-65.4,67.6,-53.4,76.5,-39.5C85.4,-25.6,91.5,-9.7,89.5,5.6C87.4,20.9,77.3,35.7,65.3,47.8C53.3,59.9,39.4,69.5,23.8,75.4C8.3,81.4,-8.8,83.9,-24.5,79.8C-40.2,75.8,-54.5,65.2,-64.5,51.8C-74.5,38.3,-80.1,22.1,-82.4,5.4C-84.8,-11.3,-83.8,-28.4,-75.6,-42.6C-67.4,-56.8,-52,-68.2,-36.5,-75.2C-21,-82.2,-5.5,-84.9,9.4,-81.7C24.3,-78.6,30.5,-65.4,42.7,-73.4Z" transform="translate(100 100)" />
                        <path fill="none" stroke="#ffffff" strokeWidth="2" d="M37.8,-60.8C52,-54.1,68.7,-48.3,77.6,-36C86.5,-23.7,87.6,-4.9,82.4,11.5C77.1,27.9,65.6,41.9,52.4,51.9C39.2,61.9,24.3,67.8,8.2,72.4C-7.9,77,-25.1,80.3,-40,74.5C-54.9,68.7,-67.5,53.8,-74.6,37.3C-81.7,20.8,-83.3,2.7,-79.1,-13.7C-74.9,-30.1,-64.9,-44.8,-51.7,-51.8C-38.5,-58.8,-22,-58,-5,-55C12,-52,23.6,-67.5,37.8,-60.8Z" transform="translate(100 100)" />
                    </svg>
                </div>

                {/* Carousel Controls */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-sm transition-colors z-20">
                    <ChevronLeft size={32} />
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-sm transition-colors z-20">
                    <ChevronRight size={32} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="w-3 h-3 rounded-full bg-white/50"></div>
                    <div className="w-3 h-3 rounded-full bg-white/50"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 z-20 relative">
                {/* Categories Bubbles */}
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4 bg-white p-6 rounded-lg shadow-md mb-8">
                    {categoryIcons.map((category, index) => (
                        <a key={index} href={category.link} className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors group border border-transparent hover:border-gray-200">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                {category.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-700 text-center mt-2 group-hover:text-[#004b91]">{category.name}</span>
                        </a>
                    ))}
                </div>

                {/* Deals of the Day */}
                <div className="mb-10">
                    <div className="flex justify-between items-end mb-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold text-gray-900">Deals of the Day</h2>
                            <div className="text-red-600 font-bold bg-red-100 px-3 py-1 rounded-sm text-sm flex items-center gap-2">
                                Ends in <span className="bg-white px-2 py-0.5 rounded shadow-sm text-red-600">23:45:32</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dealsProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Featured Products */}
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Recommended For You */}
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
                        <a href="/recommended" className="text-blue-600 hover:underline text-sm font-medium">See All</a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {recommendedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
