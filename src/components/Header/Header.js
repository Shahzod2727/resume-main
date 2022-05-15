import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link, withRouter } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TelegramIcon from "@mui/icons-material/Telegram";
import resumeDate from "../../utils/resumeDate";
import CustomButton from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faBars} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
// import Navbar from "react-bootstrap/Navbar";
const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    // xs, extra-small: 0px.
    // sm, small: 600px.
    // md, medium: 960px.
    // lg, large: 1280px.
    // xl, extra-large: 1920px.

    <Navbar expand="lg" sticky="top" className="header order5">
      {/* as={NavLink} */}
      {/* Shu narsa ishlamayapti ko'rish kerak */}
      <Nav.Link as={NavLink} to="/" className='header_navlink'>
        <Navbar.Brand className="header_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle >  <span>
      <FontAwesomeIcon
        icon={faBars} 
      />
    </span>  </Navbar.Toggle >
      <Navbar.Collapse>
        <Nav className="header_left ">
          {/* {Resume Link} */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* {Portfolio Link} */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
          {/* {Contact Link} */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName == "/contact" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeDate.socials).map((key) => (
            <a href={resumeDate.socials[key].link} target={"_blank"}>
              {resumeDate.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire Me"} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);

// <Nav.Link as={NavLink} to="/">
// <Navbar.Brand className="header_home">
//   <HomeIcon />
// </Navbar.Brand>
// </Nav.Link>

// <Navbar expand="lg" className="header" sticky="top">
// {/* Home Link */}
// {/* <HomeIcon /> */}
// <Nav.Link as={NavLink} to="/">
// <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
// </Nav.Link>
// </Navbar>
