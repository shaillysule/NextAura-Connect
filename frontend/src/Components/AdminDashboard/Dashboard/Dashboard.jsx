import AdminCards from "../AdminCards/AdminCards";
import "./Dashboard.css";


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Dashboard Overview</h1>

      <AdminCards />
    </div>
  );
};

export default AdminDashboard;