import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="border-5 border-green-500">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
