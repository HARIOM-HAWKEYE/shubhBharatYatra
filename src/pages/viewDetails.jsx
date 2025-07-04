import React, { useState } from 'react';
import { FaPhoneAlt, FaHotel, FaUtensils, FaBus, FaStar } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Itinerary = () => {
  const location = useLocation();
  const { description, title, days, overview, highlights, inclusions, exclusions, itinerary, picture } = location.state;
  const [activeBox, setActiveBox] = useState('highlight');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleBox = (boxName) => {
    setActiveBox(boxName);
  };

  return (
    <div className="min-h-screen w-[90%] mx-auto">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out">
          Form submitted successfully!
        </div>
      )}

    {/* Top Section */}
<div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    {/* Main Image - Height adjusted to match combined side images + gap */}
    <div className="lg:col-span-2 relative rounded-xl overflow-hidden shadow-lg"
         style={{ height: `calc(${picture && picture[1] ? '2 * 12rem' : '2 * 6rem'} + 1rem)` }}>
      <div 
        className="w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${picture && picture[0]})`,
          backgroundColor: picture && picture[0] ? 'transparent' : '#e5e7eb',
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 bg-black p-4 sm:p-6 w-auto h-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{days * 24} Hours in {title}</h2>
          <p className="text-white/90 text-sm sm:text-base mt-2 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>

    {/* Side Images - Now with fixed pixel heights to ensure consistent total */}
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:grid-rows-2">
      <div 
        className="h-48 rounded-xl shadow-md bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${picture && picture[1]})`,
          backgroundColor: picture && picture[1] ? 'transparent' : '#e5e7eb',
        }}
      ></div>
      <div 
        className="h-48 rounded-xl shadow-md bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${picture && picture[2]})`,
          backgroundColor: picture && picture[2] ? 'transparent' : '#e5e7eb',
        }}
      ></div>
    </div>
  </div>
</div>

      {/* Middle Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
          {/* Left Column - Overview and Tabs */}
          <div className="w-full lg:w-3/4"> {/* Changed from lg:w-2/3 xl:w-3/4 to lg:w-3/4 */}
            {/* Overview Box */}
            <div className="bg-white p-6 rounded-xl border border-orange-400 shadow-lg mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{overview}</p>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-xl border border-orange-400 shadow-lg overflow-hidden">
              {/* Tab Buttons */}
              <div className="flex flex-col sm:flex-row">
                <button
                  className={`flex-1 py-3 px-4 sm:px-6 font-semibold text-white transition-colors ${activeBox === 'highlight' ? 'bg-orange-600' : 'bg-orange-400 hover:bg-orange-500'}`}
                  onClick={() => toggleBox('highlight')}
                >
                  Highlights
                </button>
                <button
                  className={`flex-1 py-3 px-4 sm:px-6 font-semibold text-white transition-colors ${activeBox === 'inclusion' ? 'bg-orange-600' : 'bg-orange-400 hover:bg-orange-500'}`}
                  onClick={() => toggleBox('inclusion')}
                >
                  Inclusions
                </button>
                <button
                  className={`flex-1 py-3 px-4 sm:px-6 font-semibold text-white transition-colors ${activeBox === 'exclusion' ? 'bg-orange-600' : 'bg-orange-400 hover:bg-orange-500'}`}
                  onClick={() => toggleBox('exclusion')}
                >
                  Exclusions
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeBox === 'highlight' && (
                  <ul className="space-y-3">
                    {highlights.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeBox === 'inclusion' && (
                  <ul className="space-y-3">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeBox === 'exclusion' && (
                  <ul className="space-y-3">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Package Info Only (Form Removed) */}
          <div className="w-full lg:w-1/4"> {/* Changed from lg:w-1/3 xl:w-1/4 to lg:w-1/4 */}
            {/* Package Info Box */}
            <div className="bg-white p-6 rounded-xl border border-orange-400 shadow-lg">
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-orange-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Call Us:</h3>
                <span className="text-gray-700 ml-2">+91 8766224544</span>
              </div>

              <h4 className="font-semibold text-gray-600 mb-4">Included in this Package</h4>
              <div className="grid grid-cols-2 gap-4"> {/* Changed from grid-cols-4 to grid-cols-2 */}
                <div className="text-center">
                  <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                    <FaHotel className="text-orange-500 text-xl" />
                  </div>
                  <p className="font-medium text-sm flex items-center justify-center gap-1">
                   Premium Class Hotels 
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                    <FaUtensils className="text-orange-500 text-xl" />
                  </div>
                  <p className="font-medium text-sm">Meals</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                    <FaBus className="text-orange-500 text-xl" />
                  </div>
                  <p className="font-medium text-sm">Transport</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                    <FaPhoneAlt className="text-orange-500 text-xl" />
                  </div>
                  <p className="font-medium text-sm">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Day-wise Itinerary</h2>
        
        <div className="space-y-6 w-full lg:w-2/3">
          {itinerary.map((day, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bg-orange-500 text-white px-4 py-1 text-sm font-bold">
                Day {day.day}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{day.title}</h3>
              <p className="text-gray-600 leading-relaxed">{day.activities}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;