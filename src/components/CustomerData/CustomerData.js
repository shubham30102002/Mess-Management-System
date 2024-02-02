import { useState } from "react";
import MontlyPlan from "./MontlyPlan";
import GenExcel from "./GenExcel";
import AddHelper from "./AddHelper";


function CustomerData() {
  const [statusMontlyPlan, setStatusMontlyPlan] = useState(true);
  const [statusGenExcel, setStatusGenExcel] = useState(false);
  const [statusAddHelper, setStatusAddHelper] = useState(false);
  
  // const [changeColor, setChangeColor] = useState(false);

  // const handleClick = () => {
  //   setChangeColor(!changeColor);
  // }

  const handleClick =() => {
    setStatusMontlyPlan(true);
    setStatusGenExcel(false);
    setStatusAddHelper(false);
  }

  const handleClickGenExcel = () => {
    setStatusGenExcel(true);
    setStatusMontlyPlan(false);
    setStatusAddHelper(false);
  }

  const handleAddHelper = () => {
    setStatusGenExcel(false);
    setStatusMontlyPlan(false);
    setStatusAddHelper(true);
  }
  
  return (
    <div className="w-[95vw] h-[70vh] mx-auto mt-4 ">
      <header className="bg-yellow-300 w-[95vw] h-[8vh] text-2xl font-bold py-2 px-10 rounded-tl-full ">
        Customer Database
      </header>

      <div className="w-[95vw] h-[70vh]  mx-auto  bg-white relative">
          
          {/* buttons */}
        <div className="flex ml-5 gap-1 ">
          <div >
            <button onClick={handleClick} className={ ` mt-2 ml-4 p-1 bg-yellow-300 font-semibold rounded-lg wrapper 
            ${(statusMontlyPlan === true) ? 'text-white' : 'text-black'}`}
             >Montly Plan </button>
           
          </div>

          <div>
            <button onClick={handleClickGenExcel} className={ ` mt-2 ml-4 p-1 bg-yellow-300 font-semibold rounded-lg wrapper 
            ${(statusGenExcel === true) ? 'text-white' : 'text-black'}`}> Generate Excel Sheet </button>
          </div>

          <div>
            <button onClick={handleAddHelper} className={ ` mt-2 ml-4 p-1 bg-yellow-300 font-semibold rounded-lg wrapper 
            ${(statusAddHelper === true) ? 'text-white' : 'text-black'}`}> Add Helper </button>
          </div>
        </div>

        {/* content */}
        <div>
          <div>
          {
              statusMontlyPlan ? (<MontlyPlan/>) : null
          }
          {
              statusGenExcel ? (<GenExcel/>) : null
          }
          {
              statusAddHelper ? (<AddHelper/>) : null
          }
          </div>

        </div>
        




        <footer className="mb-2">
          <button className="absolute right-5 bottom-3 bg-yellow-400 px-8 py-1 border border-black outline-none rounded-sm">
            Close
          </button>
        </footer>
      </div>
    </div>
  )
}

export default CustomerData;
