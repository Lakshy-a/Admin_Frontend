/* eslint-disable no-unused-vars */
// src/components/Category.js
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/addCategory"); // Replace with the route you want to navigate to
  };

  const updateCategory = async (categoryId) => {
    try {
      // Navigate to the update category page
      navigate(`/updateCategory/${categoryId}`);
    } catch (error) {
      console.error('Error updating category:', error.response ? error.response.data : error.message);
      alert('Error updating category');
    }
  };

  const handleEditCategory = (event) => {
    const categoryId = event.currentTarget.getAttribute("data-id");
    console.log("Updating category with ID:", categoryId);
    
    updateCategory(categoryId);
  }

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/categories/allCategories"
      );
      // console.log(res);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const handleCategoryClick = async (event)=>{
    const categoryId = event.currentTarget.getAttribute("data-id");
    console.log("I am inside the handler function", categoryId);
  }

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const categoriesFromAPI = await fetchCategories();
      setCategories(categoriesFromAPI);
    };

    getAllCategories();
  }, []);

  return (
    <div>
      <div>
        <div className="app-container h-screen w-screen flex overflow-x-auto">
          <div className="sidebar h-full w-1/5">
            <Sidebar />
          </div>
          <div className="headerBar h-24 w-4/5 ">
            <div>
              <Header />
            </div>
            <div className="w-full h-fit bg-[#F2F7FB] pl-8 pr-8 pt-8 ">
              <div className="w-full h-16 ">
                <h2 className="text-2xl font-bold">Categories List</h2>
              </div>
              <div className="w-full h-fit bg-white rounded-xl shadow-md pb-8 pt-4">
                <div className="mt-1 w-full h-11 flex justify-between	pr-4">
                  <div className="h-full w-fit flex ">
                    <div className="text-gray-400	text-sm flex items-center justify-center h-full w-24">
                      Showing
                    </div>
                    <div className="text-black text-base flex items-center justify-center w-16 border rounded-xl px-2">
                      {" "}
                      <select
                        className="border-none w-16 outline-none pr-4 rounded-xl text-sm"
                        // value={limit}
                        // onChange={handleLimitChange}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                    <div className="text-gray-400	text-sm flex items-center justify-center h-full w-24">
                      entries
                    </div>
                    <div className="h-full w-96 flex items-center justify-center border py-2 pl-4 pr-2 rounded-lg ">
                      <input
                        type="text"
                        placeholder="Search here..."
                        className="text-gray-400	text-sm outline-none w-full "
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
                      {/* <div className="h-full w-28 font-semibold px-6 py-3 text-md">
                    Price
                  </div> */}
                      <div className="h-full w-28 font-semibold px-6 py-3 text-md flex justify-center">
                        Quantity
                      </div>
                      {/* <div className="h-full w-28 font-semibold px-6 py-3 text-md">Sale</div>
                  <div className="h-full w-28 font-semibold px-6 py-3 text-md">Stock</div>*/}
                      <div className="h-full w-28 font-semibold px-6 py-3 text-md flex justify-center">
                        Status
                      </div>
                      <div className="h-full w-36 font-semibold px-6 py-3 text-md flex justify-end">
                        Action
                      </div>
                    </div>
                  </div>
                  <div className="product-container flex flex-wrap px-4" >
                    {categories.map((category) => (
                      <div
                        key={category._id}
                        className="rounded-xl w-fit h-fit flex justify-between items-center gap-8 mb-4 py-1 hover:bg-gray-200 cursor-pointer"                      >
                        <div className="h-full w-60 font-semibold px-6 text-md flex gap-6 flex justify-start" 
                        onClick={handleCategoryClick} data-id={category._id} >
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
                        {/* <div className="h-full w-28 font-semibold px-6 py-3 text-sm">
                      Rs. {product.price}
                    </div> */}
                        <div className="h-full w-28 font-semibold px-6 py-3 text-sm flex justify-start">
                          1
                        </div>
                        <div className="h-full w-28 font-semibold px-6 py-3 text-sm text-yellow-500">
                          Draft
                        </div>
                        <div className="h-full w-40 font-semibold px-6 py-3 text-sm flex justify-between">
                          {/* view product icon */}
                          {/* <span className="text-blue-400 hover:text-blue-600 material-symbols-outlined text-xl">
                            visibility
                          </span> */}
                          {/* edit icon */}
                          <span
                            className="text-green-400 hover:text-green-600 ml-5 material-symbols-outlined text-xl"
                            data-id={category._id} onClick={handleEditCategory}
                          >
                            border_color
                          </span>
                          {/* delete icon */}
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
