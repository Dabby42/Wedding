
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = 'bg-[#FFF8F0]' }) => {
    return (
        <section id={id} className={`py-20 px-4 ${className}`}>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-[#B48A6E] mb-2">{title}</h2>
                <div className="w-24 h-1 bg-[#B48A6E]/50 mx-auto mb-12"></div>
                {children}
            </div>
        </section>
    );
};

export default Section;
