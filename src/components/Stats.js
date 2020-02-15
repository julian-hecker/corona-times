import React from "react";
import "./Stats.scss";

const Stats = props => {
    return (
        <div className="Stats-wrapper">
            <div className="box">
                <h1>67,901</h1>
                <h5>Total Infected</h5>
            </div>
            <div className="box">
                <h1>1308</h1>
                <h5>Total Dead</h5>
            </div>
            <div className="box">
                <h1>4182</h1>
                <h5>Total Cured</h5>
            </div>
        </div>
    );
};

export default Stats;
