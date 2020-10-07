import React from "react";
import ContentBox from "./components/ContentBox";
import CommentSection from "./components/CommentSection";
import icon1 from "./images/pane-1-icon.png";
import icon2 from "./images/pane-2-icon.png";
import icon3 from "./images/pane-3-icon.png";
import "./App.css";

const App = () => {
  return (
    <div>
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
      <CommentSection />
    </div>
  );
};

export default App;
