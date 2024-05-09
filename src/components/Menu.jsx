import React from "react";
import LogoutBtn from "./Header/LogoutBtn";
import { useNavigate } from "react-router-dom";
import cancel from "../assets/cancel.svg";

const Menu = ({ navItems, authStatus, menuClass, setMenuClass }) => {
  const navigate = useNavigate();

  const clickHandler = (slug) => {
    navigate(slug);
    setMenuClass("-right-72");
  };

  return (
    <div className={`fixed top-0 ${menuClass} transition-all ease-in-out delay-75 duration-200 bg-fuchsia-950 p-5 h-full w-48 z-50 flex justify-center`}>
      <ul>
      <img onClick={() => setMenuClass("-right-72")} className="w-8 absolute top-1 right-[196px] cursor-pointer" src={cancel} alt="cancel" style={{filter: "invert(80%) sepia(27%) saturate(2890%) hue-rotate(208deg) brightness(106%) contrast(98%)"}} />
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button
                onClick={() => clickHandler(item.slug)}
                className="p-1 px-3 rounded-md mb-2 bg-fuchsia-900 w-32"
              >
                {item.name}
              </button>
            </li>
          ) : null
        )}
        {authStatus && (
          <li>
            <LogoutBtn bgColor="bg-fuchsia-900" />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
