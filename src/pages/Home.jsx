import React from "react";
import backgroundVideo from '../assets/video/mainVideo.mp4';
import Marquee from "../Components/marquee";
import { Heading } from "../Components/heading";
import { BestLocation } from "../Components/location";
import CardDesign from "../Components/card";
import CardSlider from "../Components/cardSlider";
import Testimonial from "../Components/Testimonial"
import TravelBookingForm from "../Components/travelForm";
import Services from "../Components/service";



const HomePage = () => {
  return (<>
    <div className="relative w-full h-[90vh] flex justify-center items-center overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-5"></div>
      <div id="main-quote" className="relative z-10 text-center text-white">
        <h1 className="md:text-5xl lg:text-6xl font-bold">Extraordinary natural and <br /> cultural charm</h1>
        <h6 className="md:text-xl lg:text-2xl mt-2">Exploring India is an unforgettable adventure</h6>
      </div>
    </div>
    <Marquee></Marquee>
    <Heading biggerHeading="Incredible India" smallerHeading="Best Location" >Extraordinary natural beauty,enjoy the rich culture,<br /> and experience the friendliness of the local people.</Heading>
    <BestLocation></BestLocation>
    {/* <CardDesign></CardDesign> */}
 
    <Heading biggerHeading="Top Destination" smallerHeading="Explore Our Packages">
    Discover breathtaking landscapes, rich cultures, and <br /> unforgettable experiences with our curated travel packages.</Heading>
    

    <CardSlider></CardSlider>
    <Services></Services>
     <TravelBookingForm/>

    <Testimonial></Testimonial>

    </>
  );
};

export default HomePage ;
