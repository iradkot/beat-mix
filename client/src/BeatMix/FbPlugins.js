import React from "react";

const fbCommentsStyle = {
  backgroundColor: "white"
};

class FbPlugins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (FB.XFBML) {
      FB.XFBML.parse(document.getElementById("fb-divs"));
    }
  }
  componentDidUpdate() {
    if (FB.XFBML) {
      FB.XFBML.parse(document.getElementById("fb-divs"));
    }
  }

  render() {
    return (
      <div className="fb-divs">
        <div
          className="fb-comments"
          data-href="https://www.facebook.com/elevationmosh"
          data-numposts="5"
          style={fbCommentsStyle}
        />
        <div
          className="fb-like"
          data-href="https://www.facebook.com/elevationmosh/"
          data-layout="button_count"
          data-action="like"
          data-size="large"
          data-show-faces="false"
          data-share="false"
        />
        <div
          className="fb-follow"
          data-href="https://www.facebook.com/elevationmosh/"
          data-layout="button"
          data-size="large"
          data-show-faces="true"
        />
      </div>
    );
  }
}
export default FbPlugins;
