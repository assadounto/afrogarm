import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold">Afrogarm</h3>
                        <p className="mt-4 text-gray-400">1234 Street Address<br />City, Country</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" passHref>
                                        <span className="text-gray-400 hover:text-white transition-colors duration-200">Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop" passHref>
                                        <span className="text-gray-400 hover:text-white transition-colors duration-200">Shop</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" passHref>
                                        <span className="text-gray-400 hover:text-white transition-colors duration-200">Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" passHref>
                                        <span className="text-gray-400 hover:text-white transition-colors duration-200">Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Information</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/about" passHref>
                                        <span className="text-gray-400 hover:text-white transition-colors duration-200">About Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" passHref>
                                        <span className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" passHref>
                                        <span className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" passHref>
                                        <span className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p>&copy; {new Date().getFullYear()} Afrogarm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
