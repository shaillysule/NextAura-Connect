import "./Sidebar.css";
import {
  FaHome,
  FaUser,
  FaList,
  FaChartBar,
  FaCalendarAlt
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">

      <ul className="admin-menu">

        <li>
          <NavLink
            to="/admin"
            end
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
            to="/admin/users"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
           >
            <FaUser />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/listings"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            >
            <FaList />
            <span>Listings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
              to="/admin/rentals"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <FaCalendarAlt />
              <span>Rentals</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/reports"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <FaChartBar />
            <span>Reports</span>
          </NavLink>
          </li>
      </ul>
    </div>
  );
};

export default Sidebar;