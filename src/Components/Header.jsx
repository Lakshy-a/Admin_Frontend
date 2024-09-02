/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import admin from "../assets/admin.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center border-2 border-gray-200 rounded-md px-4">
          <input
            type="text"
            placeholder="Search here..."
            className="w-72 p-2 focus:outline-none"
          />
          <span className="material-symbols-outlined cursor-pointer">
            search
          </span>
        </div>

        <span className="flex justify-center items-center material-symbols-outlined cursor-pointer">
          language
        </span>

        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={toggleDropdown}
        >
          notifications_active
        </span>

        <span className="material-symbols-outlined cursor-pointer">
          chat_bubble
        </span>

        <span className="material-symbols-outlined cursor-pointer">
          grid_view
        </span>

        <div className="cursor-pointer flex items-center border-gray-200 border-2 rounded-lg px-2">
          <img className="w-24 h-16 rounded-full" src={admin} alt="Profile" />
          <span className="ml-4 text-lg font-bold">
            Kristin Watson <br />
            (Admin)
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
