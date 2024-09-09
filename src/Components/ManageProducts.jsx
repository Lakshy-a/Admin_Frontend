/* eslint-disable no-unused-vars */
import React from 'react'
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom';

function ManageProducts({toggleDarkMode, darkMode}) {
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/manageProducts/addProduct');
      };

      const handleRemoveProduct = () => {
        navigate('/manageProducts/removeProduct');
      };

      const handleUpdateProduct = () => {
        navigate('/manageProducts/updateProduct');
      };
  return (
    <>
    <div>
      <div className="app-container h-screen w-screen flex">
        <div className="sidebar h-full w-1/5">
          <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        </div>
        <div className="headerBar h-24 w-4/5 ">
          <div>
           <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

          </div>
          <div className='w-full h-full flex justify-center items-center'>
            {/* <div className='w-3/5 h-3/5 flex justify-center items-center gap-8'>
                <div className='bg-white h-fit w-fit cursor-pointer	font-bold text-xl p-3'onClick={handleAddProduct}>ADD PRODUCT</div>
                <div className='bg-white h-fit w-fit cursor-pointer font-bold p-3 text-xl' onClick={handleRemoveProduct}>REMOVE PRODUCT</div>
                <div className='bg-white h-fit w-fit cursor-pointer	font-bold p-3 text-xl' onClick={handleUpdateProduct}>UPDATE PRODUCT</div>
            </div> */}
        </div>
        </div>
      </div>
    </div>
        
    </>
  )
}

export default ManageProducts