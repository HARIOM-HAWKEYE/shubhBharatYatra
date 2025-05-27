import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaBlog, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ContactModal from './contactModal.jsx';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const activePage = ({ isActive }) =>
    `flex items-center space-x-2 relative group text-lg ${isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`;

  // Timer ID to manage the delay for closing desktop dropdown
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

  // Toggle mobile dropdown for "Our Tours"
  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Close mobile menu on link click (optional)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-[#F5F5F5] shadow-sm w-full border-b-2 border-gray-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18 items-center">
            <div className="text-2xl font-bold text-gray-800">
              <NavLink to="/" onClick={closeMobileMenu} className="hover:text-blue-600 transition-colors duration-300">
                ShubhBharatYatra
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-10">
              <li
                className="cursor-pointer relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink to="/tour/Uttarakhand" className={activePage}>
                  <FaHome className="text-blue-500 text-xl" />
                  <span>Our Tours</span>
                  <span className="absolute  bottom-0 left-0 w-0 h-[2px]  bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

                <ul
                  className={`absolute left-0 top-full mt-1 bg-white shadow-xl rounded-lg p-2 space-y-2 w-56 transition-all duration-300 z-50 ${
                    isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'
                  } border border-gray-200`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li className="hover:bg-blue-50 rounded-md transition-colors duration-200">
                    <NavLink 
                      to="/tour/Uttarakhand" 
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-lg"
                    >
                      Uttarakhand
                    </NavLink>
                  </li>
                  <li className="hover:bg-blue-50 rounded-md transition-colors duration-200">
                    <NavLink 
                      to="/tour/Himachal-Pradesh" 
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-lg"
                    >
                      Himachal Pradesh
                    </NavLink>
                  </li>
                  <li className="hover:bg-blue-50 rounded-md transition-colors duration-200">
                    <NavLink 
                      to="/tour/Rajasthan" 
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-lg"
                    >
                      Rajasthan
                    </NavLink>
                  </li>
                  <li className="hover:bg-blue-50 rounded-md transition-colors duration-200">
                    <NavLink 
                      to="/tour/Goa" 
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-lg"
                    >
                      Goa
                    </NavLink>
                  </li>
                  <li className="hover:bg-blue-50 rounded-md transition-colors duration-200">
                    <NavLink 
                      to="/tour/Kashmir" 
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-lg"
                    >
                      Kashmir
                    </NavLink>
                  </li>
                  <li className="hover:bg-blue-50 rounded-md transition-colors duration-200">
                    <NavLink 
                      to="/tour/Leh&ladakh" 
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 text-lg"
                    >
                      Leh & Ladakh
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="cursor-pointer">
                <NavLink to="/about" className={activePage}>
                  <FaInfoCircle className="text-blue-500 text-xl" />
                  <span>About</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px]  bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>

              <li className="cursor-pointer">
                <NavLink to="/blog" className={activePage}>
                  <FaBlog className="text-blue-500 text-xl" />
                  <span>Blog</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px]  bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            </ul>

            {/* Contact Button desktop */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:block bg-blue-600 text-white px-7 py-3 rounded-3xl hover:bg-blue-700 transition-all duration-300 shadow-lg text-md font-semibold hover:shadow-xl"
            >
              Contact Us
            </button>

            {/* Hamburger icon for mobile */}
            <button
              className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-white shadow-xl ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            <div>
              <button
                onClick={toggleMobileDropdown}
                className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-xl font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                aria-expanded={isMobileDropdownOpen}
              >
                <span className="flex items-center space-x-3">
                  <FaHome className="text-blue-500 text-xl" />
                  <span>Our Tours</span>
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isMobileDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isMobileDropdownOpen && (
                <div className="mt-2 pl-12 space-y-2">
                  <NavLink
                    to="/tour/Uttarakhand"
                    className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Uttarakhand
                  </NavLink>
                  <NavLink
                    to="/tour/Himachal-Pradesh"
                    className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Himachal Pradesh
                  </NavLink>
                  <NavLink
                    to="/tour/Rajasthan"
                    className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Rajasthan
                  </NavLink>
                  <NavLink
                    to="/tour/Goa"
                    className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Goa
                  </NavLink>
                  <NavLink
                    to="/tour/Kashmir"
                    className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Kashmir
                  </NavLink>
                  <NavLink
                    to="/tour/Leh&ladakh"
                    className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Leh & Ladakh
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg text-xl ${
                  isActive ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium'
                } transition-colors duration-200`
              }
              onClick={closeMobileMenu}
            >
              <FaInfoCircle className="mr-3 text-blue-500 text-xl" />
              About
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg text-xl ${
                  isActive ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium'
                } transition-colors duration-200`
              }
              onClick={closeMobileMenu}
            >
              <FaBlog className="mr-3 text-blue-500 text-xl" />
              Blog
            </NavLink>

            <button
              onClick={() => {
                setIsModalOpen(true);
                closeMobileMenu();
              }}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg font-semibold mt-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;