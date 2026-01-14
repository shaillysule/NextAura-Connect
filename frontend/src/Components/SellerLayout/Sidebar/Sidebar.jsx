import React from "react";
import {
  FaHome,
  FaPlus,
  FaBox,
  FaShoppingCart
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      

      <ul className="sidebar-menu">
        <li className="active">
          <FaHome /> Dashboard
        </li>
        <li>
          <FaPlus /> Add Product
        </li>
        <li>
          <FaBox /> My Products
        </li>
        <li>
          <FaShoppingCart /> Orders
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
