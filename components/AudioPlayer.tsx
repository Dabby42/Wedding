import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon, AUDIO_BASE64 } from '../constants';

const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // This check ensures the developer has replaced the placeholder.
    const isAudioConfigured = AUDIO_BASE64 && !AUDIO_BASE64.startsWith('PASTE_YOUR_BASE64');

    useEffect(() => {
        if (!isAudioConfigured) {
            console.warn("AudioPlayer is disabled. To enable music, please follow the instructions in 'constants.tsx' to embed your audio file as a Base64 string.");
            return;
        }

        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleError = () => {
             console.error("Audio playback error. The Base64 data might be corrupted or in an unsupported format.");
        };

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('error', handleError);
        };
    }, [isAudioConfigured]);

    const togglePlayPause = () => {
        if (!isAudioConfigured) return;
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            audio.play().catch(error => {
                console.error("Audio playback failed. This often requires a user interaction (like a click) to start for the first time.", error);
            });
        } else {
            audio.pause();
        }
    };
    
    // Do not render the component at all if audio is not configured.
    if (!isAudioConfigured) {
        return null;
    }
    
    // Construct the data URI from the Base64 string.
    const audioSrc = `data:audio/mpeg;base64,${AUDIO_BASE64}`;

    return (
        <>
            <audio ref={audioRef} src={audioSrc} loop preload="auto" />
            <div className="fixed bottom-5 right-5 z-50">
                <div className="relative w-12 h-12">
                    {!isPlaying && (
                        <div 
                            className="absolute inset-0 rounded-full bg-[#B48A6E] animate-pulse-slow"
                            aria-hidden="true"
                        ></div>
                    )}
                    <button
                        onClick={togglePlayPause}
                        className="relative w-full h-full flex items-center justify-center bg-[#B48A6E] text-white rounded-full shadow-lg hover:bg-[#a57b60] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B48A6E]"
                        aria-label={isPlaying ? "Pause music" : "Play music"}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                </div>
            </div>
        </>
    );
};

export default AudioPlayer;