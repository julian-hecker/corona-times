import React, { useState, useReducer } from "react";
import Navbar from "./components/Navbar.js";
import Subscribe from "./components/Subscribe.js";
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbar />
      <Subscribe />
    </div>
  );
}

export default App;
