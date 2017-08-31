import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

const navbarStyle = {
  backgroundColor: "black",
  minHeight: "100px",
  fontFamily: "Arimo"
};

const navbarBrandImgStyle = {
  height: "82px",
  width: "229px",
  position: "fixed",
  left: "300px"
};

const navStyle = {
  paddingTop: "35px",
  paddingBottom: "0px",
  lineHeight: "80px"
};

class Header extends React.Component {
  render() {
    return (
      <Navbar style={navbarStyle} collapseOnSelect inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                style={navbarBrandImgStyle}
                src="http://beatmix.mitchatnim.co.il/img/0239/799.png"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav style={navStyle} pullRight>
            <li role="presentation">
              <a target="_blank" href="https://www.facebook.com/beatmixdjs">
                פייסבוק
              </a>
            </li>
            <IndexLinkContainer to="/ContactUs" activeClassName="activeNav">
              <NavItem eventKey={5}>צרו-קשר</NavItem>
            </IndexLinkContainer>
            <NavDropdown eventKey={4} title="גלריות" id="basic-nav-dropdown">
              <IndexLinkContainer to="/Artists" activeClassName="activeNav">
                <MenuItem eventKey={4.1}>אמנים</MenuItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/Events" activeClassName="activeNav">
                <MenuItem eventKey={4.2}>אירועים</MenuItem>
              </IndexLinkContainer>
            </NavDropdown>
            <IndexLinkContainer to="/WhyBeatMix" activeClassName="activeNav">
              <NavItem eventKey={3}>למה דאבל דיג'ייז</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/AboutUs" activeClassName="activeNav">
              <NavItem eventKey={2}>נבחרת הדיג'יים</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/" activeClassName="activeNav">
              <NavItem eventKey={1}>דף הבית</NavItem>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
