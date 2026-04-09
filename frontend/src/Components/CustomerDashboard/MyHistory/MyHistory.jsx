import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyHistory.css";

const MyHistory = () => {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/orders/history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setHistory(res.data);

      } catch (err) {
        console.error(err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-page">
      <h2>Rental History</h2>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Owner</th>
            <th>Customer</th>
            <th>Start</th>
            <th>Return</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr key={item._id}>
              <td>{item.resource?.title}</td>
              <td>{item.owner?.name}</td>
              <td>{item.customer?.name}</td>

              <td>
                {item.startDate
                  ? new Date(item.startDate).toLocaleDateString()
                  : "-"}
              </td>

              <td>
                {item.returnDate
                  ? new Date(item.returnDate).toLocaleDateString()
                  : "-"}
              </td>

              <td>
                ₹{item.resource?.rentPerDay || 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyHistory;