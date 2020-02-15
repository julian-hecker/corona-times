import React from 'react';
import { Table } from 'reactstrap';
import './Table.scss';

const Example = (props) => {
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
                    <tr>
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
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Example;
