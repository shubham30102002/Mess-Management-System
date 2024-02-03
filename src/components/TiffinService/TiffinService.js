import React, { useState } from "react";
import DisaptchSuccess from "./DisaptchSuccess";
import { Link } from "react-router-dom";


function TiffinService() {
  const [dispatchBtn, setDispatchBtn] = useState(true);
  const [dailyTiffinBtn, setDailyTiffinBtn] = useState(false);

  const [showGenBtn, setShowGenBtn] = useState(true);

  const [showSuccessDispatch, setShowSuccessDispatch] = useState(false);

  const [showTiffinDispatch, setShowTiffinDispatch] = useState(false);

  const handleDispatch = () => {
    setDispatchBtn(true);
    setDailyTiffinBtn(false);
  };

  const handleDailyTiffin = () => {
    setDispatchBtn(false);
    setDailyTiffinBtn(true);
  };

  const handleDispatchList = () => {
    setShowSuccessDispatch(true);
  };
  return (
    <div className="w-[95vw] h-[70vh] mx-auto mt-5 ">
      <header className="bg-yellow-300 w-[95vw] h-[8vh] text-2xl font-bold py-2 px-10 rounded-tl-full ">
        Tiffin Service
      </header>

      <div className=" relative flex flex-col gap-16 w-[95vw] h-[70vh]  mx-auto px-12 pt-5  bg-white ">
        <div className="flex flex-row gap-9">
          <button
            className={`bg-yellow-400     px-9 py-1 border border-black rounded-lg  
            ${dispatchBtn ? "text-white" : "text-black"}`}
            onClick={handleDispatch}
          >
            Dispatch
          </button>
          <button
            className={`bg-yellow-400 px-7 py-1 border border-black rounded-lg  
            ${dailyTiffinBtn ? "text-white" : "text-black"}`}
            onClick={handleDailyTiffin}
          >
            List of daily tiffin
          </button>
        </div>

        {(dispatchBtn && showGenBtn) ? (
          <div>
            <button
              className="bg-yellow-400 px-8 border border-black outline-8  
            py-1  rounded-lg  
            font-semibold"
              onClick={() => setShowGenBtn(false)}
            >
              Genrate Dispatch List
            </button>
          </div>
        ) : (
          null
        )}

        {
          showGenBtn ? (
            null
          ) : (
            <div>
              <div className=" relative bg-yellow-400 w-[98%] h-[40vh] mr-4 ml-4">
                <div className="flex justify-between">
                  <div className=" text-3xl">Today's Dispatch</div>
                  <button
                    className="text-3xl px-2 font-semibold"
                    onClick={() => setShowGenBtn(true)}
                  >
                    X
                  </button>
                </div>

                <div>
                  <button
                    className="absolute right-5 bottom-5 bg-yellow-400 px-8 border border-black outline-8  
                font-semibold"
                    onClick={handleDispatchList}
                  >
                    Dispatch
                  </button>
                </div>
                {showSuccessDispatch ? <DisaptchSuccess /> : null}
              </div>
            </div>
          )
        }
        <div>
          <Link
            className=" absolute bottom-8 right-10  bg-yellow-400 px-9 py-1 border border-black rounded-lg  
               font-semibold"
            to="/"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TiffinService;