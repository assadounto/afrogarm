'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const categories = [
    { label: 'Electronics', subcategories: ['Phones', 'Laptops', 'Cameras', 'Accessories'] },
    { label: 'Fashion', subcategories: ['Men', 'Women', 'Kids', 'Accessories'] },
    { label: 'Home & Kitchen', subcategories: ['Furniture', 'Appliances', 'Decor', 'Cookware'] },
    { label: 'Beauty & Health', subcategories: ['Makeup', 'Skincare', 'Haircare', 'Supplements'] },
    { label: 'Sports', subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Accessories'] },
    { label: 'Books', subcategories: ['Fiction', 'Non-Fiction', 'Children', 'Education'] },
    { label: 'Toys & Games', subcategories: ['Action Figures', 'Puzzles', 'Board Games', 'Dolls'] },
    { label: 'Automotive', subcategories: ['Car Accessories', 'Motorcycle Accessories', 'Tools', 'Parts'] },
    { label: 'Grocery', subcategories: ['Beverages', 'Snacks', 'Pantry', 'Frozen Foods'] },
    { label: 'Pet Supplies', subcategories: ['Dog', 'Cat', 'Fish', 'Bird'] },
];

const MenuTab: React.FC = () => {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    return (
        <div className="flex justify-between p-4 bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-600 mt-[70px] z-40">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredCategory(category.label)}
                    onMouseLeave={() => setHoveredCategory(null)}
                >
                    <Link href="#">
                        <span className="cursor-pointer text-link dark:text-white font-medium hover:text-sky-500 dark:hover:text-sky-400">
                            {category.label}
                        </span>
                    </Link>
                    {hoveredCategory === category.label && (
                        <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-dark border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-50">
                            <ul>
                                {category.subcategories.map((subcategory, subIndex) => (
                                    <li key={subIndex} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <Link href="#">
                                            <span className="cursor-pointer text-link dark:text-white">
                                                {subcategory}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MenuTab;
