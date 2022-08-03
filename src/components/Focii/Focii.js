import React from "react";
import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/Navbar/Navbar";
import FociiEvents from "./FociiEvents/FociiEvents";
import FociiHeader from "./FociiHeader/FociiHeader";
import FocciKnowMore from "./FociiKnowMore/FocciKnowMore";

const Focii = () => {
  return (
    <div>
      <Navbar></Navbar>
      <FociiHeader></FociiHeader>
      <FocciKnowMore></FocciKnowMore>
      <FociiEvents></FociiEvents>
      <Footer></Footer>
    </div>
  );
};

export default Focii;
