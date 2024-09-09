import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Ecommerce from "./Components/Ecommerce";
import Category from "./Components/Category";
import Roles from "./Components/Roles";
import Order from "./Components/Order";
import User from "./Components/User";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import WelcomePage from "./Components/WelcomePage";
import Home from "./Components/Home";
import ManageProducts from "./Components/ManageProducts";
import AddProduct from "./Components/AddProduct";
import RemoveProduct from "./Components/RemoveProduct";
import UpdateProduct from "./Components/UpdateProduct";
import AllProducts from "./Components/AllProducts";
import Clothes from "./Components/Clothes";
import Shoes from "./Components/Shoes";
import Furniture from "./Components/Furniture";
import Electronics from "./Components/Electronics";
import Miscellaneous from "./Components/Miscellaneous";
import AddProductNew from "./Components/AddProductNew";
import AddCategory from "./Components/AddCategory";
import UpdateCategory from "./Components/UpdateCategory";
import DynamicCategory from "./Components/DynamicCategory";
import SelectedProducts from "./Components/SelectedProducts";

const componentMap = {
  Clothes,
  Shoes,
  Furniture,
  Electronics,
  Miscellaneous
  // Add other mappings
};

const DynamicComponent = () => {
  const { name } = useParams();
  const Component = componentMap[name];
  return Component ? <Component /> : <div>Component not found</div>;
};

function App() {
  // Load darkMode preference from localStorage when the app starts
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  // Save darkMode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <BrowserRouter>
        <div className={`app-container ${darkMode ? 'dark' : ''}`}>
          <div className="main-content">
            <div className="content">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/home/*" element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/dashboard" element={<Dashboard toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/manageProducts" element={<ManageProducts toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/ecommerce" element={<Ecommerce toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/category" element={<Category toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/addCategory" element={<AddCategory toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/order" element={<Order toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/user" element={<User toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/roles" element={<Roles toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/manageProducts/addproduct" element={<AddProduct toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/manageProducts/removeProduct" element={<RemoveProduct toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/manageProducts/updateproduct/:id" element={<UpdateProduct toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/manageProducts/allProducts" element={<AllProducts toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/manageProducts/addNewProduct" element={<AddProductNew toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/updateCategory/:categoryId" element={<UpdateCategory toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/category/categoryName/:name" element={<DynamicComponent toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/categories/categoryId/:categoryId" element={<DynamicCategory toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
                <Route path="/selectedProduct/:productId" element={<SelectedProducts toggleDarkMode={toggleDarkMode} darkMode={darkMode} />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
