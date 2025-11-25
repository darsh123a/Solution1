import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

const MainHeader = ({ Filter }) => {
  const { theme } = useContext(ThemeContext);

  // Track which button is active
  const [selected, setSelected] = useState("all");

  // Header background + text
  const headerClasses =
    theme === "light"
      ? "bg-gray-200 text-white shadow-md"
      : "bg-gray-700 text-white";

  // Button base
  const buttonBase = "h-11 px-4 rounded-3xl transition font-medium border-2";

  const buttonLight =
    "text-white bg-gray-500 active:bg-gray-400 border-gray-400";
  const buttonDark =
    "text-white bg-gray-800 active:bg-gray-600 border-gray-500";

  // Special styling for ALWAYS-RED Active Button
  const activeBtnAlways =
    "text-white bg-red-500 border-red-500 active:bg-red-400";

  // Border red when selected
  const selectedBorder = "border-red-500";

  return (
    <div
      className={`flex md:flex-row flex-col w-auto h-auto rounded-2xl 
        justify-between items-center p-4 mt-10 transition-all duration-300
        ${headerClasses}`}
    >
      <h1 className="text-4xl font-semibold">Extension List</h1>

      <div className="flex gap-4 justify-center mt-2">
        {/* All button */}
        <button
          className={`${buttonBase} ${
            selected === "all" ? selectedBorder : ""
          } ${theme === "light" ? buttonLight : buttonDark}`}
          onClick={() => {
            setSelected("all");
            Filter("all");
          }}
        >
          All
        </button>

        {/* Active button (ALWAYS RED) */}
        <button
          className={`${buttonBase} rounded-2xl ${activeBtnAlways} ${
            selected === "active" ? selectedBorder : ""
          }`}
          onClick={() => {
            setSelected("active");
            Filter("active");
          }}
        >
          Active
        </button>

        {/* Inactive button */}
        <button
          className={`${buttonBase} rounded-2xl ${
            selected === "inactive" ? selectedBorder : ""
          } ${theme === "light" ? buttonLight : buttonDark}`}
          onClick={() => {
            setSelected("inactive");
            Filter("inactive");
          }}
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
