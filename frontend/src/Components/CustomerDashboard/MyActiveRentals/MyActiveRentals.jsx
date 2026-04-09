import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyActiveRentals.css";

const MyActiveRentals = () => {

  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/orders/my-active",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRentals(res.data);

      } catch (err) {
        console.error(err);
      }
    };

    fetchRentals();
  }, []);

  return (
    <div className="my-rentals-page">
      <h2>My Active Rentals</h2>

      {rentals.length === 0 ? (
        <p>No active rentals</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Owner</th>
              <th>Price/day</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {rentals.map((item) => (
              <tr key={item._id}>
                <td>{item.resource?.title}</td>
                <td>{item.owner?.name}</td>
                <td>₹{item.resource?.rentPerDay}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyActiveRentals;