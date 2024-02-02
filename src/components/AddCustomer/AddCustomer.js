import React, { useState } from "react";
import Payment from "./Payment";
import { Link } from "react-router-dom";
import FingerPrint from "../../Assets/fingerprint.jpg";

function AddCustomer() {
  const [diningStatus, setDiningStatus] = useState(true);
  const [tiffinStatus, setTiffinStatus] = useState(false);

  const [showPayment, setShowPayment] = useState(false);

  const handleDinigChange = () => {
    setDiningStatus(true);
    setTiffinStatus(false);
  };

  const handleTiffinChange = () => {
    setDiningStatus(false);
    setTiffinStatus(true);
  };
  return (
    <div className="w-[95vw] h-[70vh] mx-auto mt-4 ">
      <header className="bg-yellow-300 w-[95vw] h-[8vh] text-2xl font-bold py-2 px-10 rounded-tl-full ">
        Add Customer
      </header>
      {showPayment ? (
        <Payment />
      ) : (
        <div className=" relative w-[95vw] h-[70vh]  mx-auto  bg-white">
          <button className="bg-yellow-400 ml-2 mt-2 border border-black px-1 w-[20vh] h-[4vh]">
            Add Customer
          </button>

          <div className="flex flex-col gap-1 m-5">
            <div className="flex  gap-8">
              <button
                className={`${diningStatus ? "bg-yellow-300 px-2 border border-black" : null
                  }`}
                onClick={handleDinigChange}
              >
                Dining
              </button>
              <button
                className={`${tiffinStatus ? "bg-yellow-300 px-2 border border-black" : null
                  }`}
                onClick={handleTiffinChange}
              >
                Tiffin
              </button>
            </div>

            <form>
              <div className="flex gap-10">
                <div className="w-full">
                  <label>Name:</label>
                  <br />
                  <input className="bg-zinc-200 w-[40vw] border border-black outline-8" />
                  <br />

                  <label>Mobile Number:</label>
                  <br />
                  <input className="bg-zinc-200 w-[40vw] border border-black outline-8" />
                  <br />

                  <label>Permanent Address:</label>
                  <br />
                  <input className="bg-zinc-200 w-[40vw] border border-black outline-8" />
                  <br />

                  <label>Temporary Address:</label>
                  <br />
                  <input className="bg-zinc-200 w-[40vw] border border-black outline-8" />
                  <br />

                  <label>Aadhar Number:</label>
                  <br />
                  <input className="bg-zinc-200 w-[40vw] border border-black outline-8" />
                  <br />
                </div>

                <div className="w-full">
                  <label>Plan:</label>
                  <br />
                  <input className="bg-zinc-200 w-[40vw] border border-black outline-8" />
                  <br />

                  {diningStatus ? (
                    <div>
                      <label>FingerPrint/ Biometric Details:</label>
                      <br />
                      <div className="relative bg-zinc-200  w-[90%] h-[10rem]
                      flex justify-center items-center border border-black z-2">
                        <img className="object-contain h-36 w-96"
                          src={FingerPrint} alt="Fingerprint" />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </form>
          </div>

          <footer className="absolute right-5 bottom-3 flex gap-28">
            <button
              onClick={() => setShowPayment(true)}
              className="bg-yellow-400 px-8 py-1 border border-black outline-none
            rounded-sm"
            >
              {" "}
              Continue
            </button>
            <Link
              to="/"
              className="bg-yellow-400 px-8 py-1 border border-black outline-none rounded-sm"
            >
              Close
            </Link>
          </footer>
        </div>
      )}
    </div>
  );
}

export default AddCustomer;