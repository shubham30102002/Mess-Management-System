import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between w-full h-[57px] bg-yellow-300 '>
        <div className='fontLexend tracking-[.2em] leading-[30px] text-[24px]
         font-normal w-[444px] h-[30px] ml-[20px] mt-[14px]'>
            Mess Management System
        </div>
        <div className='flex justify-evenly gap-[10px] w-[344px] h-[29px] mt-[14px] 
        left-[1096px] '>
            <h5>Register</h5>
            <h5>Admin</h5>
            <h5>Login</h5>

        </div>
    </div>
  )
}
