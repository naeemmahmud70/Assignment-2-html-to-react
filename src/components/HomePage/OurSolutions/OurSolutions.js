import React from "react";
import "./OurSolutions.css";

const OurSolutions = () => {
  const solutionsData = [
    {
      id: 1,
      title: "UX/ Usability and Conversion Optimisation ",
      iconURL: "https://braina.live/images/icon/ott.png",
      imgURL: "https://braina.live/images/student.jpg",
      description:
        "Learn how customers respond physiologically to specific app design or UI changes with Gazepoint eye-tracking and biometrics technology. You can follow a user’s gaze as they experience your app, learn what catches their attention and what they ignore and then incorporate this unbiased data into decision about your product development.",
    },
    {
      id: 2,
      title: "Audience Engagement Analytics",
      iconURL: "https://braina.live/images/icon/e-learning.png",
      imgURL: "https://braina.live/images/teaching.jpg",
      description:
        "Engagement AI solution for Learning/Webinar/Meeting hosts to understand audience interest in real time and maximise engagement.",
    },
    {
      id: 3,
      title: "Stroke Rehabilitation",
      iconURL: "https://braina.live/images/icon/stroke-icon.png",
      imgURL: "https://braina.live/images/stroke-rehab.jpg",
      description: "BCI driven neuro rehabilitative care for stroke survivors.",
    },
    {
      id: 4,
      title: "Neuro Wearable for Smarter Brain",
      iconURL: "https://braina.live/images/icon/neuro-icon.png",
      imgURL: "https://braina.live/images/neuro.png",
      description:
        "A peak into your brain activity to help you discover and develop new habits that lets you blaze through your day.",
    },
  ];
  return (
    <section className="solution-section-bg">
      <div className="container">
        <div>
          <h1 className="solution-header fw-bold text-center">Our Solutions</h1>
        </div>
        <div className="row d-flex justify-content-center">
          {solutionsData.map((data) => (
            <div className="col-md-4 d-flex justify-content-center px-2 py-3 m-3 hovered-div">
              <div
                style={{
                  backgroundImage: `url(${data.imgURL})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="solution-div-bg"
              >
                <div className="card-text d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <img className="img-icon" src={data.iconURL} alt="" />
                    <h3 className="text-white mt-2">{data.title}</h3>
                    <p className="text-white hide-card-text">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
