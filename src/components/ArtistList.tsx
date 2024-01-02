import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { songSelector } from "../features/store";
import { useAppSelector } from "../features/hooks";
import LoadingScreen from "./LoadingScreen";

interface Song {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  }

  interface ArtistInfo {
    artist: string;
    songCount: number;
    albumCount: number;
}
  
export const ArtistList = () => {
    const [searchInput, setSearchInput] = useState("");
  const { songs, isLoading } = useAppSelector(songSelector);

  const handleSearchInput = (event: any) => {
    setSearchInput(event.target.value);
  };
  let content;
  if (isLoading) {
    return <LoadingScreen />;
  } else if (!isLoading && songs.length > 0) {
    let artistMap: { [key: string]: { songs: Set<string>, albums: Set<string> } } = {};

    for (let song of songs) {
        if (!artistMap[song.artist]) {
            artistMap[song.artist] = { songs: new Set(), albums: new Set() };
        }
        artistMap[song.artist].songs.add(song.title);
        artistMap[song.artist].albums.add(song.album);
    }
    
    let result: ArtistInfo[] = [];
    
    for (let artist in artistMap) {
        result.push({
            artist: artist,
            songCount: artistMap[artist].songs.size,
            albumCount: artistMap[artist].albums.size
        });
    }
    // content = (
    //   <div className="flex flex-col gap-6 md:gap-0 -mx-2 mb-10">
    //     {result.length === 0 ? (
    //       <h1 className="text-xl font-semibold text-center w-full mt-10 text-red-500">
    //         No Music Found
    //       </h1>
    //     ) : (
          
    //             {result.map(
    //               (item: Song, index: number) =>
    //                 item &&
    //                 item.title.charAt(0).toUpperCase() === letter && (
    //                   <div className="w-full h-auto" key={`${letter}-${index}`}>
    //                     <div
    //                       className="
    //       px-4
    //       py-2
    //       mt-2
    //       h-full
    //       md:px-7
    //       xl:px-10
    //       bg-white
    //       shadow-md
    //       border
    //       border-custumBlue
    //       transition duration-300 ease-in-out
    //       flex
    //       flex-row
    //       justify-between
    //       relative
    //       group
    //       overflow-hidden
    //       rounded-lg
    //     "
    //                     >
    //                       <h4 className="relative z-10 font-raleway text-md text-dark w-36 text-left">
    //                         {item.title}
    //                       </h4>
    //                       <p className=" relative z-10 text-body-color text-md font-poppins w-36 text-left ">
    //                         {item.artist}
    //                       </p>
    //                       <p className=" relative z-10 text-body-color text-md font-poppins  w-48 text-left ">
    //                         {item.album}
    //                       </p>
    //                       <p className=" relative z-10 text-body-color text-md font-poppins  w-24 text-left ">
    //                         {item.genre}
    //                       </p>
    //                     </div>
    //                   </div>
    //                 )
    //             )}
          
    //     )}
    //   </div>
    // );
  }
    return (
        <div className=" relative w-5/6 items-center object-center px-4 pt-10 pb-15 mb-10  mx-10 lg:mx-24">
      <div>
        <div className="absolute top-6 right-1">
          <div className="relative w-max  mx-10 lg:mx-24">
            <input
              type="text"
              id="topbar-search"
              className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-mainColor focus:pl-16 focus:pr-4"
              value={searchInput}
              onChange={handleSearchInput}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-mainColor peer-focus:stroke-mainColor"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <>{content}</>
      </div>
    </div>
    );
};
