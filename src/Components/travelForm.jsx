import React, { useState } from "react";
import uttrakhand from "../assets/image/booking.avif";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TravelBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    date: "",
    email: "",   
    number: "",
    holidayType: "",
    hotel: "",
    departureCity: "",
    comments: "",
    people: "",
    nights: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = formData.name && formData.destination && formData.date && formData.number && formData.departureCity;

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (number) => {
    const phonePattern = /^[7-9][0-9]{9}$/;
    return phonePattern.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid) {
      toast.error("Please fill in all required fields before submitting.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    if (!validatePhoneNumber(formData.number)) {
      toast.error("Please enter a valid 10-digit phone number.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    if (formData.email && !validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    toast.success("Your query has been sent to our team. We will contact you soon!", {
      position: "top-right",
      autoClose: 5000,
    });
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 gap-6 md:gap-8 lg:gap-10 w-full max-w-[1080px] mx-auto my-8 sm:my-10 md:my-12">
      {/* Image Section */}
      <div
        className="flex-1 flex flex-col justify-end items-center text-center text-white p-6 sm:p-8 md:p-10 rounded-xl bg-cover bg-center min-h-[300px] lg:min-h-[500px] relative overflow-hidden"
        style={{ backgroundImage: `url(${uttrakhand})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Explore The World</h2>
          <p className="text-base sm:text-lg md:text-xl font-medium">Plan your trip with ease and convenience.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 text-white w-full">
        <div className="flex justify-center gap-4 mb-4 sm:mb-6">
          <span
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full font-bold text-base sm:text-lg cursor-pointer transition-colors ${
              isFormValid ? 'bg-yellow-400 text-black' : 'bg-blue-500 text-white'
            }`}
          >
            1
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 md:mb-6">Book Your Travel</h2>
          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm sm:text-base">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition text-sm sm:text-base"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block mb-1 text-sm sm:text-base">Your Destination <span className="text-red-500">*</span></label>
              <select
                name="destination"
                className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition text-sm sm:text-base"
                value={formData.destination}
                onChange={handleChange}
                required
              >
                <option value="">Select Destination</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Manali">Manali</option>
                <option value="Goa">Goa</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm sm:text-base">Travel Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  name="date"
                  className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition text-sm sm:text-base"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm sm:text-base">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="number"
                  className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition text-sm sm:text-base"
                  placeholder="Enter 10-digit number"
                  value={formData.number}
                  onChange={handleChange}
                  maxLength="10"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm sm:text-base">How Many People</label>
                <input
                  type="number"
                  name="people"
                  min="1"
                  className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition text-sm sm:text-base"
                  placeholder="Number of people"
                  value={formData.people}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block mb-1 text-sm sm:text-base">Nights/Days</label>
                <select
                  name="nights"
                  className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition text-sm sm:text-base"
                  value={formData.nights}
                  onChange={handleChange}
                >
                  <option value="">Select Nights/Days</option>
                  <option value="1N/2D">2D/1N</option>
                  <option value="2N/3D">3D/2N</option>
                  <option value="3N/4D">4D/3N</option>
                  <option value="4N/5D">5D/4N</option>
                  <option value="5N/6D">6D/5N</option>
                  <option value="7N/8D">More than 7 days</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block mb-1 text-sm sm:text-base">
                Departure City <span className="text-red-500">*</span>
              </label>
              <select
                name="departureCity"
                className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition text-sm sm:text-base"
                value={formData.departureCity}
                onChange={handleChange}
                required
              >
                <option value="">Select Departure City</option>
                {[
                  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", 
                  "Pune", "Jaipur", "Ahmedabad", "Lucknow", "Chandigarh", "Goa",
                  "Kochi", "Bhopal", "Indore", "Nagpur", "Patna", "Guwahati",
                  "Thiruvananthapuram", "Bhubaneswar", "Amritsar", "Varanasi",
                  "Shimla", "Dehradun", "Agra", "Udaipur", "Jodhpur", "Rishikesh"
                ].sort().map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block mb-1 text-sm sm:text-base">Email (Optional)</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition text-sm sm:text-base"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block mb-1 text-sm sm:text-base">Special Requests</label>
              <textarea
                name="comments"
                rows="3"
                className="w-full p-2 sm:p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition text-sm sm:text-base"
                placeholder="Any special requirements?"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 sm:py-3 rounded font-bold text-sm sm:text-base transition-colors ${
                isFormValid 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ top: "80px" }}
      />
    </div>
  );
};

export default TravelBookingForm;