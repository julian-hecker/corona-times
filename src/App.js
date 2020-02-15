import React, { useState, useReducer } from "react";
import Navbar from "./components/Navbar.js";
import Subscribe from "./components/Subscribe.js";
import Table from "./components/Table.js";
import Map from "./components/Map.js";
import Stats from "./components/Stats.js";
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}

      <Navbar />
      {/* <Map /> */}
      <Stats />
      <Table />
      <Subscribe />
    </div>
  );
}

export default App;
