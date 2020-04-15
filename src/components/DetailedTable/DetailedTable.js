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
                <th>#</th>
                <th>Country</th>
                <th>New Cases</th>
                <th>New Deaths</th>
                <th>Total Cases</th>
                <th>Total Deaths</th>
                <th>Total Recovered</th>
                <th>Active Cases</th>
                <th>Serious, Critical</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((item, number) => {
                return (
                  <tr key={uuid()}>
                    <th>{number + 1}</th>
                    <th scope="row">{item.country}</th>
                    <td>{item.cases.new}</td>
                    <td>{item.deaths.new}</td>
                    <td>{item.cases.total}</td>
                    <td>{item.deaths.total}</td>
                    <td>{item.cases.recovered}</td>
                    <td>{item.cases.active}</td>
                    <td>{item.cases.critical}</td>
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
