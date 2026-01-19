import React from "react";
import './ResourceCard.css'
function ResourceCard(props) {
  return (
    <div
    className={`resource-card ${props.featured ? "featured" : ""}`}
    onClick={() => props.onClick(props)}
  >

{props.featured&&(<div className="badge-featured">Recommended</div>)}
<div className="badge-popular">🔥 Popular</div>
<div className="badge-available">Available</div>
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
