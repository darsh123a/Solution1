import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext.jsx";

const ExtensionHeader = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex w-full h-20 rounded-2xl justify-between items-center px-4 
      transition-all duration-300 
      ${
        theme === "light"
          ? "bg-white text-black  shadow-xl"
          : "bg-gray-800 text-white"
      }`}
    >
      {/* LEFT SECTION */}
      <div className="flex flex-row items-center gap-2">
        <img
          src="/favicon-32x32.png"
          alt="missing"
          className="w-11 h-11 text-red-500"
        />
        <h3 className="text-xl  font-bold ">Extensions</h3>
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
          src={theme === "light" ? "/icon-moon.svg" : "/icon-moon.svg"}
          alt="icon"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
};

export default ExtensionHeader;
