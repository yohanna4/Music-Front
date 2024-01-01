import React, { useState, useRef } from "react";
import vivaldi from "../assets/audio/Vivaldi.mp3";
import piano from "../assets/audio/Piano.m4a";
import motzart from "../assets/audio/Mozart.m4a";

const albums = [
  {
    id: 1,
    title: "Seasons: spring",
    artist: "Vivaldi",
    image: "https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png",
    audio: vivaldi,
  },
  {
    id: 3,
    title: "Eine Kleine Nachtmusik",
    artist: "Wolfgang Motzart",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg",
    audio: motzart,
  },
];

const AlbumGrid = () => {
  const [currentSong, setCurrentSong] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = (audio: string) => {
    setCurrentSong(audio);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-16">
      {albums.map((album) => (
        <div
          key={album.id}
          className="border border-secondColor shadow-lg rounded p-3 max-h-56 flex flex-row"
        >
          <div className="group relative w-48 max-h-56">
            <img
              className="w-full md:w-72 block rounded max-h-48"
              src={album.image}
              alt=""
            />
            <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
              <button
                className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                onClick={() =>
                  isPlaying && currentSong === album.audio
                    ? handlePause()
                    : handlePlay(album.audio)
                }
              >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
              </button>
            </div>
          </div>
          <div className="p-5 flex flex-col items-start">
            <h3 className="text-gray-400 text-lg ml-3">{album.title}</h3>
            <p className="text-gray-400 ml-3">{album.artist}</p>
            {currentSong === album.audio && (
              <audio
                ref={audioRef}
                controls
                autoPlay={isPlaying}
                src={currentSong}
                className="mt-5"
              >
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AlbumGrid;
