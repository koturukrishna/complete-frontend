import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./BasicRoute.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.finalcart.cartList);

  const cartItemsCount = cart.length;
  console.log("cartItemsCount", cartItemsCount);

  return (
    <div>
      <nav class="navbar" style={{ backgroundColor: "#e3f2fd" }}>
        <div class="container-fluid">
          <ul
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link-item"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link-item"
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link-item"
              }
            >
              Cart
              {cartItemsCount}
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
