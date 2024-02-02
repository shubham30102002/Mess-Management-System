import React, { useState } from "react";
import AttendanceSuccess from "./AttendanceSuccess";

const AddHelper = () => {
  const [showAttendanceSuccess, setShowAttendanceSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAttendanceSuccess(true);
  };

  return (
    <div className=" ml-10 mt-5">
      <div className="mb-5 flex flex-row gap-1">
        <input type="checkbox" class="accent-yellow-400 h-5 w-5" />
        <label
          className="bg-yellow-300 px-9 py-0 border border-black rounded-md  
               font-semibold"
        >
          Attendance
        </label>
      </div>
   
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="relative flex flex-row gap-24">
          <div className="w-[50%]">
            <label>Name :</label>
            <br />
            <input className="bg-zinc-200 w-full  border border-black outline-8" />
            <br />
            <label>Mobile Number :</label>
            <br />
            <input className="bg-zinc-200 w-full border border-black outline-8" />
          </div>

          <div className="w-[50%]  mx-28">
            <div className="px-4 mb-5">FingerPrint/ Biometric Details:</div>
            <div className="bg-zinc-200  w-[90%] h-[10rem] border border-black z-2"></div>
          </div>
        </div>

        <div>
          <button type="Submit"
           className=" absolute  bottom-3 bg-yellow-400 px-8 py-1 border
            border-black outline-none rounded-sm"
          >
            Attendance
          </button>
        </div>
      </form>

      {showAttendanceSuccess ? (
        <AttendanceSuccess onClose={() => setShowAttendanceSuccess(false)} />
      ) : null}
    </div>
  );
};

export default AddHelper;