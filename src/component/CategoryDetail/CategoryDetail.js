// grand-children component  of Home.js
import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoryDetail = (props) => {
  // useContext()
  const category = useContext(CategoryContext);
  const { name } = props.product;
  return (
    <div>
      <h5>Selected Product: {name}</h5>
    </div>
  );
};

export default CategoryDetail;
