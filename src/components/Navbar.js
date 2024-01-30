import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterForm } from "./RegisterForm";
import AdminLogin from "./AdminLogin";
import { setLogout } from "../store/slices/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [showRegForm, setShowRegForm] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const[isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const [showRegisterSuccessfully, setShowRegisterSuccessfully] =
    useState(false);

  // useEffect(() => {
  //   if (showRegisterSuccessfully) {
  //     setTimeout(() => {
  //       // onClose();
  //     }, 2000);
  //   }
  // }, [showRegisterSuccessfully]);

  const handleLogout = () => {
    setShowAdminLogin(false)
    dispatch(setLogout())
  }

  return (
    <div className="flex justify-between  w-full h-[8vh] bg-yellow-300 bg-opacity-50 px-16 items-center">
      <div className="fontmess text-2xl  tracking-[.2em] font-bold">
        Mess Management System
      </div>
      <div className="text-customBlack font-montserrat flex gap-10 text-md">
        {!user ? (
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
              <button onClick={() => setShowAdminLogin(true)}>Admin Login</button>
              <AdminLogin
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
