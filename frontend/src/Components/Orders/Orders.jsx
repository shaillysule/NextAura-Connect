import React, { useState } from "react";
import "./Orders.css";

export const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "#ORD001",
      customer: "Aman Sharma",
      product: "Wireless Headphones",
      amount: "₹2,499",
      status: "Pending",
      date: "12 Aug 2024",
    },
    {
      id: "#ORD002",
      customer: "Neha Verma",
      product: "Smart Watch",
      amount: "₹4,999",
      status: "Shipped",
      date: "13 Aug 2024",
    },
    {
      id: "#ORD003",
      customer: "Rohit Jain",
      product: "Bluetooth Speaker",
      amount: "₹1,799",
      status: "Delivered",
      date: "14 Aug 2024",
    },
  ]);

  const handleStatusChange = (index, value) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = value;
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-page">
      <h2 className="orders-title">My Orders</h2>
      <p className="orders-subtitle">
        Manage & track your customer orders
      </p>

      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.amount}</td>

                <td>
                  <select
                    className={`status-dropdown ${order.status.toLowerCase()}`}
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(index, e.target.value)
                    }
                  >
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>

                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

