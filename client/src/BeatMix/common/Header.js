import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand navbar-right" to="/">
              <img
                id="navbarBrand"
                src="http://beatmix.mitchatnim.co.il/img/0239/799.png"
              />
            </Link>
          </div>
          <div className="navbar-collapse collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a target="_blank" href="https://www.facebook.com/beatmixdjs">
                  פייסבוק
                </a>
              </li>
              <li>
                <Link to="/ContactUs">צרו-קשר</Link>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  גלריות <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/TamAmit">תם ועמית</Link>
                  </li>
                  <li>
                    <Link to="/Artists">נוי</Link>
                  </li>
                  <li>
                    <Link to="/Events">אירועים</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/WhyBeatMix">למה דאבל דיג'ייז</Link>
              </li>
              <li>
                <Link to="/AboutUs">נבחרת הדיג'יים</Link>
              </li>
              <li>
                <Link to="/">דף הבית</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
