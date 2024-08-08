import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <div className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">Discover the Latest Trends</h1>
                <p className="text-xl md:text-3xl mb-8">Shop the newest arrivals and best deals</p>
                <Link href="/shop" passHref>
                    <span className="inline-block bg-sky-500 text-white py-4 px-8 rounded-full text-lg md:text-xl font-medium hover:bg-sky-600 transition-transform transform hover:scale-105">
                        Shop Now
                    </span>
                </Link>
            </div>
            <div className="absolute bottom-10 w-full text-center">
                <Link href="#featured" passHref>
                    <span className="text-white text-2xl animate-bounce">
                        <i className="fas fa-chevron-down"></i>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
