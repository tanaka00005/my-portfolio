import React from "react";
import AboutRightSentence from "./AboutRightSentence";
import "./SecondSentence.scss";
import AboutLeftSentence from "./AboutLeftSentence";

function SecondSentence() {
  return (
    <div className="about">
      <div className="about-font">about</div>
      <AboutLeftSentence />
      <AboutRightSentence />
    </div>
  );
}

export default SecondSentence;
