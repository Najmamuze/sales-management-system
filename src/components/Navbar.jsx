import React, { useState } from "react";
import NavItem from "./NavItem";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, Menu, Save } from "lucide-react";
import routesConfig from "../routesConfig"; // Import the routes configuration
import useCurrentUser from "../hooks/useCurrentUser";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import SignIn from "../pages/SignIn";

const Navbar = () => {
  const currentUser = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      toast.info("You are logged out🙄");
      navigate("/signin");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <nav className="flex justify-between items-center bg-green-200 p-3 shadow-md mb-3 md:px-16">
      <h1 className="hidden md:block text-2xl font-bold text-green-700">
        Sales Management System
      </h1>

      {currentUser && (
        <ul className="hidden md:flex flex-1 items-center justify-center gap-4">
          {routesConfig.map((route) => (
            <NavItem
              key={route.path}
              path={route.path}
              text={route.text}
              con={route.icon}
            />
          ))}
        </ul>
      )}

      <div className="hidden md:flex items-center">
        {currentUser ? (
          <button
            className="border-2 border-green-600 px-4 py-2 rounded-md mr-2 hover:bg-green-600 hover:text-white transition duration-200 shadow-md"
            onClick={logout}
          >
            Sign Out
          </button>
        ) : (
          <>
            {routesConfig.map((route) => (
              <Link
                key={route.path}
                className="border-2 border-green-500 px-4 py-2 rounded-md mr-2 hover:bg-green-500 hover:text-white transition duration-200 shadow-md"
                to={route.path}
              >
                {route.text}
              </Link>
            ))}
          </>
        )}
      </div>

      <div className="w-full flex md:hidden justify-end mr-3">
        <Menu size={24} onClick={toggleMenu} />
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-green-200 absolute top-16 left-0 right-0 shadow-md">
          {currentUser && (
            <ul className="flex flex-col items-center justify-center gap-4 w-full">
              {routesConfig.map((route) => (
                <NavItem
                  key={route.path}
                  path={route.path}
                  text={route.text}
                  onClick={toggleMenu}
                />
              ))}
            </ul>
          )}
          {currentUser ? (
            <li className="border-b border-gray-300 w-full text-center py-2">
              <button
                className="text-green-700 hover:text-green-900 transition duration-200"
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
              >
                Sign Out
              </button>
            </li>
          ) : (
            <>
 
              <li className="border-b border-gray-300 w-full text-center py-2">
                <Link
                  className="flex items-center justify-center gap-2 text-green-700 hover:text-green-900 transition duration-200"
                  to={"/signin"}
                >
                  <LogIn className="w-5 h-5" />
                  Sign In
                </Link>
              </li>
              <li className="border-b border-gray-300 w-full text-center py-2">
                <Link
                  className="flex items-center justify-center gap-2 text-green-700 hover:text-green-900 transition duration-200"
                  to={"/signup"}
                >
                  <Save className="w-5 h-5" />
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
