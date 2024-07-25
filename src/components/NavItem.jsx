import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NavItem = ({ text, path, Icon }) => {
  const location = useLocation()
  const isActive = location.pathname === path;

  return (
    <NavLink to={path} className="mx-2">
      <li
        className={`flex items-center gap-2 ${
          isActive ? "border-green-700 border-b-2" : ""
        } text-green-700 hover:text-green-900 transition duration-200`}
      >
        {Icon && <Icon className="w-5 h-5" />}{" "}
        {text}
      </li>
    </NavLink>
  );
}



export default NavItem