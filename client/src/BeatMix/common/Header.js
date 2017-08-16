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
            <Link className="navbar-brand" to="/">
              <img
                id="navbarBrand"
                src="http://beatmix.mitchatnim.co.il/img/0239/799.png"
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse navbar-right" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  גלריות <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/AboutUs">תם ועמית</Link>
                  </li>
                  <li>
                    <Link to="/">נוי</Link>
                  </li>
                  <li>
                    <Link to="/">אירועים</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">למה דאבל דיג'ייז</Link>
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
