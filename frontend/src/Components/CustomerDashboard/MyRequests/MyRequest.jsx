import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MyRequest.css";


export const MyRequests = () => {

  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/orders/my-requests",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRequests(res.data);

      } catch (err) {
        console.error("Error fetching requests:", err);
      }
    };

    fetchRequests();

  }, []);

  return (
    <div className="my-requests-page">
      <h2 className="title">My Rental Requests</h2>

      <button onClick={() => navigate("/my-rentals")}>
       My Rentals
      </button>

      <button onClick={() => navigate("/my-history")}>
       My History
     </button>

      <div className="table-wrapper">
        <table className="requests-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Owner</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="4">No requests found</td>
              </tr>
            ) : (
              requests.map((req) => (
                <tr key={req._id}>
                  <td>{req.resource?.title}</td>
                  <td>{req.owner?.name}</td>
                  <td>₹{req.resource?.rentPerDay}</td>
                  <td>
                    <span className={`status ${req.status.toLowerCase()}`}>
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};