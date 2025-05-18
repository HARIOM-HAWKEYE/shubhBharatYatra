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
    `flex items-center space-x-2 relative group ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`;

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
      <nav className="bg-[#F6F0F0] shadow-md p-4 rounded-3xl mx-auto mt-4 fixed top-0 left-0 right-0 z-50 border-3 border-[#662d91] w-[85%] flex justify-between items-center">
        <div className="md:text-[16px]  lg:text-2xl font-bold text-black flex items-center">
          <NavLink to="/" onClick={closeMobileMenu}>ShubhBharatYatra</NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
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
              className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 space-y-2 w-48 transition-all duration-300 ${
                isDropdownOpen ? 'block' : 'hidden'
              } max-w-xs`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li>
                <NavLink to="/tour/Uttarakhand" className="block p-2 hover:bg-gray-200">
                  Uttarakhand
                </NavLink>
              </li>
              <li>
                <NavLink to="/tour/Himachal-Pradesh" className="block p-2 hover:bg-gray-200">
                  Himachal Pradesh
                </NavLink>
              </li>
              <li>
                <NavLink to="/tour/Rajasthan" className="block p-2 hover:bg-gray-200">
                  Rajasthan
                </NavLink>
              </li>
              <li>
                <NavLink to="/tour/Goa" className="block p-2 hover:bg-gray-200">
                  Goa
                </NavLink>
              </li>
              <li>
                <NavLink to="/tour/Kashmir" className="block p-2 hover:bg-gray-200">
                  Kashmir
                </NavLink>
              </li>
              <li>
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

        {/* Contact Button desktop */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-2xl hover:bg-blue-600"
        >
          Contact Us
        </button>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden text-2xl text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-[#F6F0F0] shadow-md rounded-b-3xl p-4 mx-auto w-[85%] max-h-[80vh] overflow-auto z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <ul className="space-y-4 text-lg">
          <li>
            <button
              onClick={toggleMobileDropdown}
              className="flex items-center justify-between w-full text-left text-black font-semibold"
              aria-expanded={isMobileDropdownOpen}
            >
              <span className="flex items-center space-x-2">
                <FaHome />
                <span>Our Tours</span>
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
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
              <ul className="mt-2 pl-6 space-y-2">
                <li>
                  <NavLink to="/tour/Uttarakhand" className="block p-2 hover:bg-gray-200" onClick={closeMobileMenu}>
                    Uttarakhand
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tour/Himachal-Pradesh" className="block p-2 hover:bg-gray-200" onClick={closeMobileMenu}>
                    Himachal Pradesh
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tour/Rajasthan" className="block p-2 hover:bg-gray-200" onClick={closeMobileMenu}>
                    Rajasthan
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tour/Goa" className="block p-2 hover:bg-gray-200" onClick={closeMobileMenu}>
                    Goa
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tour/Kashmir" className="block p-2 hover:bg-gray-200" onClick={closeMobileMenu}>
                    Kashmir
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tour/Leh&ladakh" className="block p-2 hover:bg-gray-200" onClick={closeMobileMenu}>
                    Leh & Ladakh
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block font-semibold ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`
              }
              onClick={closeMobileMenu}
            >
              <div className="flex items-center space-x-2">
                <FaInfoCircle />
                <span>About</span>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block font-semibold ${isActive ? 'text-blue-500' : 'hover:text-blue-500'}`
              }
              onClick={closeMobileMenu}
            >
              <div className="flex items-center space-x-2">
                <FaBlog />
                <span>Blog</span>
              </div>
            </NavLink>
          </li>

          <li>
            <button
              onClick={() => {
                setIsModalOpen(true);
                closeMobileMenu();
              }}
              className="w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
