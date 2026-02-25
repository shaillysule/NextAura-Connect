import Cards from "../Cards/Cards";
import "./Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Dashboard Overview</h1>

      <Cards />

      <div className="dashboard-section">
        <h3>Recent Activity</h3>
        <p>No recent activity to show.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;