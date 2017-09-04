import React from "react";
import { Link } from "react-router-dom";

//style objects:0
const djBox = {
  textAlign: "center",
  border: "1px solid rgb(189,30,85)"
  // borderRadius: "5px"
}
const djTeam = {
  fontFamiley: 'Oswald',
  color: "rgb(189,30,85)",
  textAlign: "center",
  textDecoration: 'underline'
}

const djNameFont = {
  fontFamiley: 'Arimo',
  color: 'white',
  textShadow: '-2px -4px 14px',
  webkitTransform: 'rotate(2deg)',
  textDecoration: 'underline'
}
const djImage = {
  height: '100px',
  width: '100px',
  display: 'inline-block'
}
class About extends React.Component {
  render() {
    return (
      <div>
        <h1 style={djTeam}> נבחרת הדיג'ייז שלנו </h1>
        <div className="container">
          <div style={djBox} className="row aboutDj">
            <div className="col-md-4">
              <img className="img-responsive" src="https://res.cloudinary.com/moshmosh/image/upload/v1503559692/beatmix/IMG_3483_ctlzls.jpg" />
            </div>
            <div className="col-md-8">
              <div style={djNameFont} className="row djName">
                <h1>DJ. Tom Alush</h1>
              </div>
              <div className="row">
                <h4>Hiphop, Trans, Techno, Rock</h4>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div style={djBox} className="row aboutDj">
          <div className="col-md-8">
              <div style={djNameFont} className="row djName">
                <h1>DJ. Amit Machluf</h1>
              </div>
              <div className="row">
                <h4>reaggai, Fun, Trans, Techno, Rock</h4>
              </div>
            </div>
            <div className="col-md-4">
              <img className="img-responsive" src="https://res.cloudinary.com/moshmosh/image/upload/v1503559666/beatmix/IMG_3449_oqjshw.jpg" />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default About;
