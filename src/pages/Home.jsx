import React, { useState, useEffect } from "react";
import backgroundVideo from '../assets/video/mainVideo.mp4';
import mobileFallbackImage from '../assets/image/mobile-hero-fallback.avif'; 
import Marquee from "../Components/marquee";
import { Heading } from "../Components/heading";
import { BestLocation } from "../Components/location";
import CardSlider from "../Components/cardSlider";
import Testimonial from "../Components/Testimonial";
import TravelBookingForm from "../Components/travelForm";
import Services from "../Components/service";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile (you can adjust the breakpoint as needed)
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      <div className="relative w-full h-[90vh] flex justify-center items-center overflow-hidden">
        {/* Show video for tablet/desktop, image for mobile */}
        {!isMobile ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={mobileFallbackImage} 
            alt="Beautiful Indian landscape"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        )}

        {/* Overlay and content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-5"></div>
        <div id="main-quote" className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Extraordinary natural and <br /> cultural charm
          </h1>
          <h6 className="text-md md:text-xl lg:text-2xl mt-2">
            Exploring India is an unforgettable adventure
          </h6>
        </div>
      </div>

      <Marquee />
      <Heading 
        biggerHeading="Top Destination" 
        smallerHeading="Explore Our Packages"
      >
        Discover breathtaking landscapes, rich cultures, and <br /> unforgettable experiences with our curated travel packages.
      </Heading>
      <CardSlider />
      <Heading 
        biggerHeading="Incredible India" 
        smallerHeading="Best Location"
      >
        Extraordinary natural beauty, enjoy the rich culture,<br /> and experience the friendliness of the local people.
      </Heading>
      <BestLocation />
      <Services />
      <TravelBookingForm />
      <Testimonial />
    </>
  );
};

export default HomePage;