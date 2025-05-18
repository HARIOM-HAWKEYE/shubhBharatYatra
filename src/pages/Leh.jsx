import React from 'react';
import tourData from '../data/data';
import CardDesign from '../Components/card';

const LehLadakhPage = () => {
  return (
    <div className="bg-black text-white font-sans">
      <header
        className="relative h-[450px] flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${tourData[5].image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Leh & Ladakh</h1>
          <p className="text-lg text-gray-300">A Journey to the Land of High Passes</p>
        </div>
      </header>

      <section className="px-4 py-12">
        <div className="max-w-[80%] mx-auto space-y-8">
          <h2 className="text-3xl font-semibold">About Leh & Ladakh</h2>
          <p className="text-lg text-gray-300">
            Leh & Ladakh offer a blend of raw natural beauty, ancient monasteries, and thrilling adventures.
            From the stunning Pangong Lake to the rugged mountains and scenic passes, this region is perfect
            for travelers seeking tranquility and excitement alike.
          </p>
        </div>
        <div className="max-w-[80%] mx-auto space-y-8 mt-10">
          <h2 className="text-3xl font-semibold">Leh & Ladakh Packages</h2>
        </div>

        <div className="max-w-[80%] mx-auto grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tourData[5].places.map((data, index) => (
            <CardDesign
              key={index}
              title={data.name}
              description={data.description}
              state={tourData[5].state}
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
      </section>
    </div>
  );
};

export default LehLadakhPage;
