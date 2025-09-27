
export interface Story {
    name: string;
    title: string;
    snapshot: string;
    fullStory: string;
}

export interface GalleryImage {
    src: string;
    alt: string;
}

export interface Groomsman {
    name: string;
    imgSrc: string;
}

export interface Bridesmaid {
    name: string;
    imgSrc: string;
}

export interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface TriviaQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface WordScramble {
    scrambled: string;
    correct: string;
}