import React from 'react';
import { Story, GalleryImage } from './types';

export const BRIDE_NAME = "Chinaza Peace";
export const GROOM_NAME = "Daberechukwu Miracle";
export const WEDDING_DATE = "2025-12-13T10:00:00";

export const RSVP_SHEET_API_URL = process.env.RSVP_SHEET_API_URL;


export const TOAST_MESSAGE = {
  text: "In God's perfect timing, we have found each other, two hearts joined in love, strengthened by faith, friendship and God's presence. As we unite in this holy union, we invite you to celebrate the love that he has blessed and made beautiful.",
  verses: "[Songs of Solomon 3:4, Eccl 4:9-12]"
};

export const STORIES: { bride: Story; groom: Story } = {
  bride: {
    name: BRIDE_NAME,
    title: "His Peace, My Prayer Answered",
    snapshot: "I had always prayed to God for a partner who would bring peace... and God granted me a dream!",
    fullStory: `I had always prayed to God for a partner who would bring peace to everyone around us, and I patiently trusted His timing. Fast forward to the Hallelujah Challenge, where I heard someone share how a dream had come to pass in their life. It inspired me to ask God for a similar sign, just so I wouldn't be confused about whether this person was the one.

And God granted me that dream! I dreamed of this guy proposing to me, which was surprising because I barely knew him. We attended the same church, but we didn't really talk.

That very same day, after our workers' meeting, he stayed behind to help with some tasks—something he never did. And that’s when he approached me. From that moment on, everything just flowed effortlessly. It felt like a blessing from above, and we’ve been moving from glory to glory.

I realized through him that love is patient, kind, and full of grace. He listens, he corrects with love, and every moment with him has been a joy. I’m truly excited to spend my life with him.`
  },
  groom: {
    name: GROOM_NAME,
    title: "His Miracle, Divinely Orchestrated",
    snapshot: "My pastor gently encouraged me to 'look within'... and there she was.",
    fullStory: `I had always looked forward to marriage — it was a desire I carried in my heart and often lifted up in prayer. Everything about it fascinated me: watching married couples in church, listening to sermons on love, seeing my age mates build their homes, and even admiring couples like Lydia Stanley and her husband on YouTube. I cherished the beauty of love and longed for the day I would share it with someone special.

One day, I confided in my pastor about my intention to marry, though I wasn’t considering someone from the church. He gently encouraged me to “look within.” Sometime later, after a disappointment in a relationship outside the church, I returned to him. Again, he prayed for me and repeated the same words. As I stepped out, I went to attend to a small task in one of the rooms — and there she was.

She was someone I barely spoke to, but in that moment, I felt a strong nudge to start a conversation. I hesitated at first, then the feeling came again. I followed it — and that simple step opened the door to something beautiful. Without knowing her own prayers or dreams, God aligned our paths. Today, I am grateful for the divine orchestration that brought us together and for the love we now share.`
  }
};

export const EVENT_DETAILS = {
  ceremony: {
    title: "Wedding Ceremony",
    time: "10:00 AM",
    date: "Saturday, December 13, 2025",
    venue: "Salvation Ministries",
    address: "7a, afric road iponri, opp jubril martins school, surulere lagos",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Salvation+Ministries+surulere+lagos"
  },
  reception: {
    title: "Reception",
    time: "2:00 PM",
    date: "Saturday, December 13, 2025",
    venue: "The Chapel of Light",
    address: "University of Lagos, Akoka",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Chapel+of+Light+University+of+Lagos+Akoka"
  }
};

// Placeholder images inspired by the provided ones. Replace with actual image URLs when hosting.
export const GALLERY_IMAGES: GalleryImage[] = [
    { src: 'https://daberenexaabucket1.s3.us-east-2.amazonaws.com/posts/1755077144240-276dd8d6-4e33-453b-9b07-650237cba6c0-WhatsApp Image 2025-07-12 at 11.07.34 PM.jpeg', alt: 'A joyous celebration with friends and family.' },
    { src: 'https://daberenexaabucket1.s3.us-east-2.amazonaws.com/posts/1755077227419-276dd8d6-4e33-453b-9b07-650237cba6c0-WhatsApp Image 2025-07-12 at 11.08.03 PM.jpeg', alt: 'The happy couple sharing an embrace.' },
    { src: 'https://daberenexaabucket1.s3.us-east-2.amazonaws.com/posts/1755077619962-276dd8d6-4e33-453b-9b07-650237cba6c0-WhatsApp Image 2025-08-13 at 10.30.58 AM.jpeg', alt: 'A tender moment, the groom placing the ring.' },
    { src: 'https://daberenexaabucket1.s3.us-east-2.amazonaws.com/posts/1755077227421-276dd8d6-4e33-453b-9b07-650237cba6c0-WhatsApp Image 2025-07-12 at 11.41.57 PM.jpeg', alt: 'A beautiful hug under a shower of confetti.' },
    // { src: 'https://picsum.photos/seed/wedding1/800/1200', alt: 'A candid moment of laughter.' },
    // { src: 'https://picsum.photos/seed/wedding2/800/1200', alt: 'A look of love and admiration.' },
    // { src: 'https://picsum.photos/seed/wedding3/1200/800', alt: 'The couple walking hand-in-hand.' },
    // { src: 'https://picsum.photos/seed/wedding4/1200/800', alt: 'Sharing a quiet, happy moment together.' },
];

export const HERO_IMAGE_URL = 'https://daberenexaabucket1.s3.us-east-2.amazonaws.com/posts/1755077227420-276dd8d6-4e33-453b-9b07-650237cba6c0-WhatsApp Image 2025-07-12 at 11.41.46 PM.jpeg'; // Confetti hug image is perfect for the hero section

// SVG Icons as React Components
export const CarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
export const UtensilsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.45-6.893l10.9 0M2 12h20" /></svg>; // Simplified utensils
export const VacationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>; // Using map pin for vacation
export const ApplianceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 14" /></svg>; // abstract appliance icon
export const HouseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
export const GiftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z" /></svg>;
export const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
export const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

export const BANK_DETAILS = {
  local_groom: {
    bankName: "UBA",
    accountName: "Daberechukwu Miracle Nwafor",
    accountNumber: "2070800227"
  },
  local_bride: {
    bankName: "Wema",
    accountName: "Chinaza Peace Asomugha",
    accountNumber: "0280058007"
  },
  foreign: {
    bankName: "Foreign Bank (Details TBD)",
    accountName: "Account Name (TBD)",
    accountNumber: "Details coming soon"
  }
}