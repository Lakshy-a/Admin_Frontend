/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCategory() {
  const navigate = useNavigate();
  const { categoryId } = useParams();


  const [formData, setFormData] = useState({
    name: "",
    // description: "",
    // price: "",
    // category: "Clothes",
    image: "", // Adding imageUrl to formData
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    try {
      const response = await axios.put(
        `http://localhost:3000/categories/updateCategory/${categoryId}`,
        formData
      );
      console.log("Response:", response.data);
      alert("Category updated successfully");
      navigate("/category");
    } catch (error) {
      console.error(
        "Error updating product:",
        error.response ? error.response.data : error.message
      );
      alert("Error updating product");
    }
  };

  useEffect(() => {
    // Fetch product details from backend using the productId
    const fetchProduct = async () => {
      try {
        console.log(categoryId);
        const response = await axios.get(`http://localhost:3000/categories/getCategory/${categoryId}`);
        const product = response.data;
        console.log(product);

        setFormData({
          name: product.name || "",
          // description: product.description || "",
          // price: product.price || "",
          // category: product.category || "Clothes",
          image: product.imageUrl || "",
        });

        if (product.image) {
          setSelectedImage(product.image);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [categoryId]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/manageProducts/addProduct",
  //       formData
  //     );
  //     console.log("Response:", response.data);
  //     alert("Product added successfully");
  //     navigate("/manageProducts/allProducts");
  //   } catch (error) {
  //     console.error(
  //       "Error adding product:",
  //       error.response ? error.response.data : error.message
  //     );
  //     alert("Error adding product");
  //   }
  // };

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
              <h2 className="text-2xl font-bold">Update Category</h2>
            </div>
            <div className="gap-4">
              {/* product details */}
              <div className="w-full h-fit bg-white rounded-xl shadow-md p-8">
                <form className="space-y-4" >
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
                  </div>
                  {/* product image */}
                  <div className="imageUploader w-full h-fit bg-white rounded-xl shadow-md pb-8 flex">
                    <div className="text-sm font-medium text-gray-700 w-2/5 flex mt-8">
                      Category Image{" "}
                      <span className="text-red-600 text-md">*</span>
                    </div>
                    <div className="h-fit w-full flex flex-col items-center justify-center">
                      <div className="w-full mt-4">
                        <label className="h-48 w-fit rounded-2xl border border-blue-600 border-dashed cursor-pointer flex flex-col justify-center items-center">
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
                          onClick={handleUpdate}
                        >
                          Update Category
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

export default UpdateCategory;
