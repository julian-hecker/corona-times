import React from "react";
import Spinner from "../Spinner/Spinner";

import "./DetailedStats.scss";

class DetailedStats extends React.Component {
  render() {
    let stats = null;
    this.props.stats.map((res) => {
      if (res.country == "World") {
        stats = res;
      }
    });
    console.log("THIS IS STAT" + stats);
    // if (stats) {
    return (
      <div className="Stats-wrapper">
        <div className="box">
          {this.props.loading ? (
            <Spinner />
          ) : (
            <div>
              <h1>{stats.cases.total}</h1>
              <h5>Total Infected</h5>
            </div>
          )}
        </div>
        <div className="box">
          {this.props.loading ? (
            <Spinner />
          ) : (
            <div>
              <h1>{stats.deaths.total}</h1>
              <h5>Total Dead</h5>
            </div>
          )}
        </div>
        <div className="box">
          {this.props.loading ? (
            <Spinner />
          ) : (
            <div>
              <h1>{stats.cases.recovered}</h1>
              <h5>Total Cured</h5>
            </div>
          )}
        </div>
      </div>
    );
    // } else {
    //   return null;
    // }
  }
}

export default DetailedStats;
