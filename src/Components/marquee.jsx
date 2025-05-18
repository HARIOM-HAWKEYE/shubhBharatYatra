import React from 'react';
import { FaStar, FaCheckCircle, FaGlobe, FaPhoneAlt, FaThumbsUp, FaPlane, FaMapMarkedAlt, FaClock, FaUserFriends } from 'react-icons/fa';

const Marquee = () => {
  const items = [
    { icon: <><FaStar /> 4.5</>, text: ' Rating' },
    { icon: <><FaCheckCircle /> Best</>, text: ' travel deals' },
    { icon: <><FaCheckCircle /> Customised</>, text: ' packages' },
    { icon: <><FaCheckCircle /> Top-rated</>, text: ' group packages' },
    { icon: <><FaCheckCircle /> 24×7</>, text: ' helpline service' },
    { icon: <><FaGlobe /> Worldwide</>, text: ' coverage' },
    { icon: <><FaPhoneAlt /> Quick</>, text: ' customer support' },
    { icon: <><FaThumbsUp /> 100%</>, text: ' satisfaction' },
    { icon: <><FaPlane /> Affordable</>, text: ' flight bookings' },
    { icon: <><FaMapMarkedAlt /> Expert</>, text: ' travel guides' },
    { icon: <><FaClock /> On-time</>, text: ' service' },
    { icon: <><FaUserFriends /> Friendly</>, text: ' staff' }
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap border absolute bottom-10 z-10 bg-black w-[80%] rounded-[50px] max-w-[1200px] left-1/2 transform -translate-x-1/2">
      <div className="flex animate-marquee">
        {items.concat(items).map((item, index) => (
          <span key={index} className="flex items-center text-white px-4 py-2 rounded-full space-x-2">
            <span className="flex items-center gap-x-1 text-green-500">{item.icon}</span>
            <span>{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
