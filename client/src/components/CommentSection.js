import React, { useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import {
  getCommentsSuccess,
  getCommentsRequest,
  getCommentsFailure,
} from "../actions/commentsActions";

const CommentSection = () => {
  const commentsList = useSelector(
    (state) => state.commentsReducer.commentsList
  );
  const loading = useSelector((state) => state.commentsReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        dispatch(getCommentsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCommentsFailure(err));
      });
  }, [dispatch]);

  return (
    <Row className="comment-section">
      <Col md="6">
        <h3 className="comments-title">Comments</h3>
        {loading ? <p>Loading...</p> : null}
        {commentsList.map((comment, i) => (
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
