'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = ['/garmone.jpg', '/gallery1.jpg']; // Add your images here

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds
        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);

    return (
        <div className="relative h-[90vh] flex items-center bg-gray-900 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-cover bg-right bg-no-repeat"
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/50 to-black"></div>
            <div className="relative z-10 text-left text-white pl-6 md:pl-16 max-w-lg">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Discover the Latest Trends</h1>
                <p className="text-lg md:text-2xl mb-8">Shop the newest arrivals and best deals</p>
                <Link href="/shop" passHref>
                    <span className="inline-block bg-white text-dark py-2 px-6 rounded-md text-lg md:text-xl font-medium  transition-transform transform hover:scale-105">
                        Shop Now
                    </span>
                </Link>
            </div>
            <div className="absolute bottom-10 w-full text-center">
                <Link href="#featured" passHref>
                    <span className="text-secondary text-2xl animate-bounce">
                        <i className="fas fa-chevron-down"></i>
                    </span>
                </Link>
            </div>
           
        </div>
    );
};

export default HeroSection;
