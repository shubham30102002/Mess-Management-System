import React, { useState } from 'react'
import DisaptchSuccess from './DisaptchSuccess';

function TiffinService() {
  const [dispatchBtn, setDispatchBtn] = useState(true);
  const [dailyTiffinBtn, setDailyTiffinBtn] = useState(false);

  const [showGenBtn, setShowGenBtn] = useState(true);

  const [showSuccessDispatch, setShowSuccessDispatch] = useState(false);

  const handleDispatch = () => {
    setDispatchBtn(true);
    setDailyTiffinBtn(false);
  }

  const handleDailyTiffin = () => {
    setDispatchBtn(false);
    setDailyTiffinBtn(true);
  }

  const handleDispatchList = () => {
    setShowSuccessDispatch(true);
  }
  return (
    <div className="w-[95vw] h-[70vh] mx-auto mt-4 ">
      <header className="bg-yellow-300 w-[95vw] h-[8vh] text-2xl font-bold py-2 px-10 rounded-tl-full ">
        Tiffin Service
      </header>

      <div className="w-[95vw] h-[70vh]  mx-auto  bg-white ">
        <div >
          <button className={`bg-yellow-400 ${dispatchBtn ? 'text-white' : 'text-black'}`}
            onClick={handleDispatch}>Dispatch</button>
          <button className={`bg-yellow-400 ${dailyTiffinBtn ? 'text-white' : 'text-black'}`}
            onClick={handleDailyTiffin}>List of daily tiffin</button>

        </div>



        {
          showGenBtn ? (<div>
            <button className="bg-yellow-400 px-8 border border-black outline-8  
            font-semibold"
              onClick={() => setShowGenBtn(false)}>Genrate Dispatch List</button>
          </div>) :
            (<div >

              <button onClick={() => setShowGenBtn(true)}>X</button>
              <div className='bg-yellow-400 w-[40vw] h-[40vh]'>
                <div>Today's Dispatch</div>

                <div>
                  <button className="bg-yellow-400 px-8 border border-black outline-8  
            font-semibold" onClick={handleDispatchList}>Dispatch</button>
                </div>
                {
                  showSuccessDispatch ? <DisaptchSuccess /> : null
                }
              </div>
            </div>)
        }



        <div>
          <button className="bg-yellow-400 px-8 border border-black outline-8  
          font-semibold" onClick={() => setShowGenBtn(true)}>
            Close
          </button>
        </div>
      </div>


    </div>
  )
}

export default TiffinService