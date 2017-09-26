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
            <Col lg={12} md={12} sm={12} xs={12} style={style}>
              <Col lg={1} md={1} smHidden xsHidden />
              <Col lg={1} md={1} smHidden xsHidden>
                <Image
                  src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png"
                  responsive
                />
              </Col>
              <Col lg={2} md={2} sm={8} xs={8} smOffset={2} xsOffset={2}>
                <Row className="hideOnMobile" style={{ height: "27.5px" }} />
                <Col lg={6} md={6} sm={4} xs={4}>
                  <a target="_blank" href="https://soundcloud.com/beatmixdjs">
                    <Image
                      id="test"
                      style={{ height: "45px" }}
                      src="http://www.iconninja.com/files/104/745/156/soundcloud-icon.svg"
                    />
                  </a>
                </Col>
                <Col lg={6} md={6} sm={4} xs={4}>
                  <a target="_blank" href="https://www.facebook.com/beatmixdjs">
                    <Image
                      id="test"
                      style={{ height: "45px" }}
                      src="https://www.shareicon.net/data/2015/09/30/109345_media_512x512.png"
                    />
                  </a>
                </Col>
                <Col lgHidden mdHidden sm={4} xs={4}>
                  <a
                    className="mobileNum"
                    href="tel:050-690-7817"
                    style={{ fontSize: "25px" }}
                  >
                  <Image
                      id="test"
                      style={{ height: "45px" }}
                      src="https://cdn4.iconfinder.com/data/icons/flatron-set-2/512/call-512.png"
                    />
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
