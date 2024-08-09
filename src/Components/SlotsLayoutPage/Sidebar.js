import React, { useState } from "react";

const Sidebar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          className="sm:hidden fixed top-2 left-4 z-50 p-2 text-xl bg-[#f0816d] text-white rounded"
          onClick={toggleSidebar}
        >
          <i className="fas fa-bars"></i> {/* Open icon when the sidebar is closed */}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[200px] bg-[#ff4b2b] text-white flex flex-col p-5 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:relative sm:w-[300px] sm:translate-x-0`}
      >
        {/* Close button */}
        <button
          className="sm:hidden absolute top-4 right-4 p-2 bg-[#ff4b2b] text-white rounded"
          onClick={toggleSidebar}
        >
          <i className="fas fa-times"></i> {/* Close icon */}
        </button>

        <div className="logo mb-5 text-2xl font-bold">
          <p>SPA</p>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className="sidebar-item flex items-center mb-2.5 cursor-pointer transition duration-300 ease-in-out  hover:bg-gray-800 py-1"
          >
            <i className={`fas ${item.icon} mr-2.5`}></i>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;