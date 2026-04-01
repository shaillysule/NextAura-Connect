import React, { useEffect, useState } from "react";
import {
LuBox,
LuStar,
LuIndianRupee,
} from "react-icons/lu";

import {
HiOutlineShoppingBag,
HiOutlineTrendingUp,
} from "react-icons/hi";

import { MdOutlinePendingActions } from "react-icons/md";
import "./Cards.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Cards = () => {

const [stats, setStats] = useState({
totalProducts: 0,
activeOrders: 0,
pendingOrders: 0,
totalRevenue: 0,
});

const navigate = useNavigate();

useEffect(() => {
const fetchStats = async () => {
try {
const token = localStorage.getItem("token");


    const res = await axios.get(
      "http://localhost:5000/api/seller/stats",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setStats(res.data);

  } catch (error) {
    console.error(error);
  }
};

fetchStats();


}, []);

return ( <div className="seller-dashboard"> <h2 className="dash-title">Welcome Seller</h2>


  <div className="dashboard-cards">

    <div className="dash-card" onClick={() => navigate("/seller/my-products")}>
      <div className="icon pink"><LuBox /></div>
      <h4>Total Products</h4>
      <p>{stats.totalProducts}</p>
    </div>

    <div className="dash-card" onClick={() => navigate("/seller/orders")}>
      <div className="icon blue"><HiOutlineShoppingBag /></div>
      <h4>Active Orders</h4>
      <p>{stats.activeOrders}</p>
    </div>

    <div className="dash-card" onClick={() => navigate("/seller/orders")}>
      <div className="icon orange"><MdOutlinePendingActions /></div>
      <h4>Pending Requests</h4>
      <p>{stats.pendingOrders}</p>
    </div>

    <div className="dash-card">
      <div className="icon green"><LuIndianRupee /></div>
      <h4>Total Earnings</h4>
      <p>₹{stats.totalRevenue}</p>
    </div>

    <div className="dash-card">
      <div className="icon purple"><HiOutlineTrendingUp /></div>
      <h4>Monthly Sales</h4>
      <p>Coming Soon</p>
    </div>

    <div className="dash-card">
      <div className="icon yellow"><LuStar /></div>
      <h4>Customer Reviews</h4>
      <p>Coming Soon</p>
    </div>

  </div>
</div>


);
};
