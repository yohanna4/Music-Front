import { useAppSelector } from "../features/hooks";
import { statisticsSelector } from "../features/store";

const StatisticsPage = () => {
  const { statistics, isLoading } = useAppSelector(statisticsSelector);
  let content;
  if (isLoading) {
    return <h1>is loading .....</h1>;
  } else if (!isLoading && statistics.length > 0) {
    content = (
      <>
        <div className="grid w-5/6 mx-auto grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8 gap-x-10 ">
          <div className="relative flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-mainColor bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightMain p-3">
                <span className="flex items-center text-brand-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">Songs</p>
              <h4 className="text-xl font-bold text-navy-700 ">
                {statistics[0].totalSongs}
              </h4>
            </div>
          </div>
          <div className="relative flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-mainColor bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightMain p-3">
                <span className="flex items-center text-brand-500 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                Artists
              </p>
              <h4 className="text-xl font-bold text-navy-700 ">
                {statistics[0].totalArtists}
              </h4>
            </div>
          </div>
          <div className="relative flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-mainColor bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightMain p-3">
                <span className="flex items-center text-brand-500 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                Albums
              </p>
              <h4 className="text-xl font-bold text-navy-700 ">
                {statistics[0].totalAlbums}
              </h4>
            </div>
          </div>
          <div className="relative flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-mainColor bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightMain p-3">
                <span className="flex items-center text-brand-500 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">Genre</p>
              <h4 className="text-xl font-bold text-navy-700 ">
                {statistics[0].totalGenres}
              </h4>
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-8">
          <div className="w-full  max-w-64 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white border border-secondColor">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      Songs by Genre
                    </h3>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full border-collapse text-blueGray-700  ">
                  <tbody>
                    {Object.entries(statistics[0].songsByGenre).map(
                      ([genre, count]) => (
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {genre}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            {count}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-full  px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white border border-secondColor">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      Songs and Albums by Artist
                    </h3>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full border-collapse text-blueGray-700  ">
                  <tbody>
                    {Object.entries(statistics[0].songsAndAlbumsByArtist).map(
                      ([artist, { totalSongs, totalAlbums }]) => (
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {artist}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            {`${totalSongs} ${
                              totalSongs > 1 ? "songs" : "song"
                            }, ${totalAlbums} ${
                              totalAlbums > 1 ? "albums" : "album"
                            }`}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="w-full  max-w-72 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white border border-secondColor ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      Songs in Each Album
                    </h3>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full border-collapse text-blueGray-700  ">
                  <tbody>
                    {Object.entries(statistics[0].songsInEachAlbum).map(
                      ([album, count]) => (
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {album}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            {count}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  console.log(statistics);

  return (
    <div className="flex flex-col md:pt-5 mx-10 lg:mx-24 justify-start">
      <h3 className="mt-10 text-4xl font-semibold">Statistics</h3>
      <div className="mt-10">{content}</div>
    </div>
  );
};

export default StatisticsPage;
