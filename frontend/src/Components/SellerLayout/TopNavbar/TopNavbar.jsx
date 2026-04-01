import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import axios from "axios";
import "./TopNavbar.css";

const TopNavbar = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("Seller"); // default
  const navigate = useNavigate();

  // ✅ FETCH USER NAME
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserName(res.data.name); // 👈 dynamic name

      } catch (error) {
        console.error("User fetch error:", error);
      }
    };

    fetchUser();
  }, []);

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
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
            <span>{userName}</span> {/* ✅ DYNAMIC NAME */}
            <FaChevronDown
              className={`dropdown-arrow ${open ? "rotate" : ""}`}
            />
          </div>

          {open && (
            <div className="user-dropdown-menu">
              <NavLink
                to="/seller/profile"
                className="dropdown-item"
                onClick={() => setOpen(false)}
              >
                <FaUser />
                <span>Profile</span>
              </NavLink>

              <NavLink
                to="/seller/settings"
                className="dropdown-item"
                onClick={() => setOpen(false)}
              >
                <FaCog />
                <span>Settings</span>
              </NavLink>

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