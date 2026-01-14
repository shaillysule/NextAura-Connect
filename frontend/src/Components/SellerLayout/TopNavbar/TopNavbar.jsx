import React, { useState } from "react";
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
            <span>Seller</span>
            <FaChevronDown
              className={`dropdown-arrow ${open ? "rotate" : ""}`}
            />
          </div>

          {open && (
            <div className="user-dropdown-menu">
              <div className="dropdown-item">
                <FaUser />
                <span>Profile</span>
              </div>

              <div className="dropdown-item">
                <FaCog />
                <span>Settings</span>
              </div>

              <div className="dropdown-item logout">
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
