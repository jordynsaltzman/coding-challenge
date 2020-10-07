import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Row className="comment-section">
      <Col md="6">
        <h3>Comments</h3>
        {comments.map((comment, i) => (
          <Card key={i}>
            <CardHeader>
              {comment.name}
              <p>{comment.email}</p>
            </CardHeader>
            <CardBody>"{comment.body}"</CardBody>
          </Card>
        ))}
      </Col>
    </Row>
  );
};

export default CommentSection;
