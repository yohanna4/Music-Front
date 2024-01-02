import { useState } from "react";
import { Link } from "react-router-dom";
import background from "../assets/image/background.jpg";
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

export const SongList = () => {
  const [searchInput, setSearchInput] = useState("");
  const { songs, isLoading } = useAppSelector(songSelector);

  const handleSearchInput = (event: any) => {
    setSearchInput(event.target.value);
  };
  let content;
  if (isLoading) {
    return <LoadingScreen />;
  } else if (!isLoading && songs.length > 0) {
    let filteredSong: Song[] = songs.filter((song: Song) =>
      song.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    const alphabetSet: Set<string> = new Set();
    filteredSong.forEach((song: Song) => {
      const firstChar: string = song.title.charAt(0).toUpperCase();
      alphabetSet.add(firstChar);
    });

    const alphabetArray: string[] = Array.from(alphabetSet).sort();

    content = (
      <div className="flex flex-col gap-6 md:gap-0 -mx-2 mb-10">
        {filteredSong.length === 0 ? (
          <h1 className="text-xl font-semibold text-center w-full mt-10 text-red-500">
            No Music Found
          </h1>
        ) : (
          alphabetArray.map((letter: string) => (
            <div
              key={letter}
              className="flex items-center flex-col mx-5 w-full mt-6"
            >
              <div
                key={letter}
                className="flex justify-start w-11/12 lg:w-5/6  text-orange-500 mx-2"
              >
                <h2 className="text-2xl font-semibold">{letter}</h2>
              </div>
              <div className="w-11/12 lg:w-5/6 ">
                {filteredSong.map(
                  (item: Song, index: number) =>
                    item &&
                    item.title.charAt(0).toUpperCase() === letter && (
                      <div className="w-full h-auto" key={`${letter}-${index}`}>
                        <Link
                          to={`/details/${item._id}`}
                          className="
          px-4
          py-2
          mt-2
          h-full
          md:px-7
          xl:px-10
          bg-white
          shadow-md
          border
          border-custumBlue
          hover:shadow-lg
          hover:bg-customDark
          hover:text-white
          transition duration-300 ease-in-out
          flex
          flex-row
          justify-between
          relative
          group
          overflow-hidden
          rounded-lg
        "
                        >
                          <h4 className="relative z-10 font-raleway text-md text-dark w-36 text-left">
                            {item.title}
                          </h4>
                          <p className=" relative z-10 text-body-color text-md font-poppins w-36 text-left ">
                            {item.artist}
                          </p>
                          <p className=" relative z-10 text-body-color text-md font-poppins  w-48 text-left ">
                            {item.album}
                          </p>
                          <p className=" relative z-10 text-body-color text-md font-poppins  w-24 text-left ">
                            {item.genre}
                          </p>
                          <img
                            className=" absolute z-0 top-0 left-0 invisible object-center object-cover group-hover:visible h-full w-full bg-black transition duration-200 ease-in-out group-hover:brightness-50 group-hover:opacity-80 group-hover:scale-110"
                            src={background}
                            alt="img"
                          />
                        </Link>
                      </div>
                    )
                )}
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
  return (
    <div className=" relative w-5/6 items-center object-center px-4 pt-10 pb-15 mb-10  mx-10 lg:mx-24">
        <div className="flex justify-start items-start mx-12 lg:mx-28">
        <Link
          to="/new-song"
          className=" px-10 py-2  lg:mt-0 rounded text-white bg-secondColor font-railway-500 "
        >
          Add Song
        </Link>
        </div>
        <h3 className="mt-10  mx-10 lg:mx-24">
        Music is a powerful form of expression. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          voluptates praesentium possimus ex quisquam placeat totam officiis
          atque facere deserunt sint, debitis, tempore assumenda dignissimos
          error! Earum veniam error asperiores.
        </h3>
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
