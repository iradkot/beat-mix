import React from "react";
import ContactUsForm from "./ContactUs-Form";

class ContactUsPopout extends React.Component {
  constructor(props) {
    super(props);
    this.contactBtn = this.contactBtn.bind(this);
    this.state = {
      class: "hide"
    };
  }

  contactBtn() {
    if (this.state.class === "hide") {
      this.setState({ class: "show" });
    } else {
      this.setState({ class: "hide" });
    }
  }

  render() {
    return (
      <div className="contact-us">
        <button type="button" onClick={this.contactBtn}>
          קבלו הצעה!
        </button>
        <div className={this.state.class}>
          <ContactUsForm />
        </div>
      </div>
    );
  }
}

export default ContactUsPopout;
