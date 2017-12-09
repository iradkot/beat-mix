import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

import PageBanner from "./PageBanner";

const textStyle = {
  background: 'black',
  borderRadius: '5px',
  // textAlign: 'center',
  padding: '3px',
  // fontSize: '20px'
}

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
            <h1 className="pageHeaders text-right" style={{ textShadow: '1px 1px black', fontFamily: 'Suez One' }}>?אז למה ביטמיקס</h1>
            <hr />
          </Col>
          <Col lg={1} />
        </Row>
        <Row>
          <Col lg={2} />
          <Col lg={8} style={textStyle}>
                <h4 dir="rtl">
                  לא נרבה במילים אלא אם כן מדובר בצלילים.<br/> חברת ביטמיקס - החברה למוזיקה והפקת אירועים בעלת 10 שנות שמחה וניסיון בשטח בכל סוגי האירועים, מאירועים קטנים פרטיים ומסיבות במועדונים ועד אירועי ענק וכמובן, חתונות. יתרון בולט בביטמיקס הוא הפקה והובלת האירוע מתחילתו ועד סופו בדגש ליחס אישי, אכפתי, מקצועי וסבלני עם צמד די ג'ייז שבו כל אחד מביא את הטאץ' האישי שלו. המטרה העיקרית שלנו היא שהרחבה שלכם תהיה מלאה בכל רגע ולדעת לקרוא את הקהל זה בגדר חובה. באירועים של ביטמיקס אין פשרות. ציוד איכותי וחזק, אנרגיות שיא, כשרון מולד ואהבה בלתי מתפשרת למקצוע. מבחינתנו כל אירוע הוא ה-אירוע!
                </h4>
          </Col>
          <Col lg={2} />
        </Row>
      </Grid>
    );
  }
}

export default WhyBeatMix;
