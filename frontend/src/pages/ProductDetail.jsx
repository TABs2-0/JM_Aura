import { Star, ChevronRight, Check, ShieldCheck, Truck, Package, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
    const recommendedProducts = [
        { id: 201, name: "Portable Bluetooth Speaker Waterproof", price: 49.99, rating: 4.5, reviews: 890 },
        { id: 202, name: "Smart Watch Fitness Tracker", price: 89.99, rating: 4.6, reviews: 567 },
        { id: 203, name: "Wireless Earbuds with Case", price: 59.99, rating: 4.6, reviews: 890 },
        { id: 204, name: "Men's Classic Canvas Sneakers", price: 55.00, rating: 4.4, reviews: 456 },
    ];

    return (
        <div className="bg-white min-h-screen pb-12 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

                {/* Breadcrumbs */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Link to="/" className="hover:text-[#007185] hover:underline">Home</Link>
                    <ChevronRight size={14} className="mx-1" />
                    <Link to="/products" className="hover:text-[#007185] hover:underline">Electronics</Link>
                    <ChevronRight size={14} className="mx-1" />
                    <Link to="/products" className="hover:text-[#007185] hover:underline">Audio</Link>
                    <ChevronRight size={14} className="mx-1" />
                    <span className="text-gray-900">Premium Wireless Headphones</span>
                </div>

                {/* Top Section: Images & Add to Cart Block */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">

                    {/* Left: Images */}
                    <div className="flex-1 lg:w-1/2">
                        <div className="aspect-square bg-yellow-400 rounded-sm mb-4 relative overflow-hidden flex items-center justify-center p-8">
                            <img src="https://picsum.photos/seed/headphones_yellow/800/800" alt="Premium Wireless Headphones" className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl" />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="aspect-square bg-gray-100 rounded-sm border-2 border-blue-600 overflow-hidden cursor-pointer">
                                <img src="https://picsum.photos/seed/headphones_yellow/200/200" className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-square bg-gray-100 rounded-sm border border-gray-200 hover:border-blue-400 overflow-hidden cursor-pointer">
                                <img src="https://picsum.photos/seed/hp_2/200/200" className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-square bg-gray-100 rounded-sm border border-gray-200 hover:border-blue-400 overflow-hidden cursor-pointer">
                                <img src="https://picsum.photos/seed/hp_3/200/200" className="w-full h-full object-cover" />
                            </div>
                            <div className="aspect-square bg-gray-100 rounded-sm border border-gray-200 hover:border-blue-400 overflow-hidden cursor-pointer">
                                <img src="https://picsum.photos/seed/hp_4/200/200" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Details & Checkout */}
                    <div className="flex-1 lg:w-1/2 flex flex-col lg:flex-row gap-8">
                        {/* Product Info */}
                        <div className="flex-1">
                            <p className="text-[#007185] text-sm hover:underline cursor-pointer mb-1">Visit the AudioTech Store</p>
                            <h1 className="text-2xl sm:text-3xl font-bold text-[#0f1111] leading-tight mb-2">
                                Premium Wireless Headphones with Active Noise Cancellation, Bluetooth 5.0, Over-Ear, 30H Playtime
                            </h1>

                            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                                <div className="flex text-[#ff9900]">
                                    {[1, 2, 3, 4].map((i) => <Star key={i} size={18} fill="currentColor" />)}
                                    <Star size={18} fill="currentColor" style={{ clipPath: 'inset(0 50% 0 0)' }} className="absolute text-[#ff9900]" />
                                    <Star size={18} className="text-gray-300" />
                                </div>
                                <span className="text-[#007185] hover:underline cursor-pointer text-sm">1,234 ratings</span>
                                <span className="text-gray-400">|</span>
                                <span className="text-[#007185] hover:underline cursor-pointer text-sm">45 answered questions</span>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-start gap-2 mb-1">
                                    <span className="text-3xl text-[#cc0c39] font-light">-20%</span>
                                    <span className="text-3xl font-bold text-[#0f1111]">
                                        <span className="text-lg relative -top-2">$</span>129<span className="text-lg relative -top-2">.99</span>
                                    </span>
                                </div>
                                <div className="text-sm text-[#565959]">
                                    Was: <span className="line-through">$159.99</span>
                                </div>
                            </div>

                            <p className="text-lg text-green-700 font-bold mb-4">In Stock</p>

                            {/* Color Selector */}
                            <div className="mb-6">
                                <p className="text-sm font-bold text-gray-900 mb-2">Color: <span className="font-normal text-gray-700">Black</span></p>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-black border-[3px] border-blue-600 outline outline-1 outline-gray-300 cursor-pointer shadow-sm"></div>
                                    <div className="w-10 h-10 rounded-full bg-white border border-gray-300 cursor-pointer hover:border-gray-500 shadow-sm"></div>
                                    <div className="w-10 h-10 rounded-full bg-[#E0BFB8] border border-gray-300 cursor-pointer hover:border-gray-500 shadow-sm"></div>
                                    <div className="w-10 h-10 rounded-full bg-[#B2EBF2] border border-gray-300 cursor-pointer hover:border-gray-500 shadow-sm"></div>
                                </div>
                            </div>

                            {/* Style */}
                            <div className="mb-6">
                                <p className="text-sm font-bold text-gray-900 mb-2">Style:</p>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 border border-blue-600 bg-blue-50 text-blue-800 rounded shadow-sm text-sm font-medium">Standard</button>
                                    <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded shadow-sm text-sm font-medium">Pro</button>
                                </div>
                            </div>

                            {/* Bullet points */}
                            <ul className="space-y-2 mt-6">
                                {[
                                    "Active Noise Cancelling (ANC)",
                                    "Up to 30 hours of playtime",
                                    "Built-in mic for clear calls",
                                    "Comfortable over-ear design",
                                    "Fast charging (10 mins = 2 hrs)"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#0f1111]">
                                        <Check size={16} className="text-blue-600 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Buy Box */}
                        <div className="lg:w-64 border border-gray-300 rounded-lg p-4 bg-white shadow-sm flex-shrink-0 self-start">
                            <span className="text-2xl font-bold text-[#0f1111] mb-2 block">$129.99</span>
                            <div className="text-sm text-gray-600 mb-4">
                                <a href="#" className="text-blue-600 hover:underline">FREE delivery</a> <strong>Wednesday, March 12</strong>
                            </div>

                            <p className="text-green-700 font-bold text-lg mb-4">In Stock</p>

                            <div className="mb-4">
                                <label className="text-sm font-bold shadow-md rounded-md border border-gray-300 inline-block overflow-hidden bg-gray-100 hover:bg-gray-200 cursor-pointer">
                                    <span className="px-2 font-normal text-gray-700">Qty:</span>
                                    <select className="bg-transparent py-1 pr-2 font-normal text-[#0f1111] outline-none cursor-pointer">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </label>
                            </div>

                            <div className="flex flex-col gap-2 mb-4">
                                <button className="w-full bg-[#ffd814] hover:bg-[#F7CA00] text-[#0f1111] py-2 rounded-full font-medium transition-colors text-sm shadow-sm">
                                    Add to Cart
                                </button>
                                <button className="w-full bg-[#ffa41c] hover:bg-[#FA8900] text-[#0f1111] py-2 rounded-full font-medium transition-colors text-sm shadow-sm">
                                    Buy Now
                                </button>
                            </div>

                            <div className="flex flex-col gap-1 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                                <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-gray-400" /> Secure transaction</div>
                                <div className="flex items-center gap-2"><Truck size={14} className="text-gray-400" /> Ships from GlobalMart</div>
                                <div className="flex items-center gap-2"><Package size={14} className="text-gray-400" /> Sold by GlobalMart</div>
                                <div className="flex items-center gap-2"><RotateCcw size={14} className="text-gray-400" /> Returnable within 30 days</div>
                            </div>
                            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-1.5 rounded text-sm font-medium shadow-sm transition-colors">
                                Add to List
                            </button>
                        </div>

                    </div>
                </div>

                <hr className="my-8 border-gray-200" />

                {/* Lower Section */}
                <div className="flex flex-col gap-12">

                    {/* Description */}
                    <div>
                        <h2 className="text-xl font-bold text-[#cc0c39] mb-4 pb-2 border-b-2 border-gray-200 inline-block">Product Description</h2>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-6 rounded-lg border border-gray-100">
                            <div className="flex-1 text-gray-700 leading-relaxed text-sm">
                                <p className="mb-4">
                                    Experience unparalleled audio clarity with our Premium Wireless Headphones. Featuring industry-leading active noise cancellation, these over-ear headphones transport you to a world of pure, unadulterated sound.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-4 text-[#0f1111]">
                                    <li><strong>Custom Tuned Audio:</strong> Deep bass, precise mids, and crisp highs.</li>
                                    <li><strong>All-Day Comfort:</strong> Ergonomic design with plush memory foam earcups.</li>
                                    <li><strong>Multipoint Connection:</strong> Seamlessly switch between two devices.</li>
                                    <li><strong>Built-in Microphone:</strong> Crystal clear commands and calls.</li>
                                    <li><strong>Foldable Design:</strong> Perfect for travel with included hard case.</li>
                                </ul>
                            </div>
                            <div className="flex-1 w-full aspect-video md:aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-lg border border-gray-300">
                                <img src="https://picsum.photos/seed/lifestyle_headphones/800/600" alt="Lifestyle" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Specifications */}
                    <div>
                        <h2 className="text-xl font-bold text-[#0f1111] mb-4">Technical Specifications</h2>
                        <div className="border border-gray-200 rounded-lg overflow-hidden max-w-3xl">
                            <table className="w-full text-sm text-left">
                                <tbody>
                                    <tr className="bg-white border-b border-gray-100">
                                        <th className="py-3 px-6 bg-gray-50 font-medium text-gray-900 w-1/3">Form Factor</th>
                                        <td className="py-3 px-6 text-gray-700">Over Ear</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100">
                                        <th className="py-3 px-6 bg-gray-50 font-medium text-gray-900">Connectivity Technology</th>
                                        <td className="py-3 px-6 text-gray-700">Wireless, Bluetooth 5.0</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100">
                                        <th className="py-3 px-6 bg-gray-50 font-medium text-gray-900">Battery Life</th>
                                        <td className="py-3 px-6 text-gray-700">Up to 30 Hours (ANC ON)</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100">
                                        <th className="py-3 px-6 bg-gray-50 font-medium text-gray-900">Bluetooth Version</th>
                                        <td className="py-3 px-6 text-gray-700">5.0</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100">
                                        <th className="py-3 px-6 bg-gray-50 font-medium text-gray-900">Weight</th>
                                        <td className="py-3 px-6 text-gray-700">250g</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100">
                                        <th className="py-3 px-6 bg-gray-50 font-medium text-gray-900">Water Resistance</th>
                                        <td className="py-3 px-6 text-gray-700">IPX4</td>
                                    </tr>
                                    <tr className="bg-white border-b border-gray-100">
                                        <th className="py-3 px-6 bg-gray-50 font-medium text-gray-900">Wireless Range</th>
                                        <td className="py-3 px-6 text-gray-700">Up to 33 ft</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <th className="py-3 px-6 bg-gray-50 font-medium text-gray-900">Noise Cancellation</th>
                                        <td className="py-3 px-6 text-gray-700">Active (ANC)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <div>
                        <h2 className="text-xl font-bold text-[#0f1111] mb-6">Customer Reviews</h2>
                        <div className="space-y-6 max-w-4xl">
                            {/* Review 1 */}
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden text-blue-800 flex items-center justify-center font-bold font-serif text-sm border border-blue-200">SJ</div>
                                    <span className="font-medium text-gray-900 text-sm">Sarah Johnson</span>
                                    <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded ml-2">Verified Purchase</span>
                                </div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="flex text-[#ff9900]">
                                        {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm">OUTSTANDING VALUE FOR MONEY</h4>
                                </div>
                                <p className="text-xs text-gray-500 mb-3">Reviewed in the United States on February 15, 2024</p>
                                <p className="text-sm text-[#0f1111] leading-relaxed">
                                    I was skeptical about buying these given the price point compared to bigger name brands. But I am absolutely blown away. The noise cancellation completely drowns out office chatter. Battery lasts easily a week of 3-4 hours daily use. They are comfortable even over glasses. Highly recommend.
                                </p>
                                <div className="mt-3 flex items-center gap-4">
                                    <button className="border border-gray-300 rounded text-xs px-3 py-1 text-gray-700 hover:bg-gray-100 shadow-sm font-medium">Helpful</button>
                                    <span className="text-xs text-gray-500 border-l border-gray-300 pl-4 cursor-pointer hover:underline">Report</span>
                                </div>
                            </div>

                            {/* Review 2 */}
                            <div className="border-b border-gray-200 pb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"><img src="https://picsum.photos/seed/face/100/100" /></div>
                                    <span className="font-medium text-gray-900 text-sm">Michael Chen</span>
                                    <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded ml-2">Verified Purchase</span>
                                </div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="flex text-[#ff9900]">
                                        {[1, 2, 3, 4].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                                        <Star size={14} className="text-gray-300" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm">Great sound, slightly bulky</h4>
                                </div>
                                <p className="text-xs text-gray-500 mb-3">Reviewed in Canada on January 10, 2024</p>
                                <p className="text-sm text-[#0f1111] leading-relaxed">
                                    The sound quality is fantastic and connects immediately to my phone and laptop. They are a bit bulky to carry around compared to earbuds, but the noise cancellation is worth it.
                                </p>
                                <div className="mt-3 flex items-center gap-4">
                                    <button className="border border-gray-300 rounded text-xs px-3 py-1 text-gray-700 hover:bg-gray-100 shadow-sm font-medium">Helpful</button>
                                    <span className="text-xs text-gray-500 border-l border-gray-300 pl-4 cursor-pointer hover:underline">Report</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <h2 className="text-xl font-bold text-[#0f1111]">You May Also Like</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {recommendedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
