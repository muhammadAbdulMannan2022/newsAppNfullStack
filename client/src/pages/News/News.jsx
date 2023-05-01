import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { id } = useParams();
  console.log(news);
  const { _id, title, details, category_id, thumbnail_url } = news;
  return (
    <>
      <Card style={{ width: "100%" }}>
        <Card.Img style={{ Width: "100%" }} variant="top" src={thumbnail_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft className="me-2" />
              All News in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default News;
