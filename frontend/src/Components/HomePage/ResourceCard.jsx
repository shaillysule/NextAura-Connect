import React from "react";
import './ResourceCard.css'
function ResourceCard(props) {
  return (
    <div className="resource-card">
      <div className="resource-image">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="resource-body">
        <h4>{props.title}</h4>
        <p className="category">{props.category}</p>

        <div className="resource-info">
          <span className="price">₹{props.price}/day</span>
          <span className="location">{props.location}</span>
        </div>

        <div className="resource-footer">
          <span className="rating">⭐ {props.rating}</span>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;
