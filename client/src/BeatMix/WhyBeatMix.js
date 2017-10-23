import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

class WhyBeatMix extends React.Component {
  render() {
    return (
      <Grid
        fluid={true}
        className="whyPage"
        style={{ textAlign: "right", color: "white" }}
      >
        <Row>
          <Col lg={12} className="pageBanner" />
        </Row>
        <Row>
          <Col lg={6} lgOffset={5}>
            <h1 className="pageHeaders text-right" style={{ textShadow: '1px 1px black', fontFamily: 'Suez One' }}>?אז למה ביטמיקס</h1>
            <hr />
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={8}>
            <h2>דאבל שואו</h2>
            <h4>
              כשהדיג׳יים שלנו משתוללים על העמדה אין אורח שיוכל להשאר אדיש לאנרגיות ולטירוף{" "}
            </h4>
          </Col>
          <Col lg={1}>
            <h1>*</h1>{" "}
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={8}>
            <h2>דאבל מגוון</h2>
            <h4>אנו דואגים תמיד להכיר וללמוד את כל סגנונות המוזיקה השונים, הדג'יים שלנו מכינים פלייליסט ייחודי ומושלם המתאים בדיוק לאירוע שלכם תוך כדי התחשבות ברצונות שלכם ובאווירת האירוע.
            </h4>
          </Col>
          <Col lg={1}>
            <h1>*</h1>{" "}
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={8}>
            <h2>דאבל ריכוז</h2>
            <h4 />
          </Col>
          <Col lg={1}>
            <h1>*</h1>{" "}
          </Col>
          <Col lg={1} />
        </Row>
      </Grid>
    );
  }
}

export default WhyBeatMix;
