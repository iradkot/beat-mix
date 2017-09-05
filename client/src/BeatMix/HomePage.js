import React from "react";
import ParralaxImageSlider from "./parralax-image-slider";
import ContactUsForm from "./ContactUs-Form";
import ContactUsPopout from "./ContactUs-Popout";
import { Grid, Row, Col, Image, Panel } from "react-bootstrap";
import FbPlugins from "./FbPlugins";

var image_arr = [
  "http://res.cloudinary.com/moshmosh/image/upload/v1503559692/beatmix/IMG_3483_ctlzls.jpg",
  "http://res.cloudinary.com/moshmosh/image/upload/v1503559675/beatmix/IMG_3443_sg0943.jpg",
  "http://res.cloudinary.com/moshmosh/image/upload/v1503559714/beatmix/IMG_3530_mklqvr.jpg"
];

var image_arr2 = [
  "https://www.vintandyork.com/media/catalog/product/b/i/big_gif_firm_1.gif"
];
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.contactBtn = this.contactBtn.bind(this);
    this.state = {
      getOffer: false
    };
  }
  contactBtn() {
    let offerBtn = !this.state.getOffer;
    this.setState({
      getOffer: offerBtn
    });
  }

  render() {
    let introStyle = {
      background: `url("https://www.walldevil.com/wallpapers/a95/abstract-backgrounds-black-cool-wallpapers-dark.jpg") no-repear center center fixed`,
      color: "white",
      // height: "539px",
      backgroundSize: "cover"
    };

    return (
      <div>
        {/* <Col className="padding-0 contact-us text-center" lg={2}>
          <button type="button" onClick={this.contactBtn}>
            קבלו הצעה!
          </button>
          {this.state.getOffer ? <ContactUsForm /> : ""}
        </Col> */}
        <div className="text-center padding-0">
          <ContactUsPopout />
        </div>
        <div>
          <ParralaxImageSlider height={539} image_arr={image_arr} />
        </div>
        <div className="intro">
          <Grid fluid={true}>
            <Row className="show-grid" style={introStyle}>
              <Col lg={2} />
              <Col lg={4}>
                <Image
                  src="http://res.cloudinary.com/moshmosh/image/upload/v1503559665/beatmix/IMG_3471_toxlwd.jpg"
                  responsive
                />
              </Col>
              <Col className="padding-0 intro-talk" lg={5}>
                <h1> !כולם זזים לפי הקצב שלנו - Beat Mix </h1>
                <p>
                  {" "}אנחנו תם אלוש ועמית מכלוף - חברי ילדות שנושמים מוזיקה מאז
                  שאנחנו זוכרים את עצמנו. כשנעלה על עמדת ה-דיג'יי בחתונה שלכם,
                  האורחים יתעוררו לחיים והקצב יעל הכי גבוה שאפשר, בדיוק כמו
                  שחלמתם שיקרה. זו ההזדמנות שלכם לחסוך הרבה התלבטויות זמן וגם
                  כסף, ולשריין אותנו לאירוע הקרב ובא.{" "}
                </p>
              </Col>
              <Col lg={1}> </Col>
            </Row>
            <Row>
              <Col className="between" lgOffset={2} lg={10}>
                <h1 className="text-center">
                  ...דמיינו את החתונה שלם עם הטאצ' של ביט-מיקס
                </h1>
              </Col>
            </Row>
            <Row>
              <Col lg={2} />
              <Col lg={5}>
                <Image
                  className="intro-image"
                  src="http://res.cloudinary.com/moshmosh/image/upload/v1504516544/tomAndAmitEquip_yk0ryb.jpg"
                  responsive
                />
              </Col>
              <Col lg={5}>
                <Image
                  className="intro-image"
                  src="http://res.cloudinary.com/moshmosh/image/upload/c_scale,w_700/v1503559677/beatmix/IMG_3497_k2xykm.jpg"
                  responsive
                />
              </Col>
            </Row>
            <Row>
              <Col lg={2} />
              <Col className="text-center" lg={10}>
                <FbPlugins />
              </Col>
            </Row>
            <div className="footer">
              <Panel fluid={true} footer="עקבו אחרינו">
                <a target="_blank" href="https://www.facebook.com/beatmixdjs">
                  <Image
                    src="http://static.wixstatic.com/media/afb6f1_2382bba6ec214135b9f6256e216bc44f.gif"
                    style={{ height: "50px" }}
                  />
                </a>
              </Panel>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default HomePage;
