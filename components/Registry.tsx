import React, { useState } from 'react';
import Section from './Section';
import { CarIcon, UtensilsIcon, VacationIcon, ApplianceIcon, HouseIcon, GiftIcon, BANK_DETAILS, ReadingTableIcon, ChairIcon } from '../constants';

const giftIdeas = [
    { name: 'New Home Fund', icon: <HouseIcon /> },
    { name: 'Honeymoon Vacation', icon: <VacationIcon /> },
    { name: 'Cars', icon: <CarIcon /> },
    { name: 'Home Appliances', icon: <ApplianceIcon /> },
    { name: 'Cooking Utensils', icon: <UtensilsIcon /> },
    { name: 'Reading Tables', icon: <ReadingTableIcon /> },
    { name: 'Chairs', icon: <ChairIcon /> },
    { name: 'Other Necessities', icon: <GiftIcon /> },
];

const AccountDetailCard: React.FC<{ details: typeof BANK_DETAILS.local_groom; title: string }> = ({ details, title }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(details.accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white/50 p-6 rounded-lg shadow-lg backdrop-blur-sm text-left">
            <h4 className="font-bold text-lg text-[#4B3F3C]">{title}</h4>
            <p className="mt-2"><strong>Bank:</strong> {details.bankName}</p>
            <p><strong>Account Name:</strong> {details.accountName}</p>
            <div className="flex items-center justify-between mt-2">
                <p><strong>Account Number:</strong> {details.accountNumber}</p>
                <button 
                    onClick={handleCopy}
                    className="bg-[#8E9B90] text-white text-sm px-3 py-1 rounded-md hover:bg-opacity-80 transition-all">
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};


const Registry: React.FC = () => {
    return (
        <Section id="registry" title="Gift Registry" className="bg-[#f5eade]">
            <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-600">
                Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have created a registry for your convenience.
            </p>
            
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {giftIdeas.map(gift => (
                    <div key={gift.name} className="flex flex-col items-center justify-center p-6 bg-white/50 rounded-lg shadow-lg backdrop-blur-sm text-[#B48A6E] hover:text-[#4B3F3C] transition-colors duration-300">
                        <div className="mb-2">{gift.icon}</div>
                        <span className="font-semibold text-center">{gift.name}</span>
                    </div>
                ))}
            </div>

             <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 mb-12">
                <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="block p-4 text-center bg-[#B48A6E] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-lg">View Amazon Store</a>
                <a href="https://www.jumia.com.ng/" target="_blank" rel="noopener noreferrer" className="block p-4 text-center bg-[#B48A6E] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-lg">View Jumia Store</a>
            </div>

            <h3 className="text-3xl font-serif text-[#4B3F3C] mt-16 mb-6">For Monetary Gifts</h3>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AccountDetailCard details={BANK_DETAILS.local_groom} title="Groom's Account (NGN)" />
                <AccountDetailCard details={BANK_DETAILS.local_bride} title="Bride's Account (NGN)" />
                <AccountDetailCard details={BANK_DETAILS.foreign} title="Foreign Account" />
            </div>
        </Section>
    );
};

export default Registry;