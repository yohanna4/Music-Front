import React, { useRef, useState } from 'react';
import play from '../assets/image/play-button.png';
import pause from '../assets/image/pause-button.png';

export const Audio = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [clicked, setClicked] = useState(false);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setClicked(true);
        }
    };

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setClicked(false);
        }
    };
    return (
        <div>
            <audio ref={audioRef}>
                Your browser does not support the audio element.
            </audio>
            <div className="fixed right-5 z-10 bottom-5">
                <button className="w-16 h-16 rounded-full text-white flex items-center justify-center" onClick={!clicked ? handlePlay : handlePause}>
                    <img src={!clicked ? play : pause} alt="icon" />
                </button>
            </div>
        </div>
    );
};
