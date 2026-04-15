import "./Rentals.css";
import { FaEye, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

const Rentals = () => {

  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${BASE_URL}/api/orders/all`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const formatted = res.data.map((order) => ({
          id: order._id,
          product: order.resource?.title,
          renter: order.customer?.name,
          owner: order.owner?.name,
          start: new Date(order.createdAt).toLocaleDateString(),
          returnDate: order.returnDate
            ? new Date(order.returnDate).toLocaleDateString()
            : order.resource?.availableTo
            ? new Date(order.resource.availableTo).toLocaleDateString()
            : "N/A",
          status: order.status,
        }));

        setRentals(formatted);

      } catch (error) {
        console.error(error);
      }
    };

    fetchRentals();
  }, []);

  return (
    <div className="admin-rentals">

      <h2 className="rentals-title">Rental Management</h2>

      <table className="rentals-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Renter</th>
            <th>Owner</th>
            <th>Start Date</th>
            <th>Return Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((item) => (
            <tr key={item.id}>
              <td>{item.id.slice(-6)}</td>
              <td>{item.product}</td>
              <td>{item.renter}</td>
              <td>{item.owner}</td>
              <td>{item.start}</td>
              <td>{item.returnDate}</td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td className="actions">
                <FaEye className="view" />
                <FaCheckCircle className="approve" />
                <FaTimesCircle className="cancel" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Rentals;