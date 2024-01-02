import { useState } from "react";
import { SongList } from "../components/SongList";

const ListItem = ({
  item,
  onClick,
  selected,
}: {
  item: string;
  onClick: (item: string) => void;
  selected: boolean;
}) => (
  <li
    className="cursor-pointer text-2xl flex items-center flex-col"
    onClick={() => onClick(item)}
  >
    <div
      className={`cursor-pointer text-lg lg:text-xl font-semibold ${
        selected ? "" : ""
      }`}
    >
      {item}
    </div>
    {selected && (
      <div className="bg-orange-500 h-1 mb-1 mt-1 w-5 place-self-center rounded-sm"></div>
    )}
  </li>
);

const MusicPage = () => {
  const [selectedItem, setSelectedItem] = useState("Songs");
  const items = [
    "Songs",
    // "Artists",
    //  "Albums",
  ];
  return (
    <div>
      <div className="flex flex-row w-11/12 lg:w-5/6 mx-auto mt-10 items-start px-10 lg:px-24">
        <h2 className="text-xl lg:text-4xl font-semibold mr-5 lg:mr-5">
          Music
        </h2>
        <ul className="flex row gap-x-5  lg:gap-x-10">
          {items.map((item) => (
            <ListItem
              key={item}
              item={item}
              onClick={setSelectedItem}
              selected={item === selectedItem}
            />
          ))}
        </ul>
      </div>

      <div className="flex justify-center">{selectedItem === "Songs" && <SongList />}</div>
    </div>
  );
};

export default MusicPage;
