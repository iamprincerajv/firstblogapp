import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(`Error in logout ${error}`);
      });
  };

  return (
    <button onClick={logoutHandler} className="inline-block px-6 py-2 duration-200 hover:bg-fuchsia-900 font-bold rounded-full">
      Log Out &rarr;
    </button>
  );
};

export default LogoutBtn;
