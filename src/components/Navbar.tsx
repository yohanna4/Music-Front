import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../assets/image/logo.png";

interface Link {
  path: string;
  label: string;
}

const links: Link[] = [
  { path: "/", label: "Home" },
  { path: "/music", label: "Music" },
  { path: "/statistics", label: "Statistics" },
];

export const Navbar = () => {
  const [showContent, setShowContent] = useState(false);
  const handleButtonClick = () => {
    setShowContent(!showContent);
  };
  return (
    <div className="sticky top-0 z-30">
      <nav className="flex ">
        <div className="md:flex md-flex-col w-full relative h-16 text-sm items-center justify-between px-8 py-2 font-poppins font-medium text-black shadow-xl bg-white">
          <div className="flex items-center justify-center gap-4">
            <div className=" w-12 h-12">
              <img src={logo} alt="logo" className="w-24" />
            </div>
            <span className="font-bold font-raleway text-xl text-black">
              Music Library
            </span>
          </div>
          <div
            className={`md:flex md-flex-col relative gap-8 mt-0 md:mt-0 ${
              showContent ? "md:bg-transparent mt-[70px] md:mt-0  md:py-0" : ""
            }`}
          >
            {links.map((link) => (
              <div key={link.label} className="">
                <div
                  className={` transition-all duration-500 transform md:flex ${
                    showContent
                      ? "flex flex-col bg-secondColor md:bg-transparent relative justify-center items-center translate-y-0"
                      : "hidden"
                  }`}
                >
                  <NavLink
                    className="hover:text-mainColor duration-300 ease-in-out text-black py-6 md:text-black md:py-5"
                    to={link.path}
                    onClick={handleButtonClick}
                  >
                    {link.label}
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:hidden absolute text-lg text-black right-6 top-6 justify-end">
          <button type="button" className="text-lg" onClick={handleButtonClick}>
            {!showContent ? <GiHamburgerMenu /> : <IoCloseSharp />}
          </button>
        </div>
      </nav>
    </div>
  );
};
