import "./AdminCards.css";
import {
  LuUsers,
  LuPackage,
  LuHourglass,
  LuRefreshCcw,
  LuHistory,
  LuTrendingUp,
} from "react-icons/lu";

import { useEffect, useState } from "react";
import axios from "axios";

const AdminCards = () => {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalResources: 0,
    activeRentals: 0,
    pendingApprovals: 0,
    totalRevenue: 0
  });

  useEffect(() => {

    const fetchStats = async () => {
      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/admin/stats",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(res.data);

      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();

  }, []);

  return (
    <div className="admin-cards">

      <div className="admin-card">
        <div className="icon purple"><LuUsers/></div>
        <h4>Total Users</h4>
        <span>{stats.totalUsers}</span>
      </div>

      <div className="admin-card">
        <div className="icon blue"><LuPackage/></div>
        <h4>Total Listings</h4>
        <span>{stats.totalResources}</span>
      </div>

      <div className="admin-card">
        <div className="icon orange"><LuRefreshCcw/></div>
        <h4>Active Rentals</h4>
        <span>{stats.activeRentals}</span>
      </div>

      <div className="admin-card">
        <div className="icon green"><LuHourglass/></div>
        <h4>Pending Approvals</h4>
        <span>{stats.pendingApprovals}</span>
      </div>

      <div className="admin-card">
        <div className="icon pink"><LuHistory/></div>
        <h4>Recent Activities</h4>
        <span>No Recent Activity</span>
      </div>

      <div className="admin-card">
        <div className="icon yellow"><LuTrendingUp/></div>
        <h4>Total Revenue</h4>
        <span>₹{stats.totalRevenue}</span>
      </div>

    </div>
  );
};

export default AdminCards;