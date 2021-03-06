import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Image, Panel } from "react-bootstrap";
import ParralaxImageSlider from "./parralax-image-slider";
import { IndexLinkContainer } from "react-router-bootstrap";
// var scrollToElement = require("scroll-to-element");

import FbPlugins from "./FbPlugins";

var image_arr = [
  "http://res.cloudinary.com/moshmosh/image/upload/q_auto/v1503559675/beatmix/IMG_3443_sg0943.jpg"
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let introStyle = {
      background: `url("https://www.walldevil.com/wallpapers/a95/abstract-backgrounds-black-cool-wallpapers-dark.jpg") no-repear center center fixed`,
      color: "white",
      backgroundSize: "100%",
      marginBottom: "22px"
    };

    return (
      <Grid fluid={true} className="intro">
        <Row>
          <ParralaxImageSlider height={613} image_arr={image_arr} />
        </Row>
        <Row className="show-grid" style={introStyle}>
          <Col lg={2} md={2} sm={0} xs={0} />
          <Col lg={4} md={4} sm={12} xs={12}>
            <Image
              src="https://res.cloudinary.com/moshmosh/image/upload/q_auto/v1504511466/beatmix/13731600_10154326354283965_8252077073868369476_n.jpg"
              responsive
            />
          </Col>
          <Col lgHidden mdHidden sm={1} xs={1} />
          <Col lg={5} md={5} sm={10} xs={10} className=" intro-talk text-center">
            <Row className="hideOnNotMobile">
              <h1> - Beat Mix </h1>
              <h1> !כולם זזים לפי הקצב שלנו</h1>
            </Row>
            <Row className="hideOnMobile">
              <h1> !כולם זזים לפי הקצב שלנו - Beat Mix </h1>
            </Row>
            <Row>
              <h3>
                אנחנו תם אלוש ועמית מכלוף - חברי ילדות שנושמים מוזיקה מאז שאנחנו
                זוכרים את עצמנו. כשנעלה על עמדת ה-דיג'יי בחתונה שלכם, האורחים
                יתעוררו לחיים והקצב יעלה הכי גבוה שאפשר, בדיוק כמו שחלמתם שיקרה.
              </h3>
            </Row>
            <Row>
              <h4>
                זו ההזדמנות שלכם לחסוך הרבה זמן והתלבטויות ולשריין אותנו כבר עכשיו לאירוע הקרב***
              </h4>
            </Row>
          </Col>
          <Col lg={1} md={1} sm={1} xs={1} />
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={10} className="between">
            <h1 className="text-center" style={{
              fontFamily: "'Suez One', 'serif'"
            }}>
              ...דמיינו את החתונה שלם עם הטאצ' של ביט-מיקס
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={9}>
            <Col lg={6} className="homeImageLinks">
              <IndexLinkContainer to="/AboutUs">
                <Row>
                  <h1 className="intro-text" style={{
                    fontFamily: "'Suez One', 'serif'"
                  }}>נבחרת הדיג'יים</h1>
                </Row>
              </IndexLinkContainer>
              <Link to="/AboutUs">
                <Image
                  className="intro-image"
                  src="http://res.cloudinary.com/moshmosh/image/upload/q_auto/v1504516544/tomAndAmitEquip_yk0ryb.jpg"
                  responsive
                />
              </Link>
            </Col>
            <Col lg={6} className="homeImageLinks">
              <IndexLinkContainer to="/Events">
                <Row>
                  <h1 className="intro-text" style={{
                    fontFamily: "'Suez One', 'serif'"
                  }}>לגלריות</h1>
                </Row>
              </IndexLinkContainer>
              <Link to="/Events">
                <Image
                  className="intro-image"
                  src="http://res.cloudinary.com/moshmosh/image/upload/q_auto/c_scale,w_700/v1503559677/beatmix/IMG_3497_k2xykm.jpg"
                  responsive
                />
              </Link>
            </Col>
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col
            lgHidden
            mdHidden
            sm={12}
            xs={12}
            style={{ backgroundColor: "white" }}
          >
            <FbPlugins get="comment" />
          </Col>
          <Col lg={12} md={12} smHidden xsHidden className="text-right">
            <Col lg={5} md={5} smHidden xsHidden />
            <Col lg={6} md={6} smHidden xsHidden className="fb-comment">
              <FbPlugins get="comment" />
            </Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomePage;
