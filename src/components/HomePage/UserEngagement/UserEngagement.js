import React from "react";
import "./UserEnagement.css";

const UserEngagement = () => {
  return (
    <section className="user-engagement-bg">
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <h1 className=" text-center engagement-header">
            User Engagement Analytics
          </h1>
          <p className="engagement-text text-center">
            BrainAlive engagement analytics is grounded in the science of vision
            and brain. In today's distracted and isolated digital platforms,
            BrainAlive has redefined the user engagement tracking experience
            using computer vision and neurophysiological signals. Our AI based
            virtual assistant has the power of sight and the mind of a human to
            accurately track the user engagement and provide powerful insights
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img className="analytics-img-1" src="https://braina.live/images/analytics1.jpg" alt="" />
      </div>
    </section>
  );
};

export default UserEngagement;
