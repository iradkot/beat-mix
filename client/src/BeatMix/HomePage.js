import React from "react";
import ParralaxImageSlider from "./parralax-image-slider";

var image_arr = [
  "http://widefuture.com/wp-content/uploads/2016/10/Type-of-DJ1.jpg",
  'http://mackie.com/sites/default/files/styles/live_image/public/djspinners_0.jpg?itok=Znk-qyAg&c=1c419a2df4b1e80ee2ef2d134e924782',
  'http://firenflames.com/wp-content/uploads/2017/04/maxresdefault.jpg'
]

var image_arr2 = [
  "https://www.vintandyork.com/media/catalog/product/b/i/big_gif_firm_1.gif"
]
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <ParralaxImageSlider height={500} image_arr={image_arr} />
        </div>
        <div className="no-padding">
          <h1 style={{ textAlign: "center" }}>Beat-Mix</h1>
          <br />
          <br />
          <br />
        </div>
        <ParralaxImageSlider height={700} image_arr={image_arr2} />
        <div className="no-padding">
          <h1 style={{ textAlign: "center" }}>Beat-Mix</h1>
          <br />
          <br />
          <br />
        </div>



      </div>
    );
  }
}

export default HomePage;
