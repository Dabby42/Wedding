
import React from 'react';
import Countdown from './Countdown';
import { BRIDE_NAME, GROOM_NAME, WEDDING_DATE, HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
    const formattedDate = new Date(WEDDING_DATE).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white text-center">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img src={HERO_IMAGE_URL} alt="The happy couple" className="absolute inset-0 w-full h-full object-cover"/>
            
            <div className="relative z-20 flex flex-col items-center p-4">
                <h2 className="text-2xl md:text-3xl tracking-widest uppercase">Forever begins...</h2>
                <h1 className="font-serif text-5xl md:text-8xl my-4">
                    {BRIDE_NAME} &amp; {GROOM_NAME}
                </h1>
                <p className="text-xl md:text-2xl font-semibold tracking-wider my-4">{formattedDate}</p>
                <Countdown targetDate={WEDDING_DATE} />
            </div>
        </section>
    );
};

export default Hero;