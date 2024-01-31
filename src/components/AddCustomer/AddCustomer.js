import React, { useState } from 'react'
import Payment from './Payment';


function AddCustomer() {
  const [diningStatus, setDiningStatus] = useState(true);
  const [tiffinStatus, setTiffinStatus] = useState(false);

  const [showPayment, setShowPayment] = useState(false);

  const handleDinigChange = () => {
    setDiningStatus(true);
    setTiffinStatus(false);
  }

  const handleTiffinChange = () => {
    setDiningStatus(false);
    setTiffinStatus(true);
  }
  return (

    <div className="w-[95vw] h-[70vh] mx-auto mt-4 ">
      <header className="bg-yellow-300 w-[95vw] h-[8vh] text-2xl font-bold py-2 px-10 rounded-tl-full ">
        Add Customer
      </header>

      <div className="w-[95vw] h-[70vh]  mx-auto  bg-white ">
        <button className=''>
          Add Customer
        </button>

        <div >
          <button className={`${diningStatus ? 'bg-yellow-300' : null}`}
            onClick={handleDinigChange} >Dining</button>
          <button className={`${tiffinStatus ? 'bg-yellow-300' : null}`}
            onClick={handleTiffinChange}>Tiffin</button>
        </div>
        <form>
          <div className='flex gap-4'>

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
              <label>Plan:</label>
              <br />
              <input className='bg-zinc-200 w-[40vw] border border-black outline-8' />
              <br />

              {
                diningStatus ? (
                  <div>
                    <label>FingerPrint/ Biometric Details:</label>
                    <br />
                    <div className='bg-zinc-200 w-[30vw] h-[25vh]'></div>
                  </div>
                ) : null
              }

            </div>

           
          </div>

          <footer>
              <div>
                <button className="bg-yellow-400 px-8 border border-black outline-8  
          font-semibold" onClick={() => setShowPayment(true)}>Continue</button>
                <button className="bg-yellow-400 px-8 border border-black outline-8  
          font-semibold">Close</button>

              </div>

            </footer>
        </form>
      </div>

      {
        showPayment ? <Payment/> : null
      }
    </div>
  )
}

export default AddCustomer