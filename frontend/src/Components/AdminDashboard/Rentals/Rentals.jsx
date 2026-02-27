import "./Rentals.css";
import { FaEye, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Rentals = () => {

  const rentals = [
    {
      id: 1,
      product: "DSA Book",
      renter: "Amit Verma",
      owner: "Rahul Sharma",
      start: "10 Feb 2026",
      returnDate: "15 Feb 2026",
      status: "Active"
    },
    {
      id: 2,
      product: "Calculator",
      renter: "Neha Patel",
      owner: "Anjali Patel",
      start: "05 Feb 2026",
      returnDate: "12 Feb 2026",
      status: "Completed"
    },
    {
      id: 3,
      product: "Laptop Stand",
      renter: "Karan Mehta",
      owner: "Rohit Gupta",
      start: "14 Feb 2026",
      returnDate: "20 Feb 2026",
      status: "Pending"
    },
    {
      id: 4,
      product: "Fan",
      renter: "Varun Kirti",
      owner: "Dharamveer Singh",
      start: "1 Jan 2026",
      returnDate: "20 Feb 2026",
      status: "Active"
    },
    {
      id: 5,
      product: "Heater",
      renter: "Pratik Teja",
      owner: "Priya Patel",
      start: "10 Feb 2026",
      returnDate: "20 Feb 2026",
      status: "Active"
    }
  ];

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
              <td>{item.id}</td>
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
                <FaEye className="view"/>
                <FaCheckCircle className="approve"/>
                <FaTimesCircle className="cancel"/>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default Rentals;