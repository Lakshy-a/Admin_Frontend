/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Category = ({toggleDarkMode, darkMode}) => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/addCategory"); // Replace with the route you want to navigate to
  };

  const updateCategory = async (categoryId) => {
    try {
      // Navigate to the update category page
      navigate(`/updateCategory/${categoryId}`);
    } catch (error) {
      console.error(
        "Error updating category:",
        error.response ? error.response.data : error.message
      );
      alert("Error updating category");
    }
  };

  const handleEditCategory = (event) => {
    const categoryId = event.currentTarget.getAttribute("data-id");
    // console.log("Updating category with ID:", categoryId);

    updateCategory(categoryId);
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/categories/allCategories"
      );
      return res.data; // Array of category objects
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCount = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/categories/categoryWiseCount"
      );
      return res.data; // Array of count objects
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = async (event) => {
    const categoryId = event.currentTarget.getAttribute("data-id");
    navigate(`/categories/categoryId/${categoryId}`);
  };

  const [categories, setCategories] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getAllCategories = async () => {
        const categoriesFromAPI = await fetchCategories();
        setCategories(categoriesFromAPI);
        console.log("Categories", categoriesFromAPI);
      };

      const countOfProducts = async () => {
        const getCounts = await fetchCount();
        setCounts(getCounts);
        console.log("Hello", getCounts);
      };

      countOfProducts();
      getAllCategories();
        const [categoriesFromAPI, countsFromAPI] = await Promise.all([fetchCategories(), fetchCount()]);

        // Merge counts into categories
        const combinedCategories = categoriesFromAPI.map((category) => {
          const countData = countsFromAPI.find(count => count.categoryName === category.name);
          return {
            ...category,
            productCount: countData ? countData.productCount : 0
          };
        });

        setCategories(combinedCategories);
        console.log(combinedCategories);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div className="app-container h-screen w-screen flex overflow-x-auto">
          <div className="sidebar h-full w-1/5">
            <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          </div>
          <div className="headerBar h-24 w-4/5 ">
            <div>
             <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

            </div>
            <div className={`w-full h-fit ${!darkMode ? 'bg-[#F2F7FB]' : 'bg-[#0F172A]'} pl-8 pr-8 pt-8 `}>
              <div className="w-full h-16 ">
                <h2 className={`text-2xl font-bold ${!darkMode ? 'text-black' : 'text-white'}`}>Categories List</h2>
              </div>
              <div className={`w-full h-fit ${!darkMode ? 'bg-white' : 'bg-[#1E293B] text-white'} rounded-xl shadow-md pb-8 pt-4`}>
                <div className="mt-1 w-full h-11 flex justify-between pr-4">
                  <div className="h-full w-fit flex ">
                    <div className="text-gray-400 text-sm flex items-center justify-center h-full w-24">
                      Showing
                    </div>
                    <div className={`${!darkMode ? 'text-black bg-white' : 'text-white bg-[#1E293B]'} text-base flex items-center justify-center w-16 border rounded-xl px-2`}>
                      <select
                        className={`border-none w-16 outline-none pr-4 rounded-xl text-sm ${!darkMode ? 'bg-white' : 'bg-[#1E293B]'}`}
                        // value={limit}
                        // onChange={handleLimitChange}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                    <div className="text-gray-400 text-sm flex items-center justify-center h-full w-24">
                      entries
                    </div>
                    <div className="h-full w-96 flex items-center justify-center border py-2 pl-4 pr-2 rounded-lg ">
                      <input
                        type="text"
                        placeholder="Search here..."
                        className={`${!darkMode ? 'text-gray-400 bg-white' : 'text-white bg-[#1E293B]'} text-sm outline-none w-full `}
                      ></input>
                      <span className="material-symbols-outlined w-fit cursor-pointer">
                        search
                      </span>
                    </div>
                  </div>
                  <div
                    className="h-full w-48 border border-blue-600 flex items-center justify-center cursor-pointer text-sm rounded-xl text-blue-600 font-bold hover:bg-blue-600 hover:text-white hover:font-medium"
                    onClick={handleAddNew}
                  >
                    <button>+ ADD CATEGORY</button>
                  </div>
                </div>
                <div className="overflow-x-auto overflow-y-auto ">
                  <div className="mt-2 mb-2 px-2">
                    <div className="w-fit h-10 flex justify-between items-center gap-8">
                      <div className="h-full w-60 font-semibold px-8 py-3 text-md flex justify-start">
                        Category
                      </div>
                      <div className="h-full w-40 font-semibold px-6 py-3 text-md flex justify-center">
                        Category Id
                      </div>
                      <div className="h-full w-28 font-semibold px-6 py-3 text-md flex justify-center">
                        Quantity
                      </div>
                      <div className="h-full w-28 font-semibold px-6 py-3 text-md ">
                        Status
                      </div>
                      <div className="h-full w-40 font-semibold px-6 py-3 text-md flex justify-between">
                        Actions
                        
                      </div>
                    </div>
                  </div>
                  <div className="product-container flex flex-wrap px-4">
                    {categories.map((category) => (
                      <div
                        key={category._id}
                        className={`rounded-xl w-fit h-fit flex justify-between items-center gap-8 mb-4 py-1 ${!darkMode ? 'hover:bg-gray-200 ' : 'hover:bg-gray-400'} cursor-pointer`}
                      >
                        <div
                          className="h-full w-60 font-semibold px-6 text-md flex gap-6 flex justify-start"
                          onClick={handleCategoryClick}
                          data-id={category._id}
                        >
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-10 h-10"
                          />
                          <div className="h-10 whitespace-nowrap overflow-hidden text-ellipsis hover:text-blue-500 text-sm ">
                            {category.name}
                          </div>
                        </div>
                        <div className="h-full w-40 font-semibold px-6 py-3 text-sm flex justify-center">
                          {category.id}
                        </div>
                        <div className="h-full w-28 font-semibold px-6 py-3 text-sm flex justify-start">
                          {category.productCount}{" "}
                          {/* Display the product count */}
                        </div>
                        <div className="h-full w-28 font-semibold px-6 py-3 text-sm text-yellow-500">
                          Draft
                        </div>
                        <div className="h-full w-40 font-semibold px-6 py-3 text-sm flex justify-between">
                          <span
                            className="text-green-400 hover:text-green-600 ml-5 material-symbols-outlined text-xl"
                            data-id={category._id}
                            onClick={handleEditCategory}
                          >
                            border_color
                          </span>
                          <span
                            className="text-red-400 hover:text-red-500 ml-5 text-xl material-symbols-outlined"
                            data-id={category._id}
                          >
                            delete
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
