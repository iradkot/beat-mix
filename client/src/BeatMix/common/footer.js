import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Image, Panel } from "react-bootstrap";
import FbPlugins from "../FbPlugins";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let style = {
            border: '2px solid white',
            borderRadius: '13px',
            height: '71px',
            textAlign: 'center'
        }
        return (
            <div className="footer" style={style}>
                <Grid>
                    <Row>
                        <Col lg={1}><Image src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png" responsive/></Col>
                        <Col lg={1}>4</Col>
                        <Col lg={2}><Row>שמעו אותנו בסאונד קלאוד</Row><Row><Image style={{height: '45px'}} src="https://cdn.worldvectorlogo.com/logos/soundcloud.svg" responsive/></Row></Col>
                        
                        <Col lg={1}><div
          className="fb-follow"
          data-href="https://www.facebook.com/elevationmosh/"
          data-layout="button"
          data-size="large"
          data-show-faces="true"
        /></Col>
                        <Col lg={1}><div
          className="fb-like"
          data-href="https://www.facebook.com/elevationmosh/"
          data-layout="button_count"
          data-action="like"
          data-size="large"
          data-show-faces="true"
          data-share="false"
        /></Col>
                        <Col lg={1}>8</Col>
                        <Col lg={1}>6</Col>

                        <Col lg={1}><Row>דף הפייסבוק שלנו</Row><Row><Image style={{height: '45px'}} src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png" responsive/></Row></Col>
                        <Col lg={1}>10</Col>
                        <Col lg={1}>11</Col>
                        <Col lg={1}><Image src="https://res.cloudinary.com/moshmosh/image/upload/v1504511510/beatmix/PRO_FACE.png" responsive/></Col>
                    </Row>

                </Grid>

            </div>
        )
    }

}
