import React from "react";
import Navbar from "./components/Navbar";
import ContentBox from "./components/ContentBox";
import CommentSection from "./components/CommentSection";
import { Container, Row, Col } from "reactstrap";
import icon1 from "./images/pane-1-icon.png";
import icon2 from "./images/pane-2-icon.png";
import icon3 from "./images/pane-3-icon.png";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <Container fluid={true}>
      <Navbar />

      <Row className="heading">
        <Col md="12">
          <h1>Hi User!</h1>
          <p>Color really isn't that difficult if you know where to start.</p>
          <p>Learn by doing and you'll be a master in no time.</p>
        </Col>
      </Row>
      <Row className="content-boxes-row">
        <ContentBox
          title="Blue"
          content="Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, trust, and heaven."
          icon={icon1}
        />

        <ContentBox
          title="Green"
          content="Green is the color of nature. It symbolizes growth, harmony, freshness, and fertility. Green has strong emotional correspondence with safety."
          icon={icon2}
        />

        <ContentBox
          title="Red"
          content="Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love."
          icon={icon3}
        />
      </Row>

      <CommentSection />
    </Container>
  );
};

export default App;
