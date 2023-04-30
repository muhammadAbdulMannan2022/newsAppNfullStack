import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  return (
    <div className="my-4">
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
        <Container
          style={{ boxShadow: "0px 5px 5px rgba(0,0,0,0.08)" }}
          className="d-flex justify-content-center"
        >
          <Button variant="danger">latest</Button>
          <Marquee className="text-danger" pauseOnHover={true}>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </Container>
        <Navbar className="mt-4" bg="light" variant="light">
          <Container className="d-flex">
            <Nav className="mx-auto">
              <Nav.Link>
                <Link className="text-decoration-none text-secondary" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-secondary"
                  to="/about"
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-secondary"
                  to="/career"
                >
                  Career
                </Link>
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div>
                <FaUserCircle style={{ width: "40px", height: "40px" }} />
              </div>
              {loading ? (
                ""
              ) : user ? (
                <Button onClick={logOut} variant="secondary">
                  Log out
                </Button>
              ) : (
                <Button variant="secondary">Login</Button>
              )}
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
