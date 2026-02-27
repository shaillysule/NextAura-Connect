import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ navigate import fix
import ResourceCard from "../Components/HomePage/ResourceCard";
import "../Components/Search/Search.css";
import axios from "axios";

export const Search = () => {
  const navigate = useNavigate(); // ✅ was missing in your original file

  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const CATEGORIES = [
    "All", "Electronics", "Furniture", "Clothes",
    "Books", "Tools", "Vehicles", "Other"
  ];

  const fetchResources = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (category !== "All") params.append("category", category);
      if (search.trim()) params.append("search", search.trim());

      const res = await axios.get(
        `http://localhost:5000/api/resources?${params.toString()}`
      );
      setResources(res.data);
    } catch (err) {
      setError("Resources load nahi hue.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Category change pe turant fetch
  useEffect(() => {
    fetchResources();
  }, [category]);

  // Search pe 400ms debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchResources();
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="search-page">
      <h2 className="search-title">Available Resources Near You</h2>

      {/* Search bar */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category filter */}
      <div className="category-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`cat-tab ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* States */}
      {loading && <p className="state-msg">Loading...</p>}
      {error && <p className="state-msg">{error}</p>}
      {!loading && !error && resources.length === 0 && (
        <p className="state-msg">Koi resource nahi mila.</p>
      )}

      {/* Cards */}
      <div className="resource-grid">
        {resources.map((item) => (
          <div
            key={item._id}
            className="search-card-wrapper"
            onClick={() => navigate(`/resource/${item._id}`)} // ✅ real MongoDB _id use
            style={{ cursor: "pointer" }}
          >
            <ResourceCard
              title={item.title}
              category={item.category}
              price={`₹${item.rentPerDay}/day`}
              image={item.image}
              buttonText="View Details →"
            />
          </div>
        ))}
      </div>
    </div>
  );
};