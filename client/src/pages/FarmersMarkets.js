import React from "react";
import { Container, Col, Row, Button } from "reactstrap"
import Jumbotron from "../components/Jumbotron";

const FarmersMarkets = () => {

  return (
    <>
      {/* <Jumbotron>
      <Row>
        <Col>
          LOGO
        </Col>
        <Col>
          LOGIN LINK
        </Col>
        <Col>
          FACTS
        </Col>
        <Col>
          FARMERS MARKET
        </Col>
      </Row>
      <Row>
        <Col>
          <p>logo</p>
          <p>blurb about our site</p>
        </Col>
      </Row>
      </Jumbotron> */}

      <Container>
        <div>
          <h2>SEARCH FOR LOCAL FARMERS MARKET</h2>
          <h4>search bar goes here</h4>
          <Button>Search</Button>
        </div>

        <div>
          <Row>
            <h2>Results</h2>
          </Row>
          <Row>
            <h2>Table goes here</h2>
          </Row>
        </div>

        <div>
          <h2>FOOTER GOES HERE</h2>
        </div>
      </Container>
    </>
  )


}

export default FarmersMarkets;