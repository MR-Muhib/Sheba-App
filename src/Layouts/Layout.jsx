import React from "react";
import Navbar from "../COMPONENTS/NAVBAR/Navbar";
import Footer from "../COMPONENTS/Footer/Footer";
// import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  window.scrollTo(0, 0);
  return (
    <main>
      <Navbar />
      {children}
      {/* <Outlet /> */}
      <Footer />
    </main>
  );
};

export default Layout;
