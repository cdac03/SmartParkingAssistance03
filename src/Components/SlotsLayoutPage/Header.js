import React from "react";

const Header = ({ timeSlot, setTimeSlot, hours, setHours }) => {
  const timeOptions = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const ampm = i < 12 ? "AM" : "PM";
    return `${hour}:00 ${ampm}`;
  });

  const handleHoursChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0) {
      setHours(value);
    }
  };

  return (
    <div className="header flex justify-between items-center p-2.5 bg-[#f0816d] border-b border-[#ccc] pl-16 sm:pl-2.5">
      <div className="time-slot flex items-center">
        <label htmlFor="time-slot">Time Slot</label>
        <select
          className="ml-2.5 p-1 border border-[#ccc] rounded bg-white"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        >
          {timeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="hours flex items-center">
        <label htmlFor="hours">Hours</label>
        <input
          className="ml-2.5 p-1 border border-[#ccc] rounded w-[60px] bg-white"
          type="number"
          value={hours}
          onChange={handleHoursChange}
        />
      </div>
    </div>
  );
};

export default Header;