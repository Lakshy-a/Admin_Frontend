/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "../Components/WelcomePage";
import Dashboard from "./Dashboard";
import Ecommerce from "./Ecommerce";
import Order from "./Order";
import Category from "./Category";
import User from "./User";
import Roles from "./Roles";

function Home({toggleDarkMode, darkMode}) {
  return (
    <div>
      <div className="app-container h-screen w-screen flex">
        <div className="sidebar h-full w-1/5">
          <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        </div>
        <div className="headerBar h-full w-4/5 ">
          <div>
           <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

          </div>
          <div className={`p-4 ${!darkMode ? 'bg-white text-black ' : 'bg-[#1E293B] text-gray-500'} h-full`}>
            <Routes>
              <Route path="/" element={<WelcomePage toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
