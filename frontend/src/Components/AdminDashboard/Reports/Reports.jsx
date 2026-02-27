import "./Reports.css";
import {
  FaUsers,
  FaBoxOpen,
  FaMoneyBillWave,
  FaChartLine
} from "react-icons/fa";

const Reports = () => {
  return (
    
    <div className="admin-reports">

      <h1 className="reports-title">Reports & Analytics</h1>

      <div className="reports-grid">

        <div className="report-card">
          <FaUsers className="report-icon users"/>
          <h3>Total Users</h3>
          <p>1,240</p>
        </div>

        <div className="report-card">
          <FaBoxOpen className="report-icon listings"/>
          <h3>Total Listings</h3>
          <p>860</p>
        </div>

        <div className="report-card">
          <FaMoneyBillWave className="report-icon revenue"/>
          <h3>Total Revenue</h3>
          <p>₹45,600</p>
        </div>

        <div className="report-card">
          <FaChartLine className="report-icon growth"/>
          <h3>Platform Growth</h3>
          <p>+18% this month</p>
        </div>

      </div>

        <div className="reports-section">

            <h2 className="performance-title">Monthly Performance</h2>

            <div className="performance-grid">

                <div className="performance-card">
                <FaUsers className="perf-icon user"/>
                <h4>User Growth</h4>
                <p>+120 New Users</p>
                </div>

                <div className="performance-card">
                <FaBoxOpen className="perf-icon listing"/>
                <h4>New Listings</h4>
                <p>+75 Items Added</p>
                </div>

                <div className="performance-card">
                <FaMoneyBillWave className="perf-icon revenue"/>
                <h4>Revenue Increase</h4>
                <p>₹12,500 Earned</p>
                </div>

                <div className="performance-card">
                <FaChartLine className="perf-icon growth"/>
                <h4>Platform Growth</h4>
                <p>+18% Growth</p>
                </div>

            </div>

    </div>

    </div>
  );
};

export default Reports;