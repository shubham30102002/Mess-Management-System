import React, { useState } from "react";
import GenSuccess from "./GenSuccess";

const GenExcel = () => {
  const [showGenSuccess, setShowGenSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowGenSuccess(true);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="relative p-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" class="accent-yellow-400 h-5 w-5" />
            <label
              className="bg-yellow-300 px-9 py-0 border border-black rounded-md  
               font-semibold"
            >
              Dining
            </label>
            <input type="checkbox" class="accent-yellow-400 h-5 w-5" />
            <label
              className="bg-yellow-300 px-9 py-0 border border-black rounded-md  
               font-semibold"
            >
              Tiffin
            </label>
          </div>
          <div className=" absolute top-96 bottom-0">
            <button
              className=" absolute  bottom-0 bg-yellow-300 px-9 py-0 border border-black rounded-md  
            font-semibold"
            >
              Generate
            </button>
          </div>
        </div>

        {showGenSuccess ? (
          <GenSuccess onClose={() => setShowGenSuccess(false)} />
        ) : null}

        <div>{/* backend data  */}</div>

        {/* <div>
          <button
            className=" left-18 bottom-5 bg-yellow-300 px-9 py-0 border border-black rounded-md  
            font-semibold"
          >
            Generate
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default GenExcel;