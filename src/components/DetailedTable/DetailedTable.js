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
                <th>Country</th>
                <th>Total Cases</th>
                <th>New Cases</th>
                <th>Total Deaths</th>
                <th>New Deaths</th>
                <th>Total_Recovered</th>
                <th>Active Cases</th>
                <th>Serious, Critical</th>
                <th>Total Cases / 1Mil Pop</th>
              </tr>
            </thead>
            <tbody>
              {stats.map(item => {
                return (
                  <tr key={uuid()}>
                    <th scope="row">{item.Country}</th>
                    <td>{item.Total_Cases}</td>
                    <td>{item.New_Cases}</td>
                    <td>{item.Total_Deaths}</td>
                    <td>{item.New_Deaths}</td>
                    <td>{item.Total_Recovered}</td>
                    <td>{item.Active_Cases}</td>
                    <td>{item.Serious_Critical}</td>
                    <td>{item.TotCasesOf1MilPop}</td>
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
