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
      marginTop: '3px',
      border: "2px solid #be1e55",
      borderRadius: '5px',
      height: "71px",
      textAlign: "center"
    };
    return (
      <Grid fluid={true} className="footer" >
        <Row>
          <Col lg={2} />
          <Col lg={9} style={style}>
            <Col lg={1}>
              <Image
                src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png"
                responsive 
              />
            </Col>
            <Col lg={1}><Image
              style={{ height: "45px" }}
              src="https://cdn.worldvectorlogo.com/logos/soundcloud.svg"
              responsive 
            /></Col>
            <Col lg={1}>
              <Image
                style={{ height: "45px" }}
                src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
                responsive
              />
            </Col>
            <Col lg={6}>
            </Col>
            <Col lg={1}>
              <FbPlugins get="follow" />
            </Col>
            <Col lg={1}>
              <FbPlugins get="like" />
            </Col>
            <Col lg={1}>
              <Image
                src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png"
                responsive
              />
            </Col>
          </Col>
          <Col lg={1}/>
        </Row>
      </Grid>
    );
  }
}
