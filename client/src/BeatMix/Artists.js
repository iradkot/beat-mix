import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

class Artists extends React.Component {
  render() {
    return (
      <Grid fluid={true} className="artistPage">
        <Row>
          <Col lg={12} className="pageBanner" />
        </Row>
        <Row>
          <Col lg={6} lgOffset={5}>
            <h1 className="pageHeaders text-right">אמנים</h1>
            <hr />
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col lg={1} />
          <Col lg={4} />
          <Col lg={6} />
          <Col lg={1} />
        </Row>
      </Grid>
    );
  }
}

export default Artists;
