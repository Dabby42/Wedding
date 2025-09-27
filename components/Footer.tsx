
import React from 'react';
import { BRIDE_NAME, GROOM_NAME } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#f5eade] py-8 text-center text-[#4B3F3C]">
            <div className="container mx-auto">
                <h3 className="text-3xl font-serif text-[#B48A6E]">Thank You</h3>
                <p className="mt-2 text-lg">We are so excited to celebrate with you!</p>
                <div className="mt-6 text-xl font-serif">
                    {BRIDE_NAME} &amp; {GROOM_NAME}
                </div>
                <p className="mt-1 text-sm text-gray-500">December 13, 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
