import React from "react";
import "./Profile.css";
import { FaCamera, FaStore, FaUser } from "react-icons/fa";

export const Profile = () => {
  return (
    <div className="seller-profile-page">

      <h2 className="profile-title">My Profile</h2>

      <div className="profile-wrapper">

        {/* LEFT CARD */}
        <div className="profile-left-card">
          <div className="profile-avatar">
            <FaUser />
          </div>

          <h3 className="profile-name">Payal Patel</h3>
          <p className="profile-since">Seller since 2024</p>

          <button className="change-photo-btn">
            <FaCamera /> Change Photo
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="profile-right-card">
          <div className="profile-form">

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue="Payal Patel" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="payal@email.com" disabled />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="+91 XXXXX XXXXX" />
            </div>

            <div className="form-group">
              <label>Store Name</label>
              <div className="input-with-icon">
                <FaStore />
                <input type="text" placeholder="Your store name" />
              </div>
            </div>

            <div className="form-group">
              <label>City</label>
              <input type="text" placeholder="Indore" />
            </div>

            <button className="save-profile-btn">
              Save Changes
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};
