import React from "react";
import { Link } from "react-router-dom";

const axios = require("axios");

let styles = {
  color: "white"
};

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
    this.getFromCloud = this.getFromCloud.bind(this);
  }

  getFromCloud() {
    event.preventDefault();
    let temp = this.state;
    let self = this;
    axios
      .get("/getFromCloudinary")
      .then(function(res) {
        self.setState({ pictures: res.data.resources });
        console.log("done");
        console.log(self.state.pictures);
      })
      .catch(function(error) {});
  }

  render() {
    return (
      <div>
        <div className="pageBanner col-lg-12" />
        <div className="col-lg-6 col-lg-offset-3">
          <h1 style={styles}>Events!</h1>
          {/* <Link to="/"> */}
          <button
            type="button"
            className="btn btn-default"
            onClick={this.getFromCloud}
          >
            Home Page!
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default Events;
