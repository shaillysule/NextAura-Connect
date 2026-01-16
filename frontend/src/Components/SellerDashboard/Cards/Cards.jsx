import React from "react";

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

export const Cards = () => {
  return (
    <div className="seller-dashboard">
      <h2 className="dash-title">Welcome Seller</h2>

      <div className="dashboard-cards">
        <div className="dash-card">
          <div className="icon pink"><LuBox /></div>
          <h4>Total Products</h4>
          <p>Products listed by you</p>
        </div>

        <div className="dash-card">
          <div className="icon blue"><HiOutlineShoppingBag /></div>
          <h4>Active Orders</h4>
          <p>Currently processing</p>
        </div>

        <div className="dash-card">
          <div className="icon orange"><MdOutlinePendingActions /></div>
          <h4>Pending Requests</h4>
          <p>Need your attention</p>
        </div>

        <div className="dash-card">
          <div className="icon green"><LuIndianRupee /></div>
          <h4>Total Earnings</h4>
          <p>Your overall revenue</p>
        </div>

        <div className="dash-card">
          <div className="icon purple"><HiOutlineTrendingUp /></div>
          <h4>Monthly Sales</h4>
          <p>This month performance</p>
        </div>

        <div className="dash-card">
          <div className="icon yellow"><LuStar /></div>
          <h4>Customer Reviews</h4>
          <p>Ratings & feedback</p>
        </div>
      </div>
    </div>
  );
};
