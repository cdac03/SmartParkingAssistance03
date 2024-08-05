import React from "react";

const Sidebar = ({ items }) => {
  const renderSidebarItem = ({ icon, text }) => (
    <div
      className="sidebar-item flex items-center mb-2 cursor-pointer transition-colors duration-300 hover:bg-gray-700"
      key={text}
    >
      <i className={`fas ${icon} mr-2`}></i>
      <span>{text}</span>
    </div>
  );

  return (
    <div className="w-60 bg-red-500 text-white flex flex-col p-5">
      <div className="text-2xl font-bold mb-5">
        <p>SPA</p>
      </div>
      {items.map(renderSidebarItem)}
    </div>
  );
};

export default Sidebar;
