import React from "react";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <img
          style={{ width: 300 }}
          src="https://raw.githubusercontent.com/webpack-contrib/awesome-webpack/master/media/awesome_webpack_branding.png"
          alt="Webpack"
        />
        <br />
        Hello world!!
      </div>
    );
  }
}

export default HomePage;
