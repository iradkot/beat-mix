import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import ContactUsPopOut from "../ContactUs-Popout";


const navbarStyle = {
  backgroundColor: "black",
  minHeight: "100px"
};

const navbarBrandImgStyle = {
  height: "82px",
  width: "229px",
  position: "fixed",
  left: "50px"
};

const navStyle = {
  fontSize: "25px",
  paddingTop: "35px",
  paddingBottom: "0px",
  lineHeight: "80px"
};

let popOutStat = true;

class Header extends React.Component {
  constructor(props){
    super(props);
    this.popOutOn= this.popOutOn.bind(this);
  }
  popOutOn() {
    popOutStat=true;
  }
  popOutOff() {
    popOutStat=false;
  }
  render() {
    let popOut = popOutStat? <ContactUsPopOut />:<div/>;
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
            <IndexLinkContainer to="/ContactUs" onClick={this.popOutOff} activeClassName="activeNav">
              <NavItem eventKey={5}>צור-קשר</NavItem>
            </IndexLinkContainer>
            <NavDropdown
              eventKey={4}
              title="גלריות"
              id="basic-nav-dropdown"
              activeClassName="activeNav"
            >
              <IndexLinkContainer to="/Artists" onClick={this.popOutOn} activeClassName="activeNav">
                <MenuItem eventKey={4.1}>אמנים</MenuItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/Events" onClick={this.popOutOn} activeClassName="activeNav">
                <MenuItem eventKey={4.2}>אירועים</MenuItem>
              </IndexLinkContainer>
            </NavDropdown>
            <IndexLinkContainer to="/WhyBeatMix" onClick={this.popOutOn} activeClassName="activeNav">
              <NavItem eventKey={3}>למה דאבל דיג'ייז</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/AboutUs" onClick={this.popOutOn} activeClassName="activeNav">
              <NavItem eventKey={2}>נבחרת הדיג'יים</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/" onClick={this.popOutOn} activeClassName="activeNav">
              <NavItem eventKey={1}>דף הבית</NavItem>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
        {popOut}
      </Navbar>                
    );
  }
}

export default Header;
