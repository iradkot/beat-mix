import React from "react";
import { FormGroup, Col } from "react-bootstrap";

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
      <div className="container-fluid">
        <form action="#" id="contactUsForm" onSubmit={this.handleSubmit}>
          <div className="col-lg-6">
            <div className="form-group">
              {/* <label className="whiteTxt">Content:</label> */}
              <textarea
                className="form-control"
                id="content"
                placeholder="Message"
                required
                value={this.state.content}
                onChange={event =>
                  this.setState({ content: event.target.value })}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary formSubmitBtn" type="submit">
                Send
              </button>
            </div>
          </div>
          <div className="col-lg-6 form-line">
            <div className="form-group">
              {/* <label className="whiteTxt">Name:</label> */}
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </div>
            <div className="form-group">
              {/* <label className="whiteTxt">Email:</label> */}
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>
            <div className="form-group">
              {/* <label className="whiteTxt">Home/Mobile #:</label> */}
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default ContactUsForm;
