'use client'
import React from 'react';
import Link from 'next/link';

const categories = [
    { name: 'Men\'s Wear', image: '/path/to/mens-wear.jpg' },
    { name: 'Women\'s Wear', image: '/path/to/womens-wear.jpg' },
    { name: 'Unisex', image: '/path/to/unisex.jpg' },
    { name: 'Jewelry', image: '/path/to/jewelry.jpg' },
    { name: 'Bags & Purses', image: '/path/to/bags-purses.jpg' },
    { name: 'Hats & Headwraps', image: '/path/to/hats-headwraps.jpg' },
    { name: 'Footwear', image: '/path/to/footwear.jpg' },
    { name: 'Kids & Babies', image: '/path/to/kids-babies.jpg' },
    { name: 'Gifts & Souvenirs', image: '/path/to/gifts-souvenirs.jpg' },
    { name: 'Wedding & Events', image: '/path/to/wedding-events.jpg' },
]

const Categories: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Shop by Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                            <Link href={`/category/${category.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} passHref>
                                <span className="block">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                                    </div>
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
