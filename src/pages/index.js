import React from "react";
import Navbar from "./components/navbar";
import MyCarousel from "./components/carousel";
import Sponsors from "./components/sponsors";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MyCarousel  />
      <Sponsors/>
    </div>
  );
};

export default Home;
