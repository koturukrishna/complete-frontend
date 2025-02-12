import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../layout/Header";
import Home from "./Home";
import Restaurant from "./Restaurant";
import Cart from "./Cart";
import RestaurantDetail from "./RestaurantDetail";
import { Provider } from "react-redux";
import { store } from "../globalCart/store";
import LoginForm from "../Login/LoginForm";
import Layout from "./Layout";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element }) => {
  const token = Cookies.get("jwt_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

const FoodApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={<ProtectedRoute element={<Home />} />}
            ></Route>
            <Route
              path="/restaurant"
              element={<ProtectedRoute element={<Restaurant />} />}
            ></Route>
            <Route
              exact
              path="/restaurant/:id"
              element={<ProtectedRoute element={<RestaurantDetail />} />}
            ></Route>

            <Route
              path="/cart"
              element={<ProtectedRoute element={<Cart />} />}
            ></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default FoodApp;
