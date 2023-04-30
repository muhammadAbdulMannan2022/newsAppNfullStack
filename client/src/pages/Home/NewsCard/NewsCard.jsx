import React from "react";
import {
  FaBookmark,
  FaEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { _id, title, details, author, image_url, rating, total_view } = news;
  const dateOfPublish =
    author?.published_date && author?.published_date.split(" ")[0];
  return (
    <div className="my-2">
      <Card className="text-center">
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              style={{ maxWidth: "50px", maxHeight: "50px" }}
              className="rounded-circle"
              src={author?.img}
              alt={author?.name}
            />
            <div className="d-flex flex-column ms-3">
              <span className="text-start h4 mb-0">
                {author?.name || "Jon dew"}
              </span>
              <span className="text-start">{dateOfPublish}</span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <FaBookmark style={{ cursor: "pointer" }} />
            <FaShareAlt style={{ cursor: "pointer" }} />
          </div>
        </Card.Header>
        <Card.Body>
          <h3 className="text-start">{title}</h3>
          <Card.Img src={image_url}></Card.Img>
          <Card.Text className="text-start mt-4">
            {details.length < 200 ? details : details.substring(0, 200)}.....
            <Link to={`/news/${_id}`}>Read more</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-1">
            <Rating
              readonly
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            />
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye />
            {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
