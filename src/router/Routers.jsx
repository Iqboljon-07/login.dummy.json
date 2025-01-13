import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Search from "../pages/search/Search";
import Details from "../pages/detail/Details";
import Color from "../pages/color/Color";
import Nav from "../pages/nav/Nav";
import ChipsArray from "../pages/chips/Chips";
import MiniDrawer from "../pages/drawer/Drawer";
import QuiltedImageList from "../pages/img/Img";
import { KeepMountedModal as Modal } from "../pages/modal/Modal";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="product/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/color" element={<Color />} />
          <Route path="/navbar" element={<Nav />} />
          <Route path="/chips" element={<ChipsArray />} />
          <Route path="/drawer" element={<MiniDrawer />} />
          <Route path="/img" element={<QuiltedImageList />} />
          <Route path="/modal" element={<Modal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routers;
