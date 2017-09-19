import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

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
    console.log(this.showInfo);
    return (
      <div>
        <Grid fluid={true} className="artistPage">
          <Row>
            <Col lg={12} className="pageBanner" />
          </Row>
          <Row>
            <Col lg={6} lgOffset={5}>
              <h1 className="pageHeaders text-right">אמנים</h1>
              <hr />
            </Col>
            <Col lg={1} />
          </Row>
          <Row className="carousel-row">
            <div className="artists-carousel-container">
              <div className="artists-carousel" style={carouselStyle}>
                <div className="item a" />
                <div className="item b" />
                <div className="item c" />
              </div>
            </div>
            <div className="newNext" onClick={this.rotateNext}>
              <img className="newNextImg" src="http://res.cloudinary.com/iradkot/image/upload/a_0/v1505818360/112886-glowing-purple-neon-icon-arrows-arrow-thick-right_k97xsc.png"/>
            </div>
            <div className="newPrev" onClick={this.rotatePrev}>
            <img className="newPrevImg" src="http://res.cloudinary.com/iradkot/image/upload/a_180/v1505818360/112886-glowing-purple-neon-icon-arrows-arrow-thick-right_k97xsc.png"/>
            </div>
          </Row>
          <Row className="mobile-artists" style={{display: "none"}}>
            <img className="tom responsive" src="http://res.cloudinary.com/iradkot/image/upload/v1505745602/data_2_pdv9wu.jpg"/>
            </Row>
            <Row className="mobile-artists" style={{display: "none"}}>
            <img className="tom responsive" src="http://res.cloudinary.com/iradkot/image/upload/v1505745602/data_2_pdv9wu.jpg"/>
            </Row>
            <Row className="mobile-artists" style={{display: "none"}}>
            <img className="tom responsive" src="http://res.cloudinary.com/iradkot/image/upload/v1505745602/data_2_pdv9wu.jpg"/>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default Artists;
