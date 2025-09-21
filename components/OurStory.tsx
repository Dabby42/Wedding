
import React from 'react';
import Section from './Section';
import { STORIES } from '../constants';
import { Story } from '../types';

interface OurStoryProps {
    onReadMore: (story: Story) => void;
}

const StoryCard: React.FC<{ story: Story, onReadMore: (story: Story) => void }> = ({ story, onReadMore }) => (
    <div className="bg-white/50 rounded-lg shadow-lg p-8 flex flex-col items-center text-center backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-3xl font-serif text-[#4B3F3C] mb-2">{story.name}</h3>
        <p className="text-[#8E9B90] text-lg font-semibold mb-4 italic">"{story.title}"</p>
        <p className="mb-6 text-gray-600 flex-grow">"{story.snapshot}"</p>
        <button
            onClick={() => onReadMore(story)}
            className="mt-auto bg-[#B48A6E] text-white font-bold py-2 px-6 rounded-full hover:bg-[#a57b60] transition-colors duration-300 shadow-md">
            Read Full Story
        </button>
    </div>
);


const OurStory: React.FC<OurStoryProps> = ({ onReadMore }) => {
    return (
        <Section id="story" title="Our Story">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <StoryCard story={STORIES.groom} onReadMore={onReadMore} />
                <StoryCard story={STORIES.bride} onReadMore={onReadMore} />
            </div>
        </Section>
    );
};

export default OurStory;
