import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div>
        <Container className="d-flex justify-content-center">
          <Button variant="danger">latest</Button>
          <Marquee className="text-danger" pauseOnHover={true}>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </Container>
        <Navbar bg="light" variant="light">
          <Container className="d-flex">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div>pro</div>
              <Button variant="secondary">Login</Button>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
