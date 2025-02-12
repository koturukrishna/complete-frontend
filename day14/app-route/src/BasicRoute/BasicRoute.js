import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Navbar from "./Pages/Navbar";

const BasicRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default BasicRoute;
