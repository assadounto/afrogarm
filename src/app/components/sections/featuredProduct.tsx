import React from 'react';
import Link from 'next/link';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: '$29.99',
        image: '/path/to/product1.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        price: '$39.99',
        image: '/path/to/product2.jpg',
    },
    {
        id: 3,
        name: 'Product 3',
        price: '$49.99',
        image: '/path/to/product3.jpg',
    },
    {
        id: 4,
        name: 'Product 4',
        price: '$59.99',
        image: '/path/to/product4.jpg',
    },
];

const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <Link href={`/product/${product.id}`} passHref>
                                <span>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                        <p className="text-gray-700 mb-2">{product.price}</p>
                                        <button className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition-colors duration-300">
                                            View Details
                                        </button>
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

export default FeaturedProducts;
