import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Back to top button */}
            <div className="bg-[#37475A] hover:bg-[#485769] transition-colors text-center py-4 cursor-pointer">
                <span className="text-white text-sm font-medium">Back to top</span>
            </div>

            {/* Newsletter Section */}
            <div className="bg-[#004b91] py-12 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-2xl font-bold mb-4 tracking-tight">Subscribe to Our Newsletter</h2>
                    <p className="mb-8 text-sm text-blue-100">Get the latest updates on new products and upcoming sales.</p>
                    <div className="flex max-w-md mx-auto shadow-lg">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 rounded-l-md focus:outline-none text-gray-900 border-none text-sm"
                        />
                        <button className="bg-[#ff9900] hover:bg-[#e68a00] px-6 py-3 rounded-r-md font-bold transition-colors text-gray-900 text-sm">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="bg-[#232f3e] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-bold text-base mb-4">Get to Know Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press Releases</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">JM_Aura Cares</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-base mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-base mb-4">Policy</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Data Processing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-base mb-4">Connect With Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-[#3A4A5E] rounded-full hover:bg-[#ff9900] hover:scale-110 transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-3 bg-[#3A4A5E] rounded-full hover:bg-[#ff9900] hover:scale-110 transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-3 bg-[#3A4A5E] rounded-full hover:bg-[#ff9900] hover:scale-110 transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 bg-[#3A4A5E] rounded-full hover:bg-[#ff9900] hover:scale-110 transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto border-t border-[#3A4A5E] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} JM_Aura. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0 items-center">
                        <span className="text-white">Payment Methods:</span>
                        <div className="flex gap-2">
                            <span className="font-bold text-white bg-[#0f172a] px-2 py-1 rounded">Visa</span>
                            <span className="font-bold text-white bg-[#0f172a] px-2 py-1 rounded">MasterCard</span>
                            <span className="font-bold text-white bg-[#0f172a] px-2 py-1 rounded">PayPal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
