import React, { useState } from 'react';
import { FaPhoneAlt, FaHotel, FaUtensils, FaBus, FaStar } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Itinerary = () => {
  const location = useLocation();
  const { description, title, days, overview, highlights, inclusions, exclusions, itinerary,picture } = location.state;
 console.log(picture && picture[0]);
  const [activeBox, setActiveBox] = useState('highlight');
  const [showToast, setShowToast] = useState(false);

  // Show toast when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Toast disappears after 3 seconds
  };

  const toggleBox = (boxName) => {
    if (activeBox === boxName) {
      setActiveBox(null);
    } else {
      setActiveBox(boxName);
    }
  };
  console.log(picture);

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-[120px] right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          Form submitted successfully!
        </div>
      )}

      {/* Top Section */}
      <div className="grid grid-cols-3 gap-2 p-4 pt-[110px] bg-black">
        <div className="col-span-2 relative  h-96 rounded-lg shadow-lg flex items-center justify-center"  style={{ 
      backgroundImage: `url(${picture && picture[0]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
       backgroundColor: picture && picture[0] ? 'transparent' : 'gray',
    }}>
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-3 rounded-lg">
            <h2 className="text-lg font-bold">{days * 24} Hours in {title}:</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className=" h-48 rounded-lg shadow-md flex items-center justify-center" style={{ 
      backgroundImage: `url(${picture && picture[1]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
       backgroundColor: picture && picture[1] ? 'transparent' : 'gray',
    }}></div>
          <div className="bg-gray-500 h-48 rounded-lg shadow-md flex items-center justify-center"style={{ 
      backgroundImage: `url(${picture && picture[2]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
       backgroundColor: picture && picture[2] ? 'transparent' : 'gray',
    }}></div>
        </div>
      </div>

      {/* Middle Section */}
      <div className='ml-[135px] mt-[40px] mr-[20px] flex gap-[4%]'>
        {/* Overview and Highlights/Inclusions/Exclusions */}
        <div className='w-[63%] flex flex-col'>
          {/* Overview box */}
          <div className="w-full bg-white p-6 rounded-xl border border-[#FF9D23] shadow-lg mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
            <p className="text-gray-700">{overview}</p>
          </div>

          {/* Tabs for Highlights/Inclusions/Exclusions */}
          <div>
            <div className="flex space-x-4 mb-6">
              <div
                className={`${activeBox === 'highlight' ? 'bg-[#FF5722]' : 'bg-[#FF9D23]'} text-white py-2 px-6 rounded-l-xl text-xl font-semibold cursor-pointer shadow-lg transition-transform transform hover:scale-105`}
                onClick={() => toggleBox('highlight')}
              >
                Highlights
              </div>
              <div
                className={`${activeBox === 'inclusion' ? 'bg-[#FF5722]' : 'bg-[#FF9D23]'} text-white py-2 px-6 text-xl font-semibold cursor-pointer shadow-lg transition-transform transform hover:scale-105`}
                onClick={() => toggleBox('inclusion')}
              >
                Inclusions
              </div>
              <div
                className={`${activeBox === 'exclusion' ? 'bg-[#FF5722]' : 'bg-[#FF9D23]'} text-white py-2 px-6 rounded-r-xl text-xl font-semibold cursor-pointer shadow-lg transition-transform transform hover:scale-105`}
                onClick={() => toggleBox('exclusion')}
              >
                Exclusions
              </div>
            </div>

            {/* Content of active tab */}
            <div className={`bg-white p-6 rounded-xl border border-[#FF9D23] shadow-lg ${activeBox ? 'mt-4' : ''}`}>
              {activeBox === 'highlight' && (
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {highlights.map((data, index) => (<li key={index}>{data}</li>))}
                </ul>
              )}
              {activeBox === 'inclusion' && (
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {inclusions.map((data, index) => (<li key={index}>{data}</li>))}
                </ul>
              )}
              {activeBox === 'exclusion' && (
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {exclusions.map((data, index) => (<li key={index}>{data}</li>))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Included in Package + Travel Form */}
        <div className="w-[32%] flex flex-col gap-6">
          {/* Call Us / Included box */}
          <div className="bg-white p-6 rounded-xl border border-[#FF9D23] shadow-lg">
            <div className="flex items-center">
              <FaPhoneAlt className="text-[#FF5722] mr-2" />
              <h3 className="text-xl font-semibold text-gray-700">Call Us:</h3>
              <span className="text-lg font-medium ml-4">+91 8766224544</span>
            </div>

            <div className="font-semibold text-lg text-gray-500 mt-6">Included in this Package</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className="text-center">
                <FaHotel className="text-[#FF5722] text-3xl mx-auto mb-2" />
                <p className="font-semibold flex items-center gap-1 justify-center">Upto 3 <FaStar /></p>
              </div>
              <div className="text-center">
                <FaUtensils className="text-[#FF5722] text-3xl mx-auto mb-2" />
                <p className="font-semibold">Meals</p>
              </div>
              <div className="text-center">
                <FaBus className="text-[#FF5722] text-3xl mx-auto mb-2" />
                <p className="font-semibold">Transport</p>
              </div>
              <div className="text-center">
                <FaPhoneAlt className="text-[#FF5722] text-3xl mx-auto mb-2" />
                <p className="font-semibold">Support</p>
              </div>
            </div>
          </div>

          {/* Travel Form */}
          <div className="bg-white p-6 rounded-xl border border-[#FF9D23] shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Travel Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Destination</label>
                <input
                  type="text"
                  name="destination"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Destination"
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 rounded-lg transition bg-blue-500 hover:bg-blue-600 text-white`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Itinerary Day-wise Section */}
      <div className="min-h-screen ml-[111px] mt-[30px] p-6">
        <div className="w-2/3">
          {itinerary.map((day, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border-b-3 border-l-3 border-[#E82561] mb-10 shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                <span className="bg-[#FF9D23] px-3 pt-10 pb-2">Day: {day.day}</span> {day.title}
              </h2>
              <p className="text-gray-700">{day.activities}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Itinerary;
