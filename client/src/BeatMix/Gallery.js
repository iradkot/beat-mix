import React from "react";
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button type="button" className="btn btn-default">
            Home Page!
          </button>
        </Link>
      </div>
    );
  }
}

export default Gallery;
