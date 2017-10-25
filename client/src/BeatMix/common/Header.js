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
  // height: "-5.5vw",
  // marginLeft: "-10vw"
  
  // width: "208px",
  // position: "fixed",
  // left: "33px"
};

const navStyle = {
  marginRight: "10px",
  paddingTop: "35px",
  paddingBottom: "0px",
  lineHeight: "80px"
};

let popOutStat = window.location.pathname === "/ContactUs" ? false : true;

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
      .then(function(res) {
        alert("Email Sent!");
        self.setState({ name: "", email: "", content: "", number: "" });
      })
      .catch(function(error) {});
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
    let popOut = popOutStat ? (
      this.state.clicked ? (
        popOutOpen
      ) : (
        popOutClosed
      )
    ) : (
      <div />
    );
    if (window.outerWidth > 768) {
      return (
        <div>
          <Navbar style={navbarStyle} collapseOnSelect inverse fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">
                  <img className="navbarBrandImgStyle"
                    style={navbarBrandImgStyle}
                    src="http://beatmix.mitchatnim.co.il/img/0239/799.png"
                  />
                </Link>
              </Navbar.Brand>
              <iframe
                className="hideOnMobile"
                style={{ border: "1px solid black", marginLeft: '2vw' }}
                width="195"
                height="94"
                scrolling="yes"
                frameborder="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/333600809&amp;color=%23be1e55&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
              />
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
                <NavDropdown
                  eventKey={4}
                  title="גלריות"
                  id="basic-nav-dropdown"
                  activeClassName="activeNav"
                >
                  <IndexLinkContainer
                    to="/Events"
                    onClick={this.popOutOn}
                    activeClassName="activeNav"
                  >
                    <MenuItem eventKey={4.1}>אירועים</MenuItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer
                    to="/Amit"
                    onClick={this.popOutOn}
                    activeClassName="activeNav"
                  >
                    <MenuItem eventKey={4.2}>עמית מכלוף</MenuItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer
                    to="/Tom"
                    onClick={this.popOutOn}
                    activeClassName="activeNav"
                  >
                    <MenuItem eventKey={4.3}>תם אלוש</MenuItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer
                    to="/Hadar"
                    onClick={this.popOutOn}
                    activeClassName="activeNav"
                  >
                    <MenuItem eventKey={4.4}>הדר נוי</MenuItem>
                  </IndexLinkContainer>
                </NavDropdown>
                <IndexLinkContainer
                  to="/WhyBeatMix"
                  onClick={this.popOutOn}
                  activeClassName="activeNav"
                >
                  <NavItem eventKey={3}>למה ביטמיקס</NavItem>
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
                  <NavItem eventKey={3}>למה ביטמיקס</NavItem>
                </IndexLinkContainer>
                <NavDropdown
                  eventKey={4}
                  title="גלריות"
                  id="basic-nav-dropdown"
                  activeClassName="activeNav"
                >
                  <IndexLinkContainer
                    to="/Events"
                    onClick={this.popOutOn}
                    activeClassName="activeNav"
                  >
                    <MenuItem eventKey={4.1}>אירועים</MenuItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer
                    to="/Amit"
                    onClick={this.popOutOn}
                    activeClassName="activeNav"
                  >
                    <MenuItem eventKey={4.2}>עמית מכלוף</MenuItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer
                    to="/Tom"
                    onClick={this.popOutOn}
                    activeClassName="activeNav"
                  >
                    <MenuItem eventKey={4.3}>תם אלוש</MenuItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer
                    to="/Hadar"
                    onClick={this.popOutOn}
                    activeClassName="activeNav"
                  >
                    <MenuItem eventKey={4.4}>הדר נוי</MenuItem>
                  </IndexLinkContainer>
                </NavDropdown>
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