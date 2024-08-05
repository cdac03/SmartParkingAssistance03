import React from "react";

const ButtonGroup = ({ vehicle, handleButtonClick }) => {
  return (
    <div className="flex p-4 bg-gray-200 border-b border-gray-300">
      <button
        className={`btn mr-2 p-2 flex items-center cursor-pointer text-white rounded transition-colors duration-300 ${
          vehicle === "car" ? "bg-yellow-300" : "bg-gray-800"
        }`}
        onClick={() => handleButtonClick("car")}
      >
        <i className="fas fa-car mr-2"></i>
        <span>CAR</span>
      </button>
      <button
        className={`btn p-2 flex items-center cursor-pointer text-white rounded transition-colors duration-300 ${
          vehicle === "bike" ? "bg-yellow-300" : "bg-gray-800"
        }`}
        onClick={() => handleButtonClick("bike")}
      >
        <i className="fas fa-motorcycle mr-2"></i>
        <span>BIKE</span>
      </button>
    </div>
  );
};

export default ButtonGroup;
