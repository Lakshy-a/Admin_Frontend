/* eslint-disable no-unused-vars */
// src/components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import darkLogo from "../assets/logo-removebg-preview.png"
import openMenu from "../assets/menuOpen.png";
import { FiFacebook } from "react-icons/fi";

const Sidebar = ({toggleDarkMode, darkMode}) => {
  const [dropdowns, setDropdowns] = useState({
    manageProducts: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    // the main div
    <div className={`w-64 h-screen ${!darkMode ? 'text-black bg-white' : 'text-white bg-[#1E293B]'}  overflow-y-auto	scrollbar-hide static`}>
      {/* logo */}
      <div className="flex justify-between items-center px-3">
        <img className="w-40" src={!darkMode ? logo : darkLogo} />
      </div>

      {/* sidebar menu */}
      <ul className="px-1 py-5">
        {/* dashboard */}
        <div className="flex hover:text-blue-600  ml-4">
          <span className="w-fit flex justify-end items-center mx-2 material-symbols-outlined text-xl">
            grid_view
          </span>
          <div className="w-4/5 flex justify-between items-center">
            <li className="py-4 text-md">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <span className="material-symbols-outlined cursor-pointer">
              keyboard_arrow_down
            </span>
          </div>
        </div>

        {/* manage products */}
        <div className="flex flex-col ml-4">
          <div className="flex hover:text-blue-600">
            <span
              className="w-fit flex justify-end items-center mx-2 material-symbols-outlined cursor-pointer text-xl"
              onClick={() => toggleDropdown("manageProducts")}
            >
              database
            </span>
            <div className="w-4/5 flex justify-between items-center cursor-pointer">
              <li
                className="py-4 text-md"
                onClick={() => toggleDropdown("manageProducts")}
              >
                Manage Products
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("manageProducts")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
          {dropdowns.manageProducts && (
            <div className={`${!darkMode ? 'bg-white' : 'bg-gray-800'}  border-gray-300 rounded overflow-hidden `}>
              <ul className="overflow-hidden">
                <li className="px-9 py-1 hover:text-blue-600 hover:bg-blue-100 text-sm ">
                  <Link to="/manageProducts/allProducts">Product List</Link>
                </li>
                <li className="px-9 py-1 hover:text-blue-600 hover:bg-blue-100 text-sm">
                  <Link to="/manageProducts/addNewProduct">Add Product</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ecommerce */}
        <div className="flex flex-col hover:text-blue-600  ml-4">
          <div className="flex flex-col">
            <div className="flex w-full">
              <span className="w-fit flex justify-end items-center mx-2 material-symbols-outlined text-xl">
                shopping_cart
              </span>
              <div className="w-4/5 flex justify-between items-center">
                <li className="py-4 text-md">
                  <Link to="/ecommerce">Ecommerce</Link>
                </li>
                <span
                  className="material-symbols-outlined cursor-pointer"
                  onClick={() => toggleDropdown("ecommerce")}
                >
                  keyboard_arrow_down
                </span>
              </div>
            </div>
            <div className="w-full h-56 bg-black hidden"></div>
          </div>
        </div>

        {/* category */}
        <div className="flex flex-col cursor-pointer  ml-4">
          <div className="flex hover:text-blue-600">
            <span
              className="w-fit flex justify-end items-center mx-2 material-symbols-outlined text-xl"
              onClick={() => toggleDropdown("category")}
            >
              category
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li
                className="py-4 text-md"
                onClick={() => toggleDropdown("category")}
              >
                {/* <Link to="/category">Categories</Link> */}
                Category
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("category")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
          {dropdowns.category && (
            <div className={`${!darkMode ? 'bg-white' : 'bg-gray-800'}  border-gray-300 rounded overflow-hidden `}>
              <ul className=" overflow-hidden">
                <li className="px-9 py-1 hover:text-blue-600 hover:bg-blue-100 text-sm">
                  <Link to="/category"> Category List</Link>
                </li>
                <li className="px-9 py-1 hover:text-blue-600 hover:bg-blue-100 text-sm">
                  <Link to="/addCategory">New Category</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* orders */}
        <div className="flex flex-col hover:text-blue-600  ml-4">
          <div className="flex">
            <span className="w-fit flex justify-end items-center mx-2 material-symbols-outlined text-xl">
              orders
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-md">
                <Link to="/order">Orders</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("orders")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* users */}
        <div className="flex flex-col hover:text-blue-600  ml-4">
          <div className="flex">
            <span className="w-fit flex justify-end items-center mx-2 material-symbols-outlined text-xl">
              person
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-md">
                <Link to="/user">Users</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("users")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* roles */}
        <div className="flex flex-col hover:text-blue-600 ml-4">
          <div className="flex">
            <span className="w-fit flex justify-end items-center mx-2 material-symbols-outlined text-xl ">
              person_add
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-md">
                <Link to="/roles">Roles</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("roles")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col ml-4 h-fit gap-6 mt-4">
          <div className="text-lg font-light">Connect Us</div>
          <div className="flex justify-start gap-10">
            <span className="text-xl font-light">
              <FiFacebook />
            </span>
            <span>
              <FiFacebook />
            </span>
            <span>
              <FiFacebook />
            </span>
            <span>
              <FiFacebook />
            </span>
          </div>
        </div> */}

        {/* connect us */}
        <div className="flex flex-col ml-4 h-fit mt-16 gap-8 items-center">
          <img
            src="https://themesflat.co/html/remos/images/menu-left/img-bot.png"
            alt="connect_With_Us"
            className="object-cover w-36"
          />
          <div className="flex flex-col items-center justify-center w-full h-fit gap-3">
            <div className="text-xl font-bold">Hi, how can we help?</div>
            <div className="text-center font-light">
              Contact us if you have any assistance, we will contact you as soon
              as possible
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-white">
              Contact
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
