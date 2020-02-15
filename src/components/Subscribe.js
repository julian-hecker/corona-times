import "./Subscribe.scss";
import { Button } from "reactstrap";
import React, { useEffect, useState, useReducer } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

// const is required
// this is destructoring handleinput
const Subscribe = props => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  // This is to only show console log text
  useEffect(() => {
    console.log(`${email} - ${country}`);
  }, [email, country]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <form className="subscribe-wrap">
      <label>
        <input
          type="text"
          placeholder="Email Address"
          email="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Select Country"
          country="country"
          onChange={e => setCountry(e.target.value)}
          value={country}
        />
      </label>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>China</DropdownItem>
          <DropdownItem>United States</DropdownItem>
          <DropdownItem>Japans</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button>Test</Button>
    </form>
  );
};

export default Subscribe;
