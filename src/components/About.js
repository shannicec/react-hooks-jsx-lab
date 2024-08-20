import React from "react";
import { image } from "../data/data.js"; // Ensure you're importing the correct file path

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Your chosen content here.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
