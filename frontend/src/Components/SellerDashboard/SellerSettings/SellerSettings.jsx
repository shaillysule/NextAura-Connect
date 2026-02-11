import React from "react";
import "./SellerSettings.css";

export const SellerSettings = () => {
  return (
    <div className="settings-page">
      <h2 className="settings-title">Settings</h2>
      <p className="settings-subtitle">
        Manage your account preferences and security
      </p>

      {/* Account Settings */}
      <div className="settings-card">
        <h4>Account Settings</h4>

        <div className="setting-row">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="setting-row">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="setting-row">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter phone number" />
        </div>

        <button className="save-btn">Save Changes</button>
      </div>

      {/* Security Settings */}
      <div className="settings-card">
        <h4>Security</h4>

        <div className="setting-row">
          <label>Change Password</label>
          <input type="password" placeholder="New password" />
        </div>

        <div className="setting-row">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" />
        </div>

        <button className="save-btn">Update Password</button>
      </div>

      {/* Danger Zone */}
      <div className="settings-card danger">
        <h4>Danger Zone</h4>
        <p className="danger-text">
          Deleting your account is permanent and cannot be undone.
        </p>

        <button className="delete-btn">Delete Account</button>
      </div>
    </div>
  );
};

