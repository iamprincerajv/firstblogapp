import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import menu from "../../assets/menu.svg";
import Menu from "../Menu";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuClass, setMenuClass] = useState(`-right-72`);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const showMenu = () => {
    if(menuClass.includes("-right-72")) {
      setMenuClass(`right-0`);
    } else {
      setMenuClass(`-right-72`);
    }
  }

  return (
    <header className="py-3 px-3 shadow bg-fuchsia-950 text-white">
      <Container>
        <nav className="flex justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="40px" />
            </Link>
          </div>
          <ul className="hidden ml-auto sm:flex">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-5 sm:px-6 py-2 duration-200 hover:bg-fuchsia-900 font-bold rounded-md"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          <div  onClick={showMenu}>
            <img className="w-8 sm:hidden cursor-pointer" src={menu} id="menuBar" alt="menu bar" style={{filter: "invert(80%) sepia(27%) saturate(2890%) hue-rotate(208deg) brightness(106%) contrast(98%)"}} />
          </div>
        </nav>
        <Menu navItems={navItems} authStatus={authStatus} menuClass={menuClass} setMenuClass={setMenuClass} />
      </Container>
    </header>
  );
};

export default Header;
