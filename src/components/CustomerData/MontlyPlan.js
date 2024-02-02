import React from "react";
import { IoSearch } from "react-icons/io5";

function MontlyPlan() {
  return (
    <div className="flex flex-col gap-2 px-8 py-3 ">
      <div className="text-2xl">Plans</div>
      {/* <div className="flex ">
        <input
          placeholder="search plan..."
          className="bg-zinc-200 w-full px-3 py-1 leading-6 border border-yellow-400 "
        />

        <IoSearch class="h-5 w-5" />
      </div> */}

      <div class="relative max-w-3xl  mt-auto">
        <input
          class="w-full py-2 px-4 border border-yellow-300 rounded-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-black-500"
          type="search"
          placeholder="Search"
        />
        <button class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-700">
          <svg
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
            />
          </svg>
        </button>
      </div>
      <div>{/* backend data */}</div>
    </div>
  );
}

export default MontlyPlan;