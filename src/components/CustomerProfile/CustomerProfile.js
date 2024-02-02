import React, { useState } from "react";
import { Link } from "react-router-dom";

function CustomerProfile() {
  const [searchButton, setSearchButton] = useState(true);

  return (
    <div className="  w-[95vw] h-[70vh] mx-auto mt-4 ">
      <header className="bg-yellow-300 w-[95vw] h-[8vh] text-2xl font-bold py-2 px-10 rounded-tl-full ">
        Customer Profile
      </header>

      <div className=" relative w-[95vw] h-[70vh]  mx-auto  bg-white  ">
        <input
          placeholder="search student name"
          className=" w-[90%]   bg-zinc-200 border border-black rounded-lg mx-20 my-10 p-1"
        />
        
        {searchButton ? (
          <div>
            <button
              className="absolute right-8 top-24 bg-yellow-400 px-7  py-1 border border-black rounded-lg
          font-semibold"
              onClick={() => setSearchButton(false)}
            >
              Search
            </button>
          </div>
        ) : (
          <div className="" >
            <form className="pl-8 flex flex-col gap-2">
              <div>
                <label>Name:</label>
                <br />
                <input className="bg-zinc-300 w-[40vw] border border-black outline-8" />
                <br />

                <label>Mobile Number:</label>
                <br />
                <input className="bg-zinc-300 w-[40vw] border border-black outline-8" />
                <br />

                <label>Permanent Address:</label>
                <br />
                <textarea className="w-[40vw] bg-zinc-300 border border-black outline-8"></textarea>
                <br />

                <label>Temporary Address:</label>
                <br />
                <textarea className="w-[40vw]  bg-zinc-300 border border-black outline-8"></textarea>
                <br />

                <label>Aadhar Number:</label>
                <br />
                <input className="bg-zinc-300 w-[40vw] border border-black outline-8" />
                <br />
              </div>
              <div>
                {/* plan category remaining balance */}
                {/* <p>plan <span>${}</span></p> */}
              </div>

            </form>
          </div>
        )}

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

      export default CustomerProfile;