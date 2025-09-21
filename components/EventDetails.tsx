
import React from 'react';
import Section from './Section';
import { EVENT_DETAILS, CalendarIcon, ClockIcon, LocationIcon } from '../constants';

const EventCard: React.FC<{ event: typeof EVENT_DETAILS.ceremony }> = ({ event }) => (
    <div className="bg-white/50 rounded-lg shadow-lg p-8 backdrop-blur-sm text-left">
        <h3 className="text-3xl font-serif text-[#4B3F3C] mb-6">{event.title}</h3>
        <div className="space-y-4 text-lg text-gray-700">
            <p className="flex items-center"><CalendarIcon /> {event.date}</p>
            <p className="flex items-center"><ClockIcon /> {event.time}</p>
            <p className="flex items-start"><LocationIcon /> <span><strong>{event.venue}</strong><br/>{event.address}</span></p>
        </div>
        <a 
            href={event.mapsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-transparent border-2 border-[#B48A6E] text-[#B48A6E] font-bold py-2 px-6 rounded-full hover:bg-[#B48A6E] hover:text-white transition-all duration-300">
            View on Map
        </a>
    </div>
);

const EventDetails: React.FC = () => {
    return (
        <Section id="events" title="The Big Day">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <EventCard event={EVENT_DETAILS.ceremony} />
                <EventCard event={EVENT_DETAILS.reception} />
            </div>
        </Section>
    );
};

export default EventDetails;