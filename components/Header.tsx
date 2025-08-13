import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#story', label: 'Our Story' },
        { href: '#events', label: 'Events' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#registry', label: 'Registry' },
        { href: '#rsvp', label: 'RSVP' },
    ];

    const textClass = scrolled ? 'text-[#4B3F3C]' : 'text-white';
    const hoverClass = scrolled ? 'hover:text-[#B48A6E]' : 'hover:text-gray-200';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FFF8F0]/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className={`text-xl font-bold font-serif transition-colors duration-300 ${textClass}`}>
                    #LoveWithMiracleAndPeace
                </a>
                <div className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className={`font-semibold transition-colors duration-300 ${textClass} ${hoverClass}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    {/* Mobile menu button can be added here */}
                </div>
            </nav>
        </header>
    );
};

export default Header;