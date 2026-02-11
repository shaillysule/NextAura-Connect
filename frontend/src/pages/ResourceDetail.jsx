import React from "react";
import { useParams } from "react-router-dom";
import "../Components/Search/ResourceDetailpage.css";

const ResourceDetail = () => {
  const { id } = useParams();

  return (
    <div className="resource-detail-page">
      <div className="detail-container">
        <img
          src="https://via.placeholder.com/600x350"
          alt="resource"
          className="detail-image"
        />

        <div className="detail-info">
          <h2>Resource Name</h2>
          <p className="category">Category: Tools</p>
          <p className="price">₹150 / day</p>

          <p className="description">
            This is a detailed description of the resource.
            Seller ne jo bhi info add ki hogi, wo yahan
            show hogi.
          </p>

          <button className="primary-btn">
            Request Resource
          </button>
        </div>
      </div>

      {/* Future: Map + Route */}
      <div className="route-placeholder">
        📍 Route & Pickup Map (Coming Soon)
      </div>
    </div>
  );
};

export default ResourceDetail;
