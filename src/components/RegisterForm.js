import { useState } from "react";
import RegisterSuccessfully from "./RegisterSuccessfully";

export const RegisterForm = ({
  isVisible,
  onClose,
  setShowRegisterSuccessfully,
  showRegisterSuccessfully,
}) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
    setShowRegisterSuccessfully(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRegisterSuccessfully(true);
  };

  return (
    <div
      className="fixed inset-0   backdrop-blur-sm 
      flex justify-center items-center pl-2 pr-2 pb-2 "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[40vw] h-[80vh] relative bg-white flex flex-col gap-1">
        <div className="bg-[#FFD33C] p-2 flex justify-between">
          <div className="text-bold">Register</div>
          <button className=" text-xl" onClick={() => onClose()}>
            X
          </button>
        </div>
        {showRegisterSuccessfully ? <RegisterSuccessfully /> : null}

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="p-3 flex flex-col gap-1"
        >
          <div className="mb-1 px-4">
            <label className="text-left">First Name :</label>
            <br />
            <input className="w-full h-[4vh] p-2 bg-zinc-300 border border-black outline-8 rounded-md "></input>
            <br />
          </div>

          <div className="mb-1 px-4">
            <label>Last Name :</label>
            <br />
            <input className="w-full h-[4vh] p-2 bg-zinc-300 border border-black outline-8 rounded-md"></input>
            <br />
          </div>

          <div className="mb-1 px-4">
            <label>Email id :</label>
            <br />
            <input className="w-full h-[4vh] p-2 bg-zinc-300 border border-black outline-8 rounded-md"></input>
            <br />
          </div>

          <div className="mb-1 px-4">
            <label>Password :</label>
            <br />
            <input className="w-full h-[4vh] p-2 bg-zinc-300 border border-black outline-8 rounded-md"></input>
            <br />
          </div>

          <div className="mb-1 px-4">
            <label>Mobile No :</label>
            <br />
            <input className="w-full h-[4vh] p-2 bg-zinc-300 border border-black outline-8 rounded-md"></input>
            <br />
          </div>

          <div className="mb-1 px-4">
            <label>Address :</label>
            <br />
            <textarea className="w-full p-2 bg-zinc-300 border border-black outline-8 rounded-md"></textarea>
            <br />
          </div>

          <div className="flex justify-between px-4 py-1.5 ">
            <button className="bg-yellow-400   px-8 border border-black outline-8 rounded-md">
              Register
            </button>

            <button
              onClick={onClose}
              className="bg-yellow-400 px-8 border border-black outline-8 rounded-md"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
