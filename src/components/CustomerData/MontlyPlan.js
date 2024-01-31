import React from 'react'
import { IoSearch } from "react-icons/io5";

function MontlyPlan() {
  return (
    <div className='flex flex-col justify-between '>
        <div className='text-2xl flex justify-evenly mt-5'>
            Plans 
            <div className='flex '>
            <input placeholder='search plan...' className='bg-zinc-200 w-[30vw]  ' / >
            <IoSearch  className=''/>
            </div>
            
             
        </div>
        
        <div>
            {/* backend data */}
        </div>

    </div>
  )
}

export default MontlyPlan