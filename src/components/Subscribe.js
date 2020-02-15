import "./Subscribe.scss";
import { Button } from "reactstrap";
import React, { useEffect, useState, useReducer } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Form, Input } from "reactstrap";
import axios from "axios";

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

  // No 'Access-Control-Allow-Origin' header is present on the requested ERROR
  const countryList = () => {
    axios(proxyurl + dburl)
      .then(({ data }) => {
        let countrylist1 = data;
        console.log(countrylist1);
      })
      .catch(() =>
        console.log("Can’t access " + dburl + " response. Blocked by browser?")
      );
  };

  return (
    <Form className="subscribe-wrap">
      <label>
        <Input
          type="text"
          placeholder="Email Address"
          email="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <Input
          type="select"
          bsSize="md"
          onClick={e => setCountry(e.target.value)}
        >
          <option>China</option>
          <option>USA</option>
          <option>Japan</option>
        </Input>
      </label>
      {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>China</DropdownItem>
          <DropdownItem>United States</DropdownItem>
          <DropdownItem>Japans</DropdownItem>
        </DropdownMenu>
      </Dropdown>*/}
      {/*Only get activated when clicking the drop down menu*/}
      <Button type="button" className="btn btn-warning" onClick={countryList}>
        Get Notified!
      </Button>
    </Form>
  );
};

export default Subscribe;
