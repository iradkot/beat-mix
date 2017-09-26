import React from "react";

const fbCommentsStyle = {
  backgroundColor: "white"
};

const fbStyle = {
  margin: "22px auto",
  transform: "scale(2.5)",
  msTransform: "scale(1.5)",
  WebkitTransform: "scale(1.5)",
  OTransform: "scale(1.5)",
  MozTransform: "scale(1.5)"
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
    if (this.props.get === "like") {
      return (
        <div
          className="fb-like"
          data-href="https://www.facebook.com/elevationmosh/"
          data-layout="button_count"
          data-action="like"
          data-size="large"
          data-show-faces="false"
          data-share="false"
          style={fbStyle}
        />
      );
    } else if (this.props.get === "comment") {
      return (
        <div
          className="fb-comments"
          data-href="https://www.facebook.com/elevationmosh"
          data-numposts="5"
          style={fbCommentsStyle}
        />
      );
    } else if (this.props.get === "follow") {
      return (
        <div
          className="fb-follow"
          data-href="https://www.facebook.com/elevationmosh/"
          data-layout="button"
          data-size="large"
          data-show-faces="true"
          style={fbStyle}
        />
      );
    } else return <div />;
  }
}
export default FbPlugins;
