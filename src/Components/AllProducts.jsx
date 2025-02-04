/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllProducts = ({toggleDarkMode, darkMode}) => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("/manageProducts/addNewProduct"); // Replace with the route you want to navigate to
  };

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("createdAt");
  const [asc, setAsc] = useState(true);

  const fetchProducts = async (page, limit, sort, asc) => {
    try {
      const res = await axios.get(
        "http://localhost:3000/manageProducts/getAllProducts",
        {
          params: {
            page,
            limit,
            sort,
            asc: asc ? 1 : -1,
          },
        }
      );
      // console.log(res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/manageProducts/removeProduct/${productId}`);
      // console.log("Product deleted:", response.data);
  
      // Optionally, update the frontend to remove the deleted product from the list
      setProducts((prevProducts) => prevProducts.filter(product => product._id !== productId));
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

  useEffect(() => {
    const getProducts = async () => {
      const productsFromAPI = await fetchProducts(page, limit, sort, asc);
      setProducts(productsFromAPI);
    };

    getProducts();
  }, [page, limit, sort, asc]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(1); // Reset to the first page whenever the limit changes
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

  const openProductPage = (event)=>{
    const productId = event.currentTarget.getAttribute("data-id");
    navigate(`/selectedProduct/${productId}`);
  }

  return (
    <div className="app-container h-screen w-screen flex overflow-x-auto">
      {/* sidebar */}
      <div className="sidebar h-fit  w-1/5 ">
        <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      </div>
      <div className="headerBar h-24 w-4/5 ">
       <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

        <div className={`w-full h-fit ${!darkMode ? 'bg-[#F2F7FB] text-black' : 'bg-[#0F172A] text-white'} pl-8 pr-8 pt-8`}>
          <div className="w-full h-16 ">
            <h2 className="text-2xl font-bold">Product List</h2>
          </div>
          <div className={`w-full h-fit ${!darkMode ? 'bg-white' : 'bg-[#1E293B]'} rounded-xl shadow-md pb-8`}>
            <div className="w-full h-10 flex items-center pl-4 gap-1">
              <span className="material-symbols-outlined text-lg">taunt</span>
              <div className="text-gray-400	text-sm">
                Tip search by Product ID: Each product is provided with a unique
                ID, which you can rely on to find the exact product you need.
              </div>
            </div>
            <div className="mt-4 w-full h-11 flex justify-between	pr-4">
              <div className="h-full w-fit flex ">
                <div className="text-gray-400	text-sm flex items-center justify-center h-full w-24">
                  Showing
                </div>
                <div className={`${!darkMode ? 'text-black bg-white ' : 'text-white bg-[#1E293B]'} text-base flex items-center justify-center w-16 border rounded-xl px-2`}>
                  {" "}
                  <select 
                    className={`border-none w-16 outline-none pr-4 rounded-xl text-sm ${!darkMode ? 'bg-white' : 'bg-[#1E293B]'}`}
                    value={limit}
                    onChange={handleLimitChange}
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
                    className={`${!darkMode ? 'bg-white text-black' : 'bg-[#1E293B] text-white'}	text-sm outline-none w-full `}
                  ></input>
                  <span className="material-symbols-outlined w-fit cursor-pointer">
                    search
                  </span>
                </div>
              </div>
              <div className="h-full w-48 border border-blue-600 flex items-center justify-center cursor-pointer text-sm rounded-xl text-blue-600 font-bold hover:bg-blue-600 hover:text-white hover:font-medium" onClick={handleAddNew}>
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
                  {/* <div className="h-full w-28 font-semibold px-6 py-3 text-md">Sale</div>
                  <div className="h-full w-28 font-semibold px-6 py-3 text-md">Stock</div>*/}
                  <div className="h-full w-28 font-semibold px-6 py-3 text-md flex justify-center">Status</div> 
                  <div className="h-full w-40 font-semibold px-6 py-3 text-md flex justify-center">
                    Action
                  </div>
                </div>
              </div>
              <div className="product-container flex flex-wrap px-3">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className={`rounded-xl w-fit h-fit flex justify-between items-center gap-8 mb-3 py-1 ${!darkMode ? 'hover:bg-gray-200' : 'hover:bg-gray-400 hover:text-black'} cursor-pointer`} 
                  >
                    <div className="h-full w-72 font-semibold px-6 text-md flex gap-4" onClick={openProductPage} data-id={product._id}>
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
                    <div className="h-full w-28 font-semibold px-6 py-3 text-sm text-yellow-500">Draft</div> 
                    <div className="h-full w-40 font-semibold px-6 py-3 text-sm">
                      {/* view product icon */}
                      <span className="text-blue-400 hover:text-blue-600 material-symbols-outlined text-xl">
                        visibility
                      </span>
                      {/* edit icon */}
                      <span className="text-green-400 hover:text-green-600 ml-5 material-symbols-outlined text-xl" data-id={product._id} onClick={handleEditProduct}>
                        border_color
                      </span>
                      {/* delete icon */}
                      <span className="text-red-400 hover:text-red-500 ml-5 text-xl material-symbols-outlined" data-id={product._id} onClick={handleDeleteClick}>
                        delete
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end mr-8 gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="mr-2 ml-4 cursor-pointer text-white rounded font-semibold "
                >
                  <span className={`text-2xl  h-10 w-10 rounded-full hover:bg-[#3482FD]  flex items-center justify-center material-symbols-outlined font-bold	material-symbols-outlined ${!darkMode ? 'text-black hover:text-white' : 'text-white'}`}>
                    chevron_left
                  </span>
                </button>
                <span className={`flex items-center justify-center ${!darkMode ? 'bg-[#3482FD] text-white ' : 'bg-[#3482FD] text-white'} rounded-full h-10 w-10 font-semibold `}>
                  {page}
                </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === 7}
                  className="ml-2 cursor-pointer text-white rounded font-semibold	"
                >
                  <span className={` text-2xl h-10 w-10 rounded-full  flex items-center justify-center material-symbols-outlined font-bold	 ${!darkMode ? 'hover:bg-[#3482FD] hover:text-white text-black' : 'text-white hover:bg-[#3482FD]'}`}>
                    chevron_right
                  </span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
