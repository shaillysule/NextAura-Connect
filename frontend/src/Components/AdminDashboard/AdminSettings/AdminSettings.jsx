import "./AdminSettings.css";

const AdminSettings = () => {
  return (
    <div className="admin-settings">

      <h1 className="settings-title">Admin Settings</h1>

      <div className="settings-card">

        <div className="setting-item">
          <label>Change Password</label>
          <input type="password" placeholder="Enter new password"/>
        </div>

        <div className="setting-item">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password"/>
        </div>

        <div className="setting-item">
          <label>Notification Email</label>
          <input type="email" placeholder="admin@nexaura.com"/>
        </div>

        <button className="save-settings-btn">
          Save Settings
        </button>

      </div>

    </div>
  );
};

export default AdminSettings;