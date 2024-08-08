'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: '$29.99',
        image: '/product1.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        price: '$39.99',
        image: '/product2.jpg',
    },
    {
        id: 3,
        name: 'Product 3',
        price: '$49.99',
        image: '/product3.jpg',
    },
    {
        id: 4,
        name: 'Product 4',
        price: '$59.99',
        image: '/product4.jpg',
    },
];

const FeaturedProducts: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="py-16 bg-gray-50 dark:bg-dark"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary dark:text-secondary">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white dark:bg-dark-secondary shadow-lg rounded-lg overflow-hidden transform transition-transform hover:shadow-xl"
                        >
                            <Link href={`/product/${product.id}`} passHref>
                                <span className="cursor-pointer block group">
                                    <div className="relative overflow-hidden">
                                        <motion.img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-56 object-cover transition-transform duration-500 transform group-hover:scale-110"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-primary dark:text-secondary font-bold mb-4">
                                            {product.price}
                                        </p>
                                        <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300">
                                            View Details
                                        </button>
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

export default FeaturedProducts;
