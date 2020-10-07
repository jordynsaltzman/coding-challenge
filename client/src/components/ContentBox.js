import React from "react";
import { Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const ContentBox = ({ title, icon, content }) => {
  return (
    <Col md="3" className="content-box">
      <img src={icon} alt="Icon" />
      <h5>{title}</h5>
      <p>{content}</p>
    </Col>
  );
};

export default ContentBox;
