// sibling component  of Home.js
import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../App";
import CategoryDetail from "../CategoryDetail/CategoryDetail";

const allProducts = [
  { name: "Lenovo", category: "laptop" },
  { name: "Asus", category: "laptop" },
  { name: "Dell", category: "laptop" },
  { name: "Samsung", category: "mobile" },
  { name: "Nokia", category: "mobile" },
  { name: "Apple", category: "mobile" },
  { name: "Canon", category: "camera" },
  { name: "Nikon", category: "camera" },
  { name: "Sony", category: "camera" },
];

const Categories = () => {
  const [category] = useContext(CategoryContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const matchProducts = allProducts.filter(
      (pd) => pd.category.toLowerCase() === category.toLowerCase()
    );
    setProducts(matchProducts);
  }, [category]);
  return (
    <div>
      <h2>select your categories: {category}</h2>
      {products.map((pd) => (
        <CategoryDetail product={pd}></CategoryDetail>
      ))}
    </div>
  );
};

export default Categories;
