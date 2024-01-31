import React from "react";
import { Link } from "react-router-dom";

function ItemsContainer() {
  return (
    <div className="w-[40vw] h-[55vh]  mx-auto mt-28 flex justify-center items-center border-collapse border-yellow-500 border-8 rounded-3xl">
      <div className="p-16 flex flex-col justify-center items-center  gap-5  text-black font-semibold bg-[#FFFFFF]  bg-opacity-50  ">
        <p className="w-[28rem] h-[2rem]  bg-[#FFFFFF] text-center py-1">
          <Link to="/customerData">Check Customer Database</Link>
        </p>
        <p className="w-[28rem] h-[2rem]  bg-[#FFFFFF] text-center py-1">
          <Link to="/addcustomer">Add Customer</Link>
        </p>
        <p className="w-[28rem] h-[2rem]  bg-[#FFFFFF] text-center py-1">
          <Link to="/customerProfile"> Customer Profile</Link>
        </p>
        <p className="w-[28rem] h-[2rem]  bg-[#FFFFFF] text-center py-1">
          <Link to="/tiffinService">Tiffin System</Link>
        </p>
      </div>
    </div>

    // <div className="flex justify-center items-center text-customRed bg-red-400 border border-yellow-400 ">
    // </div>
  );
}

export default ItemsContainer;
