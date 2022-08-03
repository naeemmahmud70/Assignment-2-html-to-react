import React from "react";
import animationVideo from "../../../images/Brainalive.mp4";

const HeaderVideo = () => {
  return (
    <section className="row">
      <video autoPlay loop className="w-100">
        <source src={animationVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default HeaderVideo;
