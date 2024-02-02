import React from 'react'
import paymentDone from "../../Assets/XD4x.gif"

const PaymentSuccess = () => {
    return (
        <div className=" flex flex-col fixed inset-0  bg-white 
     justify-center items-center  "
        >
            <img className='max-w-[50%] h-[10%];' src={paymentDone} alt='Payment Done' />
            <div className='text-green-400 text-[3rem] mb-20 font-bold '>
                Payment Done
            </div>
        </div>
    )
}

export default PaymentSuccess