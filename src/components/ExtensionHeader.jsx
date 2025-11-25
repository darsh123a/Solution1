import React, { useContext } from "react";
import moonIcon from "../assets/icon-moon.svg";
import faviconlogo from "../assets/favicon-32x32.png";
import sunIcon from "../assets/icon-sun.svg";
import { ThemeContext } from "./ThemeContext.jsx";

const ExtensionHeader = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex w-full h-20 rounded-2xl justify-between items-center px-4 
      transition-all duration-300 
      ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}
    >
      {/* LEFT SECTION */}
      <div className="flex flex-row items-center gap-2">
        <img src={faviconlogo} alt="missing" className="w-11 h-11" />
        <h3 className="text-lg font-semibold">Extensions</h3>
      </div>

      {/* THEME TOGGLE BUTTON */}
      {/* ?\hello */}
      <div
        className={`w-11 h-11 flex justify-center items-center rounded-xl cursor-pointer 
        transition-all duration-300
        ${theme === "light" ? "bg-gray-200" : "bg-gray-600"}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <img
          src={theme === "light" ? moonIcon : sunIcon}
          alt="icon"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
};

export default ExtensionHeader;
