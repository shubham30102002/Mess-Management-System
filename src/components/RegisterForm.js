import React, { Fragment } from 'react'

export const RegisterForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }
  return (

    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
      flex justify-center items-center pl-2 pr-2 pb-2' id='wrapper' onClick={handleClose}>
      <div className='w-[40vw] h-[80vh] bg-white flex flex-col'>

        <div className='bg-[#FFD33C] p-2 flex justify-between'>
          <div className='text-bold'>
            Register
          </div>
          <button className=' text-xl' onClick={() => onClose()}>X</button>
        </div>


        <div className='ml-1'>

          <div className='mb-1'>
            <label className='text-left'>First Name :</label>
            <br />
            <input className='w-[38vw] h-[4vh] p-2 bg-zinc-300 outline ' ></input>
            <br />
          </div>

          <div className='mb-1'>

            <label>Last Name :</label>
            <br />
            <input className='w-[38vw] h-[4vh] p-2 bg-zinc-300 outline' ></input>
            <br />
          </div>


          <div className='mb-1'>

            <label>Email id :</label>
            <br />
            <input className='w-[38vw] h-[4vh] p-2 bg-zinc-300 outline' ></input>
            <br />
          </div>


          <div className='mb-1'>

            <label>Password :</label>
            <br />
            <input className='w-[38vw] h-[4vh] p-2 bg-zinc-300 outline' ></input>
            <br />
          </div>


          <div className='mb-1'>

            <label>Mobile No :</label>
            <br />
            <input className='w-[38vw] h-[4vh] p-2 bg-zinc-300 outline' ></input>
            <br />
          </div>


          <div className='mb-1'>

            <label>Address :</label>
            <br />
            <input className='w-[38vw] h-[10vh] p-2 bg-zinc-300 outline' ></input>
            <br />
          </div>



          <div className='flex justify-between '>
            <button type="submit" className='bg-yellow-400 ml-4  ' >Regiter</button>

            <button className='bg-yellow-400 '>Close</button>

          </div>

        </div>
      </div>




    </div>


  )
}
