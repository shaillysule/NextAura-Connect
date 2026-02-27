import "./Sidebar.css";
import {
  FaHome,
  FaUser,
  FaList,
  FaChartBar,
  FaCalendarAlt
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">

      <ul className="admin-menu">
        <li className="active">
          <FaHome/>
          Dashboard
          </li>
        <li>
          <FaUser/>
          Users
          </li>
        <li>
          <FaList/>
          Listings
          </li>
        <li>
          <FaCalendarAlt/>
          Rentals
          </li>
        <li>
          <FaChartBar/>
          Reports
          </li>
      </ul>
    </div>
  );
};

export default Sidebar;