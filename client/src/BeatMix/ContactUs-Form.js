import React from "react";
import { FormGroup, Grid, Row, Col, ResponsiveEmbed } from "react-bootstrap";

const axios = require("axios");

class ContactUsForm extends React.Component {
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
            <Col lg={6} md={6} sm={12} xs={12} lgPush={6}>
              <FormGroup>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  required
                  value={this.state.name}
                  onChange={event =>
                    this.setState({ name: event.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  required
                  value={this.state.email}
                  onChange={event =>
                    this.setState({ email: event.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  placeholder="Number"
                  required
                  value={this.state.number}
                  onChange={event =>
                    this.setState({ number: event.target.value })}
                />
              </FormGroup>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} lgPull={6}>
              <FormGroup>
                <textarea
                  className="form-control"
                  id="content"
                  placeholder="Message"
                  required
                  value={this.state.content}
                  onChange={event =>
                    this.setState({ content: event.target.value })}
                />
              </FormGroup>
              <div className="text-center">
                <button className="btn btn-primary formSubmitBtn" type="submit">
                  Send
                </button>
              </div>
            </Col>
          </form>
        </Row>
      </Grid>
    );
  }
}
export default ContactUsForm;
