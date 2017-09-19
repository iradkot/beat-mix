import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Image, Panel } from "react-bootstrap";
import ParralaxImageSlider from "./parralax-image-slider";
import { IndexLinkContainer } from "react-router-bootstrap";
// var scrollToElement = require("scroll-to-element");

import FbPlugins from "./FbPlugins";

var image_arr = [
  "http://res.cloudinary.com/moshmosh/image/upload/v1503559675/beatmix/IMG_3443_sg0943.jpg"
  // "http://res.cloudinary.com/moshmosh/image/upload/v1503559692/beatmix/IMG_3483_ctlzls.jpg",
  // "http://res.cloudinary.com/moshmosh/image/upload/v1503559714/beatmix/IMG_3530_mklqvr.jpg"
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let introStyle = {
      background: `url("https://www.walldevil.com/wallpapers/a95/abstract-backgrounds-black-cool-wallpapers-dark.jpg") no-repear center center fixed`,
      color: "white",
      backgroundSize: "cover",
      marginBottom: "22px"
    };

    return (
      <Grid fluid={true} className="intro">
        <Row>
          {/* <Col lg={12}> */}
          <ParralaxImageSlider height={613} image_arr={image_arr} />
          {/* </Col> */}
        </Row>
        <Row className="show-grid" style={introStyle}>
          <Col lg={2} />
          <Col lg={4}>
            <Image
              src="https://res.cloudinary.com/moshmosh/image/upload/v1504511466/beatmix/13731600_10154326354283965_8252077073868369476_n.jpg"
              responsive
            />
          </Col>
          <Col lg={5} className=" intro-talk">
            <h1> !כולם זזים לפי הקצב שלנו - Beat Mix </h1>
            <p>
              {" "}
              אנחנו תם אלוש ועמית מכלוף - חברי ילדות שנושמים מוזיקה מאז שאנחנו
              זוכרים את עצמנו. כשנעלה על עמדת ה-דיג'יי בחתונה שלכם, האורחים
              יתעוררו לחיים והקצב יעל הכי גבוה שאפשר, בדיוק כמו שחלמתם שיקרה. זו
              ההזדמנות שלכם לחסוך הרבה התלבטויות זמן וגם כסף, ולשריין אותנו
              לאירוע הקרב ובא.{" "}
            </p>
          </Col>
          <Col lg={1}> </Col>
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={10} className="between">
            <h1 className="text-center">
              ...דמיינו את החתונה שלם עם הטאצ' של ביט-מיקס
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={9}>
            <Col lg={6} className="homeImageLinks">
              <IndexLinkContainer to="/ContactUs">
                <Row>
                  <h1 className="intro-text">צור קשר</h1>
                </Row>
              </IndexLinkContainer>
              <Link to="/ContactUs">
                <Image
                  className="intro-image"
                  src="http://res.cloudinary.com/moshmosh/image/upload/v1504516544/tomAndAmitEquip_yk0ryb.jpg"
                  responsive
                />
              </Link>
            </Col>
            <Col lg={6} className="homeImageLinks">
              <IndexLinkContainer to="/Events">
                <Row>
                  <h1 className="intro-text">לגלריות</h1>
                </Row>
              </IndexLinkContainer>
              <Link to="/Events">
                <Image
                  className="intro-image"
                  src="http://res.cloudinary.com/moshmosh/image/upload/c_scale,w_700/v1503559677/beatmix/IMG_3497_k2xykm.jpg"
                  responsive
                />
              </Link>
            </Col>
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={9} className="text-right">
            <Col lg={4} />
            <Col lg={7} className="fb-comment">
              <FbPlugins get="comment" />
            </Col>
            <Col lg={1} />
          </Col>
          <Col lg={1} />
        </Row>
      </Grid>
    );
  }
}

export default HomePage;
