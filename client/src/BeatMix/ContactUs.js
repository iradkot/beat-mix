import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, ResponsiveEmbed } from "react-bootstrap";
import GoogleMap from "./GoogleMap";
import ContactUsForm from "./ContactUs-Form";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // let a = document.getElementsByClassName('show');
  }

  render() {
    return (
      <Grid fluid={true} className="contactUsPage">
        <Row>
          <Col lg={12} md={12} xs={12} sm={12} className="pageBanner" />
        </Row>
        <Row>
          <Col lg={6} md={6} xs={12} sm={12} lgOffset={5} mdOffset={5}>
            <h1 className="pageHeaders text-right">צור-קשר</h1>
            <hr />
          </Col>
          <Col lg={1} md={1} smHidden xsHidden />
        </Row>
        <Row>
          <Col lg={1} md={1} smHidden xsHidden />
          <Col lg={4} md={4} smHidden xsHidden className="googlemaps">
            <ResponsiveEmbed a4by3>
              <GoogleMap />
            </ResponsiveEmbed>
          </Col>
          <Col lg={6} md={6} xs={12} sm={12}>
            <ContactUsForm />
          </Col>
          <Col lg={1} md={6} smHidden xsHidden />
        </Row>
      </Grid>
    );
  }
}

export default ContactUs;
