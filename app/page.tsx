import React from "react";
import Hero from "../components/home/Hero";
import FeaturedHotels from "../components/home/FeaturedHotels";
import Newsletter from "../components/home/Newsletter";
import Testimonials from "../components/home/Testimonials";
import ExclusiveOffers from "../components/home/ExclusiveOffers";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedHotels />
      <ExclusiveOffers />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
