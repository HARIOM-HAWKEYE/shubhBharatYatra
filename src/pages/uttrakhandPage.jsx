import React from 'react';
import tourData from '../data/data';
import CardDesign from '../Components/card';

const UttrakhandPage = () => {
  // console.log(tourData[0].places[0].picture);
  return (
    <div className="bg-black text-white font-sans">
      <header
        className="relative h-[450px] flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${tourData[0].image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Uttarakhand</h1>
          <p className=" text-md md:text-lg text-gray-300">Explore the beauty of the Himalayas</p>
        </div>
      </header>

     <section className="py-12">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold">About Uttarakhand</h2>
      <p className="text-lg text-gray-300">
       Uttarakhand, often referred to as "Devbhumi" (Land of the Gods), is a paradise for nature lovers, adventure seekers, and spiritual travelers. Nestled in the lap of the Himalayas, this northern Indian state is renowned for its pristine landscapes, sacred pilgrimage sites, thrilling trekking trails, and serene hill stations. Whether you're seeking spiritual solace, adrenaline-pumping adventures, or tranquil retreats, Uttarakhand offers an unforgettable experience.
      </p>
    </div>

    <div className="space-y-8 mt-10">
      <h2 className="text-3xl font-semibold">Uttarakhand Package</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {tourData[0].places.map((data, index) => (
        <CardDesign
          key={index}
          state={tourData[0].state}
          title={data.name}
          description={data.description}
          img={data.image}
          rating={data.rating}
          days={data.totalDays}
          highlights={data.highlights}
          inclusions={data.inclusions}
          exclusions={data.exclusions}
          itinerary={data.itinerary}
          overview={data.overview}
          picture={data.picture}
        />
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default UttrakhandPage;
