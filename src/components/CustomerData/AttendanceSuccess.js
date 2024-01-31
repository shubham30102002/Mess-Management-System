import React from 'react'

const AttendanceSuccess = ({onClose}) => {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };



  return (
    <div
    className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
  flex justify-center items-center pl-2 pr-2 pb-2"
    id="wrapper"
    onClick={handleClose}
  >
    <div className="w-[40vw] h-[40vh] bg-white flex flex-col gap-1">
      <div className="bg-[#FFD33C] p-2 flex justify-between">
        <button className=" text-xl" onClick={onClose}>
          X
        </button>
      </div>

      <div className="p-3 flex flex-col gap-1">
        <div >
          <div className="mb-1 px-4">
            <label>Successfully</label>
          </div>

            <button
              onClick={onClose}
              className="bg-[#FFD33C] px-8 border border-black outline-8 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default AttendanceSuccess