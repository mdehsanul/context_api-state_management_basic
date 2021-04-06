// sibling component of App.js
import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const Shipment = () => {
  // useContext()
  const category = useContext(CategoryContext);
  return (
    <div>
      <h1>This is Shipment: {category}</h1>
    </div>
  );
};

export default Shipment;
