import React from "react";
import "./DetailedStats.scss";

class DetailedStats extends React.Component {
  render() {
    const stats = this.props.stats[0];
    if (stats) {
      return (
        <div className="Stats-wrapper">
          <div className="box">
            <h1>{stats["Total_Cases"]}</h1>
            <h5>Total Infected</h5>
          </div>
          <div className="box">
            <h1>{stats["Total_Deaths"]}</h1>
            <h5>Total Dead</h5>
          </div>
          <div className="box">
            <h1>{stats["Total_Recovered"]}</h1>
            <h5>Total Cured</h5>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DetailedStats;
