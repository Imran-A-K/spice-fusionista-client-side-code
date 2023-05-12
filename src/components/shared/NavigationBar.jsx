/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { HiFire } from "react-icons/hi2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Avatar, Tooltip } from "flowbite-react";
const NavigationBar = () => {
  const [isUserInMobile, setIsUserInMobile] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const signOutHandler = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" px-4 py-5 md:px-24 lg:px-8">
      <div className="flex items-center justify-between sm:max-w-xl md:max-w-full mx-auto lg:max-w-screen-xl">
        <div className="flex items-center">
          <HiFire className="text-green-500 text-5xl" />
          <a
            href="/"
            className="ml-2 text-xl font-bold tracking-wide text-green-500 md:text-5xl md:font-black"
          >
            Spice Fusionista
          </a>
        </div>

        <ul className="items-center lg:flex hidden space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>

        <div>
          {user ? (
            <div className="flex items-center gap-2">
              {/* {console.log(user.photoURL)} */}
              <Tooltip content={user?.displayName} animation="duration-1000">
                <img
                  className="w-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={user.photoURL}
                  alt=""
                />
              </Tooltip>

              <button
                onClick={signOutHandler}
                className="hidden lg:block w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-violet-500 rounded-xl text-white font-bold text-lg"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex">
              <Link to="/login">
                <button className="hidden lg:block mr-4 w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-green-500 rounded-xl text-white font-bold text-lg">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="hidden lg:block w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu Bar"
            title="Open Menu Bar"
            onClick={() => setIsUserInMobile(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isUserInMobile && (
            <div className="absolute top-0 left-0 w-full z-10 bg-teal-300">
              <div className="p-5  border rounded shadow-sm bg-teal-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <HiFire className="text-green-500 text-5xl" />
                    <a
                      href="/"
                      className="ml-2 text-xl font-bold tracking-wide text-green-500 md:text-5xl md:font-black"
                    >
                      Spice Fusionista
                    </a>
                  </div>

                  <div>
                    <button
                      aria-label="Close Menu Bar"
                      title="Close Menu Bar"
                      onClick={() => setIsUserInMobile(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-4 pl-2">
                    <li>
                      <Link to="/" className="active_mobile">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link to="/blog" className="active_mobile">
                        Blog
                      </Link>
                    </li>
                    <li>
                      {user ? (
                        <button
                          onClick={signOutHandler}
                          className=" w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-violet-500 rounded-xl text-white font-bold text-lg"
                        >
                          Log Out
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <Link to="/login">
                            <button className="mr-4 w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-green-500 rounded-xl text-white font-bold text-lg">
                              Login
                            </button>
                          </Link>
                          <Link to="/register">
                            <button className="w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg">
                              Register
                            </button>
                          </Link>
                        </div>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
