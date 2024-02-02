import React from "react";

const AttendanceSuccess = ({ onClose }) => {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className=" fixed inset-0 bg-opacity-25 backdrop-blur-sm 
  flex justify-center items-center pl-2 pr-2 pb-2"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="relative w-[40vw] h-[40vh] bg-white flex flex-col gap-1">
        <div
          className="bg-[#FFD33C] p-2 flex
  justify-end flex-end"
        >
          <button className="text-2xl" onClick={onClose}>
            X
          </button>
        </div>

        <div className="flex justify-center my-auto ">
          <label className="bg-yellow-400 px-16 py-2 font-bold border border-black">
            Successfully
          </label>
        </div>

        <button
          onClick={onClose}
          className="absolute right-5 bottom-3 bg-yellow-400 px-8 py-1 border border-black outline-none rounded-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AttendanceSuccess;