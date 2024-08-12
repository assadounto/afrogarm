// components/FeaturedProducts.tsx
'use client';
import React from 'react';
import ProductCard from '../cards/ProductCard';

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
        <section className="py-16 bg-gray-50 dark:bg-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-medium  mb-12 text-dark dark:text-secondary">
                    Featured Products
                </h2>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
