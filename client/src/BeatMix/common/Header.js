import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar fluid collapseOnSelect inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="navbar-brand navbar-right" to="/">
              <img
                id="navbarBrand"
                src="http://beatmix.mitchatnim.co.il/img/0239/799.png"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li role="presentation">
              <a target="_blank" href="https://www.facebook.com/beatmixdjs">
                פייסבוק
              </a>
            </li>
            <LinkContainer to="/ContactUs">
              <NavItem eventKey={5}>צרו-קשר</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={4} title="גלריות" id="basic-nav-dropdown">
              <LinkContainer to="/Artists">
                <MenuItem eventKey={4.1}>אמנים</MenuItem>
              </LinkContainer>
              <LinkContainer to="/Events">
                <MenuItem eventKey={4.2}>אירועים</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/WhyBeatMix">
              <NavItem eventKey={3}>למה דאבל דיג'ייז</NavItem>
            </LinkContainer>
            <LinkContainer to="/AboutUs">
              <NavItem eventKey={2}>נבחרת הדיג'יים</NavItem>
            </LinkContainer>
            <LinkContainer to="/">
              <NavItem eventKey={1}>דף הבית</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
