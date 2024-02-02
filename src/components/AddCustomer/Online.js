import React from "react";
import QRScanner from "../../Assets/QRScanner.png"

function Online() {
  return (
    <div className=" flex flex-row gap-20">
      <div className=" w-full  m-10 flex flex-col gap-3 font-medium">
        <p> Category Payment = Tiffin</p>
        <p> Selected Plan = Standard Plan</p>
        <h2> Total Payment = 2000/- RS.</h2>
      </div>
      <div className="w-full bg-yellow-500 m-40 mt-2 mb-2">
        <img
          src= {QRScanner}
          alt="Scanner"
        ></img>
      </div>
    </div>
  );
}

export default Online;