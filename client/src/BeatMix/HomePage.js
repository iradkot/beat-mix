import React from "react";
import ParralaxImageSlider from "./parralax-image-slider";
import ContactUsForm from "./ContactUs-Form";
import { Grid, Row, Col, Image } from "react-bootstrap";

var image_arr = [
  "http://res.cloudinary.com/moshmosh/image/upload/v1503559692/beatmix/IMG_3483_ctlzls.jpg",
  'http://res.cloudinary.com/moshmosh/image/upload/v1503559675/beatmix/IMG_3443_sg0943.jpg',
  'http://res.cloudinary.com/moshmosh/image/upload/v1503559714/beatmix/IMG_3530_mklqvr.jpg'
]

var image_arr2 = [
  "https://www.vintandyork.com/media/catalog/product/b/i/big_gif_firm_1.gif",
]
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.contactBtn = this.contactBtn.bind(this);
    this.state = {
      getOffer: false
    }
  }
  contactBtn() {
    let offerBtn = !this.state.getOffer;
    this.setState({
      getOffer: offerBtn
    })
  }

  render() {
    let introStyle = {
      background: 'white',
      height: "539px",
      backgroundSize: "cover"

    }

    return (
      <div>
        <Col md={2} className="contact-us">
          <button type="button" onClick={this.contactBtn}>קבלו הצעה!</button>
          {this.state.getOffer ? <ContactUsForm /> : ""}
        </Col>
        <div>
          <ParralaxImageSlider height={539} image_arr={image_arr} />
        </div>
        <div className="intro" style={introStyle}>
          <Grid>
          <Row className="show-grid">
            <Col lg={2}></Col>
            <Col lg={4}><Image src="http://res.cloudinary.com/moshmosh/image/upload/v1503559665/beatmix/IMG_3471_toxlwd.jpg" responsive/></Col>
            <Col lg={6}></Col>
          </Row>
          </Grid>
        </div>

      </div>
    );
  }
}

export default HomePage;
