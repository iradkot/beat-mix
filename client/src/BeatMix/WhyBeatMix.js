import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

import PageBanner from "./PageBanner";

class WhyBeatMix extends React.Component {
  render() {
    return (
      <Grid
        fluid={true}
        className="whyPage"
        style={{ textAlign: "right", color: "white" }}
      >
        <PageBanner />
        <Row>
          <Col lg={6} lgOffset={5}>
            <h1
              className="pageHeaders text-right"
              style={{ textShadow: "1px 1px black", fontFamily: "Suez One" }}
            >
              למה דאבל דיג'ייז
            </h1>
            <hr />
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={8}>
            <h2>דאבל שואו</h2>
            <h4>
              כאשר 2 הדי'ג'יים שלנו על משתוללים על העמדה אין אורח שיוכל להשאר
              אדיש לטירוף{" "}
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
            <h4>
              אצלנו אנו דואגים תמיד להכיר וללמוד את כל סגנונות המוזיקה השונים, 2
              הדג'יים עוד לפני האירוע דואגים שכל אחד מכסה חצי מהסגנונות המתאימים
              לאירוע והמוזיקה תמיד טובה ותמיד מגוונת!
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
