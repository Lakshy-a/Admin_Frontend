/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DynamicCategory() {
  const { categoryId } = useParams(); // Destructure categoryId from useParams
  const [productsInCategory, setProductsInCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const printData = () => {
    console.log(productsInCategory);
  };

  // Fetch the category name based on categoryId
  useEffect(() => {
    const fetchCorrespondingCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/categories/categoryId/${categoryId}`
        );
        setCategoryName(response.data); // Set the category name in state
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    if (categoryId) {
      fetchCorrespondingCategory();
    }
  }, [categoryId]);

  // Fetch products when the category name is available
  useEffect(() => {
    const fetchProductsWithCorrespondingCategory = async () => {
      if (categoryName) {
        try {
          const response = await axios.get(
            `http://localhost:3000/categories/categoryName/${categoryName}`
          );
          setProductsInCategory(response.data);
          console.log("Data", response.data); // Log the actual data received
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchProductsWithCorrespondingCategory();
  }, [categoryName]); // Only run when categoryName changes

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/manageProducts/removeProduct/${productId}`);
      // console.log("Product deleted:", response.data);
  
      // Optionally, update the frontend to remove the deleted product from the list
      setProductsInCategory((prevProducts) => prevProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error.response ? error.response.data : error.message);
    }
  };

  const updateProduct = async (productId) => {
    try {
      // Navigate to the update page
      navigate(`/manageProducts/updateProduct/${productId}`);
    } catch (error) {
      console.error('Error updating product:', error.response ? error.response.data : error.message);
      alert('Error updating product');
    }
  };

  const handleEditProduct = (event) => {
    const productId = event.currentTarget.getAttribute("data-id");
    // console.log("Updating product with ID:", productId);
    
    updateProduct(productId);
  }

  const handleDeleteClick = (event) => {
    const productId = event.currentTarget.getAttribute("data-id");
    // console.log("Deleting product with ID:", productId);
    
    // Call a function to delete the product
    deleteProduct(productId);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleAddNew = () => {
    navigate("/manageProducts/addNewProduct"); // Replace with the route you want to navigate to
  };

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
                <h2 className="text-2xl font-bold">
                  {categoryName} Category
                </h2>
              </div>
              <div className="w-full h-fit bg-white rounded-xl shadow-md pb-8">
                <div className="w-full h-10 flex items-center pl-4 gap-1">
                  <span className="material-symbols-outlined text-lg">
                    taunt
                  </span>
                  <div className="text-gray-400 text-sm">
                    Tip search by Product ID: Each product is provided with a
                    unique ID, which you can rely on to find the exact product
                    you need.
                  </div>
                </div>
                <div className="mt-4 w-full h-11 flex justify-between pr-4">
                  <div className="h-full w-fit flex">
                    <div className="text-gray-400 text-sm flex items-center justify-center h-full w-24">
                      Showing
                    </div>
                    <div className="text-black text-base flex items-center justify-center w-16 border rounded-xl px-2">
                      <select className="border-none w-16 outline-none pr-4 rounded-xl text-sm">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                    <div className="text-gray-400 text-sm flex items-center justify-center h-full w-24">
                      entries
                    </div>
                    <div className="h-full w-96 flex items-center justify-center border py-2 pl-4 pr-2 rounded-lg">
                      <input
                        type="text"
                        placeholder="Search here..."
                        className="text-gray-400 text-sm outline-none w-full"
                      ></input>
                      <span className="material-symbols-outlined w-fit cursor-pointer">
                        search
                      </span>
                    </div>
                  </div>
                  <div className="h-full w-48 border border-blue-600 flex items-center justify-center cursor-pointer text-sm rounded-xl text-blue-600 font-bold hover:bg-blue-600 hover:text-white hover:font-medium " onClick={handleAddNew}>
                    <button>+ ADD NEW</button>
                  </div>
                </div>
                <div className="overflow-x-auto overflow-y-auto">
                  <div className="mt-2 mb-2">
                    <div className="w-fit h-10 flex justify-between items-center gap-8">
                      <div className="h-full w-72 font-semibold px-8 py-3 text-md">
                        Product
                      </div>
                      <div className="h-full w-32 font-semibold px-6 py-3 text-md flex justify-center">
                        Product Id
                      </div>
                      <div className="h-full w-28 font-semibold px-6 py-3 text-md flex justify-center">
                        Price
                      </div>
                      <div className="h-full w-28 font-semibold px-6 py-3 text-md flex justify-center">
                        Category
                      </div>
                      <div className="h-full w-28 font-semibold px-6 py-3 text-md flex justify-center">
                        Status
                      </div>
                      <div className="h-full w-40 font-semibold px-6 py-3 text-md flex justify-center">
                        Action
                      </div>
                    </div>
                  </div>
                  <div className="product-container flex flex-wrap px-3">
                    {productsInCategory.map((product) => (
                      <div
                        key={product._id}
                        className="rounded-xl w-fit h-fit flex justify-between items-center gap-8 mb-3 py-1 hover:bg-gray-200 cursor-pointer"
                      >
                        <div className="h-full w-72 font-semibold px-6 text-md flex gap-4">
                          <img
                            src={product.productImage}
                            alt={product.title}
                            className="w-10 h-10"
                          />
                          <div className="h-10 whitespace-nowrap overflow-hidden text-ellipsis hover:text-blue-500 text-sm">
                            {product.title}
                          </div>
                        </div>
                        <div className="h-full w-32 font-semibold px-6 py-3 text-sm flex justify-center">
                          {product.id}
                        </div>
                        <div className="h-full w-28 font-semibold px-6 py-3 text-sm ">
                          Rs. {product.price}
                        </div>
                        <div className="h-full w-28 font-semibold px-6 py-3 text-sm">
                          {product.category.categoryName}
                        </div>
                        <div className="h-full w-28 font-semibold px-6 py-3 text-sm text-yellow-500">
                          Draft
                        </div>
                        <div className="h-full w-40 font-semibold px-6 py-3 text-sm">
                          {/* view product icon */}
                          <span className="text-blue-400 hover:text-blue-600 material-symbols-outlined text-xl">
                            visibility
                          </span>
                          {/* edit icon */}
                          <span
                            className="text-green-400 hover:text-green-600 ml-5 material-symbols-outlined text-xl"
                            data-id={product._id} onClick={handleEditProduct}
                          >
                            border_color
                          </span>
                          {/* delete icon */}
                          <span
                            className="text-red-400 hover:text-red-500 ml-5 text-xl material-symbols-outlined"
                            data-id={product._id} onClick={handleDeleteClick}
                          >
                            delete
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div className="flex justify-end mr-8 gap-2 mt-8">
                  <button className="mr-2 ml-4 cursor-pointer text-white rounded font-semibold" onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}>
                    <span className="text-2xl text-black hover:text-white h-10 w-10 rounded-full hover:bg-[#3482FD] flex items-center justify-center material-symbols-outlined font-bold">
                      chevron_left
                    </span>
                  </button>
                  <span className="flex items-center justify-center bg-[#3482FD] text-white rounded-full h-10 w-10 font-semibold"></span>
                  <button className="ml-2 cursor-pointer text-white rounded font-semibold"  onClick={() => handlePageChange(page + 1)}
                  disabled={page === 7}>
                    <span className="text-black text-2xl h-10 w-10 rounded-full hover:text-white flex items-center justify-center material-symbols-outlined font-bold hover:bg-[#3482FD]">
                      chevron_right
                    </span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicCategory;
