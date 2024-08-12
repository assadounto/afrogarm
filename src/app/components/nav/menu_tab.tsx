'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { Fragment } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const categories = [
    {
        label: 'COLLECTIONS',
        subcategories: [
            { name: 'Newest', image: '/images/phones.jpg' },
            { name: 'Best sellers', image: '/images/laptops.jpg' },

        ],
    },
    {
        label: 'MEN',
        subcategories: [
            { name: 'Men Clothing', image: '/images/men-clothing.jpg' },
            { name: 'Shoes', image: '/images/shoes.jpg' },
            { name: 'Accessories', image: '/images/men-accessories.jpg' },
        ],
    },
    {
        label: 'WOMEN',
        subcategories: [
            { name: 'Women Clothing', image: '/images/women-clothing.jpg' },
            { name: 'Jewelry', image: '/images/jewelry.jpg' },
            { name: 'Bags', image: '/images/bags.jpg' },
            { name: 'Fabrics', image: '/images/fabrics.jpg' },
            { name: 'Beauty and Hair', image: '/images/beauty-hair.jpg' },
        ],
    },
    {
        label: 'KIDS',
        subcategories: [
            { name: 'Kids Clothing', image: '/images/kids-clothing.jpg' },
            { name: 'Shoes', image: '/images/kids-shoes.jpg' },
        ],
    },
    {
        label: 'HOME AND ART',
        subcategories: [
            { name: 'Home Decor', image: '/images/home-decor.jpg' },
            { name: 'Art', image: '/images/art.jpg' },
        ],
    },
    {
        label: 'REVIEWS',
        subcategories: [
            { name: 'Top Reviews', image: '/images/top-reviews.jpg' },
            { name: 'Recent Reviews', image: '/images/recent-reviews.jpg' },
        ],
    },
    {
        label: 'BAGS',
        subcategories: [
            { name: 'Handbags', image: '/images/handbags.jpg' },
            { name: 'Backpacks', image: '/images/backpacks.jpg' },
        ],
    },
    {
        label: 'ACCESSORIES',
        subcategories: [
            { name: 'Watches', image: '/images/watches.jpg' },
            { name: 'Sunglasses', image: '/images/sunglasses.jpg' },
            { name: 'Jewelry', image: '/images/jewelry.jpg' }, // This could also fit here
        ],
    },
];


const MenuTab: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setOpenIndex(null); // Close any open categories when toggling the menu
    };

    return (
        <div>
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center p-4 bg-white text-dark dark:bg-dark border-b border-gray-200 dark:border-gray-600 mt-[80px] z-40">
                <div className="flex space-x-6">
                    {categories.map((category, index) => (
                        <Popover key={index} className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={`text-dark dark:text-white font-medium hover:text-primary dark:hover:text-secondary ${open ? 'text-secondary dark:text-secondary' : ''
                                            }`}
                                    >
                                        {category.label}
                                        <HiChevronDown className="ml-1 inline-block h-5 w-5 text-dark dark:text-white" />
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-50 w-[600px] max-w-[800px] transform px-4 py-4 mt-2 bg-white dark:bg-dark border border-gray-200 dark:border-gray-600 rounded-md shadow-lg grid grid-cols-3 gap-4">
                                            {category.subcategories.map((subcategory, subIndex) => (
                                                <Link key={subIndex} href="#">
                                                    <div className="cursor-pointer flex flex-col items-center text-center">
                                                        <img
                                                            src={subcategory.image}
                                                            alt={subcategory.name}
                                                            className="w-full h-[100px] object-cover rounded-md mb-2"
                                                        />
                                                        <span className="text-dark dark:text-white">
                                                            {subcategory.name}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden p-4 bg-white text-dark dark:bg-dark border-b border-gray-200 dark:border-gray-600 mt-[80px] z-40">
                <button
                    className="w-full flex justify-between items-center text-left text-dark dark:text-white font-medium focus:outline-none"
                    onClick={toggleMenu}
                >
                    Categories
                    {isMenuOpen ? (
                        <FaChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                        <FaChevronDown className="ml-2 h-4 w-4" />
                    )}
                </button>

                {isMenuOpen && (
                    <div className="mt-2">
                        {categories.map((category, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    className="w-full flex justify-between items-center text-left text-dark dark:text-white font-medium focus:outline-none"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {category.label}
                                    {openIndex === index ? (
                                        <FaChevronUp className="ml-2 h-4 w-4" />
                                    ) : (
                                        <FaChevronDown className="ml-2 h-4 w-4" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="mt-2 pl-4">
                                        {category.subcategories.map((subcategory, subIndex) => (
                                            <Link key={subIndex} href="#">
                                                <div className="py-2 text-dark dark:text-white">
                                                    {subcategory.name}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuTab;
