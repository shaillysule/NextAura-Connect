import React, { useState } from "react";
import "./MyProducts.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const dummyProducts = [
  {
    id: 1,
    name: "Blue Denim Jacket",
    category: "Clothes",
    price: 2499,
    stock: "In Stock",
    status: "Active",
    image: "/assets/blueDenimJeans.webp"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 3999,
    stock: "Out of Stock",
    status: "Inactive",
    image: "/assets/EarPhones.jpg"
  },
  {
    id: 3,
    name: "Novel Book",
    category: "Books",
    price: 499,
    stock: "In Stock",
    status: "Active",
    image: "/assets/novel.avif"
  }
];

export const MyProducts = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = dummyProducts.filter((product) => {
    const matchName = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "All" || product.category === category;
    return matchName && matchCategory;
  });

  return (
    <div className="my-products-page">
      <h2 className="section-title">My Products</h2>

      {/* Filters */}
      <div className="product-filters">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
        </select>
      </div>

      {/* Table */}
      <div className="product-table-card">
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="product-info">
                  <img src={product.image} alt="" />
                  <span>{product.name}</span>
                </td>

                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>{product.stock}</td>

                <td>
                  <span
                    className={`status-badge ${
                      product.status === "Active"
                        ? "active"
                        : "inactive"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>

                <td className="action-icons">
                  <FaEdit className="edit" />
                  <FaTrash className="delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
