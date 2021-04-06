import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Shipment from "./component/Shipment/Shipment";

// createContext()
export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <div className="App">
      <CategoryContext.Provider value={[category, setCategory]}>
        <p>count value: {category}</p>
        {/* share state with sibling component */}
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
