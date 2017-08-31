import React from "react";
import { Link } from "react-router-dom";
import GoogleMap from "./GoogleMap";
import ContactUsForm from "./ContactUs-Form";
import FbPlugins from "./FbPlugins";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contactuspage">
        <div className="pageBanner col-lg-12" />
        {/* <div className="col-lg-1"> */}
        <div className="googlemaps col-lg-3 col-lg-offset-1">
          <GoogleMap />
          <FbPlugins />
        </div>
        <div className="col-lg-4 col-lg-offset-2">
          <h3 className="whiteTxt">Contact Us!</h3>
          <ContactUsForm />
        </div>
      </div>
    );
  }
}

export default ContactUs;
