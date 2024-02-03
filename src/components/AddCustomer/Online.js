import React from "react";
import QRScanner from "../../Assets/QRScanner.png"

function Online() {
  return (
    <div className="flex ">
      <div className=" w-[70%] m-10 flex flex-col gap-3 font-medium">
        <p> Category Payment = Tiffin</p>
        <p> Selected Plan = Standard Plan</p>
        <h2> Total Payment = 2000/- RS.</h2>
      </div>
      <div className="w-[20%] mb-10">
        <img
          src={QRScanner}
          className="bg-no-repeat object-cover h-[80%] w-[80%] my-auto  "
          alt="Scanner"
        />
      </div>
    </div>
  );
}

export default Online;