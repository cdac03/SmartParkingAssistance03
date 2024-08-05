import React from "react";

const Header = ({ timeSlot, setTimeSlot, hours, setHours }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-red-300 border-b border-gray-300">
      <div className="flex items-center">
        <label className="mr-2">Time Slot:</label>
        <select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="p-2 border border-gray-300 rounded bg-white"
        >
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
      <div className="flex items-center">
        <label className="mr-2">Hours:</label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="p-2 border border-gray-300 rounded w-16 bg-white"
        />
      </div>
    </div>
  );
};

export default Header;
