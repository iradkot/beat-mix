import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import GoogleMap from "./GoogleMap";
import ContactUsForm from "./ContactUs-Form";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid fluid={true} className="contactUsPage">
        <Row>
          <Col lg={12} className="pageBanner" />
        </Row>
        <Row>
          <Col lg={6} lgOffset={5}>
            <h1 className="pageHeaders text-right">צור-קשר</h1>
            <hr />
          </Col>
          <Col lg={1}/>
        </Row>
        <Row>
          <Col lg={1} />
          <Col lg={4} className="googlemaps">
            <GoogleMap />
          </Col>
          <Col lg={6}>
            <ContactUsForm />
          </Col>
          <Col lg={1} />
        </Row>
      </Grid>
    );
  }
}

export default ContactUs;
