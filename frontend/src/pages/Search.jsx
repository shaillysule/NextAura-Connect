import React from "react";
import ResourceCard from "../Components/HomePage/ResourceCard";
import "../Components/Search/Search.css"
import { Navigate } from "react-router-dom";
export const Search = () => {
  const resources = [
    {
      id: 1,
      title: "Electric Drill",
      category: "Tools",
      price: "₹150/day",
      image:
        "/assets/electric drill.webp",
    },
    {
      id: 2,
      title: "Bike for Rent",
      category: "Vehicles",
      price: "₹300/day",
      image:
        "/assets/bicycle.webp",
    },
    {
      id: 3,
      title: "Laptop",
      category: "Furniture",
      price: "₹500/day",
      image:
        "/assets/laptop.jpeg",
    },
  ];

  return (
    <div className="search-page">
      <h2 className="search-title">Available Resources Near You</h2>

      <div className="resource-grid">
        {resources.map((item) => (
          <div
            key={item.id}
            className="search-card-wrapper"
            onClick={() => navigate(`/resource/${item.id}`)}
            style={{ cursor: "pointer" }}
          >
            <ResourceCard
              title={item.title}
              category={item.category}
              price={item.price}
              image={item.image}
              buttonText="View Details →"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


