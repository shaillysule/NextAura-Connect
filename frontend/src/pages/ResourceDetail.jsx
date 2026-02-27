import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/Search/ResourceDetailpage.css";

const ResourceDetail = () => {
  const { id } = useParams(); // ✅ MongoDB _id from URL
  const navigate = useNavigate();

  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResource = async () => {
      try {
        // GET /api/resources/:id — yeh route abhi nahi hai, neeche bataya hai
        const res = await axios.get(
          `http://localhost:5000/api/resources/${id}`
        );
        setResource(res.data);
      } catch (err) {
        setError("Resource nahi mila.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [id]);

  if (loading) return <div className="resource-detail-page"><p>Loading...</p></div>;
  if (error) return <div className="resource-detail-page"><p>{error}</p></div>;
  if (!resource) return null;

  return (
    <div className="resource-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-container">
        {resource.image ? (
          <img
            src={resource.image}
            alt={resource.title}
            className="detail-image"
            onError={(e) => (e.target.src = "https://via.placeholder.com/600x350")}
          />
        ) : (
          <div className="detail-image-placeholder">📦</div>
        )}

        <div className="detail-info">
          <span className="detail-category">{resource.category}</span>
          <h2>{resource.title}</h2>
          <p className="price">₹{resource.rentPerDay} / day</p>

          {resource.description && (
            <p className="description">{resource.description}</p>
          )}

          {resource.address && (
            <p className="address">📍 {resource.address}</p>
          )}

          {resource.owner?.name && (
            <p className="seller-info">🧑 Listed by: {resource.owner.name}</p>
          )}

          {resource.availableFrom && (
            <p className="availability">
              📅 Available:{" "}
              {new Date(resource.availableFrom).toLocaleDateString()} —{" "}
              {resource.availableTo
                ? new Date(resource.availableTo).toLocaleDateString()
                : "Open-ended"}
            </p>
          )}

          <button className="primary-btn">Request Resource</button>
        </div>
      </div>

      <div className="route-placeholder">
        📍 Route & Pickup Map (Coming Soon)
      </div>
    </div>
  );
};

export default ResourceDetail;