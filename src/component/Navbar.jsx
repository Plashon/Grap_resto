import React from "react";
import Header from "./Header";
import UserProfile from "./UserProfile";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import { useAuthContext } from "../context/authContext";

function Navbar() {
  const { user } = useAuthContext();

  return (
    <div className="navbar bg-base-100 mt-5 mb-10 mx-auto h-30 w-5/6">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="http://localhost:5173/">Home page</a>
            </li>
            <li>
              <a href="http://localhost:5173/add/">Add Restaurant</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center h-10">
        <div className="btn btn-ghost text-xl align-middle h-24">
          <Header />
        </div>
      </div>

      <div className="navbar-end space-x-2">
        {user && (
          <div className=" text-xl">
            Welcome,
            <span className=" text-blue-700">
              {user.userName}
              {""}
              {user.roles.map((role,index) => {
                return (
                  <div key={index} className=" text-xs">
                    <span className="  badge-accent badge-outline">{role}</span>
                  </div>
                );
              })}
            </span>
          </div>
        )}

        {user ? (
          <UserProfile />
        ) : (
          <div className="space-x-2">
            <RegisterButton />
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
