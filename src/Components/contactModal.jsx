import { FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { SiGooglemessages } from 'react-icons/si';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactMethods = [
    {
      icon: <FaPhone className="text-[#662d91] text-xl" />,
      title: "Call Us",
      value: "8766224544",
      link: "tel:8766224544",
      subtext: "Available 9AM - 9PM"
    },
    {
      icon: <FaWhatsapp className="text-[#25D366] text-xl" />,
      title: "WhatsApp",
      value: "8766224544",
      link: "https://wa.me/918766224544",
      subtext: "Quick response"
    },
    {
      icon: <FaEnvelope className="text-[#D44638] text-xl" />,
      title: "Email",
      value: "info@shubhbharatyatra.com",
      link: "mailto:info@shubhbharatyatra.com",
      subtext: "Response within 24 hours"
    },
    {
      icon: <SiGooglemessages className="text-[#1A73E8] text-xl" />,
      title: "SMS",
      value: "8766224544",
      link: "sms:8766224544",
      subtext: "For quick queries"
    },
    
    {
      icon: <FaClock className="text-[#FBBC05] text-xl" />,
      title: "Working Hours",
      value: "Mon-Sat: 9AM - 8PM",
      subtext: "Sunday: Closed"
    }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#662d91] to-[#9b59b6] p-6 text-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">How would you like to contact us?</h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <p className="mt-2 opacity-90">We're here to help with your travel inquiries</p>
        </div>

        {/* Contact options grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all hover:border-[#662d91] group"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gray-100 rounded-full group-hover:bg-[#f3e9ff] transition-colors">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{method.title}</h3>
                  {method.link ? (
                    <a 
                      href={method.link} 
                      className="text-lg font-medium text-[#662d91] hover:underline block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-gray-700">{method.value}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">{method.subtext}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Prefer social media? <span className="text-[#662d91] font-medium">Message us on Instagram/Facebook</span>
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-[#662d91] text-white hover:bg-[#4b1d6d] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;