import "./AdminProfile.css";
import { FaUser, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";

const AdminProfile = () => {

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {

    const fetchAdmin = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAdmin(res.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchAdmin();

  }, []);

  return (
    <div className="admin-profile">

      <h1 className="profile-title">Admin Profile</h1>

      <div className="profile-container">

        <div className="profile-left">
          <div className="avatar-circle">
            <FaUser />
          </div>
          <h3>{admin.name || "Admin"}</h3>
          <p className="role">Platform Administrator</p>
        </div>

        <div className="profile-right">

          <div className="profile-field">
            <FaUser className="field-icon"/>
            <div>
              <label>Name</label>
              <p>{admin.name}</p>
            </div>
          </div>

          <div className="profile-field">
            <FaEnvelope className="field-icon"/>
            <div>
              <label>Email</label>
              <p>{admin.email}</p>
            </div>
          </div>

          <div className="profile-field">
            <FaPhone className="field-icon"/>
            <div>
              <label>Phone</label>
              <p>Not Added</p>
            </div>
          </div>

          <button className="edit-btn">
            <FaEdit/> Edit Profile
          </button>

        </div>

      </div>

    </div>
  );
};

export default AdminProfile;