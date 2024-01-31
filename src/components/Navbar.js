import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { RegisterForm } from "./RegisterForm";
import AdminLogin from "./AdminLogin";
import { useNavigate } from "react-router-dom";
// import { setLogout } from "../store/slices/authSlice";

function Navbar({ setAdmin, Admin }) {
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);

  const [showRegForm, setShowRegForm] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const [showRegisterSuccessfully, setShowRegisterSuccessfully] =
    useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    setAdmin(false);

    setShowAdminLogin(false);
    navigate("/");
  };

  return (
    <div className="flex justify-between  w-full h-[8vh] bg-yellow-300 bg-opacity-50 px-16 items-center">
      <div className="fontmess text-2xl  tracking-[.2em] font-bold">
        Mess Management System
      </div>
      <div className="text-customBlack font-montserrat flex gap-10 text-md">
        {!Admin ? (
          <>
            <p>
              <button onClick={() => setShowRegForm(true)}>Register</button>
              <RegisterForm
                isVisible={showRegForm}
                onClose={() => setShowRegForm(false)}
                showRegisterSuccessfully={showRegisterSuccessfully}
                setShowRegisterSuccessfully={setShowRegisterSuccessfully}
              />
            </p>
            <p>
              <button onClick={() => setShowAdminLogin(true)}>
                Admin Login
              </button>
              <AdminLogin
                setAdmin={setAdmin}
                isVisible={showAdminLogin}
                onClose={() => setShowAdminLogin(false)}
              />
            </p>
          </>
        ) : (
          <button onClick={handleLogout}>Log out</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
