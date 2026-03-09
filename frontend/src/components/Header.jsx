import {
    ShoppingCart,
    Search,
    Menu,
    User,
    Heart,
    ChevronDown,
    Globe
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        "Today's Deals",
        "Customer Service",
        "Registry",
        "Gift Cards",
        "Sell"
    ];

    return (
        <header className="w-full">
            {/* Top Bar - Very Dark */}
            <div className="bg-[#131921] text-gray-300 py-1 px-4 text-sm hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                            <Globe size={14} /> EN <ChevronDown size={12} />
                        </button>
                        <span>|</span>
                        <button className="hover:text-white transition-colors">
                            Currency: USD <ChevronDown size={12} className="inline" />
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/help" className="hover:text-white transition-colors">Help</Link>
                        <span>|</span>
                        <Link to="/track" className="hover:text-white transition-colors">Track Order</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-200 py-4 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
                    {/* Logo & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={24} />
                        </button>
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-[#ff9900] rounded flex items-center justify-center group-hover:bg-[#e68a00] transition-colors shadow-sm">
                                <span className="text-[#131921] font-bold text-xl">JM</span>
                            </div>
                            <span className="text-2xl font-bold text-[#004b91] tracking-tight">JM<span className="text-[#ff9900]">_Aura</span></span>
                        </Link>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden md:flex flex-1 max-w-3xl">
                        <div className="flex w-full shadow-sm rounded-md overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-[#ff9900] focus-within:border-transparent transition-all">
                            <select className="bg-gray-100 text-gray-700 py-2.5 px-3 text-sm border-r border-gray-300 focus:outline-none cursor-pointer hover:bg-gray-200 transition-colors w-36">
                                <option>All Departments</option>
                                <option>Electronics</option>
                                <option>Computers</option>
                                <option>Smart Home</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Search products, brands and categories..."
                                className="flex-1 py-2.5 px-4 focus:outline-none text-sm"
                            />
                            <button className="bg-[#ff9900] hover:bg-[#e68a00] px-6 py-2.5 transition-colors flex items-center justify-center text-white">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <Link to="/login" className="hidden lg:flex flex-col hover:text-blue-600 transition-colors cursor-pointer">
                            <span className="text-xs text-gray-500">Hello, Sign in</span>
                            <span className="text-sm font-bold text-gray-900 flex items-center gap-1">Account & Lists <ChevronDown size={14} /></span>
                        </Link>

                        <Link to="/orders" className="hidden lg:flex flex-col hover:text-blue-600 transition-colors cursor-pointer">
                            <span className="text-xs text-gray-500">Returns</span>
                            <span className="text-sm font-bold text-gray-900">& Orders</span>
                        </Link>

                        <Link to="/cart" className="relative flex items-center hover:text-blue-600 transition-colors">
                            <div className="relative">
                                <ShoppingCart size={28} className="text-gray-800" />
                                <span className="absolute -top-1 -right-2 bg-[#ff9900] text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                                    0
                                </span>
                            </div>
                            <span className="hidden md:inline-block text-sm font-bold text-gray-900 ml-2 mt-2">Cart</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden px-4 pb-3 bg-white border-b border-gray-200">
                <div className="flex w-full rounded-md overflow-hidden border border-gray-300">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="flex-1 py-2 px-3 focus:outline-none text-sm"
                    />
                    <button className="bg-[#ff9900] px-4 py-2 text-white">
                        <Search size={18} />
                    </button>
                </div>
            </div>

            {/* Navigation Bar - Blue */}
            <nav className="bg-[#232f3e] text-white text-sm hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex items-center">
                    <button className="flex items-center gap-1 font-bold py-2 pr-4 hover:text-gray-300 transition-colors border-r border-gray-600">
                        <Menu size={20} /> All
                    </button>
                    <div className="flex px-2 space-x-1">
                        {navLinks.map((link, idx) => (
                            <Link key={idx} to={`/${link.toLowerCase().replace(/ /g, '-')}`} className="py-2 px-3 hover:text-gray-300 rounded-sm hover:border-white transition-all whitespace-nowrap">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white absolute w-full shadow-2xl z-50 h-[calc(100vh-130px)] overflow-y-auto left-0">
                    <div className="bg-[#232f3e] text-white p-4 flex items-center gap-3">
                        <User size={24} />
                        <span className="font-bold text-lg">Hello, Sign in</span>
                    </div>
                    <nav className="flex flex-col py-2">
                        <div className="px-4 py-3 font-bold text-lg border-b">Trending</div>
                        <Link to="/best-sellers" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Best Sellers</Link>
                        <Link to="/new-releases" className="px-4 py-3 text-gray-700 hover:bg-gray-100">New Releases</Link>
                        <Link to="/movers-shakers" className="px-4 py-3 text-gray-700 border-b hover:bg-gray-100">Movers & Shakers</Link>

                        <div className="px-4 py-3 font-bold text-lg border-b">Shop By Department</div>
                        <Link to="/electronics" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Electronics</Link>
                        <Link to="/computers" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Computers</Link>
                        <Link to="/smart-home" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Smart Home</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

