/* eslint-disable no-unused-vars */
import React from "react";

function WelcomeDashboard({toggleDarkMode, darkMode}) {
  return (
    <>
      <div className={`text-5xl font-medium text-center mt-4 ${!darkMode ? 'bg-white text-black' : 'bg-[#1E293B] text-gray-500'}`}>Welcome to the admin panel.</div>
    </>
  );
}

export default WelcomeDashboard;
