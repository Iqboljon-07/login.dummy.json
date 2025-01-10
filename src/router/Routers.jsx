import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Search from "../pages/search/Search";
import Details from "../pages/detail/Details";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="product/:id" element={<Details />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default Routers;
