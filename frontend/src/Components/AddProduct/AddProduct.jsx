import React from "react";
import "./AddProduct.css";
import { FaBox, FaRupeeSign, FaLayerGroup, FaImage } from "react-icons/fa";

export const AddProduct = () => {
  return (
      <div className="add-product-page">

        {/* Header */}
        <div className="add-product-header">
          <h2>Add New Product</h2>
          <p>Fill the details to list your product</p>
        </div>

        {/* Form Card */}
        <div className="add-product-card">
          <form className="add-product-form">

            <div className="form-group">
              <label>Product Name</label>
              <div className="input-icon">
                <FaBox />
                <input type="text" placeholder="Enter product name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <div className="input-icon">
                  <FaLayerGroup />
                  <select>
                    <option>Select category</option>
                    <option>Clothes</option>
                    <option>Electronics</option>
                    <option>Books</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Price</label>
                <div className="input-icon">
                  <FaRupeeSign />
                  <input type="number" placeholder="Enter price" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="Short product description"></textarea>
            </div>

            <div className="form-group">
              <label>Product Image</label>
              <div className="upload-box">
                <FaImage />
                <span>Click to upload image</span>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Add Product
              </button>
              <button type="reset" className="btn-secondary">
                Reset
              </button>
            </div>

          </form>
        </div>

      </div>
  );
};

