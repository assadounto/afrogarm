import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <div className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Latest Trends</h1>
                <p className="text-lg md:text-2xl mb-6">Shop the newest arrivals and best deals</p>
                <Link href="/shop" passHref>
                    <button className="bg-sky-500 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-sky-600 transition-colors duration-300">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
