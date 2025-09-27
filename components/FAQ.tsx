import React, { useState } from 'react';
import Section from './Section';
import { FAQ_DATA, ChevronDownIcon } from '../constants';

const FAQItem: React.FC<{ faq: typeof FAQ_DATA[0] }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#B48A6E]/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-[#4B3F3C]">{faq.question}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                   <ChevronDownIcon />
                </span>
            </button>
            {isOpen && (
                <div className="pb-4 pr-8 text-gray-700 text-left">
                    <p>{faq.answer}</p>
                </div>
            )}
        </div>
    );
};


const FAQ: React.FC = () => {
    return (
        <Section id="faq" title="Frequently Asked Questions" className="bg-[#f5eade]">
            <div className="max-w-3xl mx-auto">
                {FAQ_DATA.map((faq, index) => (
                    <FAQItem key={index} faq={faq} />
                ))}
            </div>
        </Section>
    );
};

export default FAQ;
