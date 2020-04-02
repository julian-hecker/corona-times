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
                <th>First Case</th>
                <th>Total Cases / 1Mil Pop</th>
                <th>Total Deaths / 1Mil Pop</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((item, number) => {
                return (
                  <tr key={uuid()}>
                    <th>{number + 1}</th>
                    <th scope="row">{item.Country}</th>
                    <td>{item.New_Cases}</td>
                    <td>{item.New_Deaths}</td>
                    <td>{item.Total_Cases}</td>
                    <td>{item.Total_Deaths}</td>
                    <td>{item.Total_Recovered}</td>
                    <td>{item.Active_Cases}</td>
                    <td>{item.Serious_Critical}</td>
                    <td>{item.First_Case}</td>
                    <td>{item.TotCasesOf1MilPop}</td>
                    <td>{item.TotDeathsOf1MilPop}</td>
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
