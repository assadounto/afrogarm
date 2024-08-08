import React from 'react';
import Link from 'next/link';

const categories = [
    { name: 'Electronics', image: '/path/to/electronics.jpg' },
    { name: 'Fashion', image: '/path/to/fashion.jpg' },
    { name: 'Home & Kitchen', image: '/path/to/home-kitchen.jpg' },
    { name: 'Beauty & Health', image: '/path/to/beauty-health.jpg' },
];

const Categories: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Shop by Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                            <Link href={`/category/${category.name.toLowerCase()}`} passHref>
                                <span>
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-48 object-cover"
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
