/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function AddProductNew({toggleDarkMode, darkMode}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Clothes",
    imageUrl: "", // Adding imageUrl to formData
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setSelectedImage(base64String);
        setFormData({ ...formData, imageUrl: base64String });
        // console.log(base64String)
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/manageProducts/addProduct",
        formData
      );
      // console.log("Response:", response.data);
      alert("Product added successfully");
      navigate("/manageProducts/allProducts");
    } catch (error) {
      console.error(
        "Error adding product:",
        error.response ? error.response.data : error.message
      );
      alert("Error adding product");
    }
  };

  return (
    <div>
      <div className="app-container h-screen w-screen flex overflow-x-auto">
        <div className="sidebar h-full w-1/5">
          <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        </div>
        <div className="headerBar h-24 w-4/5 ">
          <div>
           <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

          </div>
          <div className={`w-full h-fit ${!darkMode ? 'bg-[#F2F7FB]' : 'bg-[#0F172A] text-white'} pl-8 pr-8 pt-8 `}>
            <div className="w-full h-16 ">
              <h2 className="text-2xl font-bold">Add Product</h2>
            </div>
            <div className="flex gap-4">
              {/* product details */}
              <div className={`w-1/2 h-fit ${!darkMode ? 'bg-white' : 'bg-[#1E293B]'} rounded-xl shadow-md p-8`}>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${!darkMode ? 'text-gray-700' : 'text-white'}`}
                    >
                      Title <span className="text-red-600 text-md">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500  sm:text-sm ${!darkMode ? 'bg-white focus:border-indigo-500' : 'bg-[#0F172A] focus:border-blue-500'}`}
                      required
                    />
                    <div className={`text-xs mt-1 ${!darkMode ? 'text-gray-500' : 'text-gray-200'}`}>
                      Do not exceed 20 characters when entering the product
                      name.
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className={`block text-sm font-medium ${!darkMode ? 'text-gray-700' : 'text-white'}`}
                    >
                      Description{" "}
                      <span className="text-red-600 text-md">*</span>
                    </label>
                    <textarea
                      rows={5}
                      type="text"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500  sm:text-sm ${!darkMode ? 'bg-white focus:border-indigo-500' : 'bg-[#0F172A] focus:border-blue-500'}`}
                      required
                    />
                    <div className={`text-xs mt-1 ${!darkMode ? 'text-gray-500' : 'text-gray-200'}`}>
                      Do not exceed 100 characters when entering the product
                      name.
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className={`block text-sm font-medium ${!darkMode ? 'text-gray-700' : 'text-white'}`}
                    >
                      Price <span className="text-red-600 text-md">*</span>
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500  sm:text-sm ${!darkMode ? 'bg-white focus:border-indigo-500' : 'bg-[#0F172A] focus:border-blue-500'}`}
                      required
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <label
                      htmlFor="category"
                      className={`block text-sm font-medium ${!darkMode ? 'text-gray-700' : 'text-white'}`}
                    >
                      Category:
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`text-sm font-medium ${!darkMode ? 'text-gray-700 bg-white' : 'text-white bg-[#0F172A] focus:border-blue-500'} w-full h-10 border rounded-md pl-2 focus:outline-none`}
                    >
                      <option>Clothes</option>
                      <option>Shoes</option>
                      <option>Electronics</option>
                      <option>Furniture</option>
                      <option>Miscellaneous</option>
                    </select>
                  </div>
                </form>
              </div>

              {/* product image */}
              <div className={`imageUploader w-1/2 h-fit ${!darkMode ? 'bg-white' : 'bg-[#1E293B]'} rounded-xl shadow-md pb-8`}>
                <div className={`text-sm font-medium p-8 ${!darkMode ? 'text-gray-700': 'text-white'} `}>
                  Upload Image
                </div>
                <div className="h-56 w-full flex items-center justify-center">
                  <label className="h-48 w-40 rounded-2xl border border-blue-600 border-dashed cursor-pointer flex flex-col justify-center items-center">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="h-full w-full object-cover rounded-2xl"
                      />
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-4xl text-blue-600">
                          cloud_upload
                        </span>
                        <div className="w-full h-8 text-xs px-3 pt-1">
                          Drop your images here or{" "}
                          <span className="text-xs text-blue-600">
                            click to browse
                          </span>
                        </div>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
                <div className="mt-16 mb-4 w-full h-fit flex justify-evenly">
                  <button
                    type="submit"
                    className="py-2 px-6 rounded-xl bg-blue-600 text-white text-sm hover:bg-white hover:text-blue-600 border border-blue-600 font-semibold"
                    onClick={handleSubmit}
                  >
                    Add product
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-6 rounded-xl text-sm text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-semibold"
                  >
                    Save product
                  </button>
                  <button
                    type="submit"
                    className={`py-2 px-6 rounded-xl ${!darkMode ? 'text-gray-500' : 'text-white'} text-sm font-semibold border hover:bg-blue-600 hover:text-white`}
                  >
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductNew;
