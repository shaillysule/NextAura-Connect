import React from "react";
import "./CategorySection.css";

function CategorySection(props) {

  const categories = [
    { id: 1, name: "Tools", icon: "🔧" },
    { id: 2, name: "Electronics", icon: "💻" },
    { id: 3, name: "Vehicles", icon: "🚲" },
    { id: 4, name: "Furniture", icon: "🪑" },
    { id: 5, name: "Books", icon: "📚" }
  ];

  function handleCategoryClick(category) {
    props.onSelectCategory(category);
  }
  

  return (
    <section className="category-section">
      <h2>Browse by Category</h2>
      <p className="category-subtext">
        Find what people are sharing around you
      </p>

      <div className="category-grid">
        {categories.map(function (cat) {
          return (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => handleCategoryClick(cat.name)}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategorySection;
