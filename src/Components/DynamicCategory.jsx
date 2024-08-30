/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";

function DynamicCategory() {
  const { categoryId } = useParams(); // Destructure categoryId from useParams
  // console.log(categoryId);

  useEffect(() => {
    var categoryName;

    const fetchCorrespondingCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/categories/categoryId/${categoryId}`
        );
        // console.log(response.data.name); // Log the actual data received from the API
        categoryName = response.data;

        console.log("Hello Category: ", categoryName);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    const fetchProductsWithCorrespondingCategory = async () => {
      await console.log("Inside Category:",categoryName);
      
      try {
        const response = await axios.get(
          `http://localhost:3000/categories/categoryName/${categoryName}`
        )

        console.log(response);
      } catch (error) {
        console.log(error)
      }
    }

    const runFunctionsInSequence = async () => {
      await fetchCorrespondingCategory(); // Run the first function
      await fetchProductsWithCorrespondingCategory(); // Then run the second function
    };

    runFunctionsInSequence();
  }, [categoryId]); // Add categoryId as a dependency

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
            <div className="mt-4 mb-4 w-full text-center text-3xl font-semibold underline decoration-dotted">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicCategory;
