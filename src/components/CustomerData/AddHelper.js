import React, { useState } from 'react'
import AttendanceSuccess from './AttendanceSuccess';


const AddHelper = () => {
    const [showAttendanceSuccess, setShowAttendanceSuccess] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAttendanceSuccess(true);
    }
 

    return (
        <div className='ml-10 mt-5'>
            <div className='mb-5'>
                <input type='checkbox' />
                <label className='bg-yellow-400 px-2 border'>Attendance</label>
            </div>
            {showAttendanceSuccess ? 
            <AttendanceSuccess 
            onClose={() => setShowAttendanceSuccess(false)}/> : null}
            <form onSubmit={(e) => handleSubmit(e)}>


                <div className='flex gap-24'>
                    <div>
                        <label>Name :</label>
                        <br />
                        <input className='bg-zinc-200 w-[40vw] border border-black outline-8' />
                        <br />
                        <label>Mobile Number :</label>
                        <br />
                        <input className='bg-zinc-200 w-[40vw] border border-black outline-8' />

                    </div>

                    <div>
                        <div className='px-4 mb-5'>
                            FingerPrint/ Biometric Details:
                        </div>

                        <div className='bg-zinc-200 w-[30vw] h-[25vh]'>

                        </div>
                    </div>
                </div>

                <div>
                    <button className="bg-yellow-400 px-8 border border-black outline-8 
                font-semibold ">
                        Attendance
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddHelper