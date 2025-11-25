import React from "react";

const Card = React.memo(({ data, ToggleActive, RemoveItem, index }) => {
  function handleToggle() {
    console.log("Toggling active state forvalue", data.isActive);
    ToggleActive(index);
  }
  return (
    <div className="rounded-2xl h-60 p-7 bg-slate-700 border border-gray-500 shadow-md hover:shadow-lg transition-shadow duration-200">
      {/* Content Wrapper */}
      <div className="flex flex-col justify-between h-full">
        {/* Top Row */}
        <div className="flex flex-row justify-between gap-4 mb-4">
          {/* Logo Section */}
          <div className="flex justify-center items-center">
            <img
              src={data.logo}
              alt="missing"
              className="w-20 h-20 rounded-xl bg-gray-800 p-2 shadow-inner"
            />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-2xl font-bold text-white">{data.name}</h1>
            <p className="text-sm text-gray-300 leading-snug mt-1">
              {data.description}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          {/* Remove Button */}
          <button
            className="border border-gray-400 bg-gray-700 hover:bg-red-500 hover:border-red-400 transition-all text-white h-10 px-4 text-sm rounded-xl shadow-sm"
            onClick={() => RemoveItem(index)}
          >
            Remove
          </button>

          {/* Toggle */}
          <div
            onClick={() => handleToggle()}
            className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
              data.isActive
                ? "bg-[#ff6b63] shadow-[0_0_10px_#ff6b63]"
                : "bg-gray-600"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transform transition-all duration-300 ${
                data.isActive ? "translate-x-6" : "translate-x-1"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
