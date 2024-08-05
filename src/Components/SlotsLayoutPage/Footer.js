import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto flex justify-between items-center p-4 bg-red-300 text-white">
      <div className="flex items-center">
        <i className="fas fa-cog cursor-pointer"></i>
      </div>
      <div className="flex items-center bg-red-700 text-white rounded p-2 cursor-pointer transition-colors duration-300 hover:bg-red-800">
        <i className="fas fa-save mr-2"></i>
        <span>Save</span>
      </div>
    </div>
  );
};

export default Footer;
