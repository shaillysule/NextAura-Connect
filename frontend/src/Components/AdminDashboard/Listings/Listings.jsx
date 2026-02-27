import "./Listings.css";
import { FaTrash, FaCheckCircle, FaEye } from "react-icons/fa";

const Listings = () => {
  const listings = [
    {
      id: 1,
      name: "DSA Book",
      owner: "Rahul Sharma",
      price: "₹120",
      status: "Pending",
    },
    {
      id: 2,
      name: "Engineering Calculator",
      owner: "Anjali Patel",
      price: "₹300",
      status: "Approved",
    },
    {
      id: 3,
      name: "Laptop Stand",
      owner: "Karan Mehta",
      price: "₹450",
      status: "Pending",
    },
    {
      id: 4,
      name: "Head Set",
      owner: "Neha Roy",
      price: "₹550",
      status: "Pending",
    },
    {
      id: 5,
      name: "Study Table",
      owner: "Ram Verma",
      price: "₹150",
      status: "Approved",
    },
    {
      id: 6,
      name: "Heater",
      owner: "Priya Patel",
      price: "₹450",
      status: "Approved",
    },
    {
      id: 7,
      name: "Fan",
      owner: "Dharmveer Singh",
      price: "₹600",
      status: "Approved",
    },
  ];

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
          {listings.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.owner}</td>
              <td>{item.price}</td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>

              <td className="actions">
                <FaEye className="view" />
                <FaCheckCircle className="approve" />
                <FaTrash className="delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listings;