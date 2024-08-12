// components/Bestsellers.tsx
'use client';
import React from 'react';
import ProductCard from '../cards/ProductCard';

const products = [
    {
        id: 1,
        name: 'Bestseller 1',
        price: '$29.99',
        image: '/product1.jpg',
    },
    {
        id: 2,
        name: 'Bestseller 2',
        price: '$39.99',
        image: '/product2.jpg',
    },
    {
        id: 3,
        name: 'Bestseller 3',
        price: '$49.99',
        image: '/product3.jpg',
    },
    {
        id: 4,
        name: 'Bestseller 4',
        price: '$59.99',
        image: '/product4.jpg',
    },
];

const Bestsellers: React.FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-medium mb-8 text-dark">Bestsellers</h2>
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

export default Bestsellers;
