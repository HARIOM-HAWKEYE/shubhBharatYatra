import React from "react";
import { NavLink } from "react-router-dom";

const CardDesign = ({ description, state, title, rating, days, overview, img, highlights, inclusions, exclusions, itinerary, picture }) => {
  return (
    <section className="relative my-10 w-[328px] h-[400px]">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover rounded-[10px]"
      />

      {/* Rating and Days positioned above the image */}
      <div className="absolute top-2 left-2 text-sm text-black bg-white px-2 py-1 rounded-full font-bold">
        <span>{rating}⭐</span>
      </div>
      <div className="absolute top-2 right-2 text-sm text-black bg-white px-2 py-1 rounded-full font-bold">
        <span>{days} Days</span>
      </div>

      {/* Information Section (always visible in hover state style) */}
      <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 w-[90%] bg-[#F6F0F0] p-3 shadow-[0px_5px_15px_rgba(0,0,0,0.75)] rounded-xl z-10">
        <span className="block text-black text-[12px]">{description}</span>
        <h2 className="text-xl text-black my-2 font-semibold uppercase">{title}</h2>

        {/* View Button */}
        <div className="flex justify-center items-center">
          <NavLink
            to={`/tour/${state.replace(/\s+/g,'-')}/details/${title.toLowerCase().replace(/\s+/g, '-')}`}
            state={{ description, state, title, rating, days, overview, img, highlights, inclusions, exclusions, itinerary, picture }}
            className="inline-block text-center py-2 px-4 bg-[#FFD700] text-white font-bold rounded-lg shadow-md border-2 border-transparent hover:bg-white hover:text-black hover:border-[#FFD700] transition-all duration-300"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CardDesign;