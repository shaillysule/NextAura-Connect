import React, { useEffect, useState } from "react";
import "./Profile.css";
import { FaCamera, FaStore, FaUser } from "react-icons/fa";
import axios from "axios";

export const Profile = () => {

const [user, setUser] = useState({
name: "",
email: "",
phone: "",
storeName: "",
city: "",
});

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

    setUser(res.data);

  } catch (error) {
    console.error(error);
  }
};

fetchProfile();


}, []);

const handleChange = (e) => {
setUser({ ...user, [e.target.name]: e.target.value });
};

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

  alert("Profile Updated Successfully ✅");

} catch (error) {
  console.error(error);
  alert("Update Failed ❌");
}


};

return ( <div className="seller-profile-page">


  <h2 className="profile-title">My Profile</h2>

  <div className="profile-wrapper">

    <div className="profile-left-card">
      <div className="profile-avatar">
        <FaUser />
      </div>

      <h3 className="profile-name">{user.name}</h3>
      <p className="profile-since">Seller</p>

      <button className="change-photo-btn">
        <FaCamera /> Change Photo
      </button>
    </div>

    <div className="profile-right-card">
      <div className="profile-form">

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" value={user.email} disabled />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Store Name</label>
          <div className="input-with-icon">
            <FaStore />
            <input
              type="text"
              name="storeName"
              value={user.storeName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleChange}
          />
        </div>

        <button className="save-profile-btn" onClick={handleSave}>
          Save Changes
        </button>

      </div>
    </div>

  </div>

</div>


);
};
