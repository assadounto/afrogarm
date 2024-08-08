import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Afrogarm</h3>
                        <p className="mt-2">1234 Street Address<br />City, Country</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/about" passHref>
                            <span className="hover:underline">About Us</span>
                        </Link>
                        <Link href="/contact" passHref>
                            <span className="hover:underline">Contact Us</span>
                        </Link>
                        <Link href="/privacy" passHref>
                            <span className="hover:underline">Privacy Policy</span>
                        </Link>
                        <Link href="/terms" passHref>
                            <span className="hover:underline">Terms of Service</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Afrogarm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
