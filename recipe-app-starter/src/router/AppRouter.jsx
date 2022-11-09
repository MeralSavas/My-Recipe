import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
