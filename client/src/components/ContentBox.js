import React from "react";

const ContentBox = ({ title, icon, content }) => {
  return (
    <div>
      <img src={icon} alt="Icon" />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default ContentBox;
