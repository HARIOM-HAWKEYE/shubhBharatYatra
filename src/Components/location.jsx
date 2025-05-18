import { IoLocationSharp } from "react-icons/io5";

import uttrakhand from "../assets/image/uttrakhand.jpg";
import kerala from "../assets/image/kerala.jpg";
import rajasthan from "../assets/image/rajasthan.jpg";
import goa from "../assets/image/goa.jpeg";
import ladakh from "../assets/image/ladakh.webp";

export function BestLocation() {
  return (
    <section className="locationContainer w-[80%] mx-auto mt-20">
      <div className="gallery-grid grid grid-cols-3 grid-rows-[350px_300px] gap-[15px]">
        
        {/* Item 1: Takes up 2 columns */}
        <div
          className="item col-span-2 row-span-1 bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
          style={{ backgroundImage: `url(${kerala})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 transition-all duration-500"></div>
          <span className="absolute bottom-5 left-7 text-white text-xl font-bold">
            Kochi <br />
            <span className="flex items-center text-lg font-light">
              <IoLocationSharp className="mr-2" />
              Kerala
            </span>
          </span>
        </div>

        {/* Item 2: Takes up 1 column */}
        <div
          className="item col-span-1 row-span-1 bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
          style={{ backgroundImage: `url(${rajasthan})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 transition-all duration-500"></div>
          <span className="absolute bottom-5 left-7 text-white text-xl font-bold">
            Hawa Mahal <br />
            <span className="flex items-center text-lg font-light">
              <IoLocationSharp className="mr-2" />
              Rajasthan
            </span>
          </span>
        </div>

        {/* Item 3: Takes up 1 column */}
        <div
          className="item col-span-1 row-span-1 bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
          style={{ backgroundImage: `url(${ladakh})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 transition-all duration-500"></div>
          <span className="absolute bottom-5 left-7 text-white text-xl font-bold">
            Nubra Valley <br />
            <span className="flex items-center text-lg font-light">
              <IoLocationSharp className="mr-2" />
              Ladakh
            </span>
          </span>
        </div>

        {/* Item 4: Takes up 1 column */}
        <div
          className="item col-span-1 row-span-1 bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
          style={{ backgroundImage: `url(${goa})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 transition-all duration-500"></div>
          <span className="absolute bottom-5 left-7 text-white text-xl font-bold">
            Baga Beach <br />
            <span className="flex items-center text-lg font-light">
              <IoLocationSharp className="mr-2" />
              Goa
            </span>
          </span>
        </div>

        {/* Item 5: Takes up 1 column */}
        <div
          className="item col-span-1 row-span-1 bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
          style={{ backgroundImage: `url(${uttrakhand})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 transition-all duration-500"></div>
          <span className="absolute bottom-5 left-7 text-white text-xl font-bold">
            Kedarnath Temple <br />
            <span className="flex items-center text-lg font-light">
              <IoLocationSharp className="mr-2" />
              Uttrakhand
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
