import React, { useState, useEffect } from "react";
import "./MyProducts.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

export const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMyResources = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/resources/my", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
    } catch (err) {
      setError("Resources load nahi hue. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyResources();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchName = product.title?.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || product.category === category;
    return matchName && matchCategory;
  });

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="my-products-page">
      <h2 className="section-title">My Resources</h2>

      <div className="product-filters">
        <input
          type="text"
          placeholder="Search resource..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {loading && <p className="state-msg">Loading...</p>}
      {error && <p className="state-msg error-msg">{error}</p>}
      {!loading && !error && filteredProducts.length === 0 && (
        <p className="state-msg">Koi resource nahi mila. "Add Product" se pehla resource add karo!</p>
      )}

      {!loading && filteredProducts.length > 0 && (
        <div className="product-table-card">
          <table className="product-table">
            <thead>
              <tr>
                <th>Resource</th>
                <th>Category</th>
                <th>Rent/Day</th>
                <th>Address</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product._id}>
                  <td className="product-info">
                    {product.image ? (
                      <img src={product.image} alt={product.title}
                        onError={(e) => (e.target.style.display = "none")} />
                    ) : (
                      <div className="img-placeholder">📦</div>
                    )}
                    <span>{product.title}</span>
                  </td>
                  <td>{product.category}</td>
                  <td>₹{product.rentPerDay}</td>
                  <td>{product.address || "—"}</td>
                  <td>
                    <span className={`status-badge ${product.isAvailable ? "active" : "inactive"}`}>
                      {product.isAvailable ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="action-icons">
                    <FaEdit className="edit" title="Edit" />
                    <FaTrash className="delete" title="Delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
