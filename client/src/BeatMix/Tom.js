import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import Measure from 'react-measure';

import PageBanner from "./PageBanner";

const axios = require("axios");

class Tom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      photoIndex: 0,
      isOpen: false,
      width: -1,
      folder: window.location.pathname
    };
    this.getFromCloud = this.getFromCloud.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.getFromCloud();
  }
  getFromCloud() {
    let temp = this.state;
    let self = this;
    // let folder = window.location.pathname;
    // let folder = '/Events';
    axios
      .get(`/getFromCloudinary${this.state.folder}`)
      .then(function (res) {
        let pictures = res.data.resources;
        let new_random = [];
        if (pictures.length > 20) {
          for (let i = 0; i < 20; i++) {
            let randomNum = Math.floor(Math.random() * pictures.length);
            let chosen = pictures[randomNum];
            pictures.splice(randomNum, 1);
            new_random.push(chosen);
          }
        }
        else {
          new_random = pictures;
        }
        let picArranged = new_random.map(
          (picture, index) =>
            (picture = {
              src: picture.secure_url,
              width: picture.width,
              height: picture.height
            })
        );
        self.setState({ pictures: picArranged });
      })
      .catch(function (error) { });
  }

  openLightbox(index) {
    this.setState({ isOpen: true, photoIndex: index });
  }

  render() {
    if (this.state.folder != window.location.pathname) {
      this.setState({ folder: window.location.pathname })
      this.getFromCloud();      
    }
    const { photoIndex, isOpen } = this.state;
    const tempState = this.state.pictures;
    const width = this.state.width;
    return (
      <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
        {
          ({ measureRef }) => {
            if (width < 1) {
              return <div ref={measureRef}></div>;
            }
            let columns = 2;
            if (width >= 480) {
              columns = 3;
            }
            if (width >= 1024) {
              columns = 4;
            }
            if (width >= 1824) {
              columns = 5;
            }
            return <div ref={measureRef} className="App">
              <Grid fluid={true} className="eventsPage">
              <PageBanner />
                <Row>
                  <Col lg={6} md={6} xs={12} sm={12} lgOffset={5} mdOffset={5}>
                    <h1 className="pageHeaders text-right" style={{ textShadow: '1px 1px black', fontFamily: 'Suez One' }}>תם אלוש</h1>
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
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Gallery
                      photos={tempState}
                      cols={columns}
                      onClickPhoto={this.openLightbox}
                    />
                  </Col>
                </Row>
              </Grid>
            </div>
          }
        }
      </Measure>
    );
  }
}

export default Tom;


