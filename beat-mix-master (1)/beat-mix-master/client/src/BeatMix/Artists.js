import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

import PageBanner from "./PageBanner";

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.rotateNext = this.rotateNext.bind(this);
    this.rotatePrev = this.rotatePrev.bind(this);
    this.randomDj = this.randomDj.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.state = {
      currDeg: 0
    };
  }

  rotateNext() {
    let newDeg = this.state.currDeg - 120;
    this.setState({
      currDeg: newDeg
    });
  }

  rotatePrev() {
    let newDeg = this.state.currDeg + 120;
    this.setState({
      currDeg: newDeg
    });
  }
  randomDj() {
    let newDeg = this.state.currDeg + Math.floor(Math.random() * 10) * 120;
    this.setState({
      currDeg: newDeg
    });
  }
  showInfo() {
    console.log(this.state.currDeg);
    switch (this.state.currDeg % 360) {
      case 120:
        <h2> tom alush </h2>;
        break;
      case -120:
        <h2> tom alush </h2>;
        break;
      case 240:
        return <h2> amit machluf </h2>;
        break;
      case -240:
        return <h2> amit machluf </h2>;
        break;
      default:
        return <h2> Irad Kotton </h2>;
    }
  }

  render() {
    let carouselStyle = {
      WebkitTransform: "rotateY(" + this.state.currDeg + "deg)",
      MozTransform: "rotateY(" + this.state.currDeg + "deg)",
      OTransform: "rotateY(" + this.state.currDeg + "deg)",
      transform: "rotateY(" + this.state.currDeg + "deg)"
    };
    this.showInfo();
    return (
      <div>
        <Grid fluid={true} className="artistPage">
        <PageBanner />
          <Row>
            <Col lg={6} lgOffset={5}>
              <h1 className="pageHeaders text-right" style={{ textShadow: '1px 1px black', fontFamily: 'Suez One' }}>אמנים</h1>
              <hr />
            </Col>
            <Col lg={1} />
          </Row>
          {/* pc version */}
          <Row className="row-artists">
            <div className="rowArtistsDiv">
              <img src="http://res.cloudinary.com/beat-mix/image/upload/v1507033628/Artists/amit_k29bsl.png" />
            </div>
            <div className="rowArtistsDiv">
              <img src="http://res.cloudinary.com/beat-mix/image/upload/v1507033627/Artists/tom_yfcnbs.png" />
            </div>
            <div className="rowArtistsDiv">
              <img src="http://res.cloudinary.com/beat-mix/image/upload/v1507033621/Artists/hadar_wc5dn1.png" />
            </div>
          </Row>
          {/* mobile vesrion */}
          {/* <Row className="mobile-artists" style={{ display: "none" }}>
            <img className="tom responsive" src="http://res.cloudinary.com/beat-mix/image/upload/v1507033628/Artists/amit_k29bsl.png" />
          </Row>
          <Row className="mobile-artists" style={{ display: "none" }}>
            <img className="tom responsive" src="http://res.cloudinary.com/beat-mix/image/upload/v1507033627/tom_yfcnbs.png" />
          </Row>
          <Row className="mobile-artists" style={{ display: "none" }}>
            <img className="tom responsive" src="http://res.cloudinary.com/beat-mix/image/upload/v1507033621/Artists/hadar_wc5dn1.png" />
          </Row> */}
        </Grid>
      </div>
    );
  }
}

export default Artists;
