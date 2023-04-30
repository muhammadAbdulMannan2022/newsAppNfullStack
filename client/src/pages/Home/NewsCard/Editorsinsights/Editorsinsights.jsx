import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import image from "../../../../assets/1.png";
import image1 from "../../../../assets/3.png";
import image2 from "../../../../assets/2.png";

const Editorsinsights = () => {
  let imgs = [image, image1, image2];
  return (
    <div className="mt-4">
      <h1>Editors insights</h1>
      <hr />
      <Row xs={1} md={2} lg={3} className="g-4">
        {imgs.map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={_} />
              <Card.Body>
                <Card.Title>
                  Nearly $3 Billion To Ukraine In Largest U.S.
                </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Editorsinsights;
