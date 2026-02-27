import "./AdminCards.css";
import {
  LuUsers,
  LuPackage,
  LuHourglass,
  LuRefreshCcw,
  LuHistory,
  LuTrendingUp,
} from "react-icons/lu";

const AdminCards = () => {
  return (
    <div className="admin-cards">
      <div className="admin-card">
        <div className="icon purple"><LuUsers/></div>
        <h4>Total Users</h4>
        <span>1,240</span>
      </div>

      <div className="admin-card">
        <div className="icon blue"><LuPackage/></div>
        <h4>Total Listings</h4>
        <span>860</span>
      </div>

      <div className="admin-card">
        <div className="icon orange"><LuRefreshCcw/></div>
        <h4>Active Rentals</h4>
        <span>312</span>
      </div>

      <div className="admin-card">
        <div className="icon green"><LuHourglass/></div>
        <h4>Pending Approvals</h4>
        <span>24</span>
      </div>

      <div className="admin-card">
        <div className="icon pink"><LuHistory/></div>
        <h4>Recent Activities</h4>
        <span>No Recent Activity</span>
      </div>

      <div className="admin-card">
        <div className="icon yellow"><LuTrendingUp/></div>
        <h4>Total Revenue</h4>
        <span>₹45,600</span>
      </div>

    </div>
  );
};

export default AdminCards;