import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

import "./TopNavbar.css";

const TopNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // future: token / localStorage clear yaha hoga
    navigate("/");
  };

  return (
    <div className="top-navbar">
      {/* LEFT */}
      <div className="top-left">
        <h3>NexAuraConnect</h3>
      </div>

      {/* RIGHT */}
      <div className="top-right">
        <FaBell className="nav-icon" />

        <div className="user-dropdown">
          <div
            className="user-trigger"
            onClick={() => setOpen((prev) => !prev)}
          >
            <FaUserCircle className="user-icon" />
            <span>Admin</span>
            <FaChevronDown
              className={`dropdown-arrow ${open ? "rotate" : ""}`}
            />
          </div>

          {open && (
            <div className="user-dropdown-menu">
              {/* PROFILE */}
              <NavLink
                to="/admin"
                className="dropdown-item"
                onClick={() => setOpen(false)}
              >
                <FaUser />
                <span>Profile</span>
              </NavLink>

              {/* SETTINGS */}
              <NavLink
                to="/admin"
                className="dropdown-item"
                onClick={() => setOpen(false)}
              >
                <FaCog />
                <span>Settings</span>
              </NavLink>

              {/* LOGOUT */}
              <div
                className="dropdown-item logout"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
