import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Leftnav from "../pages/Shared/Leftnav/Leftnav";
import Rightnav from "../pages/Shared/Rightnav/Rightnav";
import { Outlet } from "react-router-dom";
import Editorsinsights from "../pages/Home/NewsCard/Editorsinsights/Editorsinsights";
const Newslayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={8}>
            <Outlet />
          </Col>
          <Col lg={4}>
            <Rightnav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Newslayout;
