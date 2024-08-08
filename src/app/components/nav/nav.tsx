'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const NavBar: React.FC = () => {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`h-[70px] fixed top-0 left-0 w-full flex items-center justify-between bg-white bg-opacity-70 dark:bg-dark dark:bg-opacity-70 border-b border-gray-200 dark:border-gray-600 px-4 z-50 transition-transform duration-300 '}`}>
            <div className="flex items-center">
                <Link href="/" passHref>
                    <span className="text-xl font-bold text-link dark:text-white" id="logo">
                        Afrogarm
                    </span>
                </Link>
            </div>
            <div className="flex items-center w-1/2 justify-center relative">
                <AiOutlineSearch className="absolute left-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/cart" passHref>
                    <span className="flex items-center text-link dark:text-white font500 hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer">
                        <FaShoppingCart className="h-6 w-6 mr-1" />
                        Cart
                    </span>
                </Link>
                <Link href="/signin" passHref>
                    <span className="flex items-center text-link dark:text-white font500 hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer">
                        <MdAccountCircle className="h-6 w-6 mr-1" />
                        Sign In
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
