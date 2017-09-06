import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";

const axios = require("axios");

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      photoIndex: 0,
      isOpen: false
    };
    this.getFromCloud = this.getFromCloud.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.getFromCloud();
  }
  getFromCloud() {
    let temp = this.state;
    let self = this;
    axios
      .get("/getFromCloudinary/beatmix")
      .then(function(res) {
        let pictures = res.data.resources;
        let picArranged = pictures.map(
          (picture, index) =>
            (picture = {
              src: picture.secure_url,
              width: picture.width,
              height: picture.height
            })
        );
        self.setState({ pictures: picArranged });
        console.log("done");
        console.log(self.state.pictures);
      })
      .catch(function(error) {});
  }

  openLightbox(index) {
    this.setState({ isOpen: true, photoIndex: index });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const tempState = this.state.pictures;
    return (
      <Grid fluid={true} className="eventsPage">
        <Row>
          <Col lg={12} md={12} xs={12} sm={12} className="pageBanner" />
        </Row>
        <Row>
          <Col lg={6} md={6} xs={12} sm={12} lgOffset={5} mdOffset={5}>
            <h1 className="pageHeaders text-right">אירועים</h1>
            <hr />
          </Col>
          <Col lg={1} md={1} smHidden xsHidden />
        </Row>
        <div>
          {isOpen && (
            <Lightbox
              mainSrc={tempState[photoIndex].src}
              nextSrc={tempState[(photoIndex + 1) % tempState.length].src}
              prevSrc={
                tempState[
                  (photoIndex + tempState.length - 1) % tempState.length
                ].src
              }
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + tempState.length - 1) % tempState.length
                })}
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % tempState.length
                })}
            />
          )}
        </div>
        <Row>
          <Col lg={2} md={2} sm={1} xs={1} />
          <Col lg={9} md={9} sm={10} xs={10}>
            <Gallery
              photos={tempState}
              cols={3}
              onClickPhoto={this.openLightbox}
            />
          </Col>
          <Col lg={1} md={1} sm={1} xs={1} />
        </Row>
      </Grid>
    );
  }
}

export default Events;
