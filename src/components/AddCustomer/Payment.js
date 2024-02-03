import React, { useState } from "react";
import { Link } from "react-router-dom";
import Online from "./Online";
import Cash from "./Cash";
import PaymentSuccess from "./PaymentSuccess";


function Payment() {
  const [statusCashPayment, setStatusCashPayment] = useState(false);
  const [statusOnlinePayment, setStatusOnlinePayment] = useState(false);

  const [showPaymentDone, setShowPaymentDone] = useState(false);


  const handleContinue = () => {
    setShowPaymentDone(true);
    setTimeout(() => {
      setShowPaymentDone(false);
    }, 2000);
  };

  const handleClickCashMode = () => {
    setStatusCashPayment(true);
    setStatusOnlinePayment(false);
  };

  const handleClickOnlineMode = () => {
    setStatusCashPayment(false);
    setStatusOnlinePayment(true);
  };

  return (
    <div className=" relative w-[95vw] h-[70vh]  mx-auto  bg-white">
      <button className="bg-yellow-400 ml-2 mt-2 border border-black px-1 w-[20vh] h-[4vh]">
        Payment
      </button>
      <hr className="mt-4 border-t-black" />
      {/* <hr className=" border-t-black w-[210vh] fixed bottom-36 " /> */}


      <div className="flex gap-5 p-9">
        <button
          onClick={handleClickCashMode}
          className={`bg-yellow-400 ml-2  border border-black px-1 w-[20vh] h-[4vh]
        ${statusCashPayment === true ? "text-white" : "text-black"}`}
        >
          Cash Mode
        </button>
        <button
          onClick={handleClickOnlineMode}
          className={`bg-yellow-400 ml-2 border border-black px-1 w-[20vh] h-[4vh]
       ${statusOnlinePayment === true ? "text-white" : "text-black"}`}
        >
          Online Mode
        </button>
      </div>
      {/* 
content */}
      <div>
        <div>
          {statusCashPayment ? <Cash /> : null}
          {statusOnlinePayment ? <Online /> : null}
        </div>
      </div>
      <footer className="absolute right-5 bottom-3 flex gap-28">
        <button
          onClick={handleContinue}
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

      {
        showPaymentDone ? <PaymentSuccess /> : null
      }
    </div>
  );
}

export default Payment;