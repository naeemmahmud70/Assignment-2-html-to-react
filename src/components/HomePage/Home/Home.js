import React from "react";
import Footer from "../Footer/Footer";
import HeaderVideo from "../HeaderVideo/HeaderVideo";
import Navbar from "../Navbar/Navbar";
import OurSolutions from "../OurSolutions/OurSolutions";
import UserEngagement from "../UserEngagement/UserEngagement";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderVideo></HeaderVideo>
      <UserEngagement></UserEngagement>
      <OurSolutions></OurSolutions>
      <Footer></Footer>
    </div>
  );
};

export default Home;
