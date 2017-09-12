import React from "react";
import ContactUsForm from "./ContactUs-Form";
import { FormGroup, Grid, Row, Col } from "react-bootstrap";

const axios = require("axios");

class ContactUsPopout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      content: "",
      number: ""
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    let temp = this.state;
    let self = this;
    axios
      .post("/contactus/email", temp)
      .then(function(res) {
        alert("Email Sent!");
        self.setState({ name: "", email: "", content: "", number: "" });
      })
      .catch(function(error) {});
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <form action="#" id="contactUsForm" onSubmit={this.handleSubmit}>
            <Col lg={12}>
              <FormGroup>
                <input
                  type="text"
                  className="form-control popOutForm"
                  placeholder="שם פרטי + שם משפחה"
                  required
                  value={this.state.name}
                  onChange={event =>
                    this.setState({ name: event.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="email"
                  className="form-control popOutForm"
                  placeholder="אימייל"
                  required
                  value={this.state.email}
                  onChange={event =>
                    this.setState({ email: event.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="text"
                  className="form-control popOutForm"
                  placeholder="מספר ליצירת קשר"
                  required
                  value={this.state.number}
                  onChange={event =>
                    this.setState({ number: event.target.value })}
                />
              </FormGroup>
            </Col>
            <Col lg={12}>
              <FormGroup>
                <textarea
                  className="form-control popOutForm"
                  placeholder="פרטים נוספים"
                  rows="8"
                  cols="50"
                  required
                  value={this.state.content}
                  onChange={event =>
                    this.setState({ content: event.target.value })}
                />
              </FormGroup>
              <div className="text-center">
                <button className="btn btn-primary formSubmitBtn" type="submit">
                  שלח
                </button>
              </div>
            </Col>
          </form>
        </Row>
      </Grid>
    );
  }
}

export default ContactUsPopout;
