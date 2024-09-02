/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import admin from "../assets/admin.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogOut = () => {
    navigate('/login');
  }

  return (
    <>
      <header className="bg-white shadow-md py-2 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center border-2 border-gray-200 rounded-md px-4 w-2/5">
          <input
            type="text"
            placeholder="Search here..."
            className="w-72 p-2 focus:outline-none "
          />
          <span className="material-symbols-outlined cursor-pointer">
            search
          </span>
        </div>

        <div className="flex gap-12 justify-end w-2/5	px-4">
          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            <span
              className="flex justify-center items-center material-symbols-outlined cursor-pointer text-xl"
              style={{
                backgroundImage:
                  'url("https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png")',
                width: "24px",
                height: "24px",
                display: "inline-block",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                textIndent: "-9999px", // This hides the text inside the span
              }}
            >
              language
            </span>
          </div>

          <div className="relative">
            <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center h-full">
              <span className="material-symbols-outlined cursor-pointer text-xl">
                notifications_active
              </span>
              <span className="animate-ping absolute top-0 right-0  ">
                <div className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  1
                </div>
              </span>
            </div>
          </div>

          <div className="bg-gray-200 relative px-5 py-2 rounded-full w-8 flex justify-center items-center h-full">
            <span className="material-symbols-outlined cursor-pointer text-xl">
              chat_bubble
            </span>
            <span className="animate-ping absolute top-0 right-0  ">
              <div className="bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5">
                1
              </div>
            </span>
          </div>

          <div className="bg-gray-200 px-3 rounded-full flex justify-center items-center">
            <span className="material-symbols-outlined cursor-pointer text-xl">
              grid_view
            </span>
          </div>
        </div>

        <div className="relative w-1/5">
          <div
            className="cursor-pointer flex items-center border-gray-100 border-2 rounded-lg px-2"
            onClick={toggleDropdown}
          >
            <img className="w-16 h-10 rounded-full" src={admin} alt="Profile" />
            <span className="ml-1 text-sm font-semibold">
              Kristin Watson <br />
              (Admin)
            </span>
          </div>

          {isDropdownOpen && (
            <div className="absolute mt-3 right-22 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-32 flex justify-start px-4">
              <ul className="py-2">
                <div className="flex items-center justify-start group hover:text-blue-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500">
                    person
                  </span>
                  <li className="px-2 py-2 text-sm font-medium group-hover:text-blue-500">
                    Account
                  </li>
                </div>
                <div className="flex items-center justify-between group hover:text-blue-500 cursor-pointer">
                  <div className="flex justify-center items-center">
                    <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500 ">
                      mail
                    </span>
                    <li className="px-2 py-2 text-sm font-medium group-hover:text-blue-500 ">
                      Inbox
                    </li>
                  </div>
                  <span className=" text-xs text-green-700  px-1 bg-green-200 rounded-full">
                    21
                  </span>
                </div>
                <div className="flex items-center justify-start  group hover:text-blue-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500">
                    description
                  </span>
                  <li className="px-2 py-2 text-sm font-medium group-hover:text-blue-500">
                    Taskboard
                  </li>
                </div>
                <div className="flex items-center justify-start  group hover:text-blue-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500">
                    settings
                  </span>
                  <li className="px-2 py-2 text-sm font-medium group-hover:text-blue-500">
                    Setting
                  </li>
                </div>
                <div className="flex items-center justify-start  group hover:text-blue-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500">
                    headphones
                  </span>
                  <li className="px-2 py-2 text-sm font-medium group-hover:text-blue-500">
                    Support
                  </li>
                </div>
                <div className="flex items-center justify-start  group hover:text-blue-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500">
                    logout
                  </span>
                  <li
                    className="px-2 py-2 text-sm font-medium group-hover:text-blue-500"
                    onClick={handleLogOut}
                  >
                    Log out
                  </li>
                </div>
              </ul>
            </div>
          )}
        </div>

        <div className="ml-4 cursor-pointer">
          <span className="material-symbols-outlined animate-spin duration-75 text-2xl">settings</span>
        </div>
      </header>
    </>
  );
};

export default Header;
