import "./Subscribe.scss";
import { Button } from "reactstrap";
import React, { useEffect, useState, useReducer } from "react";

import { Form, Input, Container, Row, Col } from "reactstrap";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

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
            <Button type="button" className="btn btn-info">
              Get Notified!
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Subscribe;
