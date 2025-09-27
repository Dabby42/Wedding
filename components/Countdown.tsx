
import React from 'react';
import useCountdown from '../hooks/useCountdown';

interface CountdownProps {
    targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    const timeParts = [
        { label: 'Days', value: days },
        { label: 'Hours', value: hours },
        { label: 'Minutes', value: minutes },
        { label: 'Seconds', value: seconds },
    ];

    return (
        <div className="flex justify-center space-x-4 md:space-x-8 mt-8">
            {timeParts.map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center">
                    <span className="text-4xl md:text-6xl font-bold font-serif">{value.toString().padStart(2, '0')}</span>
                    <span className="text-sm md:text-base uppercase tracking-widest">{label}</span>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
