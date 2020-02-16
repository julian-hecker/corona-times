import React from 'react';
import { Table } from 'reactstrap';
import './Table.scss';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.ianmatlak.com:8443/corona/api/table.php');
xhr.onload = function () {
    let xhrResult = xhr.responseText;
    handleResponse(xhrResult);
}
xhr.send();

function handleResponse(response) {
    // console.log(response);
}


class Example extends React.Component {
    render() {
        const stats = this.props.stats;
        if (stats) {
            console.log(stats);

            return (
                <div className="table-wrapper">
                    <Table dark>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Infected</th>
                                <th>Deaded</th>
                                <th>Continent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.map(item => {
                                return <tr>
                                    <th scope="row">{item.country}</th>
                                    <td>{item.infected}</td>
                                    <td>{item.dead}</td>
                                    <td>{item.continent}</td>
                                </tr>
                            })}
                            {/* <tr>
                                <th scope="row">China</th>
                                <td>123456</td>
                                <td>6543</td>
                                <td>Asia</td>
                            </tr>
                            <tr>
                                <th scope="row">Japan</th>
                                <td>33</td>
                                <td>0</td>
                                <td>Asia</td>
                            </tr>
                            <tr>
                                <th scope="row">US</th>
                                <td>13</td>
                                <td>0</td>
                                <td>North America</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
            );
        } else { return null; }
    }
}

export default Example;
