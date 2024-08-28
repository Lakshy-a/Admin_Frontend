/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import admin from "../assets/admin.png";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    console.log("Dark mode:", isDarkMode);
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <header className="bg-white dark:bg-black shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center border-2 border-gray-200 dark:border-gray-600 rounded-md px-4">
          <input
            type="text"
            placeholder="Search here..."
            className="w-72 p-2 focus:outline-none dark:bg-gray-800 dark:text-white"
          />
          <span className="material-symbols-outlined cursor-pointer dark:text-white">
            search
          </span>
        </div>

        <span className="flex justify-center items-center material-symbols-outlined cursor-pointer dark:text-white">
          language
        </span>

        <span
          className="darkMode material-symbols-outlined cursor-pointer dark:text-white"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "light_mode" : "dark_mode"}
        </span>

        <span className="material-symbols-outlined cursor-pointer dark:text-white">
          notifications_active
        </span>

        <span className="material-symbols-outlined cursor-pointer dark:text-white">
          chat_bubble
        </span>

        <span className="material-symbols-outlined cursor-pointer dark:text-white">
          grid_view
        </span>

        <div className="cursor-pointer flex items-center border-gray-200 dark:border-gray-600 border-2 rounded-lg px-2">
          <img className="w-24 h-16 rounded-full" src={admin} alt="Profile" />
          <span className="ml-4 text-lg font-bold dark:text-white">
            Kristin Watson <br />
            (Admin)
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
