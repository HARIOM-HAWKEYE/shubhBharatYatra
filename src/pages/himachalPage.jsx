import React from 'react';
import tourData from '../data/data';
import CardDesign from '../Components/card';

const HimachalPage = () => {
  return (
    <div className="bg-black text-white font-sans">
      <header
        className="relative h-[450px] flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${tourData[1].image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Himachal Pradesh</h1>
          <p className="text-lg text-gray-300">Discover the serenity of the Himalayas</p>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
              <div className="space-y-8">
          <h2 className="text-3xl font-semibold">About Himachal Pradesh</h2>
          <p className="text-lg text-gray-300">
            Himachal Pradesh is a northern Indian state known for its stunning natural beauty, snow-capped mountains,
            and charming hill stations. Popular destinations include Shimla, Manali, Dharamshala, and Kullu.
            The state is a paradise for adventure lovers and spiritual seekers alike.
          </p>
        </div>
        <div className=" space-y-8 mt-10">
          <h2 className="text-3xl font-semibold">Himachal Pradesh Packages</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {tourData[1].places.map((data, index) => (
            <CardDesign
              key={index}
              title={data.name}
                state={tourData[1].state}
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

export default HimachalPage;
