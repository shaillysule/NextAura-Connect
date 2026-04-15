import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/Search/ResourceDetailpage.css";

const BASE_URL = "http://localhost:5000"; // ✅ change this when deploying

const ResourceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/resources/${id}/recommend`)
      .then((res) => setRecommended(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/resources/${id}`);
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

  const address = resource?.location?.address || resource?.address || "";

  return (
    <div className="resource-detail-page">

      <div className="detail-container">
        {resource.image ? (
          <img
            src={`${BASE_URL}${resource.image}`}
            alt={resource.title}
            className="detail-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
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

          {address && <p className="address">📍 {address}</p>}

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

          <button
            className="primary-btn"
            onClick={async () => {
              try {
                const token = localStorage.getItem("token");
                await axios.post(
                  `${BASE_URL}/api/orders`,
                  { resourceId: resource._id },
                  { headers: { Authorization: `Bearer ${token}` } }
                );
                alert("Request Sent Successfully ✅");
              } catch (error) {
                console.error(error);
                alert("Failed to send request ❌");
              }
            }}
          >
            Request Resource
          </button>
        </div>
      </div>

      {address && (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h3>📍 Pickup Location</h3>
          <iframe
            width="100%"
            height="300"
            style={{ borderRadius: "10px", border: "none", marginTop: "10px" }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
          ></iframe>
          <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        </div>
      )}

      {recommended.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h3>🔥 Recommended for you</h3>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {recommended.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/resource/${item._id}`)}
                style={{
                  border: "1px solid #eee",
                  padding: "10px",
                  width: "160px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
                }}
              >
                {item.image && (
                  <img
                    src={`${BASE_URL}${item.image}`}
                    alt={item.title}
                    style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "6px" }}
                  />
                )}
                <h4 style={{ fontSize: "14px", margin: "6px 0" }}>{item.title}</h4>
                <p style={{ fontSize: "13px", color: "#555" }}>₹{item.rentPerDay}/day</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ResourceDetail;