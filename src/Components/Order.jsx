/* eslint-disable no-unused-vars */
// src/components/Order.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Order = ({toggleDarkMode, darkMode}) => {
  return (
    <div>
      <div>
        <div className={`app-container h-screen w-screen flex `}>
          <div className="sidebar h-full w-1/5">
            <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          </div>
          <div className="headerBar h-full w-4/5 ">
            <div>
             <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

            </div>
            <h2 className={`text-xl font-bold mb-4 w-full h-full px-8 py-8 ${!darkMode ? 'bg-white text-black' : 'bg-[#1E293B] text-gray-500'}`}>Order</h2>
            {/* Add Order content here */}
          </div>
        </div>
      </div>

      {/* Add Ecommerce content here */}
    </div>
  );
};

export default Order;
