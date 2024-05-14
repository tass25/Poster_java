import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { drama } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { action } from "../Data/action";
import { comedy } from "../Data/Men/comedy";

const Homepage = () => {

  return (
    <div className=" bg-black">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={comedy} section={"C O M E D Y"} />
        <HomeProductSection data={action} section={"A C T I O N"} />
        <HomeProductSection data={drama} section={"D R A M A"} />
      </div>

      
    </div>
  );
};

export default Homepage;
