import { useState } from "react";


function CustomerData() {
  const [statusMontlyPlan, setStatusMontlyPlan] = useState(true);
  const [statusGenExcel, setStatusGenExcel] = useState(false);
  const [statusAddHelper, setStatusAddHelper] = useState(false);
  


  return (
    <div className="w-[95vw] h-[70vh] mx-auto mt-4 ">
      <header className="bg-yellow-300 w-[95vw] h-[8vh] text-2xl font-bold py-2 px-10 rounded-tl-full ">
        Customer Database
      </header>

      <div className="w-[95vw] h-[70vh]  mx-auto  bg-white ">
          
          {/* buttons */}
        <div className="flex gap-1 ">
          <div >
            <button className= " mt-2 ml-4 p-1 bg-yellow-300 font-semibold rounded-lg wrapper "
             >Montly Plan </button>
            
          </div>

          <div>
            <button className="  mt-2 ml-4 p-1 bg-yellow-300 font-semibold rounded-lg "> Generate Excel Sheet </button>
          </div>

          <div>
            <button className=" mt-2 ml-4 p-1 bg-yellow-300 font-semibold rounded-lg "> Add Helper </button>
          </div>
        </div>

        {/* content */}
        <div>
          <div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CustomerData;
