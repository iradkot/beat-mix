import React from "react";
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
      <div>
        <div className="pageBanner col-lg-12" />
        <div>
          {isOpen &&
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
            />}
        </div>
        <Gallery photos={tempState} cols={3} onClickPhoto={this.openLightbox} />
      </div>
    );
  }
}

export default Events;
