import React from "react";

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
      <form action="#" id="contactUsForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="whiteTxt">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Full Name"
            required
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <label className="whiteTxt">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            required
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <label className="whiteTxt">Home/Mobile #:</label>
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="Your Home/Mobile Number"
            required
            value={this.state.number}
            onChange={event => this.setState({ number: event.target.value })}
          />
          <label className="whiteTxt">Content:</label>
          <input
            type="text"
            className="form-control"
            id="content"
            placeholder="Message Us!"
            required
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
          <button className="btn btn-primary btn-lg" type="submit">
            Click Me!
          </button>
        </div>
      </form>
    );
  }
}
export default ContactUsForm;
