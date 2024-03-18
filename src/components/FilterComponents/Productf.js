import React from "react";

const ProductFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="border-2 border-red-500">
      <label htmlFor="category">Filter by Category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Furniture">Furniture</option>
      </select>
    </div>
  );
};

export default ProductFilter;
