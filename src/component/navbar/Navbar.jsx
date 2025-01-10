import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className={`${pathname === "/dashboard" ? "grey" : ""} `}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/login">Login </NavLink>
        <NavLink to="/search">Search </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
