import React from "react";
import {
  FaHome,
  FaPlus,
  FaBox,
  FaShoppingCart
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">

        <li>
          <NavLink
            to="/seller/dashboard"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/seller/add-product"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <FaPlus />
            <span>Add Product</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/seller/my-products"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <FaBox />
            <span>My Products</span>
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/seller/orders"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <FaShoppingCart />
            <span>Orders</span>
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
