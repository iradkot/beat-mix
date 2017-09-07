import React from "react";
import ContactUsForm from "./ContactUs-Form";
import { FormGroup, Grid, Row, Col, ResponsiveEmbed } from "react-bootstrap";


class ContactUsPopout extends React.Component {
  constructor(props) {
    super(props);
    this.contactBtn = this.contactBtn.bind(this);
    this.state = {
      class: "hider"
    };
  }

  contactBtn() {
    if (this.state.class === "hider") {
      this.setState({ class: "show" });
    } else {
      this.setState({ class: "hider" });
    }
  }

  render() {
    return (
      <Grid className='show'>
        <Row>
          <Col lg={12}>
          <h1 style={{textAlign: "center"}}> צרו קשר </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
          <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  required
                /> 
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
          <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          required
        />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
          <input
          type="text"
          className="form-control"
          id="number"
          placeholder="Number"
          required
        /> 
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
          <button className="btn btn-primary formSubmitBtn" type="submit">
                  Send
                </button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ContactUsPopout;
