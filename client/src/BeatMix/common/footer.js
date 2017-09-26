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
      background: "black",
      textAlign: "center"
    };
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12} style={style}>
              <Col lg={2} md={2} smHidden xsHidden />
              <Col lg={1} md={1} smHidden xsHidden>
                <Image
                  id="test"
                  style={{ height: "72.5px" }}
                  src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png"
                />
              </Col>
              <Col lg={2} md={2} sm={12} xs={12}>
                <Col lg={6} md={6} sm={4} xs={4}>
                  <a target="_blank" href="https://soundcloud.com/beatmixdjs">
                    <Image
                      id="test"
                      style={{ height: "72.5px" }}
                      src="http://www.iconninja.com/files/104/745/156/soundcloud-icon.svg"
                    />
                  </a>
                </Col>
                <Col lg={6} md={6} sm={4} xs={4}>
                  <a target="_blank" href="https://www.facebook.com/beatmixdjs">
                    <Image
                      id="test"
                      style={{ height: "72.5px" }}
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
                      style={{ height: "72.5px" }}
                      src="https://cdn4.iconfinder.com/data/icons/flatron-set-2/512/call-512.png"
                    />
                  </a>
                </Col>
              </Col>
              <Col lg={2} md={2} smHidden xsHidden style={{ color: "#4080FF" }}>
                <Row className="hideOnMobile" style={{ height: "20.625px" }} />
                <a
                  className="mobileNum"
                  href="tel:050-690-7817"
                  style={{ fontSize: "27.5px", fontWeight: "bold" }}
                >
                  050-690-7817
                </a>
              </Col>
              <Col lg={2} smHidden xsHidden>
                <Col lg={6}>
                  <FbPlugins get="follow" />
                </Col>
                <Col lg={6}>
                  <FbPlugins get="like" />
                </Col>
              </Col>
              <Col lg={1} md={1} smHidden xsHidden>
                <Image
                  id="test"
                  style={{ height: "72.5px" }}
                  src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png"
                />
              </Col>
              <Col lg={2} md={2} smHidden xsHidden />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
