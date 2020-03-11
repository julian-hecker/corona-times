import React from 'react';
import { Table } from 'reactstrap';
import './Table.scss';
import uuid from 'uuid/v4'

class Example extends React.Component {
    render() {
        const stats = this.props.stats;
        if (stats) {

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
                                return <tr key={uuid()}>
                                    <th scope="row">{item.country}</th>
                                    <td>{item.infected}</td>
                                    <td>{item.dead}</td>
                                    <td>{item.continent}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
            );
        } else { return null; }
    }
}

export default Example;
