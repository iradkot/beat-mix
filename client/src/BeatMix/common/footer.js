import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Image, Panel } from "react-bootstrap";
import FbPlugins from "../FbPlugins";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let style = {
      marginTop: "3px",
      // border: "2px solid #be1e55",
      // borderRadius: '5px',
      background: "black",
      // height: "71px",
      textAlign: "center"
    };
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            {/* <Col lg={2} /> */}
            <Col lg={12} md={12} sm={12} xs={12} style={style}>
              <Col lg={1} md={1} smHidden xsHidden />
              <Col lg={1} md={1} smHidden xsHidden>
                <Image
                  src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png"
                  responsive
                />
              </Col>
              <Col lg={2} md={2} sm={4} xs={4}>
                <Row className="hideOnMobile" style={{ height: "27.5px" }} />
                <Col lg={6} md={6} sm={6} xs={6}>
                  <Image
                    id="test"
                    style={{ height: "45px" }}
                    src="https://cdn.worldvectorlogo.com/logos/soundcloud.svg"
                    responsive
                  />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <Image
                    id="test"
                    style={{ height: "45px" }}
                    src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
                    responsive
                  />
                </Col>
              </Col>
              <Col lg={4} md={4} sm={6} xs={6}>
                <Col lg={6} md={6} smHidden xsHidden>
                  <Image
                    src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/P.png"
                    className="img-responsive logo"
                  />
                </Col>
                <Row className="hideOnMobile" style={{ height: "27.5px" }} />
                <Col lg={6} md={6} sm={12} xs={12} style={{ color: "#4080FF" }}>
                  <a href="tel:050-690-7817" style={{ fontSize: "25px" }}>
                    050-690-7817 טלפון
                  </a>
                </Col>
              </Col>
              <Col lg={2} smHidden xsHidden>
                <Row style={{ height: "36px" }} />
                <Col lg={6}>
                  <FbPlugins get="follow" />
                </Col>
                <Col lg={6}>
                  <FbPlugins get="like" />
                </Col>
              </Col>
              <Col lg={1} smHidden xsHidden>
                <Image
                  src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png"
                  responsive
                />
              </Col>
              <Col lg={1} smHidden xsHidden />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
