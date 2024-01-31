import React, { useState } from 'react';

function CustomerProfile() {
  const [searchButton, setSearchButton] = useState(true);

  return (
    <div className="w-[95vw] h-[70vh] mx-auto mt-4 ">
      <header className="bg-yellow-300 w-[95vw] h-[8vh] text-2xl font-bold py-2 px-10 rounded-tl-full ">
        Customer Profile
      </header>

      {searchButton ? (
        <div className="w-[95vw] h-[70vh]  mx-auto  bg-white ">
          <input placeholder='search student name' className='bg-zinc-200 w-[40vw] border border-black outline-8' />
          <button className="bg-yellow-400 px-8 border border-black outline-8  
          font-semibold" onClick={() => setSearchButton(false)}>Search</button>

          <div>
            <button className="bg-yellow-400 px-8 border border-black outline-8  
          font-semibold">Close</button>
          </div>
        </div>


      ) : (
        <div className="w-[95vw] h-[70vh]  mx-auto  bg-white ">
          <form>
            <div>
              <label>Name:</label>
              <br />
              <input className='bg-zinc-200 w-[40vw] border border-black outline-8' />
              <br />

              <label>Mobile Number:</label>
              <br />
              <input className='bg-zinc-200 w-[40vw] border border-black outline-8' />
              <br />

              <label>Permanent Address:</label>
              <br />
              <input className='bg-zinc-200 w-[40vw] border border-black outline-8' />
              <br />

              <label>Temporary Address:</label>
              <br />
              <input className='bg-zinc-200 w-[40vw] border border-black outline-8' />
              <br />

              <label>Aadhar Number:</label>
              <br />
              <input className='bg-zinc-200 w-[40vw] border border-black outline-8' />
              <br />
            </div>

            <div>
              {/* plan category remaining balance */}
              {/* <p>plan <span>${}</span></p> */}
            </div>
          </form>

          <div>
            <button className="bg-yellow-400 px-8 border border-black outline-8  
          font-semibold" onClick={() => setSearchButton(true)}>Close</button>
          </div>
        </div>
      )}


    </div>
  );
}

export default CustomerProfile;
