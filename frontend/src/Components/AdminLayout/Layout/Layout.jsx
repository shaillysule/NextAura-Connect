import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopNavbar from "../Topbar/TopNavbar";
import "./Layout.css";

const Layout = () => {
  return (
    <>
    <TopNavbar />

    <div className="admin-layout">
      <Sidebar />

        <div className="admin-content">
          <Outlet />
        </div>

      
    </div>
    </>
  );
};

export default Layout;