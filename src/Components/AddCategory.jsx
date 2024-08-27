/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function AddCategory() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    // description: "",
    // price: "",
    // category: "Clothes",
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
        console.log(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/categories/addCategory",
        formData
      );
      console.log("Response:", response.data);
      alert("Category added successfully");
      navigate("/category");
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
          <Sidebar />
        </div>
        <div className="headerBar h-24 w-4/5 ">
          <div>
            <Header />
          </div>
          <div className="w-full h-fit bg-[#F2F7FB] pl-8 pr-8 pt-8 ">
            <div className="w-full h-16 ">
              <h2 className="text-2xl font-bold">Add Category</h2>
            </div>
            <div className="gap-4">
              {/* product details */}
              <div className="w-full h-fit bg-white rounded-xl shadow-md p-8">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <div className="flex ">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 w-2/5"
                      >
                        Category Name{" "}
                        <span className="text-red-600 text-md">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                    {/* <div className="text-xs mt-1 text-gray-500">
                      Do not exceed 20 characters when entering the category
                      name.
                    </div> */}
                  </div>
                  {/* <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
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
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                    <div className="text-xs mt-1 text-gray-500">
                      Do not exceed 100 characters when entering the product
                      name.
                    </div>
                  </div> */}
                  {/* <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price <span className="text-red-600 text-md">*</span>
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div> */}
                  {/* <div className="flex gap-2 items-center">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category:
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="text-sm font-medium text-gray-700 w-full h-10 border rounded-md pl-2 focus:outline-none"
                    >
                      <option>Clothes</option>
                      <option>Shoes</option>
                      <option>Electronics</option>
                      <option>Furniture</option>
                      <option>Miscellaneous</option>
                    </select>
                  </div> */}
                  {/* product image */}
                  <div className="imageUploader w-full h-fit bg-white rounded-xl shadow-md pb-8 flex">
                    <div className="text-sm font-medium text-gray-700 w-2/5 flex mt-8">
                      Category Image{" "}
                      <span className="text-red-600 text-md">*</span>
                    </div>
                    <div className="h-fit w-full flex flex-col items-start justify-center">
                      <div className="w-fit mt-4">
                        <label className="h-48 w-full rounded-2xl border border-blue-600 border-dashed cursor-pointer flex flex-col justify-center items-center">
                          {selectedImage ? (
                            <img
                              src={selectedImage}
                              alt="Selected"
                              className="h-full w-fit object-fill rounded-2xl"
                            />
                          ) : (
                            <>
                              <span className="material-symbols-outlined text-4xl text-blue-600">
                                cloud_upload
                              </span>
                              <div className="w-full h-8 text-xs px-3 pt-1 flex justify-center">
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
                      <div className="mt-8 mb-2 w-full h-fit flex justify-start">
                        <button
                          type="submit"
                          className="py-2 px-6 rounded-xl bg-blue-600 text-white text-sm hover:bg-white hover:text-blue-600 border border-blue-600 font-semibold"
                          onClick={handleSubmit}
                        >
                          Add Category
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
