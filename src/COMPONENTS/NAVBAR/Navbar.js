import Logo from "../IMAGE/logo.png";

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white h-20 sticky top-0 shadow-md">
      <div className="container flex justify-between mx-auto p-5">
        <Link to="/">
          <img src={Logo} className="w-10" alt="logo" />
        </Link>
        <div className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2  text-white bg-sky-800 round-md border"
                : "px-5 hover:bg-sky-500 hover:text-white py-2 px-5 mt-2 "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="service"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2  text-white bg-sky-800 round-md border"
                : "px-5 hover:bg-sky-500 hover:text-white py-2 px-5 mt-2 "
            }
          >
            Servises
          </NavLink>
          <NavLink
            to="stafs"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2 text-white bg-sky-800 round-md border"
                : "px=-5 hover:bg-sky-500 hover:text-white py-2 px-4 mt-2"
            }
          >
            Staff
          </NavLink>
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2 text-white bg-sky-800 round-md border"
                : "px-5 hover:bg-sky-500 hover:text-white py-2 5 mt-2 "
            }
          >
            Login
          </NavLink>
          {/* <NavLink to='dashbord'  className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2  text-white bg-sky-800 round-md border"
                : "px-5 hover:bg-sky-500 hover:text-white py-2 px-4 mt-2 "
            }>Dashbord</NavLink>
            <NavLink to='admin'  className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2  text-white bg-sky-800 round-md border"
                : "px-5 hover:bg-sky-500 hover:text-white py-2 px-4 mt-2 "
            }>Admin</NavLink>
            <NavLink to='staffs'  className={({ isActive }) =>
              isActive
                ? "px-3 py-1 mx-2  text-white bg-sky-800 round-md border"
                : "px-5 hover:bg-sky-500 hover:text-white py-2 px-4 mt-2 "
            }>Staffs</NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
