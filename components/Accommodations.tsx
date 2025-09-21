
import React from 'react';
import Section from './Section';
import { ACCOMMODATIONS } from '../constants';

const Accommodations: React.FC = () => {
    return (
        <Section id="accommodations" title="A Place To Stay">
            <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-600">
                For our guests traveling from out of town, we've compiled a list of recommended hotels. We advise booking in advance. Please check the hotel's proximity to the event venues in Surulere and Yaba.
            </p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ACCOMMODATIONS.map((hotel, index) => (
                    <div key={index} className="bg-white/50 rounded-lg shadow-lg p-6 backdrop-blur-sm text-left flex flex-col">
                        <h3 className="text-xl font-bold font-serif text-[#4B3F3C] mb-2">{hotel.name}</h3>
                        <p className="text-gray-500 mb-4 text-sm">{hotel.area}</p>
                        <p className="text-gray-700 mb-6 flex-grow">{hotel.description}</p>
                        <a 
                            href={hotel.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block mt-auto text-center bg-[#B48A6E] text-white font-bold py-2 px-6 rounded-full hover:bg-[#a57b60] transition-colors duration-300 shadow-md">
                            View Hotel
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Accommodations;