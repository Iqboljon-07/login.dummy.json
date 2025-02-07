import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className={`${pathname === "/dashboard" ? "grey" : ""} `}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/login">Music </NavLink>
        <NavLink to="/search">Search </NavLink>
        <NavLink to="/color">Color </NavLink>
        <NavLink to="/navbar">Navbar </NavLink>
        <NavLink to="/chips">ChipsArray</NavLink>
        <NavLink to="/drawer">Drawer</NavLink>
        <NavLink to="/img">Img</NavLink>
        <NavLink to="/modal">Modal</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
