
import React from 'react';
import Section from './Section';
import { GROOMSMEN } from '../constants';

const Groomsmen: React.FC = () => {
    return (
        <Section id="groomsmen" title="Meet The Groomsmen" className="bg-[#f5eade]">
            <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-600">
                Meet the wonderful men supporting Daberechukwu as he takes this next step. We're thankful to have them be a part of our celebration.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {GROOMSMEN.map((groomsman) => (
                    <div key={groomsman.name} className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 w-48">
                        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <img 
                                src={groomsman.imgSrc} 
                                alt={groomsman.name} 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h4 className="mt-4 text-xl font-serif text-[#4B3F3C]">{groomsman.name}</h4>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Groomsmen;