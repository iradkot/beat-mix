import React from "react";
import { Link } from "react-router-dom";

let styles = {
	color:'white'
};

class Events extends React.Component {
  render() {
    return (
      <div>
        <div className="pageBanner col-lg-12" />
        <div className="col-lg-6 col-lg-offset-3">
          <h1 style={styles}>Events!</h1>
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

export default Events;
