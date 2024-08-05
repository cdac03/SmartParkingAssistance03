import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import ButtonWithIcons from "./ButtonWithIcons ";
// import "../utils/JumbotronWithNavbar.css";

const JumbotronWithNavbar = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-gray-600 text-black pt-[2px] pl-10 pr-10 rounded-xl shadow-lg w-[900px] max-w-full h-[600px]">
        <div>
          <Navbar expand="lg" className="mt-0 bg-gray-600 ">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="ml-4">
              <Nav className="ml-auto flex items-center space-x-4">
                <Nav.Link href="#home" className="text-white p-5">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="text-white p-5">
                  About
                </Nav.Link>
                <Nav.Link href="#contact" className="text-white p-5">
                  Contact
                </Nav.Link>
                <NavLink>
                  <Nav.Item className="ml-[440px]">
                    <img
                      src="https://via.placeholder.com/40" // Replace with your profile image URL
                      alt="Profile"
                      className="w-10 h-10 rounded-full ml-auto" // Tailwind classes for circular image
                    />
                  </Nav.Item>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="mt-4">
          <h1 className="text-4xl mb-4 text-white">Find Your</h1>
          <h1 className="font-bold text-4xl mb-4 text-white">Parking Space</h1>
          <div className="flex space-x-4 mt-10">
            <ButtonWithIcons Vname="Bike" />
            <ButtonWithIcons Vname="Car" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumbotronWithNavbar;
