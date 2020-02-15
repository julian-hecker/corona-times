import React, { useState, useReducer } from "react";
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
            <div style={{padding: '0 2rem'}}>
                <Stats />
                <Table />
                <Subscribe />
            </div>
        </div>
    );
}

export default App;
