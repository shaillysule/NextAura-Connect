import React, { useEffect, useState } from "react";
import "./SellerSettings.css";
import axios from "axios";

export const SellerSettings = () => {

const [user, setUser] = useState({
name: "",
email: "",
phone: "",
});

const [passwordData, setPasswordData] = useState({
password: "",
confirmPassword: "",
});

// FETCH USER DATA
useEffect(() => {
const fetchUser = async () => {
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

    setUser(res.data);

  } catch (error) {
    console.error(error);
  }
};

fetchUser();


}, []);

// HANDLE INPUT
const handleChange = (e) => {
setUser({ ...user, [e.target.name]: e.target.value });
};

const handlePasswordChange = (e) => {
setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
};

// SAVE PROFILE
const handleSave = async () => {
try {
const token = localStorage.getItem("token");


  await axios.put(
    "http://localhost:5000/api/auth/profile",
    user,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  alert("Profile Updated ✅");

} catch (error) {
  console.error(error);
}


};

// UPDATE PASSWORD
const handlePasswordUpdate = async () => {
if (passwordData.password !== passwordData.confirmPassword) {
return alert("Passwords do not match ❌");
}


try {
  const token = localStorage.getItem("token");

  await axios.put(
    "http://localhost:5000/api/auth/change-password",
    { password: passwordData.password },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  alert("Password Updated ✅");

} catch (error) {
  console.error(error);
}


};

// DELETE ACCOUNT
const handleDelete = async () => {
const confirmDelete = window.confirm("Are you sure?");


if (!confirmDelete) return;

try {
  const token = localStorage.getItem("token");

  await axios.delete(
    "http://localhost:5000/api/auth/delete-account",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  localStorage.clear();
  alert("Account Deleted ❌");
  window.location.href = "/";

} catch (error) {
  console.error(error);
}


};

return ( <div className="settings-page"> <h2 className="settings-title">Settings</h2> <p className="settings-subtitle">
Manage your account preferences and security </p>


  {/* Account Settings */}
  <div className="settings-card">
    <h4>Account Settings</h4>

    <div className="setting-row">
      <label>Full Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
    </div>

    <div className="setting-row">
      <label>Email Address</label>
      <input type="email" value={user.email} disabled />
    </div>

    <div className="setting-row">
      <label>Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={user.phone}
        onChange={handleChange}
      />
    </div>

    <button className="save-btn" onClick={handleSave}>
      Save Changes
    </button>
  </div>

  {/* Security Settings */}
  <div className="settings-card">
    <h4>Security</h4>

    <div className="setting-row">
      <label>Change Password</label>
      <input
        type="password"
        name="password"
        onChange={handlePasswordChange}
      />
    </div>

    <div className="setting-row">
      <label>Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        onChange={handlePasswordChange}
      />
    </div>

    <button className="save-btn" onClick={handlePasswordUpdate}>
      Update Password
    </button>
  </div>

  {/* Danger Zone */}
  <div className="settings-card danger">
    <h4>Danger Zone</h4>
    <p className="danger-text">
      Deleting your account is permanent and cannot be undone.
    </p>

    <button className="delete-btn" onClick={handleDelete}>
      Delete Account
    </button>
  </div>
</div>


);
};
