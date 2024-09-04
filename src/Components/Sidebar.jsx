/* eslint-disable no-unused-vars */
// src/components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import openMenu from "../assets/menuOpen.png";

const Sidebar = () => {
  const [dropdowns, setDropdowns] = useState({
    manageProducts: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    // the main div
    <div className="w-64 h-screen text-black fixed">
      {/* logo */}
      <div className="flex justify-between items-center px-3">
        <img className="w-40" src={logo} />
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
            <div className="mt-2 bg-white border-2 rounded shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 ">
                  <Link to="/manageProducts/addNewProduct">Add Product</Link>
                </li>
                <li className="px-4 py-2 ">
                  <Link to="/manageProducts/allProducts">Product List</Link>
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
            <span className="w-fit flex justify-end items-center mx-2 material-symbols-outlined text-xl"
            onClick={() => toggleDropdown("category")}>
              category
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-md"  onClick={() => toggleDropdown("category")}>
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
            <div className="bg-white  border-gray-300 rounded ">
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

        {/* all products */}
        {/* <div className="flex flex-col">
          <div className="flex">
            <span className="w-1/5 flex justify-center items-center mx-2 material-symbols-outlined">
              box
            </span>
            <div className="w-4/5 flex justify-between items-center">
              <li className="py-4 text-lg">
                <Link to="/allProducts">All Products</Link>
              </li>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleDropdown("allProducts")}
              >
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div> */}
      </ul>
    </div>
  );
};

export default Sidebar;
