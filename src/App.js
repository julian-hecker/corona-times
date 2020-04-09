// import React, { useState, useReducer } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Map from "./components/Map/Map.js";
import DetailedMap from "./components/DetailedMap/DetailedMap.js";
import Stats from "./components/Stats/Stats.js";
import DetailedStats from "./components/DetailedStats/DetailedStats.js";
import Table from "./components/Table/Table.js";
import DetailedTable from "./components/DetailedTable/DetailedTable.js";
import Subscribe from "./components/Subscribe/Subscribe.js";
import Survey from "./components/Survey/Survey.js";
import Info from "./components/Info/Info.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      tableLoading: true,
      statsData: [],
      statsLoading: true,
      tableDatav2: [],
      tableLoadingv2: true,
      statsDatav2: [],
      statsLoadingv2: true,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://www.ianmatlak.com:443/api/table.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          tableData: data["data"],
          tableLoading: false,
        });
        // console.log(data['data']);
      })
      .catch((error) => console.log(error));

    fetch("https://www.ianmatlak.com:443/api/stat.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          statsData: data["data"],
          statsLoading: false,
        });
        // console.log(data['data']);
      })
      .catch((error) => console.log(error));

    fetch("https://covid-193.p.rapidapi.com/statistics", {
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "e060ce6c8fmsh5404eaabe6d29f6p1d2845jsn9e8347027e2a",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data["response"]);
        this.setState({
          tableDatav2: data["response"],
          tableLoadingv2: false,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {
      tableData,
      tableLoading,
      statsData,
      statsLoading,
      tableDatav2,
      tableLoadingv2,
      statsDatav2,
      statsLoadingv2,
    } = this.state;

    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/stats" />
            </Route>
            <Route path="/stats">
              <DetailedMap stats={tableDatav2} loading={tableLoadingv2} />
              <DetailedStats stats={tableDatav2} loading={tableLoadingv2} />
              <DetailedTable stats={tableDatav2} loading={tableLoadingv2} />
              <Subscribe />
            </Route>
            <Route path="/stats-old">
              <Route path="/stats-old">
                <Map stats={tableData} loading={tableLoading} />
                <Stats stats={statsData} loading={statsLoading} />
                <Table stats={tableData} loading={tableLoading} />
                <Subscribe />
              </Route>
            </Route>
            <Route path="/info">
              <Info />
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
