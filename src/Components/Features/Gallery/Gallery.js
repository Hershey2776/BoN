import React from "react";
import "./Gallery.css";
import image1 from "../../../Assets/Images/Image1.jpg";
import neon from "../../../Assets/Images/Neon.jpg";
import shots from "../../../Assets/Images/shots.jpg";
import bear from "../../../Assets/Images/BearDj.jpg";
import dj from "../../../Assets/Images/dj.jpg";
import cheer from "../../../Assets/Images/cheer.jpg";
import pshots from "../../../Assets/Images/pshots.jpg";

const Gallery = () => {
  const panels = document.querySelectorAll(".panel");
  const toggleOpen = () => {
    this.classList.toggle("open");
  };
  panels.forEach((panel) => {
    panel.addEventListener("click", toggleOpen);
  });

  const toggleActive = () => {
    this.classList.toggle("open-active");
  };
  panels.forEach((panel) => {
    panel.addEventListener("transitionend", toggleActive);
  });

  return (
    <>
      <div>
        <div className="panels">
          <div
            className="panel panel1"
            style={{
              backgroundImage: "url(" + bear + ")",
            }}
          >
            <p>We</p>
          </div>
          <div
            className="panel panel2"
            style={{
              backgroundImage: "url(" + dj + ")",
            }}
          >
            <p>Serve</p>
          </div>
          <div
            className="panel panel3"
            style={{
              backgroundImage: "url(" + neon + ")",
            }}
          >
            <p>You</p>
          </div>
          <div
            className="panel panel4 "
            style={{
              backgroundImage: "url(" + pshots + ")",
            }}
          >
            <p className="text">The</p>
          </div>
          <div
            className="panel panel5"
            style={{
              backgroundImage: "url(" + image1 + ")",
            }}
          >
            <p>Best</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
