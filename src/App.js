// import React, { useState, useReducer } from "react";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Map from "./components/Map.js";
import Stats from "./components/Stats.js";
import Table from "./components/Table.js";
import Subscribe from "./components/Subscribe.js";
import Survey from "./components/Survey.js";
import Info from "./components/Info.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            tableLoading: true,
            statsData: [],
            statsLoading: true
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://www.ianmatlak.com:8443/corona/api/table.php')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    tableData: data['data'],
                    tableLoading: false
                });
                // console.log(data['data']);
            })
            .catch(error => console.log(error));

        fetch('http://www.ianmatlak.com:8443/corona/api/stat.php')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                statsData: data['data'],
                statsLoading: false
            });
            // console.log(data['data']);
        })
        .catch(error => console.log(error));
    }

    render() {
        const { tableData, tableLoading, statsData, statsLoading } = this.state;

        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/stats" />
                        </Route>
                        <Route path="/stats">
                            <Map 
                                stats={tableData} 
                                loading={tableLoading}    
                            />
                            <Stats 
                                stats={statsData} 
                                loading={statsLoading}    
                            />
                            <Table 
                                stats={tableData} 
                                loading={tableLoading}    
                            />
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
}

export default App;
