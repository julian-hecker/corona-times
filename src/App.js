// import React, { useState, useReducer } from "react";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Subscribe from "./components/Subscribe.js";
import Table from "./components/Table.js";
import Map from "./components/Map.js";
import Stats from "./components/Stats.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/stats" />
                    </Route>
                    <Route path="/stats">
                        <div style={{height:"400px"}}>
                            <Map />
                        </div>
                        <Stats />
                        <Table />
                        <Subscribe />
                    </Route>
                    <Route path="/info">
                        <h2>article goes here</h2>
                    </Route>
                    <Route path="/form">
                        <h2>survey goes here</h2>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
