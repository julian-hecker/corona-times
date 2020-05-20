import React from "react";
import { Table } from "reactstrap";
import "./DetailedTable.scss";
import uuid from "uuid/v4";

class DetailedTable extends React.Component {
  render() {
    const stats = this.props.stats;
    if (stats) {
      return (
        <div className="table-wrapper">
          <Table dark>
            <thead>
              <tr>
                <th>Region</th>
                <th>Total Cases</th>
                <th>Total Deaths</th>
                <th>Total Recovered</th>
                <th>Active Cases</th>
                {/* <th>Serious, Critical</th> */}
                <th>New Cases</th>
                <th>New Deaths</th>
              </tr>
            </thead>
            <tbody>
              {stats
                .sort((a, b) => b.cases.total - a.cases.total)
                .map((item) => {
                  return (
                    <tr key={uuid()}>
                      <th scope="row">{item.country}</th>
                      <td>{item.cases.total}</td>
                      <td>{item.cases.active}</td>
                      <td>{item.deaths.total}</td>
                      <td>{item.cases.recovered}</td>
                      {/* <td>{item.cases.critical}</td> */}
                      <td>{item.cases.new}</td>
                      <td>{item.deaths.new}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DetailedTable;
