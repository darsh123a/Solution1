import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

const MainHeader = ({ Filter }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex md:flex-row flex-col w-auto h-auto rounded-2xl 
      justify-between items-center p-4 mt-10 transition-all duration-300
      ${
        theme === "light"
          ? "bg-white text-black shadow-md"
          : "bg-gray-700 text-white"
      }`}
    >
      <h1 className="text-4xl font-semibold">Extension List</h1>

      <div className="flex gap-4 justify-center mt-2">
        <button
          className={`h-11 w-17  px-4 rounded-3xl transition  bg-gray-800 active:bg-gray-600
          ${
            theme === "light"
              ? "bg-gray-200 text-black"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => Filter("all")}
        >
          All
        </button>

        <button
          className={`h-11 w-20 px-4 rounded-2xl  transition  bg-red-500  active:bg-red-400
          ${
            theme === "light"
              ? "bg-red-200 text-black"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => Filter("active")}
        >
          Active
        </button>

        <button
          className={`h-11 w-20 px-4 rounded-2xl transition  bg-gray-800 active:bg-gray-600
          ${
            theme === "light"
              ? "bg-gray-200 text-black"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => Filter("inactive")}
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
