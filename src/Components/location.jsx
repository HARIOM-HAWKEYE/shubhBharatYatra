import { IoLocationSharp } from "react-icons/io5";
import uttrakhand from "../assets/image/uttrakhand.jpg";
import kerala from "../assets/image/kerala.jpg";
import rajasthan from "../assets/image/rajasthan.jpg";
import goa from "../assets/image/goa.jpeg";
import ladakh from "../assets/image/ladakh.webp";

export function BestLocation() {
  const locations = [
    {
      image: kerala,
      place: "Kochi",
      region: "Kerala",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      height: "h-64 md:h-[500px]"
    },
    {
      image: rajasthan,
      place: "Hawa Mahal",
      region: "Rajasthan",
      colSpan: "",
      rowSpan: "",
      height: "h-64"
    },
    {
      image: ladakh,
      place: "Nubra Valley",
      region: "Ladakh",
      colSpan: "",
      rowSpan: "",
      height: "h-64"
    },
    {
      image: goa,
      place: "Baga Beach",
      region: "Goa",
      colSpan: "",
      rowSpan: "",
      height: "h-64"
    },
    {
      image: uttrakhand,
      place: "Kedarnath Temple",
      region: "Uttrakhand",
      colSpan: "md:col-span-2",
      rowSpan: "",
      height: "h-64"
    }
  ];

  return (
    <section className="w-full px-8  max-w-7xl mx-auto">
     
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {locations.map((location, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-lg ${location.colSpan} ${location.rowSpan} ${location.height}`}
          >
            <img 
              src={location.image} 
              alt={location.place}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <div>
                <h3 className="text-white text-xl font-bold">{location.place}</h3>
                <p className="flex items-center text-white/90">
                  <IoLocationSharp className="mr-1" />
                  {location.region}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}