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
    lat: "",
    lng: "",
  });

  const [imageFile, setImageFile] = useState(null);
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

      const formDataToSend = new FormData();

      formDataToSend.append("title", formData.title);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("rentPerDay", formData.rentPerDay);
      formDataToSend.append("description", formData.description);

      formDataToSend.append(
        "location",
        JSON.stringify({
          address: formData.address,
          lat: formData.lat,
          lng: formData.lng,
        })
      );

      if (formData.availableFrom) {
        formDataToSend.append("availableFrom", formData.availableFrom);
      }

      if (formData.availableTo) {
        formDataToSend.append("availableTo", formData.availableTo);
      }

      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      await axios.post("http://localhost:5000/api/resources", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage({ text: "✅ Resource added successfully!", type: "success" });

      setFormData({
        title: "",
        category: "",
        rentPerDay: "",
        description: "",
        address: "",
        availableFrom: "",
        availableTo: "",
        lat: "",
        lng: "",
      });

      setImageFile(null);
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
      <p className="page-subtitle">List your item for rent and start earning</p>

      {message.text && (
        <div className={`form-message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form className="add-product-form" onSubmit={handleSubmit}>

        <div className="form-section-label">Basic Info</div>

        <div className="form-row">
          <div className="form-group">
            <label>Resource Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Canon DSLR Camera"
              required
            />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rent Per Day (₹) *</label>
            <input
              type="number"
              name="rentPerDay"
              value={formData.rentPerDay}
              onChange={handleChange}
              placeholder="e.g. 299"
              required
              min="1"
            />
          </div>

          <div className="form-group">
            <label>Product Image *</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your item — condition, features, what's included, etc."
          />
        </div>

        <div className="form-section-label">Availability</div>

        <div className="form-row">
          <div className="form-group">
            <label>Available From</label>
            <input
              type="date"
              name="availableFrom"
              value={formData.availableFrom}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Available To</label>
            <input
              type="date"
              name="availableTo"
              value={formData.availableTo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-section-label">Location</div>

        <div className="form-group">
          <label>Address *</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="e.g. MG Road, Indore, Madhya Pradesh"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Latitude</label>
            <input
              type="text"
              name="lat"
              value={formData.lat}
              onChange={handleChange}
              placeholder="e.g. 22.7196"
            />
          </div>

          <div className="form-group">
            <label>Longitude</label>
            <input
              type="text"
              name="lng"
              value={formData.lng}
              onChange={handleChange}
              placeholder="e.g. 75.8577"
            />
          </div>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Adding Resource..." : "Add Resource →"}
        </button>

      </form>
    </div>
  );
};
