'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const NavBar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 dark:bg-dark dark:bg-opacity-90 border-b border-gray-200 dark:border-gray-600 px-4 py-2 z-50 transition-transform duration-300">
            <div className="container mx-auto flex items-center justify-between h-[65px]">
                <div className="flex items-center">
                    <Link href="/" passHref>
                        <span id="logo" className="relative">
                            <Image
                                src="/afrologo.png"
                                alt="Afrogarm Logo"
                                width={150}
                                height={40}

                                objectFit="contain"
                            />
                        </span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center w-1/2 justify-center relative">
                    <AiOutlineSearch className="absolute left-3 text-dark dark:text-secondary" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-dark dark:text-secondary"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/cart" passHref>
                        <span className="flex items-center text-dark dark:text-secondary font-medium hover:text-secondary dark:hover:text-dark cursor-pointer">
                            <FaShoppingCart className="h-6 w-6 mr-1" />
                            Cart
                        </span>
                    </Link>
                    <Link href="/signin" passHref>
                        <span className="flex items-center text-dark dark:text-secondary font-medium hover:text-secondary dark:hover:text-dark cursor-pointer">
                            <MdAccountCircle className="h-6 w-6 mr-1" />
                            Sign In
                        </span>
                    </Link>
                    <button
                        className="md:hidden p-2 text-dark dark:text-secondary"
                        onClick={toggleMobileMenu}
                    >

                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[65px] left-0 w-full bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-600 z-50">
                    <div className="flex flex-col items-center py-4">
                        <Link href="/" passHref>
                            <span className="text-dark dark:text-secondary font-medium hover:text-secondary dark:hover:text-dark cursor-pointer mb-2">Home</span>
                        </Link>
                        <Link href="/cart" passHref>
                            <span className="text-dark dark:text-secondary font-medium hover:text-secondary dark:hover:text-dark cursor-pointer mb-2">Cart</span>
                        </Link>
                        <Link href="/signin" passHref>
                            <span className="text-dark dark:text-secondary font-medium hover:text-secondary dark:hover:text-dark cursor-pointer mb-2">Sign In</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
