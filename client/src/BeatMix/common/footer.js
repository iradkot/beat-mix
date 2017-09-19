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
              <Col lg={1} md={1} sm={2} xs={2} />
              <Col lg={1} md={1} smHidden xsHidden>
                <Image
                  src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png"
                  responsive
                />
              </Col>
              <Col lg={2} md={2} sm={10} xs={10}>
                <Row className="hideOnMobile" style={{ height: "27.5px" }} />
                <Col lg={6} md={6} sm={3} xs={3}>
                  <a target="_blank" href="https://soundcloud.com/beatmixdjs">
                    <Image
                      id="test"
                      style={{ height: "45px" }}
                      src="http://icons.iconarchive.com/icons/uiconstock/stitched-social-media/512/soundcloud-icon.png"
                    />
                  </a>
                </Col>
                <Col lg={6} md={6} sm={3} xs={3}>
                  <a target="_blank" href="https://www.facebook.com/beatmixdjs">
                    <Image
                      id="test"
                      style={{ height: "45px" }}
                      src="http://iconbug.com/data/46/256/e5da8e60ffe95bca3aa593711b88b6f3.png"
                    />
                  </a>
                </Col>
                <Col lgHidden mdHidden sm={3} xs={3}>
                  <a
                    className="mobileNum"
                    href="tel:050-690-7817"
                    style={{ fontSize: "25px" }}
                  >
                    <i className="fa fa-mobile  fa-2x" aria-hidden="true" />
                  </a>
                </Col>
              </Col>
              <Col lg={4} md={4} smHidden xsHidden>
                <Col lg={6} md={6} smHidden xsHidden>
                  <Image
                    src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/P.png"
                    className="img-responsive logo"
                  />
                </Col>
                <Row className="hideOnMobile" style={{ height: "27.5px" }} />
                <Col
                  lg={6}
                  md={6}
                  smHidden
                  xsHidden
                  style={{ color: "#4080FF" }}
                >
                  <a
                    className="mobileNum"
                    href="tel:050-690-7817"
                    style={{ fontSize: "25px" }}
                  >
                    050-690-7817
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
