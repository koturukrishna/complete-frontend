import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet /> {/* This will render the child routes */}
      </main>
    </div>
  );
};

export default Layout;
