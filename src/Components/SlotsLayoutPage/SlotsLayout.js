import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "../../utils/SlotsLayout.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ButtonGroup from "./ButtonGroup";
import Grid from "./Grid";
import Footer from "./Footer";

const SlotsLayout = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [hours, setHours] = useState(1);

  const sidebarItems = [
    { icon: "fa-home", text: "Home" },
    { icon: "fa-parking", text: "Slots" },
    { icon: "fa-user", text: "Profile" },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50">
      <Sidebar items={sidebarItems} />
      <div className="flex-grow flex flex-col bg-white">
        <Header
          timeSlot={timeSlot}
          setTimeSlot={setTimeSlot}
          hours={hours}
          setHours={setHours}
        />
        <ButtonGroup vehicle={vehicle} handleButtonClick={setVehicle} />
        <Grid
          vehicle={vehicle}
          activeItem={activeItem}
          handleGridItemClick={setActiveItem}
        />
        <Footer />
      </div>
    </div>
  );
};

export default SlotsLayout;
