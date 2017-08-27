import React from 'react';
import Gallery from 'react-photo-gallery';
const axios = require("axios");

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.getFromCloud = this.getFromCloud.bind(this);
        this.getFromCloud();
    }
    getFromCloud() {
        let temp = this.state;
        let self = this;
        axios
          .get("/getFromCloudinary")
          .then(function(res) {
            let pictures = res.data.resources;
            let picArranged = pictures.map((picture, index) => picture={
              src: picture.secure_url,
              width: picture.width,
              height: picture.height
            })
            self.setState({ pictures: picArranged });
            console.log("done");
            console.log(self.state.pictures);
          })
          .catch(function(error) {});
      }




    render() {
        return (
            <div>
            <Gallery photos={this.state.pictures} onClickPhoto={this.openLightbox} />
            </div>
        );
    }
}

const PHOTO_SET = [
    {
        src: 'http://example.com/example/img1.jpg',
        srcset: [
            'http://example.com/example/img1_1024.jpg 1024w',
            'http://example.com/example/img1_800.jpg 800w',
            'http://example.com/example/img1_500.jpg 500w',
            'http://example.com/example/img1_320.jpg 320w',
        ],
        sizes: [
            '(min-width: 480px) 50vw',
            '(min-width: 1024px) 33.3vw',
            '100vw'
        ],
        width: 681,
        height: 1024,
        alt: 'image 1',
    },
    {
        src: 'http://example.com/example/img2.jpg',
        srcset: [
            'http://example.com/example/img2_1024.jpg 1024w',
            'http://example.com/example/img2_800.jpg 800w',
            'http://example.com/example/img2_500.jpg 500w',
            'http://example.com/example/img2_320.jpg 320w',
        ],
        sizes: [
            '(min-width: 480px) 50vw',
            '(min-width: 1024px) 33.3vw',
            '100vw'
        ],
        width: 600,
        height: 600,
        alt: 'image 2',
    }
];

export default Sample;