import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const ButtonWithIcons = ({ Vname }) => {
  const icon = Vname === "Car" ? faCar : faMotorcycle;
  return (
    <div className="flex space-x-4 justify-center mt-10 ml-1">
      <button className="bg-yellow-500 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 w-30 h-30 hover:bg-yellow-600 transition duration-300">
        <FontAwesomeIcon icon={icon} className="w-6 h-6 mr-2" />

        {Vname}
      </button>
    </div>
  );
};

export default ButtonWithIcons;
