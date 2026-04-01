import React, { useState, useEffect } from "react";
import "./Orders.css";
import axios from "axios";

export const Orders = () => {

const [orders, setOrders] = useState([]);

useEffect(() => {
const fetchOrders = async () => {
try {
const token = localStorage.getItem("token");


    const res = await axios.get(
      "http://localhost:5000/api/orders/my",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // format backend data for UI
    const formatted = res.data.map((order) => ({
      id: order._id,
      displayId: "#" + order._id.slice(-6),
      customer: order.customer?.name || "N/A",
      product: order.resource?.title || "N/A",
      amount: "₹" + (order.resource?.rentPerDay || 0),
      status: order.status || "Pending",
      date: new Date(order.createdAt).toLocaleDateString(),
    }));

    setOrders(formatted);

  } catch (err) {
    console.error("Error fetching orders:", err);
  }
};

fetchOrders();


}, []);

const handleStatusChange = async (index, value) => {
try {
const token = localStorage.getItem("token");

  const orderId = orders[index].id;

  await axios.put(
    `http://localhost:5000/api/orders/${orderId}`,
    { status: value },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const updatedOrders = [...orders];
  updatedOrders[index].status = value;
  setOrders(updatedOrders);

} catch (error) {
  console.error("Error updating status:", error);
}


};

return ( <div className="orders-page"> <h2 className="orders-title">My Orders</h2> <p className="orders-subtitle">
Manage & track your customer orders </p>


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
            <td>{order.displayId}</td>
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
                <option>Approved</option>
                <option>Rejected</option>
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
