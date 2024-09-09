/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar";

function SelectedProducts({toggleDarkMode, darkMode}) {
  const { productId } = useParams();

  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("Orange");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false); // State to toggle heart color

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/manageProducts/selectedProducts/${productId}`
        );
        const product = response.data;
        console.log(product);

        setProductTitle(product.title);
        setProductPrice(product.price);
        setProductImage(product.productImage);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="app-container h-screen w-screen flex overflow-x-auto">
      <div className="sidebar h-full w-1/5">
        <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      </div>
      <div className="headerBar h-24 w-4/5">
        <div>
         <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>

        </div>
        <h2 className={`w-full h-fit ${!darkMode ? 'bg-[#e9f5fd]' : 'bg-[#0F172A] text-white'} pl-8 pr-8 pt-8 pb-12`}>
          <div className="text-2xl font-bold">Product Details</div>
          <div className={`${!darkMode ? 'bg-white' : 'bg-[#1E293B]'} rounded-md mt-8 pt-8 pb-8`}>
            <div className="flex items-center justify-center">
              <img
                src={productImage}
                className=" rounded-xl h-96 w-96"
                alt="Product"
              />
            </div>
            <div className="w-full h-fit px-8 mt-8">
              <div className="text-3xl font-bold w-7/12">{productTitle}</div>
              <div className="mt-2 text-xl font-semibold">
                Rs. {productPrice}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <div>
                  <span className="text-gray-500 text-md">Color: </span>
                  <span className="font-semibold">{selectedColor}</span>
                </div>
                <div className="flex gap-3">
                  {["Orange", "Red", "Green", "Blue"].map((color) => (
                    <div
                      key={color}
                      className={`p-1 rounded-full flex justify-center items-center ${
                        selectedColor === color ? "border border-blue-500" : ""
                      }`}
                    >
                      <span
                        className={`p-3 rounded-full cursor-pointer ${
                          color === "Orange"
                            ? "bg-orange-600"
                            : color === "Red"
                            ? "bg-red-600"
                            : color === "Green"
                            ? "bg-green-600"
                            : "bg-blue-600"
                        }`}
                        onClick={() => handleColorClick(color)}
                      ></span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <div>
                  <span className="text-gray-500 text-md">Size: </span>
                  <span className="font-semibold">{selectedSize}</span>
                </div>
                <div className={`flex gap-3 `}>
                  {["S", "M", "L", "XL"].map((size) => (
                    <div
                      key={size}
                      className={`p-1 rounded-lg flex justify-center items-center border ${
                        selectedSize === size
                          ? "bg-blue-500"
                          : "border-gray-400 hover:border-blue-500"
                      } ${!darkMode ? 'text-black ' : 'text-white'}`}
                    >
                      <span
                        className={`px-3 py-1 cursor-pointer text-sm ${
                          selectedSize === size ? "text-white" : "text-black"
                        }`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <div>
                  <span className="text-gray-500 text-md">Quantity </span>
                </div>
                <div className="flex gap-3">
                  <div className="w-32 h-10 rounded-full flex justify-between border border-gray-300">
                    <div
                      className="flex justify-center items-center p-1 w-1/4 text-3xl font-light cursor-pointer"
                      onClick={decreaseQuantity}
                    >
                      -
                    </div>
                    <div className="p-1 w-1/2 flex justify-center items-center text-lg font-semibold">
                      {quantity}
                    </div>
                    <div
                      className="flex justify-center items-center p-1 w-1/4 text-2xl font-light cursor-pointer"
                      onClick={increaseQuantity}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 w-full py-6 flex gap-2">
                <div className="w-4/5 bg-blue-500 hover:bg-white hover:border hover:border-blue-500 py-3 rounded-xl cursor-pointer flex justify-center items-center text-white text-sm font-semibold hover:text-blue-500">
                  Add to cart - Rs. {productPrice}
                </div>
                <div
                  className={`w-fit border cursor-pointer px-8 py-3 rounded-lg flex items-center justify-center hover:border-blue-500 ${
                    isFavorite
                      ? "border-red-500 text-red-500"
                      : "border-gray-300"
                  }`}
                  onClick={toggleFavorite}
                >
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div className="w-fit border border-gray-300 hover:border-blue-500 cursor-pointer px-8 py-3 rounded-lg">
                  <span className="material-symbols-outlined">sync_alt</span>
                </div>
              </div>
              <div className="w-full py-3 cursor-pointer flex justify-center items-center text-sm font-semibold text-blue-500 hover:text-white hover:bg-blue-500 bg-white border border-blue-500 rounded-xl gap-2">
                <div>Buy with</div>
                <img
                  className="w-12"
                  src="https://static-00.iconduck.com/assets.00/paypal-icon-2048x547-tu0aql1a.png"
                  alt="PayPal"
                />
              </div>
              <div className="w-full mt-1 py-3 flex justify-center items-center text-sm cursor-pointer font-normal">
                More payment options
              </div>
              <div className="w-full mt-2 py-3 flex items-center gap-4 ">
                <div className="w-fit py-1 flex gap-2 cursor-pointer">
                  <span className="text-lg material-symbols-outlined ">
                    atr
                  </span>
                  <div className="text-sm font-semibold">Compare Color</div>
                </div>
                <div className="w-fit py-1 flex gap-2 cursor-pointer">
                  <span className="text-lg material-symbols-outlined">
                    help
                  </span>
                  <div className="text-sm font-semibold">Ask a question</div>
                </div>
                <div className="w-fit py-1 flex gap-2 cursor-pointer">
                  <span className="text-lg material-symbols-outlined">
                    local_shipping
                  </span>
                  <div className="text-sm font-semibold">Delivery & Return</div>
                </div>
                <div className="text-lg w-fit py-1 flex gap-2 cursor-pointer">
                  <span className=" text-lg material-symbols-outlined">
                    share_windows
                  </span>
                  <div className="text-sm font-semibold">Share</div>
                </div>
              </div>
              <div className="w-full h-fit flex py-8 items-center gap-4">
                <div className="w-1/2 flex flex-col justify-center items-center border rounded-xl h-40">
                  <div>
                    <span className="material-symbols-outlined text-3xl">
                      deployed_code
                    </span>
                  </div>
                  <div className="text-center w-2/3 font-semilight text-sm">
                    Estimate delivery times:{" "}
                    <span className="font-bold">12-26 days</span>{" "}
                    (International), <spa className="font-bold">3-6 days</spa>{" "}
                    (India).
                  </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center h-40 border rounded-xl">
                  <div>
                    <span className=" text-3xl material-symbols-outlined">
                      history
                    </span>
                  </div>
                  <div className="text-center w-2/3 font-semilight text-sm">
                    Return within <span className="font-bold">30 days</span> of
                    purchase. Duties & taxes are non-refundable.
                  </div>
                </div>
              </div>
              <div className="w-fit  h-fit flex gap-4">
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <span className="material-symbols-outlined text-base">
                    workspace_premium
                  </span>
                  Guarantee Safe Checkout
                </div>
                <div className="flex items-center gap-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6YnQoM78NCEw3f--iWcGhpQFjBxfo9k6fw&s" className="w-16 h-6 object-fill" alt='visa_logo'/>
                    <img src="https://w7.pngwing.com/pngs/803/833/png-transparent-logo-paypal-computer-icons-paypal-blue-angle-logo.png" className="w-16 h-8" alt='paypal_logo'/>
                    <img src="https://w7.pngwing.com/pngs/58/14/png-transparent-amex-card-credit-logo-logos-logos-and-brands-icon-thumbnail.png" className="w-16 h-10 object-fill" alt='american_express_logo'/>
                    <img src="https://p7.hiclipart.com/preview/534/327/823/coventry-arnold-palmer-invitational-mastercard-credit-card-mastercard.jpg" className="w-16 h-8 object-fill" alt='mastercard_logo'/>
                </div>
              </div>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}

export default SelectedProducts;

// import React, { useState } from 'react';

// const TextCard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const carLmt = 134; // Character limit before truncation
//   const readMoreTxt = " ...read more";
//   const readLessTxt = " read less";

//   const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//     Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

//   // Toggle the expanded state
//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const renderText = () => {
//     if (text.length <= carLmt) {
//       return <p>{text}</p>; // If text is short, show all
//     }

//     if (isExpanded) {
//       return (
//         <p>
//           {text}
//           <span className="text-blue-500 underline cursor-pointer" onClick={toggleReadMore}>
//             {readLessTxt}
//           </span>
//         </p>
//       );
//     } else {
//       const firstSet = text.substring(0, carLmt);
//       return (
//         <p>
//           {firstSet}
//           <span className="text-blue-500 underline cursor-pointer" onClick={toggleReadMore}>
//             {readMoreTxt}
//           </span>
//         </p>
//       );
//     }
//   };

//   return (
//     <div className="card max-w-sm border rounded-lg shadow-lg p-4">
//       <img
//         src="https://via.placeholder.com/300x200"
//         alt="Card"
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <div className="mt-4">
//         {renderText()}
//       </div>
//     </div>
//   );
// };

// export default TextCard;

