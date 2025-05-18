import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaBlog } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ContactModal from './contactModal.jsx'; // Import the component

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activePage = ({ isActive }) =>
    `flex items-center space-x-2 relative group ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`;

  // Timer ID to manage the delay for closing dropdown
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <>
      <nav className="bg-[#F6F0F0] shadow-md p-4 rounded-3xl mx-auto mt-4 flex justify-between items-center w-[85%] fixed top-0 left-0 right-0 z-50 border-3" style={{ borderColor: '#662d91' }}>
        <div className="text-2xl font-bold text-black flex items-center">
          <NavLink to="/">ShubhBharatYatra</NavLink>
        </div>
        
        <ul className="flex space-x-8 text-lg">
          <li
            className="cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/tour/Uttarakhand" className={activePage}>
              <FaHome />
              <span>Our Tours</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            
            <ul
              className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 transition-all duration-300 ${isDropdownOpen ? 'block' : 'hidden'} max-w-xs`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li className="cursor-pointer">
                <NavLink to="/tour/Uttarakhand" className="block p-2 hover:bg-gray-200">
                  Uttarakhand
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/tour/Himachal-Pradesh" className="block p-2 hover:bg-gray-200">
                  Himachal Pradesh
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/tour/Rajasthan" className="block p-2 hover:bg-gray-200">
                  Rajasthan
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/tour/Goa" className="block p-2 hover:bg-gray-200">
                  Goa
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/tour/Kashmir" className="block p-2 hover:bg-gray-200">
                  Kashmir
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink to="/tour/Leh&ladakh" className="block p-2 hover:bg-gray-200">
                  Leh & Ladakh
                </NavLink>
              </li>
            </ul>
          </li>
          
          <li className="cursor-pointer">
            <NavLink to="/about" className={activePage}>
              <FaInfoCircle />
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          
          <li className="cursor-pointer">
            <NavLink to="/blog" className={activePage}>
              <FaBlog />
              <span>Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
        </ul>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600"
        >
          Contact Us
        </button>
      </nav>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;