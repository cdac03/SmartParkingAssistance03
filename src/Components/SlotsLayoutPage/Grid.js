import React from "react";

const Grid = ({ vehicle, activeItem, handleGridItemClick }) => {
  return (
    <div className="flex flex-wrap gap-2 p-4 flex-grow overflow-auto bg-white">
      {Array.from({ length: 24 }, (_, index) => (
        <div
          key={index}
          className={`flex items-center justify-center p-4 bg-gray-100 border border-dotted border-gray-300 cursor-pointer transition-colors duration-300 ${
            activeItem === `A${index + 1}` ? "bg-yellow-200" : ""
          } flex-1 min-w-[100px]`}
          onClick={() => handleGridItemClick(`A${index + 1}`)}
        >
          <div className="flex items-center justify-center text-lg">
            {vehicle === "car" && <i className="fas fa-car mr-2"></i>}
            {vehicle === "bike" && <i className="fas fa-motorcycle mr-2"></i>}
            <span>{`A${index + 1}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
