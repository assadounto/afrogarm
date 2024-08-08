'use client'
import React from 'react';

const galleryItems = [
    { id: 1, image: '/gallery1.jpg', alt: 'Client wearing Afro garment 1' },
    { id: 2, image: '/gallery2.jpg', alt: 'Client wearing Afro garment 2' },
    { id: 3, image: '/gallery3.png', alt: 'Client wearing Afro garment 3' },
    { id: 4, image: '/gallery4.jpg', alt: 'Client wearing Afro garment 4' },
    
    // Add more items as needed
];

const Gallery: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#503c3b]">Client Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md">
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#503c3b] bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <button className="text-white bg-[#edceab] py-2 px-4 rounded-full hover:bg-[#c8a987]">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
