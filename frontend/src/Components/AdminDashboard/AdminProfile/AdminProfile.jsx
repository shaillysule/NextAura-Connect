import "./AdminProfile.css";
import { FaUser, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";

const AdminProfile = () => {
  return (
    <div className="admin-profile">

      <h1 className="profile-title">Admin Profile</h1>

      <div className="profile-container">

        <div className="profile-left">
          <div className="avatar-circle">
            <FaUser />
          </div>
          <h3>Admin</h3>
          <p className="role">Platform Administrator</p>
        </div>

        <div className="profile-right">

          <div className="profile-field">
            <FaUser className="field-icon"/>
            <div>
              <label>Name</label>
              <p>Admin Name</p>
            </div>
          </div>

          <div className="profile-field">
            <FaEnvelope className="field-icon"/>
            <div>
              <label>Email</label>
              <p>admin@nexaura.com</p>
            </div>
          </div>

          <div className="profile-field">
            <FaPhone className="field-icon"/>
            <div>
              <label>Phone</label>
              <p>+91 9876543210</p>
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