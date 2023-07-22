import React from "react";
import { Link, NavLink } from "react-router-dom";

const Headers = () => {
  const navlists = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/colleges"
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
      >
        Colleges
      </NavLink>
      <NavLink
        to="/admission"
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
      >
        Admission
      </NavLink>
      <NavLink
        to="/myCollege"
        className={({ isActive }) => (isActive ? "text-secondary" : "")}
      >
        My College
      </NavLink>
      <Link to='/login' className="btn-primary">Login
      </Link>
    </>
  );
  return (
    <div className=" bg-primary">
      <div className="container mx-auto navbar text-white">
        <div className="navbar-start">
          <Link
          to={'/'}
            style={{ fontFamily: "Pacifico" }}
            className="text-2xl text-secondary"
          >
            Your Entrance
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-semibold items-center">
            {navlists}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content right-0 z-[1] mt-3 shadow gap-2 rounded-box w-40 text-black"
            >
              {navlists}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Headers;
