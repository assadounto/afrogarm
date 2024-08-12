// components/cards/ProductCard.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

interface ProductCardProps {
    id: number;
    name: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
    return (
        <div className="bg-white dark:bg-dark-secondary shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <Link href={`/product/${id}`} passHref>
                <div className="relative cursor-pointer">
                    <img src={image} alt={name} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2 flex space-x-2">
                        <button className="p-2 bg-gray-100 dark:bg-dark-secondary rounded-full hover:bg-gray-200 dark:hover:bg-dark">
                            <FaHeart className="text-gray-800 dark:text-white" />
                        </button>
                        <button className="p-2 bg-gray-100 dark:bg-dark-secondary rounded-full hover:bg-gray-200 dark:hover:bg-dark">
                            <FaShoppingCart className="text-gray-800 dark:text-white" />
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-medium text-dark dark:text-white mb-2">{name}</h3>
                    <p className="text-dark dark:text-secondary font-medium">{price}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
