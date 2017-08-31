import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

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
            <NavItem eventKey={1} href="https://www.facebook.com/beatmixdjs">
              פייסבוק
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/ContactUs">צרו-קשר</Link>
            </NavItem>
            <NavDropdown eventKey={3} title="גלריות" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>
                <Link to="/Artists">אמנים</Link>
              </MenuItem>
              <MenuItem eventKey={3.2}>
                <Link to="/Events">אירועים</Link>
              </MenuItem>
            </NavDropdown>
            <NavItem eventKey={4}>
              <Link to="/WhyBeatMix">למה דאבל דיג'ייז</Link>
            </NavItem>
            <NavItem eventKey={5}>
              <Link to="/AboutUs">נבחרת הדיג'יים</Link>
            </NavItem>
            <NavItem eventKey={6}>
              <Link to="/">דף הבית</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
