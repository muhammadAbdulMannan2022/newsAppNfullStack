import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import SideBg from "../../../assets/bg1.png";
import Qzoon from "../Qzoon/Qzoon";
const Rightnav = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-column gap-2">
        <h4>Login with</h4>
        <Button
          className="d-flex align-items-center justify-content-center gap-2"
          variant="outline-primary"
        >
          <FaGoogle />
          Login with Google
        </Button>
        <Button
          className="d-flex align-items-center justify-content-center gap-2"
          variant="outline-secondary"
        >
          <FaGithub />
          Login with Gitgub
        </Button>
      </div>
      <div>
        <h4>find us</h4>
        <ListGroup>
          <ListGroup.Item className="d-flex align-items-center justify-content-strat gap-2">
            <FaFacebook className="text-primary" />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center justify-content-strat gap-2">
            <FaTwitter className="text-primary" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center justify-content-strat gap-2">
            <FaInstagram className="text-danger" /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Qzoon />
      </div>
      <div className="relative" style={{ width: "100%" }}>
        <div
          style={{
            backgroundImage: `url(${SideBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
          }}
          className="absolute"
        >
          <div
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            className="p-3 text-center text-light"
          >
            <h2>Create an Amazing Newspaper</h2>
            <p className="my-3">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <Button variant="danger">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightnav;
