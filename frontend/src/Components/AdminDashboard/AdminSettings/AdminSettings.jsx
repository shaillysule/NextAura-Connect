import "./AdminSettings.css";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminSettings = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 🔹 Fetch current admin email
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setEmail(res.data.email);

      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  // 🔹 Handle Save Settings
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/auth/profile",
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Settings Updated ✅");

    } catch (error) {
      console.error(error);
      alert("Error updating settings ❌");
    }
  };

  // 🔹 Change Password
  const handleChangePassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/auth/change-password",
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Password Updated ✅");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error(error);
      alert("Error updating password ❌");
    }
  };

  return (
    <div className="admin-settings">

      <h1 className="settings-title">Admin Settings</h1>

      <div className="settings-card">

        <div className="setting-item">
          <label>Change Password</label>
          <input 
            type="password" 
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="setting-item">
          <label>Confirm Password</label>
          <input 
            type="password" 
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="setting-item">
          <label>Notification Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="save-settings-btn" onClick={handleSave}>
          Save Settings
        </button>

        <button 
          className="save-settings-btn" 
          style={{ marginTop: "10px", background: "#ff4d4d" }}
          onClick={handleChangePassword}
        >
          Update Password
        </button>

      </div>

    </div>
  );
};

export default AdminSettings;