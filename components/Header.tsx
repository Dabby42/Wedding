import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from '../constants';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#story', label: 'Our Story' },
        { href: '#groomsmen', label: 'Groomsmen' },
        { href: '#bridesmaids', label: 'Bridesmaids' },
        { href: '#events', label: 'Events' },
        { href: '#accommodations', label: 'Accommodations' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#registry', label: 'Registry' },
        { href: '#fun', label: 'Fun & Games' },
        { href: '#faq', label: 'FAQ' },
        { href: '#rsvp', label: 'RSVP' },
    ];

    // When menu is open, force the scrolled-state styles for better visibility
    const hasSolidBg = scrolled || isMenuOpen;
    const textClass = hasSolidBg ? 'text-[#4B3F3C]' : 'text-white';
    const hoverClass = hasSolidBg ? 'hover:text-[#B48A6E]' : 'hover:text-gray-200';

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasSolidBg ? 'bg-[#FFF8F0]/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className={`text-base md:text-xl font-bold font-serif transition-colors duration-300 ${textClass}`}>
                    #LoveWithMiracleAndPeace
                </a>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-4 lg:space-x-6">
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

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className={`transition-colors duration-300 ${textClass}`}>
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#FFF8F0]/95 backdrop-blur-sm shadow-lg absolute top-full left-0 w-full animate-fade-in-down">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setIsMenuOpen(false)}
                                className={`font-semibold transition-colors duration-300 text-[#4B3F3C] hover:text-[#B48A6E]`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;