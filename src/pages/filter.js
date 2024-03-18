// import React, { useState } from "react";

// const ProductList = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Product 1", category: "Electronics" },
//     { id: 2, name: "Product 2", category: "Clothing" },
//     { id: 3, name: "Product 3", category: "Electronics" },
//     { id: 4, name: "Product 4", category: "Furniture" },
//   ]);

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const filteredProducts = selectedCategory === "All" 
//     ? products 
//     : products.filter(product => product.category === selectedCategory);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <div>
//         <label htmlFor="category">Filter by Category: </label>
//         <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
//           <option value="All">All</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Clothing">Clothing</option>
//           <option value="Furniture">Furniture</option>
//         </select>
//       </div>
//       <ul>
//         {filteredProducts.map(product => (
//           <li key={product.id}>
//             {product.name} - {product.category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;



import React, { useState } from "react";
import ProductFilter from "../components/FilterComponents/Productf";
import ProductList from "../components/FilterComponents/ProductL";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products] = useState([
    { id: 1, name: "Product 1", category: "Electronics" },
    { id: 2, name: "Product 2", category: "Clothing" },
    { id: 3, name: "Product 3", category: "Electronics" },
    { id: 4, name: "Product 4", category: "Furniture" },
  ]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <ProductFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
