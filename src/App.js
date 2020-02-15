// import React, { useState, useReducer } from "react";
import React from "react";
import Navbar from "./components/Navbar.js";
import Subscribe from "./components/Subscribe.js";
import Table from "./components/Table.js";
import Map from "./components/Map.js";
import Stats from "./components/Stats.js";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div style={{height:"400px"}}>
                <Map />
            </div>
            <Stats />
            <Table />
            <Subscribe />
        </div>
    );
}

export default App;
