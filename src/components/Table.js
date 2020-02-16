import React from 'react';
import { Table } from 'reactstrap';
import './Table.scss';

let xhrResult;
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.ianmatlak.com:8443/corona/api/table.php');
xhr.onload = function () {
    xhrResult = xhr.responseText;
    console.log(xhrResult);
}
xhr.send();


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
