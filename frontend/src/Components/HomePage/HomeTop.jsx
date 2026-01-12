import React from "react";
import "./HomeTop.css";

const HomeTop = () => {
  return (
    <section className="home-top">
      {/* LEFT SIDE */}
      <div className="home-left">
        <h1>Find or Share Resources Near You</h1>
        <p>
          Search available items or list what you can offer — instantly.
        </p>

        {/* Search Bar */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search tools, vehicles, electronics..."
          />
          <button>Search</button>
        </div>

        {/* Actions */}
        <div className="home-actions">
          <button className="btn-primary">Find a Resource</button>
          <button className="btn-secondary">List a Resource</button>
        </div>
      </div>

      {/* RIGHT SIDE – 3D VISUAL */}
      <div className="home-right">
        <div className="cards-stack">
          <div className="resource-card-3d card-1">
            🔧 <span>Tools</span>
          </div>
          <div className="resource-card-3d card-2">
            💻 <span>Electronics</span>
          </div>
          <div className="resource-card-3d card-3">
            🚲 <span>Vehicles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTop;
