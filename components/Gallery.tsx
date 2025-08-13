
import React from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';

interface GalleryProps {
    onImageClick: (image: GalleryImage) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
    return (
        <Section id="gallery" title="Our Moments">
             <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-600">
                A glimpse into the journey that brought us here. We cherish these memories and can't wait to make more with you.
            </p>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {GALLERY_IMAGES.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid" onClick={() => onImageClick(image)}>
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-auto object-cover cursor-pointer transform hover:scale-110 transition-transform duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Gallery;
