import React from "react";
import "./ResourceDetail.css";

function ResourceDetail(props) {
  return (
    <div className="resource-detail">
      {/* LEFT: IMAGE */}
      <div className="detail-image">
        <img src={props.image} alt={props.title} />
      </div>

      {/* RIGHT: INFO */}
      <div className="detail-info">
        <h2>{props.title}</h2>
        <p className="detail-category">{props.category}</p>

        <div className="detail-meta">
          <span className="price">₹{props.price}/day</span>
          <span className="location">{props.location}</span>
          <span className="rating">⭐ {props.rating}</span>
        </div>

        <p className="detail-description">
          This resource is available for rent in your area. It is well-maintained,
          reliable, and frequently booked by users nearby.
        </p>

        <button
  className="detail-book-btn"
  onClick={() => props.onBook(props)}
>
  Book Now
</button>

      </div>
    </div>
  );
}

export default ResourceDetail;
