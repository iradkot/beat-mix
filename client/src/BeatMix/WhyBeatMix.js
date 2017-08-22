import React from "react";
import { Link } from "react-router-dom";

class WhyBeatMix extends React.Component {
  render() {
    return (
      <div>
        <div className="pageBanner col-lg-12" />
        <div className="col-lg-6 col-lg-offset-3">
        <h1>Why Double DJ's</h1>
        <Link to="/">
          <button type="button" className="btn btn-default">
            Home Page!
          </button>
        </Link>
      </div>
      </div>
    );
  }
}

export default WhyBeatMix;
