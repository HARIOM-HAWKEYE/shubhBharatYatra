import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '918766224544'; 

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className=" z-10 fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 animate-bounce transition-transform transform hover:scale-105 flex items-center justify-center"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;
