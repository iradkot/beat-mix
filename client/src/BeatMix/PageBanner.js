import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const axios = require("axios");

class PageBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  getFromCloud() {
    let self = this;
    axios
      .get("/getFromCloudinary/home-page-main")
      .then(function(res) {
        let data = res.data.resources[0].secure_url;
        self.setState({ image: data });
      })
      .catch(function(error) {});
  }

  componentWillMount() {
    this.getFromCloud();
  }

  render() {
    return (
      <Row>
        <Col
          lg={12}
          md={12}
          xs={12}
          sm={12}
          className="pageBanner"
          style={{
            width: "100%",
            height: "295px",
            backgroundImage: `url(${this.state.image})`
          }}
        />
      </Row>
    );
  }
}

export default PageBanner;
