import React from "react";
import ParralaxImageSlider from "./parralax-image-slider";
import { Link } from "react-router-dom";
import ContactUsForm from "./ContactUs-Form";
import { Grid, Row, Col, Image, Panel } from "react-bootstrap";
import FbPlugins from "./FbPlugins";
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import Footer from './common/footer.js';
import { IndexLinkContainer } from "react-router-bootstrap";



var image_arr = [
  "http://res.cloudinary.com/moshmosh/image/upload/v1503559692/beatmix/IMG_3483_ctlzls.jpg",
  'http://res.cloudinary.com/moshmosh/image/upload/v1503559675/beatmix/IMG_3443_sg0943.jpg',
  'http://res.cloudinary.com/moshmosh/image/upload/v1503559714/beatmix/IMG_3530_mklqvr.jpg'
]
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.contactBtn = this.contactBtn.bind(this);
  }
  contactBtn() {
  }

  render() {
    let introStyle = {
      background: `url("https://www.walldevil.com/wallpapers/a95/abstract-backgrounds-black-cool-wallpapers-dark.jpg") no-repear center center fixed`,
      color: "white",
      // height: "539px",
      backgroundSize: "cover"

    }

    return (
      <div>
        <Col className="padding-0 contact-us text-center" lg={2}>
          <button type="button" onClick={this.contactBtn}>קבלו הצעה!</button>
          <ContactUsForm />
        </Col>
        <div>

          <ParralaxImageSlider height={539} image_arr={image_arr} />
        </div>
        <div className="intro">
          <Grid fluid={true}>
            <Row className="show-grid" style={introStyle}>
              <Col className="padding-0" lg={2}></Col>
              <Col className="padding-0" lg={4}><Image src="http://res.cloudinary.com/moshmosh/image/upload/v1503559665/beatmix/IMG_3471_toxlwd.jpg" responsive /></Col>
              <Col className="padding-0 intro-talk" lg={5}>
                <h1>  !כולם זזים לפי הקצב שלנו - Beat Mix </h1>
                <p> אנחנו תם אלוש ועמית מכלוף - חברי ילדות שנושמים מוזיקה מאז שאנחנו זוכרים את עצמנו. כשנעלה על עמדת ה-דיג'יי בחתונה שלכם, האורחים יתעוררו לחיים והקצב יעל הכי גבוה שאפשר, בדיוק כמו שחלמתם שיקרה. זו ההזדמנות שלכם לחסוך הרבה התלבטויות זמן וגם כסף, ולשריין אותנו לאירוע הקרב ובא. </p>
              </Col>
              <Col lg={1}> </Col>
            </Row>
            <Row>
              <Col className="between" lgOffset={2} lg={10}><h1 className="text-center">...דמיינו את החתונה שלם עם הטאצ' של ביט-מיקס</h1></Col>
            </Row>
            <Row>
              <Col className="padding-0" lg={2}></Col>
              <Col className="homeImageLinks" lg={5}>
                <IndexLinkContainer to="/ContactUs">
                  <Row>
                    <h1 className="intro-text">צור קשר</h1>
                  </Row>
                </IndexLinkContainer>
                <Link to="/ContactUs">
                  <Image className="intro-image" src="http://res.cloudinary.com/moshmosh/image/upload/v1504516544/tomAndAmitEquip_yk0ryb.jpg" responsive />
                </Link>
              </Col>

              <Col className="homeImageLinks" lg={5}>
                <IndexLinkContainer to="/Events">
                  <Row>
                    <h1 className="intro-text">לגלריות</h1>
                  </Row>
                </IndexLinkContainer>
                <Link to="/Events">
                  <Image className="intro-image" src="http://res.cloudinary.com/moshmosh/image/upload/c_scale,w_700/v1503559677/beatmix/IMG_3497_k2xykm.jpg" responsive />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="padding-0" lg={2}></Col>
              <Col className="text-center" lg={10}><FbPlugins /></Col>
            </Row>
            <Footer />
          </Grid>

        </div>

      </div>
    );
  }
}

export default HomePage;
