import React from "react";
const Footer = () => {
  return (
    <div className="footer mt-auto flex justify-between items-center p-[10px_20px] bg-[#f0816d] text-white">
      <div className="settings flex items-center">
        <i className="fas fa-cog ml-2.5 cursor-pointer"></i>
      </div>
      <div className="save flex items-center bg-[#f12409] text-white rounded p-[5px_10px] cursor-pointer transition duration-300 ease-in-out hover:bg-[#962d2d]">
        <span>Save</span>
        <i className="fas fa-save ml-2.5 cursor-pointer"></i>
      </div>
    </div>
  );
};
export default Footer;
