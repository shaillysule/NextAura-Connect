import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <TopNavbar />

      <div className="seller-body">
        <Sidebar />
        <div className="seller-content">{children}</div>
      </div>
    </>
  );
};

export default Layout;
