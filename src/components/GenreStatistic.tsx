import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/image/music.png';
import img2 from '../assets/image/guitar.png';
import img3 from '../assets/image/artist1.png';
import img4 from '../assets/image/artist2.png';
import { genreSelector } from '../redux/store';
import { useAppSelector } from '../redux/hooks';
import LoadingScreen from './LoadingScreen';

export const GenreStatistic = () => {
    const { genres, isLoading } = useAppSelector(genreSelector);

    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (event: any) => {
        setSearchInput(event.target.value);
    };
    let content;
    if (isLoading) {
        return <LoadingScreen />;
    } else if (!isLoading && genres.length > 0) {
        let filteredGenre = genres.filter((genre) => genre.genre.toLowerCase().includes(searchInput.toLowerCase()));

        content = (
            <div className="flex flex-wrap gap-6 md:gap-0 -mx-2 mb-10">
                {filteredGenre.length === 0 ? (
                    <h1 className="text-2xl font-semibold text-center w-full">No Genre Found</h1>
                ) : (
                    filteredGenre.map(
                        (item, index) =>
                            item && (
                                <div className="w-full md:w-1/2 md:mt-4 lg:w-1/3 h-auto px-4" key={index}>
                                    <div
                                        className="
          p-4
          pt-9
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
          flex-col
          justify-center
          relative
          group
          overflow-hidden
          rounded
        "
                                    >
                                        <h4 className="relative z-10 font-semibold font-raleway text-2xl text-dark mb-3">{item.genre}</h4>
                                        <div className=" relative z-10 w-1/3 h-1 bg-secondColor mb-4" />
                                        <p className=" relative z-10 text-body-color text-sm font-poppins">Songs: {item.songCount}</p>
                                        <img
                                            className=" absolute z-0 top-0 left-0 invisible object-center object-cover group-hover:visible h-full w-full bg-black transition duration-200 ease-in-out group-hover:brightness-50 group-hover:opacity-80 group-hover:scale-110"
                                            src={index % 2 === 0 ? img : img2}
                                            alt="img"
                                        />
                                        <div className="absolute right-0 bottom-10 w-16 h-16 flex justify-center rounded-full top-0">
                                            <img
                                                src={index % 2 === 0 ? img4 : img3}
                                                alt=""
                                                onClick={() => {
                                                    console.log(item);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                    )
                )}
            </div>
        );
    }
    return (
        <div className=" relative w-5/6 items-center object-center mx-auto px-4 pt-10 pb-15 mb-10">
            <div className=" pb-12">
                <h1 className="font-bold pt-10 lg:pt-0 text-mainColor font-railway-500 text-3xl pb-10 underline-offset-2">Genre</h1>
                <h3 className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates praesentium possimus ex quisquam placeat totam officiis atque facere deserunt sint, debitis, tempore
                    assumenda dignissimos error! Earum veniam error asperiores.
                </h3>
            </div>
            <div>
                <div className="absolute top-6 right-1">
                    <div className="relative mx-auto w-max">
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <>{content}</>
            </div>
        </div>
    );
};
