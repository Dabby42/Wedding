import React from 'react';

const FallingPetals: React.FC = () => {
    const petalColors = ['petal-color-1', 'petal-color-2', 'petal-color-3', 'petal-color-4'];

    const petals = Array.from({ length: 25 }).map((_, i) => { // Increased count for a fuller effect
        const style = {
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 8 + 7}s`, // 7s to 15s duration
            animationDelay: `${Math.random() * 10}s`,
        };
        const colorClass = petalColors[Math.floor(Math.random() * petalColors.length)];

        return (
            <div key={i} className="petal-wrapper" style={style}>
                <div className={`petal ${colorClass}`}></div>
            </div>
        );
    });

    return <div className="petals-container">{petals}</div>;
};

export default FallingPetals;