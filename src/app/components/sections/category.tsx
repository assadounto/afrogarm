'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
    { name: 'Electronics', image: '/path/to/electronics.jpg' },
    { name: 'Fashion', image: '/path/to/fashion.jpg' },
    { name: 'Home & Kitchen', image: '/path/to/home-kitchen.jpg' },
    { name: 'Beauty & Health', image: '/path/to/beauty-health.jpg' },
];

const Categories: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="py-16 bg-gray-100 dark:bg-dark-secondary"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary dark:text-secondary">
                    Shop by Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300"
                        >
                            <Link href={`/category/${category.name.toLowerCase()}`} passHref>
                                <span className="block group">
                                    <motion.img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-48 object-cover transition-transform duration-500 transform group-hover:scale-110"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            className="text-xl font-semibold text-white"
                                        >
                                            {category.name}
                                        </motion.h3>
                                    </div>
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Categories;
