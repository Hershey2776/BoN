import React from "react";
import "./HomePage.css";
import background_video from "../../Assets/Videos/Vid1.mp4";
import Work from "../../Components/Work/Work";

const HomePage = () => {
  const scroll_down = () => {
    var anchor = document.querySelector(".work__para");
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <div className="background" id="background">
        <video src={background_video} autoPlay loop muted />
        <div class="box" onClick={scroll_down}>
          <span onClick={scroll_down}></span>
          <span onClick={scroll_down}></span>
          <span onClick={scroll_down}></span>
        </div>
      </div>

      <Work></Work>
    </>
  );
};

export default HomePage;
