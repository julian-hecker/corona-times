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
import Survey from "./components/Survey.js";
import Info from "./components/Info.js";


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
                        <Info/>
                    </Route>
                    <Route path="/form">
                        <Survey />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
