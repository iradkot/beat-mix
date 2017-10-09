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

let popOutStat =
  window.location.href === "http://localhost:3000/ContactUs" ? false : true;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.popOutOn = this.popOutOn.bind(this);
    this.clickedOffer = this.clickedOffer.bind(this);
    this.state = {
      clicked: false,
      name: "",
      email: "",
      content: "",
      number: ""
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    let temp = this.state;
    let self = this;
    axios
      .post("/contactus/email", temp)
      .then(function (res) {
        alert("Email Sent!");
        self.setState({ name: "", email: "", content: "", number: "" });
      })
      .catch(function (error) { });
  }
  popOutOn() {
    popOutStat = true;
  }
  popOutOff() {
    popOutStat = false;
  }
  clickedOffer() {
    let newClick = !this.state.clicked;
    this.setState({ clicked: newClick });
  }
  render() {
    // let popOut = popOutStat? <ContactUsPopOut />:<div/>;
    let popOutClosed = (
      <div className="popOut">
        {" "}
        <h2 onClick={this.clickedOffer}>!קבלו הצעה</h2>
      </div>
    );
    let popOutOpen = (
      <div className="popOutActive">
        <h4 className="closePopup" onClick={this.clickedOffer}>
          סגור{" "}
        </h4>
        <ContactUsPopOut />
      </div>
    );
    let popOut = popOutStat ? this.state.clicked ? (
      popOutOpen
    ) : (
        popOutClosed
      ) : (
        <div />
      );
    // let popOut = <div className={popOutClass}><h2 onClick={this.clickedOffer}>!קבלו הצעה</h2> </div>;
    if (window.outerWidth > 768) {
      return (
        <div>
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
                <IndexLinkContainer
                  to="/ContactUs"
                  onClick={this.popOutOff}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={5}>צור-קשר</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer
                  to="/Events"
                  onClick={this.popOutOn}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={4}>גלריות</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer
                  to="/WhyBeatMix"
                  onClick={this.popOutOn}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={3}>למה דאבל דיג'ייז</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer
                  to="/AboutUs"
                  onClick={this.popOutOn}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={2}>נבחרת הדיג'יים</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer
                  to="/"
                  onClick={this.popOutOn}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={1}>דף הבית</NavItem>
                </IndexLinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="popout-div">{popOut}</div>
        </div>
      );
    } else {
      return (
        <div>
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
                <IndexLinkContainer
                  to="/"
                  onClick={this.popOutOn}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={1}>דף הבית</NavItem>
                </IndexLinkContainer>

                <IndexLinkContainer
                  to="/AboutUs"
                  onClick={this.popOutOn}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={2}>נבחרת הדיג'יים</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer
                  to="/WhyBeatMix"
                  onClick={this.popOutOn}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={3}>למה דאבל דיג'ייז</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer
                  to="/Events"
                  onClick={this.popOutOn}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={4}>גלריות</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer
                  to="/ContactUs"
                  onClick={this.popOutOff}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={5}>צור-קשר</NavItem>
                </IndexLinkContainer>
                <li role="presentation">
                  <a target="_blank" href="https://www.facebook.com/beatmixdjs">
                    פייסבוק
                  </a>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="popout-div">{popOut}</div>
        </div>
      );
    }
  }
}

export default Header;
