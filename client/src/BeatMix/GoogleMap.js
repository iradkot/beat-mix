import React from "react";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848.8443971191521!2d34.58565249026134!3d31.678244060002353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15029c0e21082a03%3A0x94c4148eefea47ed!2sExodus+St+31%2C+Ashkelon!5e0!3m2!1sen!2sil!4v1503390615324"
          width="550"
          height="404"
        />
      </div>
    );
  }
}
export default GoogleMap;
