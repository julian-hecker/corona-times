import React from "react";
import "./Stats.scss";


class Stats extends React.Component {
    render() {
        const stats = this.props.stats[0];
        if (stats) {
            return (
                <div className="Stats-wrapper">
                    <div className="box">
                        <h1>{stats['infected']}</h1>
                        <h5>Total Infected</h5>
                    </div>
                    <div className="box">
                        <h1>{stats['dead']}</h1>
                        <h5>Total Dead</h5>
                    </div>
                    <div className="box">
                        <h1>{stats['cured']}</h1>
                        <h5>Total Cured</h5>
                    </div>
                </div>
            );
        } else { return null; }
    }
};

export default Stats;
