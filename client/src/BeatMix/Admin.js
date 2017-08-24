import React from "react";
import { Link } from "react-router-dom";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uploadWidget = this.uploadWidget.bind(this);
  }

  uploadWidget() {
    cloudinary.openUploadWidget(
      {
        cloud_name: "moshmosh",
        upload_preset: "antg22ln",
        sources: ["local", "url", "facebook", "instagram"],
        folder: "beatmix",
        theme: "minimal",
        show_powered_by: false
      },
      function(error, result) {}
    );
  }

  render() {
    return (
      <div>
        <div className="pageBanner col-lg-12" />
        <div className="col-lg-6 col-lg-offset-3">
          <h1>Admin Upload Page</h1>
          {/* <Link to="/"> */}
          <button
            type="button"
            className="btn btn-default"
            onClick={this.uploadWidget}
          >
            Add Image(s)
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default Admin;
