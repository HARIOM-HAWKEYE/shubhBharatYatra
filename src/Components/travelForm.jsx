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

  const isFormValid = formData.name && formData.destination && formData.date;

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (number) => {
    const phonePattern = /^[7-9][0-9]{9}$/;
    return phonePattern.test(number);
  };

  const handleSubmit = () => {
    if (!isFormValid) {
      alert("Please fill in all required fields before submitting.");
      return;
    }

    if (formData.number && !validatePhoneNumber(formData.number)) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (formData.email && !validateEmail(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    toast.success("Your query has been sent to our team. We will contact you soon!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 rounded-lg shadow-lg p-8 gap-10 w-4/5 mx-auto my-12">
      <div
        className="flex-1 flex flex-col justify-end items-center text-center text-white p-10 rounded-xl bg-cover bg-center relative"
        style={{ backgroundImage: `url(${uttrakhand})` }}
      >
        <h2 className="text-3xl font-bold mb-2">Explore The World</h2>
        <p className="text-lg font-bold">Plan your trip with ease and convenience.</p>
      </div>

      <div className="flex-1 text-white w-full">
        <div className="flex justify-center gap-4 mb-6">
          <span
            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg cursor-pointer ${isFormValid ? 'bg-yellow-400 text-black' : 'bg-blue-500 text-white'}`}
          >
            1
          </span>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Book Your Travel</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Your Destination <span className="text-red-500">*</span></label>
              <select
                name="destination"
                className="w-full p-2 rounded bg-gray-800 text-white"
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
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-1">Travel Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  name="date"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-1/2 ">
                <label className="block mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="number"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block mb-1">How Many People</label>
                <input
                  type="number"
                  name="people"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Number of people"
                  value={formData.people}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1">Nights/Days</label>
                <select
                  name="nights"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  value={formData.nights}
                  onChange={handleChange}
                >
                  <option value="">Select Nights/Days</option>
                  <option value="1N/2D">2D/1N</option>
                  <option value="2N/3D">3D/2N</option>
                  <option value="3N/4D">4D/3N</option>
                  <option value="3N/4D">5D/4N</option>
                  <option value="3N/4D">6D/5N</option>
                  <option value="3N/4D">More than 7 days</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-1" required>
                Departure City <span className="text-red-500">*</span>
              </label>
              <select
                name="departure"
                className="w-full p-2 rounded bg-gray-800 text-white"
                value={formData.departure}
                onChange={handleChange}
                required
              >
                <option value="">Select Departure City</option>
                {[
                  "Agra", "Ahmedabad", "Aligarh", "Allahabad", "Amritsar", "Aurangabad", "Bareilly", "Bangalore", "Bhopal", "Bhubaneswar",
                  "Chandigarh", "Chennai", "Coimbatore", "Delhi", "Dhanbad", "Faridabad", "Ghaziabad", "Guntur", "Gurgaon", "Guwahati",
                  "Gwalior", "Howrah", "Hyderabad", "Indore", "Jaipur", "Jalandhar", "Jabalpur", "Jodhpur", "Kanpur", "Kalyan-Dombivli",
                  "Kolkata", "Kota", "Lucknow", "Ludhiana", "Madurai", "Meerut", "Moradabad", "Mumbai", "Mysore", "Nagpur",
                  "Nashik", "Navi Mumbai", "Noida", "Patna", "Pimpri-Chinchwad", "Pune", "Raipur", "Rajkot", "Ranchi", "Rishikesh",
                  "Salem", "Shimla", "Siliguri", "Srinagar", "Solapur", "Surat", "Thane", "Tiruchirappalli", "Udaipur", "Varanasi",
                  "Vasai-Virar", "Vijayawada", "Visakhapatnam", "Warangal"
                ].map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="w-full bg-yellow-400 text-black py-2 rounded font-bold"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <ToastContainer style={{ top: "120px" }} />
    </div>
  );
};

export default TravelBookingForm;
