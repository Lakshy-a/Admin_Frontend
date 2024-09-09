/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import admin from "../assets/admin.png";
import { useNavigate } from "react-router-dom";
import Notifications from "./Notifications";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCube } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import Messages from "./Messages";
import OtherApps from "./OtherApps";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = ({toggleDarkMode, darkMode}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationsOpen, setisNotificationsOpen] = useState(false);
  const [isChatOpen, setisChatOpen] = useState(false);
  const [isChatBubbleOpne, setisChatBubbleOpne] = useState(false);
  const [isOtherAppsOpen, setisOtherAppsOpen] = useState(false);
  const [isLanguageOpen, setisLanguageOpen] = useState(false);
  const navigate = useNavigate();

  const languageRef = useRef(null);

  const handleDarkModeToggle = () => {
    toggleDarkMode(!darkMode);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNotifications = () => {
    setisNotificationsOpen(!isNotificationsOpen);
  };

  const toggleOtherApps = () => {
    setisOtherAppsOpen(!isOtherAppsOpen);
  };

  const toggleLanguage = () => {
    setisLanguageOpen(!isLanguageOpen);
  };

  const toggleChat = () => {
    setisChatOpen(!isChatOpen);
  };

  const toggleChatBubble = () => {
    setisChatBubbleOpne(!isChatBubbleOpne);
  };

  const handleLogOut = () => {
    navigate("/login");
  };

  const handleClickOutside = (event) => {
    if (languageRef.current && !languageRef.current.contains(event.target)) {
      setisLanguageOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notificationsData = [
    {
      noticationsHeading: "Discount available",
      notificationsContent:
        "Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam",
      notificationIcon: <TbCircleDashedPercentage />,
      notificationIconColor: "#2275FC",
      notificationBackgroundColor: "#E9F2FF",
    },
    {
      noticationsHeading: "Account has been verified",
      notificationsContent: "Mauris libero ex, iaculis vitae rhoncus et",
      notificationIcon: <IoPersonAddSharp />,
      notificationIconColor: "#C489FF",
      notificationBackgroundColor: "#F4E9FF",
    },
    {
      noticationsHeading: "Order shipped successfully",
      notificationsContent:
        "Integer aliquam eros nec sollicitudin sollicitudin",
      notificationIcon: <IoMdCube />,
      notificationIconColor: "#22C55E",
      notificationBackgroundColor: "#E7FBEF",
    },
    {
      noticationsHeading: "Order pending: ID 305830",
      notificationsContent: "Ultricies at rhoncus at ullamcorper",
      notificationIcon: <TbTruckDelivery />,
      notificationIconColor: "#FF5200",
      notificationBackgroundColor: "#FFF3EE",
    },
  ];

  const messagesData = [
    {
      senderImage:
        "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXRzfGVufDB8fDB8fHww",
      senderName: "Ralph Edwards",
      message: "Hello?",
      messageTime: "10:13",
    },
    {
      senderImage:
        "https://images.unsplash.com/photo-1531369201-4f7be267b1de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
      senderName: "Cameron Williamson",
      message: "Are you there? interested i this...",
      messageTime: "11:13",
    },
    {
      senderImage:
        "https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs=",
      senderName: "Jane Cooper",
      message: "Okay...Do we have a deal?",
      messageTime: "9:49",
    },
    {
      senderImage:
        "https://images.unsplash.com/photo-1618306842557-a2515acf2112?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      senderName: "Eleanor Pena",
      message: "Interested in this loads?",
      messageTime: "1:13",
    },
  ];

  const appsData = [
    {
      appImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOggcxHxPZolo0bL9rWj5SeoMVbITg3uSzsA&s",
      appName: "Photoshop",
    },
    {
      appImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png",
      appName: "illustrator",
    },
    {
      appImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WjhJiLOw56zqVQCQTousWQOoUDEFSPmB0w&s",
      appName: "Sheets",
    },
    {
      appImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vtphMtxRWfK6nO2CIbGfSETyEs79Dr6oPw&s",
      appName: "Gmail",
    },
    {
      appImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkPYkg-TFl2I2r0t0ijNldV9egg6TAokDpA&s",
      appName: "Messanger",
    },
    {
      appImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2uGp15kWmKUPjFh7Qm8fGQOToEIPy97G0Q&s",
      appName: "Youtube",
    },
    {
      appImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwYFMZNauMZy3JwBP4UDVYldU_YGh0bzRYg&s",
      appName: "Salesforce",
    },
    {
      appImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmj7HvAkAMcpTEYrHFpx6w8AXCPDCwyJerw&s",
      appName: "Instagram",
    },
    {
      appImage:
        "https://play-lh.googleusercontent.com/kIwlXqs28otssKK_9AKwdkB6gouex_U2WmtLshTACnwIJuvOqVvJEzewpzuYBXwXQQ=w600-h300-pc0xffffff-pd",
      appName: "PDF",
    },
  ];

  return (
    <>
      <header className={`${!darkMode ? 'bg-white' : 'bg-[#1E293B] border-black'} shadow-md border-2 py-6 px-6 flex justify-between items-center overflow-y-auto`}>
        <div className={`flex justify-between items-center border-2 ${!darkMode ? 'border-gray-200' : 'border-gray-500'} rounded-md px-4 w-2/5`}>
          <input
            type="text"
            placeholder="Search here..."
            className={`w-72 p-2 focus:outline-none ${!darkMode ? 'bg-white' : 'bg-[#1E293B]'}`}
          />
          <span className={`material-symbols-outlined cursor-pointer ${!darkMode ? 'text-black' : 'text-white'}`}>
            search
          </span>
        </div>

        {/* language */}
        <div className="flex gap-8 justify-end w-2/5	px-4">
          <div ref={languageRef} className="">
            <div
              className={` ${!darkMode ? 'bg-blue-200 hover:bg-white' : 'bg-gray-500 hover:bg-black'} px-3 h-full rounded-full flex justify-center items-center cursor-pointer`}
              onClick={toggleLanguage}
            >
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
            {isLanguageOpen && (
              <div className={`absolute mt-3 ${!darkMode ? 'bg-white border border-gray-300' : 'bg-[#1E293B] border-black'} rounded-lg shadow-lg z-10 w-32`}>
                <ul className={`w-full px-2 py-2 ${!darkMode ? 'text-black' : 'text-gray-500'}`}>
                  <div className="flex items-center hover:bg-blue-100 w-full rounded-xl px-2">
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png"
                      className="h-5 w-5 rounded-full"
                    ></img>
                    <div className="px-2 py-2 cursor-pointer font-bold">
                      IND
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-blue-100 w-full rounded-xl px-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVlNYPlmj31ijPxDyQ8uIrE6SbQooyO4Qaw&s"
                      className="h-5 w-5 rounded-full"
                    ></img>
                    <div className="px-2 py-2 cursor-pointer font-bold">
                      VIE
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-blue-100 w-full rounded-xl px-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAAKlBMVEXVKx7///8AOKUAOaQAOKpLNIjbKwzp6ekALKOXos7V1dXt7eqLlsMALqQITy+EAAABHUlEQVR4nO3QyQ0CQRDAwOZczvzT5b3jAECiKgLL89jYecx2YGezZGVJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUls8/x2wq95zuvOzmveN3bec2RhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJTEnFnNmMRcWc2UxAAAAAAAAAAAAAAAAAAAAwF/6AKTP6h9+/o8KAAAAAElFTkSuQmCC"
                      className="h-5 w-5 rounded-full"
                    ></img>
                    <div className="px-2 py-2  cursor-pointer font-bold">
                      RUS
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-blue-100 w-full rounded-xl px-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGRjoLrcXQ7RDMlSbVnYiXiD6kriadj5GezQ&s"
                      className="h-5 w-5 rounded-full"
                    ></img>
                    <div className="px-2 py-2 cursor-pointer font-bold">
                      CHI
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-blue-100 w-full rounded-xl px-2">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_1280.jpg"
                      className="h-5 w-5 rounded-full"
                    ></img>
                    <div className="px-2 py-2 cursor-pointer font-bold">
                      ENG
                    </div>
                  </div>
                </ul>
              </div>
            )}
          </div>

            {/* darkMode */}
          <div
            onClick={handleDarkModeToggle}
            className={`relative px-5 py-2 rounded-full w-8 flex justify-center items-center h-full cursor-pointer ${!darkMode ? 'bg-blue-200 hover:bg-white' : 'bg-gray-500 hover:bg-black text-white'}`}
          >
            {!darkMode ? (
              <span className="material-symbols-outlined">dark_mode</span>
            ) : (
              <span className="material-symbols-outlined">light_mode</span>
            )}
          </div>

            {/* notofications */}
          <div className="relative cursor-pointer" onClick={toggleChat}>
            <div className={` ${!darkMode ? 'bg-blue-200 hover:bg-white' : 'bg-gray-500 hover:bg-black text-white'} px-3 h-full rounded-full flex justify-center items-center cursor-pointer`}>
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
          {isChatOpen && (
            <div className={`absolute mt-16 ${!darkMode ? 'bg-white  border-gray-300 text-black' : 'bg-[#1E293B] text-gray-500'} rounded-2xl shadow-lg z-10 w-64`}>
              <ul className="w-full px-2 py-2">
                <div className="w-full font-bold text-xl px-2">
                  Notifications
                </div>
                <div className="w-full px-2">
                  <Notifications data={notificationsData} />
                </div>
                <button className="mt-4 px-2 py-2 bg-blue-600 text-white w-full rounded-xl hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600">
                  View All
                </button>
              </ul>
            </div>
          )}

          {/* messages */}
          <div
            className={` relative px-5 py-2 rounded-full w-8 flex justify-center items-center h-full cursor-pointer ${!darkMode ? 'bg-blue-200 hover:bg-white' : 'bg-gray-500 hover:bg-black text-white'}`}
            onClick={toggleChatBubble}
          >
            <span className="material-symbols-outlined cursor-pointer text-xl">
              chat_bubble
            </span>
            <span className="animate-ping absolute top-0 right-0  ">
              <div className="bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5">
                1
              </div>
            </span>
          </div>
          {isChatBubbleOpne && (
            <div className={`absolute mt-14 ${!darkMode ? 'bg-white border text-black' : 'bg-[#1E293B] text-gray-500'} rounded-2xl shadow-lg z-10 w-72`}>
              <ul className="w-full px-2 py-2">
                <div className="w-full font-bold text-xl px-2">Messages</div>
                <div className="w-full px-2">
                  <Messages data={messagesData} />
                </div>
                <button className="mt-4 px-2 py-2 bg-blue-600 text-white w-full rounded-xl hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600">
                  View All
                </button>
              </ul>
            </div>
          )}

          {/* other apps */}
          <div
            className={` px-3 rounded-full flex justify-center items-center cursor-pointer ${!darkMode ? 'bg-blue-200 hover:bg-white' : 'bg-gray-500 hover:bg-black text-white'}`}
            onClick={toggleOtherApps}
          >
            <span className="material-symbols-outlined cursor-pointer text-xl">
              grid_view
            </span>
          </div>
          {isOtherAppsOpen && (
            <div className={`absolute mt-14 ${!darkMode ? 'bg-white text-black' : 'bg-[#1E293B] text-gray-500'} rounded-2xl shadow-lg z-10 w-72`}>
              <ul className="w-full px-2 py-2">
                <div className="w-full font-bold text-xl px-2">
                  Related Apps
                </div>
                <div className={`w-full px-2 ${!darkMode ? 'bg-white' : 'bg-[#1E293B]'}`}>
                  <OtherApps darkMode={darkMode} data={appsData} />
                </div>
                <button className={`mt-4 px-2 py-2 bg-blue-600 text-white w-full rounded-xl hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600`}>
                  View All
                </button>
              </ul>
            </div>
          )}
        </div>

          {/* Profile */}
        <div className=" w-1/5">
          <div
            className={`cursor-pointer flex items-center rounded-lg px-2 ${!darkMode ? 'border-black' : 'border-gray-500'}`}
            onClick={toggleDropdown}
          >
            <img className={`w-16 h-10 rounded-full ${!darkMode ? '' : ''}`} src={admin} alt="Profile" />
            <span className={`ml-1 text-sm font-semibold ${!darkMode ? 'text-black' : 'text-white'}`}>
              Kristin Watson <br />
              (Admin)
            </span>
          </div>

          {isDropdownOpen && (
          <div className={`absolute mt-3 right-22 ${!darkMode ? 'bg-white border border-gray-200' : 'bg-[#1E293B]'} rounded-lg shadow-lg z-10 w-32 flex justify-start px-4`}>
              <ul className="py-2">
                <div className="flex items-center justify-start group hover:text-blue-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500">
                    person
                  </span>
                  <li className={`px-2 py-2 text-sm font-medium group-hover:text-blue-500 ${!darkMode ? 'text-black' : 'text-gray-500'}`}>
                    Account
                  </li>
                </div>
                <div className="flex items-center justify-between group hover:text-blue-500 cursor-pointer">
                  <div className="flex justify-center items-center">
                    <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500 ">
                      mail
                    </span>
                    <li className={`px-2 py-2 text-sm font-medium group-hover:text-blue-500 ${!darkMode ? 'text-black' : 'text-gray-500'}`}>
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
                  <li className={`px-2 py-2 text-sm font-medium group-hover:text-blue-500 ${!darkMode ? 'text-black' : 'text-gray-500'}`}>
                    Taskboard
                  </li>
                </div>
                <div className="flex items-center justify-start  group hover:text-blue-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500">
                    settings
                  </span>
                  <li className={`px-2 py-2 text-sm font-medium group-hover:text-blue-500 ${!darkMode ? 'text-black' : 'text-gray-500'}`}>
                    Setting
                  </li>
                </div>
                <div className="flex items-center justify-start  group hover:text-blue-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500">
                    headphones
                  </span>
                  <li className={`px-2 py-2 text-sm font-medium group-hover:text-blue-500 ${!darkMode ? 'text-black' : 'text-gray-500'}`}>
                    Support
                  </li>
                </div>
                <div className="flex items-center justify-start  group hover:text-blue-500 cursor-pointer">
                  <span className="material-symbols-outlined text-lg text-gray-300 group-hover:text-blue-500">
                    logout
                  </span>
                  <li
                    className={`px-2 py-2 text-sm font-medium group-hover:text-blue-500 ${!darkMode ? 'text-black' : 'text-gray-500'}`}
                    onClick={handleLogOut}
                  >
                    Log out
                  </li>
                </div>
              </ul>
            </div>
          )}
        </div>

          {/* settings */}
        <div className="ml-4 cursor-pointer">
          <span className={`material-symbols-outlined animate-spin duration-75 text-2xl ${!darkMode ? 'text-black' : 'text-white'}`}>
            settings
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
