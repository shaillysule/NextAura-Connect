import "./Listings.css";
import { FaTrash, FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Listings = () => {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/resources",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setListings(res.data);

    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  const deleteListing = async (id) => {
    try {

      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/admin/resources/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchListings(); // refresh table

    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  return (
    <div className="admin-listings">
      <h2 className="listings-title">Listings Management</h2>

      <table className="listings-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Owner</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {listings.map((item, index) => (

            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.owner?.name}</td>
              <td>₹{item.rentPerDay}</td>

              <td>
                <span className={`status ${item.isAvailable ? "approved" : "pending"}`}>
                  {item.isAvailable ? "Available" : "Not Available"}
                </span>
              </td>

              <td className="actions">
                <FaEye className="view" />
                <FaTrash
                  className="delete"
                  onClick={() => deleteListing(item._id)}
                />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Listings;