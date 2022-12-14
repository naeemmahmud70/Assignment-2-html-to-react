import React from "react";
import "./FociiKnowMore.css";
const FocciKnowMore = () => {
  return (
    <section className="know-more-section-bg">
      <div className="row pt-5">
        <div className="col-md-6 know-more-bg mt-5">
          <img
            className="w-100 h-100"
            src="https://braina.live/images/science.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 know-more-bg mt-5 p-5">
          <h1 className="more-header mt-4">We Make The Intangible <br /> Tangible</h1>
          <h5 className="more-description mt-3">
            BrainAlive gathers unique data through Computer Vision and Natural
            Language Processing to generate meaningful analytics on user
            engagement, performance and overall wellbeing. Our insights are
            evidence based and supported by credible and quantifiable research.
            Our dedicated data scientists employ the best and most advanced
            machine learning and AI techniques to unearth accurate and
            actionable insights that improve user engagement.
          </h5>
          <button className="know-more-btn-style mt-3">Know more</button>
        </div>
      </div>
    </section>
  );
};

export default FocciKnowMore;
