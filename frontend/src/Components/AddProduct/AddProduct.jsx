import React, { useState } from "react";
import "./AddProduct.css";
import axios from "axios";

const CATEGORIES = [
  "Electronics", "Furniture", "Clothes",
  "Books", "Tools", "Vehicles", "Other",
];

export const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    rentPerDay: "",
    description: "",
    address: "",
    availableFrom: "",
    availableTo: "",
    image: "",
    lat: "",
    lng: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const token = localStorage.getItem("token");

      const payload = {
        title: formData.title,
        category: formData.category,
        rentPerDay: Number(formData.rentPerDay),
        description: formData.description,
        address: formData.address,
        availableFrom: formData.availableFrom || undefined,
        availableTo: formData.availableTo || undefined,
        image: formData.image || "",
        location: {
          lat: formData.lat ? Number(formData.lat) : undefined,
          lng: formData.lng ? Number(formData.lng) : undefined,
        },
      };

      await axios.post("http://localhost:5000/api/resources", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage({ text: "✅ Resource added successfully!", type: "success" });

      setFormData({
        title: "", category: "", rentPerDay: "", description: "",
        address: "", availableFrom: "", availableTo: "", image: "", lat: "", lng: "",
      });
    } catch (error) {
      const errMsg = error.response?.data?.message || "Something went wrong.";
      setMessage({ text: `❌ ${errMsg}`, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-page">
      <h2 className="section-title">Add New Resource</h2>

      {message.text && (
        <div className={`form-message ${message.type}`}>{message.text}</div>
      )}

      <form className="add-product-form" onSubmit={handleSubmit}>

        <div className="form-row">
          <div className="form-group">
            <label>Resource Title *</label>
            <input type="text" name="title" placeholder="e.g. Canon DSLR Camera"
              value={formData.title} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rent Per Day (₹) *</label>
            <input type="number" name="rentPerDay" placeholder="e.g. 299"
              value={formData.rentPerDay} onChange={handleChange} required min="1" />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input type="text" name="image" placeholder="https://... or /assets/image.jpg"
              value={formData.image} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" rows={3} placeholder="Resource ke baare mein brief info..."
            value={formData.description} onChange={handleChange} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Available From</label>
            <input type="date" name="availableFrom"
              value={formData.availableFrom} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Available To</label>
            <input type="date" name="availableTo"
              value={formData.availableTo} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" placeholder="e.g. MG Road, Indore, MP"
            value={formData.address} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Adding..." : "Add Resource"}
        </button>

      </form>
    </div>
  );
};
