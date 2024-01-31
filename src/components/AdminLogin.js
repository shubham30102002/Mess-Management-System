import { useNavigate } from "react-router-dom";
import TaskBar from "./TaskBar";
import { useDispatch } from "react-redux";
// import { setLogin } from "../store/slices/authSlice";

function AdminLogin({ isVisible, onClose, setAdmin }) {
  // const dispatch = useDispatch();
  //const nevigate = useNavigate();
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdmin(true);
    //nevigate("/customerData");
    // dispatch(
    //   setLogin({
    //     user: {
    //       name: "Mr. Admin",
    //       email: "admin@gmail.com",
    //     },
    //     token: "1234567890",
    //     role: "admin",
    //   })
    // );
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
          <div className="text-bold">Admin Login</div>
          <button className=" text-xl" onClick={() => onClose()}>
            X
          </button>
        </div>

        <div className="p-3 flex flex-col gap-1">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-1 px-4">
              <label>Email id :</label>
              <br />
              <input
                className="w-full h-[4vh] p-2 bg-zinc-300 border border-black outline-8 rounded-md"
                placeholder="abc@example.com"
              ></input>
              <br />
            </div>

            <div className="mb-1 px-4">
              <label>Password :</label>
              <br />
              <input
                className="w-full h-[4vh] p-2 bg-zinc-300 border border-black outline-8 rounded-md"
                placeholder="*******"
              ></input>
              <br />
            </div>

            <div className="flex justify-between px-4 pt-4 pb-2 ">
              <button
                type="submit"
                className="bg-[#FFD33C] px-8 border border-black outline-8 rounded-md"
              >
                Login
              </button>

              <button
                onClick={onClose}
                className="bg-[#FFD33C] px-8 border border-black outline-8 rounded-md"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
