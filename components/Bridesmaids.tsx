
import React from 'react';
import Section from './Section';
import { BRIDESMAIDS } from '../constants';

const Bridesmaids: React.FC = () => {
    return (
        <Section id="bridesmaids" title="Meet The Bridesmaids">
            <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-600">
                Meet the beautiful ladies who will be standing by Chinazaekpere's side on this wonderful day. We are so grateful for their presence and support.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {BRIDESMAIDS.map((bridesmaid) => (
                    <div key={bridesmaid.name} className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 w-48">
                        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <img 
                                src={bridesmaid.imgSrc} 
                                alt={bridesmaid.name} 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h4 className="mt-4 text-xl font-serif text-[#4B3F3C]">{bridesmaid.name}</h4>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Bridesmaids;