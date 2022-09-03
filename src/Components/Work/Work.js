import React from "react";
import "./Work.css";
import Gallery from "../Features/Gallery/Gallery";

const Work = () => {
  return (
    <>
      <div className="work" id="work">
        <p className="work__para font-face-Mirza">
          The best events are thrown by{" "}
          <span className="work__line">bunch of nobodies</span> who love
          everybody & serve anybody & don't care about becoming a somebody.
        </p>
        <Gallery></Gallery>
        <p className="work__statement font-face-Mirza">
          From best events to parties to everything we are on a drive to help
          you create memories of a lifetime.
          <p className="work__bon">- BoN</p>
        </p>
      </div>
    </>
  );
};

export default Work;
