import React from "react";
import { Link } from "react-router-dom";

const axios = require("axios");

class ContactUs extends React.Component {
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
      <div className="contactuspage">
        <form action="#" id="contactUsForm" onSubmit={this.handleSubmit}>
          <h3>Contact Us!</h3>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Full Name"
              required
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
            <label>Content:</label>
            <input
              type="text"
              className="form-control"
              id="content"
              placeholder="Message Us!"
              required
              value={this.state.content}
              onChange={event => this.setState({ content: event.target.value })}
            />
            <label>Home/Mobile #:</label>
            <input
              type="text"
              className="form-control"
              id="number"
              placeholder="Your Phone/Mobile Number"
              required
              value={this.state.number}
              onChange={event => this.setState({ number: event.target.value })}
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">
                Click Me!
              </button>
            </span>
          </div>
        </form>
        <div className="fb-divs">
          <div
            className="fb-comments"
            data-href="https://www.facebook.com/elevationmosh"
            data-numposts="5"
          />
          <div
            className="fb-like"
            data-href="https://www.facebook.com/elevationmosh/"
            data-layout="button_count"
            data-action="like"
            data-size="large"
            data-show-faces="true"
            data-share="false"
          />
          <div
            className="fb-follow"
            data-href="https://www.facebook.com/elevationmosh/"
            data-layout="button"
            data-size="large"
            data-show-faces="true"
          />
        </div>
      </div>
    );
  }
}

export default ContactUs;
