/* eslint-disable no-unused-vars */
// src/components/Attributes.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Attributes = ({toggleDarkMode, darkMode}) => {
  return (
    <div>
      <div>
        <div className="app-container h-screen w-screen flex">
          <div className="sidebar h-full w-1/5">
            <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          </div>
          <div className="headerBar h-full w-4/5 ">
            <div>
             <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

            </div>
            {/* <button  className="mb-6 font-bold ">
            <p className="text-blue-600">Read More </p>
            </button> */}
          
            <h2 className={`text-xl font-bold mb-4 h-full p-8 ${!darkMode ? 'bg-white text-black' : 'bg-[#1E293B] text-gray-500'}`}>Roles</h2>
            {/* Add Attributes content here */}
          </div>
        </div>
      </div>

      {/* Add Ecommerce content here */}
    </div>
  );
};

export default Attributes;
