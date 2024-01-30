import React, { useState } from 'react'
import { RegisterForm } from './RegisterForm'

export const Navbar = () => {
  const [showRegForm, setShowRegForm] = useState(false);

  return (
    <div className="flex justify-between  w-full h-[8vh] bg-yellow-300 bg-opacity-50 px-16 items-center">
      <div className='fontLexend  text-2xl  tracking-[.2em] font-bold'>
        Mess Management System
      </div>
      <div className='text-customBlack font-montserrat flex gap-10 text-md '>
        <div>
          <button onClick={() => setShowRegForm(true)}>
            Register
          </button>
          <RegisterForm isVisible={showRegForm} onClose={() => setShowRegForm(false)}/>
        </div>
        <div>
          Admin
        </div>
        <div>
          Login
        </div>

      </div>
    </div>
  )
}
