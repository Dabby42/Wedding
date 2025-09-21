
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Groomsmen from './components/Groomsmen';
import Bridesmaids from './components/Bridesmaids';
import EventDetails from './components/EventDetails';
import Accommodations from './components/Accommodations';
import Gallery from './components/Gallery';
import Registry from './components/Registry';
import FunStuff from './components/FunStuff';
import FAQ from './components/FAQ';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Modal from './components/Modal';
import AudioPlayer from './components/AudioPlayer';
import FallingPetals from './components/FallingPetals';
import { Story, GalleryImage } from './types';
import { TOAST_MESSAGE } from './constants';

const App: React.FC = () => {
    const [storyModalContent, setStoryModalContent] = useState<Story | null>(null);
    const [galleryModalContent, setGalleryModalContent] = useState<GalleryImage | null>(null);

    const openStoryModal = (story: Story) => {
        setStoryModalContent(story);
    };

    const openGalleryModal = (image: GalleryImage) => {
        setGalleryModalContent(image);
    };

    const closeModal = () => {
        setStoryModalContent(null);
        setGalleryModalContent(null);
    };

    return (
        <div className="bg-[#FFF8F0] text-[#4B3F3C]">
            <Header />
            <FallingPetals />
            <main>
                <Hero />
                <div className="text-center px-4 py-16 bg-[#FFF8F0]/80 backdrop-blur-sm">
                    <p className="max-w-3xl mx-auto text-xl italic leading-relaxed text-[#6d5d5a]">
                        "{TOAST_MESSAGE.text}"
                    </p>
                    <p className="mt-4 font-bold text-lg text-[#B48A6E]">
                        {TOAST_MESSAGE.verses}
                    </p>
                </div>
                <OurStory onReadMore={openStoryModal} />
                <Groomsmen />
                <Bridesmaids />
                <EventDetails />
                <Accommodations />
                <Gallery onImageClick={openGalleryModal} />
                <Registry />
                <FunStuff />
                <FAQ />
                <RSVP />
            </main>
            <Footer />
            <AudioPlayer />
            
            {storyModalContent && (
                <Modal isOpen={!!storyModalContent} onClose={closeModal}>
                    <div className="p-2">
                        <h3 className="text-3xl font-bold text-[#B48A6E] mb-4">{storyModalContent.title}</h3>
                        <p className="text-lg font-semibold mb-4">A story by {storyModalContent.name}</p>
                        <div className="text-left whitespace-pre-wrap max-h-[60vh] overflow-y-auto pr-4 text-gray-700">
                            {storyModalContent.fullStory}
                        </div>
                    </div>
                </Modal>
            )}

            {galleryModalContent && (
                 <Modal isOpen={!!galleryModalContent} onClose={closeModal}>
                    <img src={galleryModalContent.src} alt={galleryModalContent.alt} className="max-w-full max-h-[80vh] rounded-lg shadow-xl"/>
                    <p className="text-center mt-2 text-white italic">{galleryModalContent.alt}</p>
                </Modal>
            )}
        </div>
    );
};

export default App;