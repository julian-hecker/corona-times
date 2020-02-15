import "./Subscribe.scss";
import { Button } from "reactstrap";
import React, { useEffect, useState, useReducer } from "react";

import {
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";
//import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const dburl = "http://www.ianmatlak.com:8443/country.php";

// const is required
// this is destructoring handleInput
const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");

    // This is to only show console log text
    useEffect(() => {
        console.log(`${email} - ${country}`);
    }, [email, country]);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    // // No 'Access-Control-Allow-Origin' header is present on the requested ERROR
    // const countryList = () => {
    //   axios(proxyurl + dburl)
    //     .then(({ data }) => {
    //       let countrylist1 = data;
    //       console.log(countrylist1);
    //     })
    //     .catch(() =>
    //       console.log("Can’t access " + dburl + " response. Blocked by browser?")
    //     );
    // };

    return (
        <Form className="subscribe-wrap">
            <h2>Subscribe for Updates!</h2>
            <Container>
                <Row>
                    <Col xs="12" sm="6">
                        <Input
                            className="input"
                            type="text"
                            placeholder="Email Address"
                            email="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </Col>
                    <Col xs="12" sm="6">
                        <Input
                            className="input"
                            type="select"
                            bsSize="md"
                            onClick={e => setCountry(e.target.value)}
                        >
                            <option>North America</option>
                            <option>South America</option>
                            <option>Europe</option>
                            <option>Africa</option>
                            <option>Asia</option>
                            <option>Australia/Oceania</option>
                        </Input>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Button
                            type="button"
                            className="btn btn-warning">
                            Get Notified!
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Form >
    );
};

export default Subscribe;
