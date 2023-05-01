import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Leftnav from "../pages/Shared/Leftnav/Leftnav";
import Rightnav from "../pages/Shared/Rightnav/Rightnav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col style={{ position: "relative" }} lg={3}>
            <Leftnav />
          </Col>
          <Col lg={6}>
            <Outlet />
          </Col>
          <Col style={{ position: "relative" }} lg={3}>
            <Rightnav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
