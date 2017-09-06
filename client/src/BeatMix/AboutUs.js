import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

//style objects:0
const djBox = {
  textAlign: "center",
  border: "1px solid rgb(189,30,85)"
  // borderRadius: "5px"
};
const djTeam = {
  fontFamiley: "Oswald",
  color: "rgb(189,30,85)",
  textAlign: "center",
  textDecoration: "underline"
};

const djNameFont = {
  fontFamiley: "Arimo",
  color: "white",
  textShadow: "-2px -4px 14px",
  webkitTransform: "rotate(2deg)",
  textDecoration: "underline"
};
const djImage = {
  height: "100px",
  width: "100px",
  display: "inline-block"
};
class About extends React.Component {
  render() {
    return (
      <Grid fluid={true} className="aboutusPage">
        <Row>
          <Col lg={12} className="pageBanner" />
        </Row>
        <Row>
          <Col lg={6} lgOffset={5}>
            <h1 className="pageHeaders text-right">נבחרת הדיג'יים</h1>
            <hr />>
          </Col>
          <Col lg={1} />
        </Row>
        <Row style={djBox} className="row aboutDj">
          <Col lg={1} />
          <Col lg={3}>
            <img
              className="img-responsive"
              src="https://res.cloudinary.com/moshmosh/image/upload/v1503559692/beatmix/IMG_3483_ctlzls.jpg"
            />
          </Col>
          <Col lg={7}>
            <div style={djNameFont} className="row djName">
              <h1>DJ. Tom Alush</h1>
              <h4>Hiphop, Trans, Techno, Rock</h4>
            </div>
          </Col>
          <Col lg={1} />
        </Row>
        <br />
        <br />
        <Row style={djBox} className="row aboutDj">
          <Col lg={1} />
          <Col lg={7}>
            <div style={djNameFont} className="row djName">
              <h1>DJ. Amit Machluf</h1>
              <h4>reaggai, Fun, Trans, Techno, Rock</h4>
            </div>
          </Col>
          <Col lg={3}>
            <img
              className="img-responsive"
              src="https://res.cloudinary.com/moshmosh/image/upload/v1503559666/beatmix/IMG_3449_oqjshw.jpg"
            />
          </Col>
          <Col lg={1} />
        </Row>
      </Grid>
    );
  }
}

export default About;
