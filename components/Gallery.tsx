import React from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';

interface GalleryProps {
    onImageClick: (image: GalleryImage) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
    // Array of rotation classes for a scattered, polaroid-like look
    const rotations = ['rotate-2', '-rotate-3', 'rotate-1', '-rotate-2', 'rotate-3'];

    return (
        <Section id="gallery" title="Our Moments">
             <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-600">
                A glimpse into the journey that brought us here. We cherish these memories and can't wait to make more with you.
            </p>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                {GALLERY_IMAGES.map((image, index) => {
                    const rotationClass = rotations[index % rotations.length];
                    return (
                        <div 
                            key={index} 
                            className={`p-2 md:p-3 bg-white rounded-lg shadow-lg break-inside-avoid cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:rotate-0 ${rotationClass}`} 
                            onClick={() => onImageClick(image)}
                            role="button"
                            aria-label={`View image: ${image.alt}`}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-auto object-cover rounded-md"
                            />
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Gallery;